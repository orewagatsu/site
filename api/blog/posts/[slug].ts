import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getPool } from "../../_db.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  try {
    const pool = getPool();
    const { rows } = await pool.query(
      `SELECT * FROM blog_posts WHERE slug = $1 AND published = true`,
      [req.query.slug]
    );
    if (!rows[0]) return res.status(404).json({ error: "Post not found" });
    res.json({ post: rows[0] });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch post" });
  }
}
