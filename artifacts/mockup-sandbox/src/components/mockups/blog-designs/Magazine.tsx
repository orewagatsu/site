import React from 'react';
import { Calendar, ArrowRight, Clock, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function Magazine() {
  const featuredPost = {
    title: "5 TOEIC Listening Tricks That Actually Work",
    category: "TOEIC",
    date: "October 12, 2023",
    readTime: "6 min read",
    excerpt: "Learn the insider strategies our students use to jump 50+ points on the listening section. Stop trying to understand every word and start listening for the markers that give away the right answers.",
    image: "/images/toeic-listening.jpg"
  };

  const posts = [
    {
      title: "Business Email Phrases Every Japanese Professional Needs",
      category: "Business English",
      date: "October 8, 2023",
      readTime: "5 min read",
      excerpt: "Master these 12 email openers that sound natural to native speakers. Move beyond 'Thank you for your continuous support' to more nuanced, situational greetings.",
      image: "/images/business-email.jpg"
    },
    {
      title: "From N3 to Business Fluency: Yuki's Story",
      category: "Student Stories",
      date: "October 3, 2023",
      readTime: "8 min read",
      excerpt: "After two years of weekly lessons, Yuki landed her dream job at an international trading firm. Here is how she balanced full-time work with aggressive language goals.",
      image: "/images/yuki-story.jpg"
    },
    {
      title: "Why Your English Pronunciation Doesn't Matter (As Much As You Think)",
      category: "Speaking",
      date: "September 28, 2023",
      readTime: "4 min read",
      excerpt: "Confidence beats accent every time. Here's how to stop overthinking your Rs and Ls and start communicating your ideas effectively in global business settings.",
      image: "/images/speaking.jpg"
    },
    {
      title: "The Best Free Apps to Study English in Iwaki",
      category: "Resources",
      date: "September 21, 2023",
      readTime: "7 min read",
      excerpt: "You don't need expensive textbooks. These five apps complement your classroom learning perfectly, and they are perfect for your commute on the Joban Line.",
      image: "/images/apps.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 py-8 px-6 text-center">
        <h3 className="text-emerald-700 font-semibold tracking-widest uppercase text-sm mb-4">Dream English School • Iwaki</h3>
        <h1 className="text-5xl md:text-6xl font-['Playfair_Display'] font-bold text-slate-900 tracking-tight">
          The Dreamer's Journal
        </h1>
        <p className="mt-4 text-slate-500 max-w-xl mx-auto">
          Insights, student stories, and practical advice for mastering English in Japan.
        </p>
      </header>
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Featured Article */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 md:order-1 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6 text-sm">
                <span className="text-emerald-600 font-medium tracking-wide uppercase">{featuredPost.category}</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500 flex items-center gap-1"><Calendar className="w-4 h-4" /> {featuredPost.date}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold leading-tight mb-6 hover:text-emerald-800 transition-colors cursor-pointer">
                {featuredPost.title}
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div>
                <a href="#" className="inline-flex items-center gap-2 text-emerald-700 font-semibold group hover:text-emerald-800 transition-colors">
                  Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 cursor-pointer group">
              <div className="aspect-[4/3] md:aspect-[4/5] lg:aspect-[4/3] overflow-hidden bg-slate-100">
                <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-slate-200 mb-16"></div>

        {/* Article Grid */}
        <div className="flex justify-between items-end mb-10">
          <h3 className="text-3xl font-['Playfair_Display'] font-bold">Latest Stories</h3>
          <a href="#" className="text-emerald-700 font-medium hover:underline hidden sm:block">View all stories</a>
        </div>

        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-16">
          {posts.map((post, i) => (
            <article key={i} className="group flex flex-col cursor-pointer">
              <div className="aspect-[3/2] overflow-hidden mb-6 bg-slate-100">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
              <div className="flex items-center gap-2 mb-3 text-xs">
                <span className="text-emerald-600 font-medium tracking-wide uppercase">{post.category}</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500">{post.date}</span>
              </div>
              <h4 className="text-xl font-['Playfair_Display'] font-bold leading-snug mb-3 group-hover:text-emerald-700 transition-colors">
                {post.title}
              </h4>
              <p className="text-sm text-slate-600 mb-5 flex-grow line-clamp-3">
                {post.excerpt}
              </p>
              <div className="mt-auto">
                <a href="#" className="inline-flex items-center gap-2 text-emerald-700 text-sm font-semibold group-hover:text-emerald-800 transition-colors">
                  Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </section>
      </main>
      <footer className="border-t border-slate-200 mt-20 py-12 text-center">
        <h2 className="text-2xl font-['Playfair_Display'] font-bold mb-4">Dream English School</h2>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">Master English and open new doors for your career in Japan and beyond.</p>
        <p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} Dream English School. All rights reserved.</p>
      </footer>
    </div>
  );
}
