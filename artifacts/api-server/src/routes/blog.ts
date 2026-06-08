import { Router } from "express";
import pg from "pg";
import { translate } from "@vitalets/google-translate-api";

const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const router = Router();

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .substring(0, 80);
}

function estimateReadTime(text: string, lang: "en" | "ja" = "en"): string {
  const wpm = lang === "ja" ? 400 : 200;
  const words = lang === "ja" ? text.length / 2 : text.split(/\s+/).length;
  const mins = Math.max(1, Math.ceil(words / wpm));
  return lang === "ja" ? `${mins}分で読める` : `${mins} min read`;
}

// Auth middleware
function requireAdmin(req: any, res: any, next: any) {
  const auth = req.headers["x-admin-password"];
  if (auth !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
}

// GET /api/blog/posts — published posts for the public
router.get("/posts", async (req, res) => {
  try {
    const lang = (req.query.lang as string) || "en";
    const { rows } = await pool.query(
      `SELECT id, slug, en_title, en_excerpt, en_category, ja_title, ja_excerpt,
              image_url, published_at, created_at
       FROM blog_posts WHERE published = true
       ORDER BY published_at DESC NULLS LAST, created_at DESC`
    );
    res.json({ posts: rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

// GET /api/blog/posts/:slug — single post
router.get("/posts/:slug", async (req, res) => {
  try {
    const { rows } = await pool.query(
      `SELECT * FROM blog_posts WHERE slug = $1 AND published = true`,
      [req.params.slug]
    );
    if (!rows[0]) return res.status(404).json({ error: "Post not found" });
    res.json({ post: rows[0] });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch post" });
  }
});

// GET /api/blog/admin/posts — all posts for admin
router.get("/admin/posts", requireAdmin, async (_req, res) => {
  try {
    const { rows } = await pool.query(
      `SELECT id, slug, en_title, en_category, published, published_at, created_at
       FROM blog_posts ORDER BY created_at DESC`
    );
    res.json({ posts: rows });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

// GET /api/blog/admin/posts/:id — single post for editing
router.get("/admin/posts/:id", requireAdmin, async (req, res) => {
  try {
    const { rows } = await pool.query(
      `SELECT * FROM blog_posts WHERE id = $1`,
      [parseInt(req.params.id)]
    );
    if (!rows[0]) return res.status(404).json({ error: "Not found" });
    res.json({ post: rows[0] });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch post" });
  }
});

// POST /api/blog/admin/translate — translate EN fields to JA
router.post("/admin/translate", requireAdmin, async (req, res) => {
  const { title, excerpt, content } = req.body;
  if (!title && !excerpt && !content) {
    return res.status(400).json({ error: "Nothing to translate" });
  }
  try {
    const results: { ja_title?: string; ja_excerpt?: string; ja_content?: string } = {};

    if (title) {
      const r = await translate(title, { to: "ja" });
      results.ja_title = r.text;
    }
    if (excerpt) {
      const r = await translate(excerpt, { to: "ja" });
      results.ja_excerpt = r.text;
    }
    if (content) {
      // Split into chunks to avoid limits
      const chunks = content.match(/.{1,4000}/gs) || [content];
      let jaContent = "";
      for (const chunk of chunks) {
        const r = await translate(chunk, { to: "ja" });
        jaContent += r.text;
      }
      results.ja_content = jaContent;
    }

    res.json(results);
  } catch (err: any) {
    console.error("Translation error:", err);
    res.status(500).json({ error: "Translation failed. Try again in a moment." });
  }
});

// POST /api/blog/admin/posts — create post
router.post("/admin/posts", requireAdmin, async (req, res) => {
  const { en_title, en_excerpt, en_content, en_category, ja_title, ja_excerpt, ja_content, image_url, published } = req.body;
  if (!en_title) return res.status(400).json({ error: "Title is required" });

  const slug = slugify(en_title) + "-" + Date.now().toString(36);
  const pub = !!published;

  try {
    const { rows } = await pool.query(
      `INSERT INTO blog_posts (slug, en_title, en_excerpt, en_content, en_category, ja_title, ja_excerpt, ja_content, image_url, published, published_at)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *`,
      [slug, en_title, en_excerpt || "", en_content || "", en_category || "General",
       ja_title || null, ja_excerpt || null, ja_content || null,
       image_url || "", pub, pub ? new Date() : null]
    );
    res.json({ post: rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create post" });
  }
});

// PUT /api/blog/admin/posts/:id — update post
router.put("/admin/posts/:id", requireAdmin, async (req, res) => {
  const { en_title, en_excerpt, en_content, en_category, ja_title, ja_excerpt, ja_content, image_url, published } = req.body;
  const id = parseInt(req.params.id);
  const pub = !!published;

  try {
    const existing = await pool.query(`SELECT published, published_at FROM blog_posts WHERE id = $1`, [id]);
    if (!existing.rows[0]) return res.status(404).json({ error: "Not found" });

    const wasPublished = existing.rows[0].published;
    const publishedAt = pub && !wasPublished ? new Date() : existing.rows[0].published_at;

    const { rows } = await pool.query(
      `UPDATE blog_posts SET
        en_title=$1, en_excerpt=$2, en_content=$3, en_category=$4,
        ja_title=$5, ja_excerpt=$6, ja_content=$7,
        image_url=$8, published=$9, published_at=$10, updated_at=NOW()
       WHERE id=$11 RETURNING *`,
      [en_title, en_excerpt || "", en_content || "", en_category || "General",
       ja_title || null, ja_excerpt || null, ja_content || null,
       image_url || "", pub, publishedAt, id]
    );
    res.json({ post: rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update post" });
  }
});

// DELETE /api/blog/admin/posts/:id
router.delete("/admin/posts/:id", requireAdmin, async (req, res) => {
  try {
    await pool.query(`DELETE FROM blog_posts WHERE id = $1`, [parseInt(req.params.id)]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete post" });
  }
});

export default router;
