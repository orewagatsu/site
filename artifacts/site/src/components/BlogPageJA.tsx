import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "./SEO";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Post {
  id: number;
  slug: string;
  en_title: string;
  en_excerpt: string;
  en_category: string;
  ja_title: string | null;
  ja_excerpt: string | null;
  image_url: string;
  published_at: string | null;
  created_at: string;
}

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80";

export default function BlogPageJA() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blog/posts?lang=ja")
      .then((r) => r.json())
      .then((d) => { setPosts(d.posts || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <>
      <SEO
        title="英語学習ブログ - TOEICのコツ、ビジネス英語、成功ストーリー | ドリーム英語いわき"
        description="いわき市のドリーム英語スクールからの専門的な英語学習のコツ、TOEIC戦略、ビジネス英語アドバイス。"
        keywords="英語学習のコツ, TOEIC戦略, ビジネス英語アドバイス, いわき英語ブログ"
        canonical="https://www.dreamenglishiwaki.com/blog"
        lang="ja"
        hreflangAlternates={[
          { hreflang: "ja", href: "https://www.dreamenglishiwaki.com/blog" },
          { hreflang: "en", href: "https://www.dreamenglishiwaki.com/en/blog" },
          { hreflang: "x-default", href: "https://www.dreamenglishiwaki.com/blog" },
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50">
        <div className="bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">📚 英語学習ブログ</h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              いわき市のドリーム英語スクールからの専門的なコツ・TOEIC戦略・成功ストーリー
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {loading && (
            <div className="text-center py-20 text-slate-400">
              <div className="w-8 h-8 border-2 border-orange-400 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              読み込み中...
            </div>
          )}

          {!loading && posts.length === 0 && (
            <div className="text-center py-20">
              <BookOpen className="w-12 h-12 text-orange-300 mx-auto mb-4" />
              <p className="text-slate-500 text-lg">記事はまだありません。近日公開予定です。</p>
            </div>
          )}

          {!loading && posts.length > 0 && (
            <>
              {/* Featured */}
              <div className="mb-12">
                <Card className="overflow-hidden shadow-2xl border-2 border-orange-100">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-auto">
                      <img
                        src={posts[0].image_url || FALLBACK_IMAGE}
                        alt={posts[0].ja_title || posts[0].en_title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        注目記事
                      </div>
                    </div>
                    <CardContent className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                          {posts[0].en_category}
                        </span>
                        <div className="flex items-center gap-1 text-slate-500 text-sm">
                          <Calendar className="w-4 h-4" />
                          {new Date(posts[0].published_at || posts[0].created_at).toLocaleDateString("ja-JP")}
                        </div>
                      </div>
                      <h2 className="text-3xl font-bold mb-4 text-gray-800 leading-tight">
                        {posts[0].ja_title || posts[0].en_title}
                      </h2>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {posts[0].ja_excerpt || posts[0].en_excerpt}
                      </p>
                      <Link to={`/blog/${posts[0].slug}`}>
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 w-fit">
                          記事を読む <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </div>
                </Card>
              </div>

              {/* Grid */}
              {posts.length > 1 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.slice(1).map((post) => (
                    <Card key={post.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 group">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image_url || FALLBACK_IMAGE}
                          alt={post.ja_title || post.en_title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {post.en_category}
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 text-slate-400 text-xs mb-3">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.published_at || post.created_at).toLocaleDateString("ja-JP")}
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-800 leading-tight group-hover:text-orange-600 transition-colors">
                          {post.ja_title || post.en_title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                          {post.ja_excerpt || post.en_excerpt}
                        </p>
                        <Link to={`/blog/${post.slug}`}>
                          <Button variant="outline" className="border-orange-200 text-orange-700 hover:bg-orange-50 rounded-full w-full">
                            続きを読む <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
