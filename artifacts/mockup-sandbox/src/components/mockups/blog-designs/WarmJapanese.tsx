import React from "react";
import { Calendar, ArrowRight, BookOpen, Sparkles, Coffee, Leaf } from "lucide-react";

export function WarmJapanese() {
  const featuredPost = {
    title: "5 TOEIC Listening Tricks That Actually Work",
    excerpt: "Learn the insider strategies our students use to jump 50+ points on the listening section. Stop trying to catch every word and start focusing on the predictable patterns native speakers use.",
    date: "2023.10.15",
    categoryEn: "TOEIC",
    categoryJa: "TOEIC対策",
    color: "bg-orange-500",
  };

  const posts = [
    {
      title: "Business Email Phrases Every Japanese Professional Needs",
      excerpt: "Master these 12 email openers that sound natural to native speakers. Move beyond 'Thank you for your always help' to truly professional business communication.",
      date: "2023.10.08",
      categoryEn: "Business",
      categoryJa: "ビジネス英語",
      color: "bg-amber-600",
    },
    {
      title: "From N3 to Business Fluency: Yuki's Story",
      excerpt: "After two years of weekly lessons, Yuki landed her dream job at an international trading firm. Read about her journey balancing full-time work and English study.",
      date: "2023.09.28",
      categoryEn: "Success Story",
      categoryJa: "成功体験",
      color: "bg-rose-500",
    },
    {
      title: "Why Your English Pronunciation Doesn't Matter (As Much As You Think)",
      excerpt: "Confidence beats accent every time. Here's how to stop overthinking and start communicating effectively with international colleagues.",
      date: "2023.09.15",
      categoryEn: "Speaking",
      categoryJa: "スピーキング",
      color: "bg-orange-400",
    },
    {
      title: "The Best Free Apps to Study English in Iwaki",
      excerpt: "You don't need expensive textbooks. These five apps complement your classroom learning perfectly, whether you're riding the Joban Line or relaxing at a cafe.",
      date: "2023.09.02",
      categoryEn: "Resources",
      categoryJa: "学習リソース",
      color: "bg-yellow-500",
    }
  ];

  return (
    <div className="min-h-screen font-sans text-stone-800" style={{ backgroundColor: '#fdf8f0' }}>
      {/* Header */}
      <header className="relative pt-16 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-gradient-to-br from-orange-200 to-amber-100 mix-blend-multiply"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 text-orange-200 opacity-60">
          <Leaf size={64} strokeWidth={1} />
        </div>
        <div className="absolute top-20 right-10 text-rose-200 opacity-60">
          <Sparkles size={48} strokeWidth={1} />
        </div>

        <div className="container max-w-5xl mx-auto px-6 relative z-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-[1px] w-12 bg-amber-600/30"></span>
            <span className="text-amber-800/70 text-sm font-medium tracking-widest uppercase">Dream English School</span>
            <span className="h-[1px] w-12 bg-amber-600/30"></span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 tracking-tight text-stone-900">
            英語学習ブログ
            <span className="block text-2xl md:text-3xl mt-2 font-normal text-stone-600">Learning Journal</span>
          </h1>
          <p className="text-center text-stone-600 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
            いわき市のバイリンガル英会話スクールから、<br className="hidden md:block"/>
            楽しく実践的な英語学習のヒントをお届けします。
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-5xl mx-auto px-6 pb-24">
        
        {/* Featured Post */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl p-1 shadow-sm border border-orange-900/5 hover:shadow-md transition-shadow duration-300">
            <div className="bg-orange-50/50 rounded-[14px] p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center">
              
              <div className="w-full md:w-5/12 aspect-[4/3] rounded-xl overflow-hidden bg-amber-100 flex items-center justify-center relative shadow-inner">
                <Coffee size={64} className="text-amber-700/20" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-orange-700 flex items-center shadow-sm">
                  <Sparkles size={12} className="mr-1.5" />
                  Featured
                </div>
              </div>

              <div className="w-full md:w-7/12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${featuredPost.color}`}></span>
                    <span className="text-sm font-medium text-stone-700">{featuredPost.categoryEn} <span className="text-stone-400 mx-1">/</span> {featuredPost.categoryJa}</span>
                  </div>
                  <div className="flex items-center text-stone-400 text-sm gap-1.5 border-l border-stone-200 pl-4">
                    <Calendar size={14} />
                    {featuredPost.date}
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 leading-tight">
                  {featuredPost.title}
                </h2>
                
                <p className="text-stone-600 mb-6 leading-relaxed text-lg">
                  {featuredPost.excerpt}
                </p>
                
                <a href="#" className="inline-flex items-center text-orange-700 font-medium hover:text-orange-600 group w-fit">
                  続きを読む 
                  <ArrowRight size={16} className="ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200/60 hover:shadow-md hover:border-orange-200/50 transition-all duration-300 flex flex-col h-full group">
              <div className="flex items-center gap-4 mb-5">
                <div className="flex items-center gap-2 bg-stone-50 px-2.5 py-1 rounded-full border border-stone-100">
                  <span className={`w-2 h-2 rounded-full ${post.color}`}></span>
                  <span className="text-xs font-medium text-stone-600">{post.categoryEn} <span className="text-stone-400 mx-0.5">/</span> {post.categoryJa}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-stone-900 mb-3 leading-snug group-hover:text-amber-800 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-stone-600 mb-6 leading-relaxed flex-grow">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100">
                <div className="flex items-center text-stone-400 text-sm gap-1.5">
                  <Calendar size={14} />
                  {post.date}
                </div>
                <a href="#" className="inline-flex items-center text-sm text-amber-700 font-medium hover:text-amber-600">
                  続きを読む 
                  <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </main>

      {/* Footer CTA */}
      <div className="bg-white border-t border-stone-200 py-16">
        <div className="container max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 mb-6">
            <BookOpen size={28} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4">
            英語の学習を始めませんか？
          </h2>
          <p className="text-stone-600 mb-8 max-w-xl mx-auto">
            いわき市の教室で、あなたに合わせたカリキュラムで楽しく学びましょう。まずは無料体験レッスンから。
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-4 px-8 rounded-full shadow-lg shadow-amber-600/20 transition-all hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto">
            無料体験レッスン受付中
            <span className="block text-xs text-amber-200 mt-0.5 font-normal">Free Trial Lesson</span>
          </button>
        </div>
      </div>
    </div>
  );
}
