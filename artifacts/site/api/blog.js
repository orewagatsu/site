import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .substring(0, 80);
}

function requireAdmin(req, res) {
  if (req.headers["x-admin-password"] !== process.env.ADMIN_PASSWORD) {
    res.status(401).json({ error: "Unauthorized" });
    return false;
  }
  return true;
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-admin-password");

  if (req.method === "OPTIONS") return res.status(200).end();

  const path = "/" + (req.query.__p || "");
  const method = req.method;

  try {
    if (method === "GET" && path === "/posts") {
      const { rows } = await pool.query(
        `SELECT id, slug, en_title, en_excerpt, en_category, ja_title, ja_excerpt,
                image_url, published_at, created_at
         FROM blog_posts WHERE published = true
         ORDER BY published_at DESC NULLS LAST, created_at DESC`
      );
      return res.json({ posts: rows });
    }

    const slugMatch = path.match(/^\/posts\/([^/]+)$/);
    if (method === "GET" && slugMatch) {
      const { rows } = await pool.query(
        `SELECT * FROM blog_posts WHERE slug = $1 AND published = true`,
        [slugMatch[1]]
      );
      if (!rows[0]) return res.status(404).json({ error: "Post not found" });
      return res.json({ post: rows[0] });
    }

    if (method === "POST" && path === "/admin/translate") {
      if (!requireAdmin(req, res)) return;
      const { title, excerpt, content } = req.body;
      if (!title && !excerpt && !content)
        return res.status(400).json({ error: "Nothing to translate" });
      const { translate } = await import("@vitalets/google-translate-api");
      const results = {};
      if (title) results.ja_title = (await translate(title, { to: "ja" })).text;
      if (excerpt) results.ja_excerpt = (await translate(excerpt, { to: "ja" })).text;
      if (content) {
        const chunks = content.match(/.{1,4000}/gs) || [content];
        let ja = "";
        for (const chunk of chunks) ja += (await translate(chunk, { to: "ja" })).text;
        results.ja_content = ja;
      }
      return res.json(results);
    }

    if (method === "GET" && path === "/admin/posts") {
      if (!requireAdmin(req, res)) return;
      const { rows } = await pool.query(
        `SELECT id, slug, en_title, en_category, published, published_at, created_at
         FROM blog_posts ORDER BY created_at DESC`
      );
      return res.json({ posts: rows });
    }

    if (method === "POST" && path === "/admin/posts") {
      if (!requireAdmin(req, res)) return;
      const { en_title, en_excerpt, en_content, en_category, ja_title, ja_excerpt, ja_content, image_url, published } = req.body;
      if (!en_title) return res.status(400).json({ error: "Title is required" });
      const slug = slugify(en_title) + "-" + Date.now().toString(36);
      const pub = !!published;
      const { rows } = await pool.query(
        `INSERT INTO blog_posts (slug, en_title, en_excerpt, en_content, en_category, ja_title, ja_excerpt, ja_content, image_url, published, published_at)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *`,
        [slug, en_title, en_excerpt || "", en_content || "", en_category || "General",
         ja_title || null, ja_excerpt || null, ja_content || null,
         image_url || "", pub, pub ? new Date() : null]
      );
      return res.json({ post: rows[0] });
    }

    const adminIdMatch = path.match(/^\/admin\/posts\/(\d+)$/);
    if (adminIdMatch) {
      if (!requireAdmin(req, res)) return;
      const id = parseInt(adminIdMatch[1]);

      if (method === "GET") {
        const { rows } = await pool.query(`SELECT * FROM blog_posts WHERE id = $1`, [id]);
        if (!rows[0]) return res.status(404).json({ error: "Not found" });
        return res.json({ post: rows[0] });
      }
      if (method === "PUT") {
        const { en_title, en_excerpt, en_content, en_category, ja_title, ja_excerpt, ja_content, image_url, published } = req.body;
        const pub = !!published;
        const existing = await pool.query(`SELECT published, published_at FROM blog_posts WHERE id = $1`, [id]);
        if (!existing.rows[0]) return res.status(404).json({ error: "Not found" });
        const publishedAt = pub && !existing.rows[0].published ? new Date() : existing.rows[0].published_at;
        const { rows } = await pool.query(
          `UPDATE blog_posts SET en_title=$1, en_excerpt=$2, en_content=$3, en_category=$4,
            ja_title=$5, ja_excerpt=$6, ja_content=$7, image_url=$8, published=$9, published_at=$10, updated_at=NOW()
           WHERE id=$11 RETURNING *`,
          [en_title, en_excerpt || "", en_content || "", en_category || "General",
           ja_title || null, ja_excerpt || null, ja_content || null,
           image_url || "", pub, publishedAt, id]
        );
        return res.json({ post: rows[0] });
      }
      if (method === "DELETE") {
        await pool.query(`DELETE FROM blog_posts WHERE id = $1`, [id]);
        return res.json({ success: true });
      }
    }

    res.status(404).json({ error: "Not found" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", detail: err.message });
  }
}
