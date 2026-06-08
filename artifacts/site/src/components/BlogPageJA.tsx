import SEO from "./SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, ArrowRight, BookOpen, Target, Globe } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "いわきのプロフェッショナルのための5つの必須TOEIC戦略",
    excerpt: "TEFL認定講師が使用する実証済みのテクニックで、いわきのビジネスプロフェッショナルが700点以上のTOEICスコアを達成する方法を発見してください。",
    content: "いわきの何百人ものプロフェッショナルがTOEICスコアを向上させるのに役立った5つの主要戦略をマスターしましょう...",
    author: "ドリーム英語チーム",
    date: "2024-01-15",
    category: "TOEIC対策",
    readTime: "5分で読める",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
    slug: "toeic-strategies-iwaki-professionals"
  },
  {
    id: "2",
    title: "すべてのいわきプロフェッショナルが必要なビジネス英語フレーズ",
    excerpt: "福島のビジネス環境での会議、プレゼンテーション、国際コミュニケーションに不可欠なビジネス英語表現。",
    content: "これらのビジネス英語フレーズがあなたの専門的なコミュニケーションを変革します...",
    author: "ドリーム英語チーム",
    date: "2024-01-10",
    category: "ビジネス英語",
    readTime: "7分で読める",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    slug: "business-english-phrases-iwaki"
  },
  {
    id: "3",
    title: "日本での英語学習にTEFL認定が重要な理由",
    excerpt: "いわきと日本全国での英語学習の旅において、TEFL認定講師がもたらす違いを理解しましょう。",
    content: "TEFL認定は、あなたの英語講師が適切なトレーニングを受けていることを保証します...",
    author: "ドリーム英語チーム",
    date: "2024-01-05",
    category: "英語学習",
    readTime: "6分で読める",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    slug: "tefl-certification-importance-japan"
  },
  {
    id: "4",
    title: "グローバルビジネス成功のための異文化コミュニケーションのコツ",
    excerpt: "これらの実証済みの異文化コミュニケーション戦略を使用して、異文化間のビジネス関係を自信を持ってナビゲートしましょう。",
    content: "成功するグローバルビジネスには、言語スキル以上のものが必要です...",
    author: "ドリーム英語チーム",
    date: "2023-12-28",
    category: "異文化コンサルティング",
    readTime: "8分で読める",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80",
    slug: "intercultural-communication-global-business"
  },
  {
    id: "5",
    title: "無料TOEIC練習教材と学習スケジュール",
    excerpt: "包括的なTOEIC学習教材をダウンロードし、最大のスコア向上のための実証済みの12週間学習スケジュールに従ってください。",
    content: "構造化されたTOEIC準備は、目標スコアを達成するための鍵です...",
    author: "ドリーム英語チーム",
    date: "2023-12-20",
    category: "無料リソース",
    readTime: "4分で読める",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80",
    slug: "free-toeic-practice-materials"
  },
  {
    id: "6",
    title: "いわき学生からの英語学習成功ストーリー",
    excerpt: "向上した英語コミュニケーションスキルを通じてキャリア目標を達成したドリーム英語学生からの実際の変革ストーリー。",
    content: "これらの感動的な成功ストーリーは、献身的な英語学習で何が可能かを示しています...",
    author: "ドリーム英語チーム",
    date: "2023-12-15",
    category: "成功ストーリー",
    readTime: "10分で読める",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
    slug: "english-success-stories-iwaki"
  }
];

const categories = [
  { name: "すべての投稿", icon: <BookOpen className="w-5 h-5" />, count: blogPosts.length },
  { name: "TOEIC対策", icon: <Target className="w-5 h-5" />, count: blogPosts.filter(p => p.category === "TOEIC対策").length },
  { name: "ビジネス英語", icon: <Globe className="w-5 h-5" />, count: blogPosts.filter(p => p.category === "ビジネス英語").length },
  { name: "成功ストーリー", icon: <User className="w-5 h-5" />, count: blogPosts.filter(p => p.category === "成功ストーリー").length },
];

export default function BlogPageJA() {
  return (
    <>
      <SEO
        title="英語学習ブログ - TOEICのコツ、ビジネス英語、成功ストーリー | ドリーム英語いわき"
        description="いわき市のドリーム英語スクールからの専門的な英語学習のコツ、TOEIC戦略、ビジネス英語アドバイス、学生の成功ストーリー。英語学習者のための無料リソース。"
        keywords="英語学習のコツ, TOEIC戦略, ビジネス英語アドバイス, 英語学習教材, いわき英語ブログ, TEFL教授法, 英語成功ストーリー, 無料TOEIC練習"
        canonical="https://www.dreamenglishiwaki.com/blog"
        lang="ja"
        hreflangAlternates={[
          { hreflang: "ja", href: "https://www.dreamenglishiwaki.com/blog" },
          { hreflang: "en", href: "https://www.dreamenglishiwaki.com/en/blog" },
          { hreflang: "x-default", href: "https://www.dreamenglishiwaki.com/blog" },
        ]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              📚 英語学習ブログ
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              いわき市のドリーム英語スクールからの専門的なコツ、TOEIC戦略、成功ストーリー
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Categories */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={`${
                  index === 0 
                    ? "bg-orange-500 hover:bg-orange-600 text-white" 
                    : "border-orange-200 text-orange-700 hover:bg-orange-50"
                } rounded-full px-6 py-3 text-lg font-semibold`}
              >
                {category.icon}
                <span className="ml-2">{category.name} ({category.count})</span>
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <Card className="overflow-hidden shadow-2xl border-2 border-orange-100 hover:shadow-3xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    注目記事
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-gray-600 mb-4">
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                      {blogPosts[0].category}
                    </span>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{new Date(blogPosts[0].date).toLocaleDateString('ja-JP')}</span>
                    </div>
                    <span className="text-sm">{blogPosts[0].readTime}</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-gray-800 leading-tight">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-3 w-fit">
                    記事を読む <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 hover:border-orange-200 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 text-gray-500 mb-3 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString('ja-JP')}</span>
                    </div>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 leading-tight group-hover:text-orange-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <Button variant="outline" className="border-orange-200 text-orange-700 hover:bg-orange-50 rounded-full w-full">
                    続きを読む <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 bg-gradient-to-r from-orange-100 to-amber-100 rounded-3xl p-12 text-center border-2 border-orange-200">
            <h3 className="text-3xl font-bold mb-4 text-gray-800">
              📧 週刊英語学習のコツを受け取る
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              TOEICのコツ、ビジネス英語フレーズ、限定学習教材を含む週刊ニュースレターを受け取る500人以上のいわきプロフェッショナルに参加しましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="メールアドレスを入力してください"
                className="flex-1 px-6 py-4 rounded-full border-2 border-orange-200 focus:border-orange-400 outline-none text-lg"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold">
                無料購読
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}