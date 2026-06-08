import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { PlusCircle, Edit2, Trash2, Eye, EyeOff, LogOut, Loader2, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const API = "/api/blog";

interface PostSummary {
  id: number;
  slug: string;
  en_title: string;
  en_category: string;
  published: boolean;
  published_at: string | null;
  created_at: string;
}

interface PostFull extends PostSummary {
  en_excerpt: string;
  en_content: string;
  ja_title: string | null;
  ja_excerpt: string | null;
  ja_content: string | null;
  image_url: string;
}

const CATEGORIES = ["General", "Business English", "TOEIC Preparation", "English Learning", "Intercultural Consulting", "Success Stories", "Free Resources"];

export default function AdminPage() {
  const [password, setPassword] = useState(() => sessionStorage.getItem("admin_pw") || "");
  const [authed, setAuthed] = useState(false);
  const [pwInput, setPwInput] = useState("");
  const [loginError, setLoginError] = useState("");

  const [posts, setPosts] = useState<PostSummary[]>([]);
  const [view, setView] = useState<"list" | "edit">("list");
  const [editing, setEditing] = useState<Partial<PostFull> | null>(null);
  const [saving, setSaving] = useState(false);
  const [translating, setTranslating] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const headers = { "x-admin-password": password, "Content-Type": "application/json" };

  const fetchPosts = useCallback(async () => {
    const res = await fetch(`${API}/admin/posts`, { headers });
    if (res.ok) {
      const data = await res.json();
      setPosts(data.posts);
    }
  }, [password]);

  const tryLogin = async () => {
    setLoginError("");
    const res = await fetch(`${API}/admin/posts`, {
      headers: { "x-admin-password": pwInput, "Content-Type": "application/json" },
    });
    if (res.ok) {
      const data = await res.json();
      setPassword(pwInput);
      sessionStorage.setItem("admin_pw", pwInput);
      setPosts(data.posts);
      setAuthed(true);
    } else {
      setLoginError("Incorrect password");
    }
  };

  useEffect(() => {
    if (password) {
      fetch(`${API}/admin/posts`, { headers }).then(async (res) => {
        if (res.ok) {
          const data = await res.json();
          setPosts(data.posts);
          setAuthed(true);
        }
      });
    }
  }, []);

  const logout = () => {
    sessionStorage.removeItem("admin_pw");
    setPassword("");
    setAuthed(false);
    setPwInput("");
  };

  const newPost = () => {
    setEditing({ en_title: "", en_excerpt: "", en_content: "", en_category: "General", ja_title: "", ja_excerpt: "", ja_content: "", image_url: "", published: false });
    setView("edit");
    setError("");
    setSuccess("");
  };

  const editPost = async (id: number) => {
    const res = await fetch(`${API}/admin/posts/${id}`, { headers });
    const data = await res.json();
    setEditing(data.post);
    setView("edit");
    setError("");
    setSuccess("");
  };

  const deletePost = async (id: number, title: string) => {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    await fetch(`${API}/admin/posts/${id}`, { method: "DELETE", headers });
    fetchPosts();
  };

  const translate = async () => {
    if (!editing?.en_title && !editing?.en_content) {
      setError("Write some English content first before translating.");
      return;
    }
    setTranslating(true);
    setError("");
    try {
      const res = await fetch(`${API}/admin/translate`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          title: editing?.en_title || "",
          excerpt: editing?.en_excerpt || "",
          content: editing?.en_content || "",
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Translation failed");
      setEditing((prev) => ({
        ...prev,
        ja_title: data.ja_title ?? prev?.ja_title,
        ja_excerpt: data.ja_excerpt ?? prev?.ja_excerpt,
        ja_content: data.ja_content ?? prev?.ja_content,
      }));
      setSuccess("Translated! Review the Japanese fields below before saving.");
    } catch (e: any) {
      setError(e.message);
    } finally {
      setTranslating(false);
    }
  };

  const save = async () => {
    if (!editing?.en_title) { setError("Title is required."); return; }
    setSaving(true);
    setError("");
    setSuccess("");
    try {
      const isNew = !editing.id;
      const res = await fetch(
        isNew ? `${API}/admin/posts` : `${API}/admin/posts/${editing.id}`,
        { method: isNew ? "POST" : "PUT", headers, body: JSON.stringify(editing) }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Save failed");
      setSuccess("Post saved successfully!");
      await fetchPosts();
      setTimeout(() => { setView("list"); setEditing(null); setSuccess(""); }, 1200);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setSaving(false);
    }
  };

  const set = (field: keyof PostFull, val: any) => setEditing((p) => ({ ...p, [field]: val }));

  if (!authed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm">
          <h1 className="text-2xl font-bold text-slate-800 mb-1">Blog Admin</h1>
          <p className="text-slate-500 text-sm mb-6">Dream English Iwaki</p>
          <Input
            type="password"
            placeholder="Admin password"
            value={pwInput}
            onChange={(e) => setPwInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && tryLogin()}
            className="mb-3"
          />
          {loginError && <p className="text-red-500 text-sm mb-3">{loginError}</p>}
          <Button onClick={tryLogin} className="w-full bg-orange-500 hover:bg-orange-600 text-white">
            Log In
          </Button>
        </div>
      </div>
    );
  }

  if (view === "edit" && editing !== null) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => { setView("list"); setEditing(null); }} className="text-slate-500 hover:text-slate-700 text-sm">← Back</button>
            <h1 className="font-bold text-slate-800">{editing.id ? "Edit Post" : "New Post"}</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={translate} disabled={translating} className="border-blue-200 text-blue-700 hover:bg-blue-50">
              {translating ? <Loader2 size={14} className="animate-spin mr-1" /> : <Languages size={14} className="mr-1" />}
              Translate to Japanese
            </Button>
            <Button size="sm" onClick={save} disabled={saving} className="bg-orange-500 hover:bg-orange-600 text-white">
              {saving ? <Loader2 size={14} className="animate-spin mr-1" /> : null}
              {editing.id ? "Save Changes" : "Publish Post"}
            </Button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-8">
          {error && <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 mb-4 text-sm">{error}</div>}
          {success && <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-3 mb-4 text-sm">{success}</div>}

          <div className="grid lg:grid-cols-2 gap-8">
            {/* English */}
            <div className="space-y-4">
              <h2 className="font-semibold text-slate-700 flex items-center gap-2">🇺🇸 English</h2>
              <div>
                <label className="text-xs text-slate-500 mb-1 block">Title *</label>
                <Input value={editing.en_title || ""} onChange={(e) => set("en_title", e.target.value)} placeholder="Post title in English" />
              </div>
              <div>
                <label className="text-xs text-slate-500 mb-1 block">Category</label>
                <select
                  value={editing.en_category || "General"}
                  onChange={(e) => set("en_category", e.target.value)}
                  className="w-full border border-slate-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                >
                  {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs text-slate-500 mb-1 block">Excerpt (shown in post list)</label>
                <Textarea value={editing.en_excerpt || ""} onChange={(e) => set("en_excerpt", e.target.value)} placeholder="A short summary (1-2 sentences)" rows={3} />
              </div>
              <div>
                <label className="text-xs text-slate-500 mb-1 block">Content *</label>
                <Textarea value={editing.en_content || ""} onChange={(e) => set("en_content", e.target.value)} placeholder="Write your full blog post here..." rows={16} className="font-mono text-sm" />
              </div>
            </div>

            {/* Japanese */}
            <div className="space-y-4">
              <h2 className="font-semibold text-slate-700 flex items-center gap-2">
                🇯🇵 Japanese
                <span className="text-xs text-slate-400 font-normal">(auto-filled by Translate button)</span>
              </h2>
              <div>
                <label className="text-xs text-slate-500 mb-1 block">タイトル</label>
                <Input value={editing.ja_title || ""} onChange={(e) => set("ja_title", e.target.value)} placeholder="日本語のタイトル" />
              </div>
              <div className="invisible">
                <label className="text-xs mb-1 block">spacer</label>
                <select className="w-full border rounded-md px-3 py-2 text-sm"><option /></select>
              </div>
              <div>
                <label className="text-xs text-slate-500 mb-1 block">概要</label>
                <Textarea value={editing.ja_excerpt || ""} onChange={(e) => set("ja_excerpt", e.target.value)} placeholder="日本語の要約" rows={3} />
              </div>
              <div>
                <label className="text-xs text-slate-500 mb-1 block">本文</label>
                <Textarea value={editing.ja_content || ""} onChange={(e) => set("ja_content", e.target.value)} placeholder="日本語の本文..." rows={16} className="font-mono text-sm" />
              </div>
            </div>
          </div>

          {/* Bottom settings */}
          <div className="mt-8 bg-white rounded-xl border border-slate-200 p-6 space-y-4">
            <h3 className="font-semibold text-slate-700">Post Settings</h3>
            <div>
              <label className="text-xs text-slate-500 mb-1 block">Cover Image URL (optional)</label>
              <Input value={editing.image_url || ""} onChange={(e) => set("image_url", e.target.value)} placeholder="https://images.unsplash.com/..." />
            </div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={!!editing.published}
                onChange={(e) => set("published", e.target.checked)}
                className="w-4 h-4 rounded accent-orange-500"
              />
              <span className="text-sm text-slate-700 font-medium">Published (visible to site visitors)</span>
            </label>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <Button variant="outline" onClick={() => { setView("list"); setEditing(null); }}>Cancel</Button>
            <Button onClick={save} disabled={saving} className="bg-orange-500 hover:bg-orange-600 text-white px-8">
              {saving ? <Loader2 size={16} className="animate-spin mr-2" /> : null}
              {editing.id ? "Save Changes" : "Create Post"}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="font-bold text-slate-800 text-lg">Blog Admin</h1>
          <p className="text-xs text-slate-400">Dream English Iwaki</p>
        </div>
        <div className="flex items-center gap-3">
          <Button onClick={newPost} className="bg-orange-500 hover:bg-orange-600 text-white gap-2">
            <PlusCircle size={16} /> New Post
          </Button>
          <button onClick={logout} className="text-slate-400 hover:text-slate-600 p-2">
            <LogOut size={16} />
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {posts.length === 0 ? (
          <div className="text-center py-20 text-slate-400">
            <p className="text-lg mb-4">No posts yet</p>
            <Button onClick={newPost} className="bg-orange-500 hover:bg-orange-600 text-white gap-2">
              <PlusCircle size={16} /> Write your first post
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl border border-slate-200 px-5 py-4 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="font-semibold text-slate-800 truncate">{post.en_title}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">{post.en_category}</span>
                    <span className={`text-xs flex items-center gap-1 ${post.published ? "text-green-600" : "text-slate-400"}`}>
                      {post.published ? <Eye size={11} /> : <EyeOff size={11} />}
                      {post.published ? "Published" : "Draft"}
                    </span>
                    <span className="text-xs text-slate-400">{new Date(post.created_at).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button onClick={() => editPost(post.id)} className="p-2 text-slate-400 hover:text-orange-500 transition-colors">
                    <Edit2 size={15} />
                  </button>
                  <button onClick={() => deletePost(post.id, post.en_title)} className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
