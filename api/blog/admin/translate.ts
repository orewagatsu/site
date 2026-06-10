import type { VercelRequest, VercelResponse } from "@vercel/node";
import { translate } from "@vitalets/google-translate-api";

function requireAdmin(req: VercelRequest, res: VercelResponse): boolean {
  if (req.headers["x-admin-password"] !== process.env.ADMIN_PASSWORD) {
    res.status(401).json({ error: "Unauthorized" });
    return false;
  }
  return true;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-admin-password");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  if (!requireAdmin(req, res)) return;

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
}
