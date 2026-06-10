import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getPool } from "../../../_db.js";

function requireAdmin(req: VercelRequest, res: VercelResponse): boolean {
  if (req.headers["x-admin-password"] !== process.env.ADMIN_PASSWORD) {
    res.status(401).json({ error: "Unauthorized" });
    return false;
  }
  return true;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-admin-password");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (!requireAdmin(req, res)) return;

  const pool = getPool();
  const id = parseInt(req.query.id as string);

  if (req.method === "GET") {
    try {
      const { rows } = await pool.query(`SELECT * FROM blog_posts WHERE id = $1`, [id]);
      if (!rows[0]) return res.status(404).json({ error: "Not found" });
      return res.json({ post: rows[0] });
    } catch (err) {
      return res.status(500).json({ error: "Failed to fetch post" });
    }
  }

  if (req.method === "PUT") {
    const { en_title, en_excerpt, en_content, en_category, ja_title, ja_excerpt, ja_content, image_url, published } = req.body;
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
      return res.json({ post: rows[0] });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to update post" });
    }
  }

  if (req.method === "DELETE") {
    try {
      await pool.query(`DELETE FROM blog_posts WHERE id = $1`, [id]);
      return res.json({ success: true });
    } catch (err) {
      return res.status(500).json({ error: "Failed to delete post" });
    }
  }

  res.status(405).json({ error: "Method not allowed" });
}
