import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import SEO from "./SEO";
import { Calendar, ArrowLeft, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Post {
  id: number;
  slug: string;
  en_title: string;
  en_excerpt: string;
  en_content: string;
  en_category: string;
  ja_title: string | null;
  ja_excerpt: string | null;
  ja_content: string | null;
  image_url: string;
  published_at: string | null;
  created_at: string;
}

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80";

function estimateReadTime(text: string): string {
  const words = text.split(/\s+/).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

export default function BlogPostPage({ lang = "en" }: { lang?: "en" | "ja" }) {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    fetch(`/api/blog/posts/${slug}`)
      .then((r) => {
        if (r.status === 404) { setNotFound(true); setLoading(false); return null; }
        return r.json();
      })
      .then((d) => {
        if (d) { setPost(d.post); }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-orange-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-slate-500 text-lg">{lang === "ja" ? "記事が見つかりません" : "Post not found"}</p>
        <Link to={lang === "ja" ? "/blog" : "/en/blog"}>
          <Button variant="outline">{lang === "ja" ? "ブログ一覧へ" : "Back to Blog"}</Button>
        </Link>
      </div>
    );
  }

  const title = lang === "ja" ? (post.ja_title || post.en_title) : post.en_title;
  const content = lang === "ja" ? (post.ja_content || post.en_content) : post.en_content;
  const excerpt = lang === "ja" ? (post.ja_excerpt || post.en_excerpt) : post.en_excerpt;
  const dateStr = new Date(post.published_at || post.created_at).toLocaleDateString(
    lang === "ja" ? "ja-JP" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <>
      <SEO
        title={`${title} | Dream English Iwaki`}
        description={excerpt}
        canonical={`https://www.dreamenglishiwaki.com${lang === "ja" ? "" : "/en"}/blog/${post.slug}`}
        lang={lang}
        hreflangAlternates={[
          { hreflang: "ja", href: `https://www.dreamenglishiwaki.com/blog/${post.slug}` },
          { hreflang: "en", href: `https://www.dreamenglishiwaki.com/en/blog/${post.slug}` },
          { hreflang: "x-default", href: `https://www.dreamenglishiwaki.com/blog/${post.slug}` },
        ]}
      />

      <article className="min-h-screen bg-white">
        {/* Cover image */}
        {post.image_url && (
          <div className="w-full h-72 md:h-96 overflow-hidden">
            <img src={post.image_url || FALLBACK_IMAGE} alt={title} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="max-w-3xl mx-auto px-4 py-12">
          {/* Back */}
          <Link
            to={lang === "ja" ? "/blog" : "/en/blog"}
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 text-sm font-medium mb-8"
          >
            <ArrowLeft size={16} />
            {lang === "ja" ? "ブログ一覧へ" : "Back to Blog"}
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
              {post.en_category}
            </span>
            <div className="flex items-center gap-1 text-slate-500 text-sm">
              <Calendar size={14} /> {dateStr}
            </div>
            <div className="flex items-center gap-1 text-slate-500 text-sm">
              <Clock size={14} /> {estimateReadTime(content)}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight mb-6">{title}</h1>

          {/* Excerpt */}
          {excerpt && (
            <p className="text-lg text-slate-600 leading-relaxed mb-8 border-l-4 border-orange-300 pl-4 italic">
              {excerpt}
            </p>
          )}

          {/* Content */}
          <div className="prose prose-slate prose-lg max-w-none">
            {content.split("\n\n").map((para, i) => (
              para.trim() ? (
                <p key={i} className="mb-5 text-slate-700 leading-relaxed">{para.trim()}</p>
              ) : null
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 text-center border border-orange-100">
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              {lang === "ja" ? "無料体験レッスン受付中" : "Book a Free Trial Lesson"}
            </h3>
            <p className="text-slate-600 mb-4 text-sm">
              {lang === "ja"
                ? "いわき市でのビジネス英語・TOEIC対策は、ドリーム英語へ。"
                : "Business English & TOEIC preparation in Iwaki with a TEFL-certified instructor."}
            </p>
            <Link to={lang === "ja" ? "/contact" : "/en/contact"}>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8">
                {lang === "ja" ? "お問い合わせ" : "Contact Us"}
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
