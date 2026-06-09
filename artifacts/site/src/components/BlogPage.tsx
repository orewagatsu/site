import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "./SEO";
import { Calendar, ArrowRight, BookOpen, Clock } from "lucide-react";

interface Post {
  id: number;
  slug: string;
  en_title: string;
  en_excerpt: string;
  en_category: string;
  image_url: string;
  published_at: string | null;
  created_at: string;
}

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80";

function estimateReadTime(text: string) {
  return `${Math.max(1, Math.ceil(text.split(/\s+/).length / 200))} min read`;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blog/posts?lang=en")
      .then((r) => r.json())
      .then((d) => { setPosts(d.posts || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      <SEO
        title="English Learning Blog - TOEIC Tips, Business English & Success Stories | Dream English Iwaki"
        description="Expert English learning tips, TOEIC strategies, business English advice, and student success stories from Dream English School in Iwaki, Japan."
        keywords="English learning tips, TOEIC strategies, business English advice, Iwaki English blog"
        canonical="https://www.dreamenglishiwaki.com/en/blog"
        lang="en"
        hreflangAlternates={[
          { hreflang: "ja", href: "https://www.dreamenglishiwaki.com/blog" },
          { hreflang: "en", href: "https://www.dreamenglishiwaki.com/en/blog" },
          { hreflang: "x-default", href: "https://www.dreamenglishiwaki.com/blog" },
        ]}
      />

      <div className="min-h-screen bg-white text-slate-900">
        {/* Masthead */}
        <header className="border-b border-slate-200 py-10 px-6 text-center">
          <p className="text-emerald-700 font-semibold tracking-widest uppercase text-xs mb-4">
            Dream English School · Iwaki, Japan
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            The Dreamer's Journal
          </h1>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
            Insights, student stories, and practical advice for mastering English in Japan.
          </p>
        </header>

        <main className="max-w-7xl mx-auto px-6 py-14">
          {/* Loading */}
          {loading && (
            <div className="text-center py-24 text-slate-400">
              <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              Loading articles…
            </div>
          )}

          {/* Empty */}
          {!loading && posts.length === 0 && (
            <div className="text-center py-24">
              <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-400 text-lg">No articles yet — check back soon.</p>
            </div>
          )}

          {/* Featured */}
          {!loading && featured && (
            <section className="mb-20">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="order-2 md:order-1 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6 text-sm">
                    <span className="text-emerald-600 font-semibold tracking-wide uppercase text-xs">
                      {featured.en_category}
                    </span>
                    <span className="text-slate-300">·</span>
                    <span className="flex items-center gap-1 text-slate-500 text-xs">
                      <Calendar className="w-3 h-3" />
                      {new Date(featured.published_at || featured.created_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                    </span>
                    <span className="text-slate-300">·</span>
                    <span className="flex items-center gap-1 text-slate-500 text-xs">
                      <Clock className="w-3 h-3" />
                      {estimateReadTime(featured.en_excerpt)}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-slate-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {featured.en_title}
                  </h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {featured.en_excerpt}
                  </p>
                  <Link
                    to={`/en/blog/${featured.slug}`}
                    className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-800 transition-colors group w-fit"
                  >
                    Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className="order-1 md:order-2 group cursor-pointer">
                  <Link to={`/en/blog/${featured.slug}`}>
                    <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                      <img
                        src={featured.image_url || FALLBACK_IMAGE}
                        alt={featured.en_title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </section>
          )}

          {/* Divider */}
          {!loading && posts.length > 0 && (
            <div className="w-full h-px bg-slate-200 mb-16" />
          )}

          {/* Grid */}
          {!loading && rest.length > 0 && (
            <>
              <div className="flex justify-between items-end mb-10">
                <h3 className="text-3xl font-bold text-slate-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Latest Stories
                </h3>
              </div>
              <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-14">
                {rest.map((post) => (
                  <article key={post.id} className="group flex flex-col cursor-pointer">
                    <Link to={`/en/blog/${post.slug}`}>
                      <div className="aspect-[3/2] overflow-hidden mb-5 bg-slate-100">
                        <img
                          src={post.image_url || FALLBACK_IMAGE}
                          alt={post.en_title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      </div>
                    </Link>
                    <div className="flex items-center gap-2 mb-3 text-xs">
                      <span className="text-emerald-600 font-semibold tracking-wide uppercase">
                        {post.en_category}
                      </span>
                      <span className="text-slate-300">·</span>
                      <span className="text-slate-500">
                        {new Date(post.published_at || post.created_at).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold leading-snug mb-3 text-slate-900 group-hover:text-emerald-700 transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {post.en_title}
                    </h4>
                    <p className="text-sm text-slate-600 mb-4 flex-grow line-clamp-3 leading-relaxed">
                      {post.en_excerpt}
                    </p>
                    <Link
                      to={`/en/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-emerald-700 text-sm font-semibold hover:text-emerald-800 transition-colors group/link mt-auto"
                    >
                      Read Article <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </article>
                ))}
              </section>
            </>
          )}
        </main>

        {/* Footer CTA */}
        <footer className="border-t border-slate-200 mt-20 py-14 text-center bg-slate-50">
          <h2 className="text-2xl font-bold mb-3 text-slate-900" style={{ fontFamily: "'Playfair Display', serif" }}>
            Book a Free Trial Lesson
          </h2>
          <p className="text-slate-500 mb-6 max-w-md mx-auto text-sm leading-relaxed">
            Business English &amp; TOEIC preparation in Iwaki with a TEFL-certified instructor.
          </p>
          <Link
            to="/en/contact"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-7 py-3 transition-colors text-sm"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </footer>
      </div>
    </>
  );
}
