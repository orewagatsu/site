import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getPool } from "../_db.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  try {
    const pool = getPool();
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
}
