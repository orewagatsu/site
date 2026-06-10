import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getPool, slugify } from "../../_db.js";

function requireAdmin(req: VercelRequest, res: VercelResponse): boolean {
  if (req.headers["x-admin-password"] !== process.env.ADMIN_PASSWORD) {
    res.status(401).json({ error: "Unauthorized" });
    return false;
  }
  return true;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-admin-password");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (!requireAdmin(req, res)) return;

  const pool = getPool();

  if (req.method === "GET") {
    try {
      const { rows } = await pool.query(
        `SELECT id, slug, en_title, en_category, published, published_at, created_at
         FROM blog_posts ORDER BY created_at DESC`
      );
      return res.json({ posts: rows });
    } catch (err) {
      return res.status(500).json({ error: "Failed to fetch posts" });
    }
  }

  if (req.method === "POST") {
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
      return res.json({ post: rows[0] });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to create post" });
    }
  }

  res.status(405).json({ error: "Method not allowed" });
}
