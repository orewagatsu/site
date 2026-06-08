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
    title: "5 Essential TOEIC Strategies for Iwaki Professionals",
    excerpt: "Discover proven techniques used by our TEFL-certified instructors to help Iwaki business professionals achieve 700+ TOEIC scores.",
    content: "Master these five key strategies that have helped hundreds of Iwaki professionals boost their TOEIC scores...",
    author: "Dream English Team",
    date: "2024-01-15",
    category: "TOEIC Preparation",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
    slug: "toeic-strategies-iwaki-professionals"
  },
  {
    id: "2",
    title: "Business English Phrases Every Iwaki Professional Needs",
    excerpt: "Essential business English expressions for meetings, presentations, and international communication in Fukushima's business environment.",
    content: "These business English phrases will transform your professional communication...",
    author: "Dream English Team",
    date: "2024-01-10",
    category: "Business English",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    slug: "business-english-phrases-iwaki"
  },
  {
    id: "3",
    title: "Why TEFL Certification Matters for English Learning in Japan",
    excerpt: "Understanding the difference TEFL-certified instructors make in your English learning journey in Iwaki and throughout Japan.",
    content: "TEFL certification ensures your English instructor has the proper training...",
    author: "Dream English Team",
    date: "2024-01-05",
    category: "English Learning",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    slug: "tefl-certification-importance-japan"
  },
  {
    id: "4",
    title: "Intercultural Communication Tips for Global Business Success",
    excerpt: "Navigate cross-cultural business relationships with confidence using these proven intercultural communication strategies.",
    content: "Successful global business requires more than just language skills...",
    author: "Dream English Team",
    date: "2023-12-28",
    category: "Intercultural Consulting",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80",
    slug: "intercultural-communication-global-business"
  },
  {
    id: "5",
    title: "Free TOEIC Practice Materials and Study Schedule",
    excerpt: "Download our comprehensive TOEIC study materials and follow our proven 12-week study schedule for maximum score improvement.",
    content: "Structured TOEIC preparation is key to achieving your target score...",
    author: "Dream English Team",
    date: "2023-12-20",
    category: "Free Resources",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80",
    slug: "free-toeic-practice-materials"
  },
  {
    id: "6",
    title: "English Learning Success Stories from Iwaki Students",
    excerpt: "Real transformation stories from Dream English students who achieved their career goals through improved English communication skills.",
    content: "These inspiring success stories show what's possible with dedicated English study...",
    author: "Dream English Team",
    date: "2023-12-15",
    category: "Success Stories",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
    slug: "english-success-stories-iwaki"
  }
];

const categories = [
  { name: "All Posts", icon: <BookOpen className="w-5 h-5" />, count: blogPosts.length },
  { name: "TOEIC Preparation", icon: <Target className="w-5 h-5" />, count: blogPosts.filter(p => p.category === "TOEIC Preparation").length },
  { name: "Business English", icon: <Globe className="w-5 h-5" />, count: blogPosts.filter(p => p.category === "Business English").length },
  { name: "Success Stories", icon: <User className="w-5 h-5" />, count: blogPosts.filter(p => p.category === "Success Stories").length },
];

export default function BlogPage() {
  return (
    <>
      <SEO
        title="English Learning Blog - TOEIC Tips, Business English & Success Stories | Dream English Iwaki"
        description="Expert English learning tips, TOEIC strategies, business English advice, and student success stories from Dream English School in Iwaki, Japan. Free resources for English learners."
        keywords="English learning tips, TOEIC strategies, business English advice, English study materials, Iwaki English blog, TEFL teaching methods, English success stories, free TOEIC practice"
        canonical="https://your-domain.com/blog"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              📚 English Learning Blog
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Expert tips, TOEIC strategies, and success stories from Dream English School in Iwaki, Japan
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
                    Featured
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-gray-600 mb-4">
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                      {blogPosts[0].category}
                    </span>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{new Date(blogPosts[0].date).toLocaleDateString()}</span>
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
                    Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
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
                      <span>{new Date(post.date).toLocaleDateString()}</span>
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
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 bg-gradient-to-r from-orange-100 to-amber-100 rounded-3xl p-12 text-center border-2 border-orange-200">
            <h3 className="text-3xl font-bold mb-4 text-gray-800">
              📧 Get Weekly English Learning Tips
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join 500+ Iwaki professionals receiving our weekly newsletter with TOEIC tips, business English phrases, and exclusive study materials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full border-2 border-orange-200 focus:border-orange-400 outline-none text-lg"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold">
                Subscribe Free
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}