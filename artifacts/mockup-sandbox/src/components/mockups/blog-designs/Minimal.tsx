import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const posts = [
  {
    title: '5 TOEIC Listening Tricks That Actually Work',
    category: 'TOEIC',
    excerpt: 'Learn the insider strategies our students use to jump 50+ points on the listening section...',
    date: 'Oct 12, 2023',
    readTime: '4 min read',
    featured: true,
  },
  {
    title: 'Business Email Phrases Every Japanese Professional Needs',
    category: 'Business English',
    excerpt: 'Master these 12 email openers that sound natural to native speakers...',
    date: 'Oct 05, 2023',
    readTime: '6 min read',
  },
  {
    title: "From N3 to Business Fluency: Yuki's Story",
    category: 'Student Stories',
    excerpt: 'After two years of weekly lessons, Yuki landed her dream job at an international trading firm...',
    date: 'Sep 28, 2023',
    readTime: '5 min read',
  },
  {
    title: "Why Your English Pronunciation Doesn't Matter (As Much As You Think)",
    category: 'Speaking',
    excerpt: "Confidence beats accent every time. Here's how to stop overthinking and start communicating...",
    date: 'Sep 20, 2023',
    readTime: '4 min read',
  },
  {
    title: 'The Best Free Apps to Study English in Iwaki',
    category: 'Resources',
    excerpt: "You don't need expensive textbooks. These five apps complement your classroom learning perfectly...",
    date: 'Sep 15, 2023',
    readTime: '7 min read',
  },
];

export function Minimal() {
  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Header */}
      <header className="pt-24 pb-16 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-4">
          Dream English Journal
        </h1>
        <p className="text-lg md:text-xl text-slate-500 font-light max-w-2xl leading-relaxed">
          Thoughts on language learning, student success stories, and practical tips for professionals in Iwaki.
        </p>
      </header>

      <main className="px-6 max-w-4xl mx-auto pb-24">
        {/* Featured Post */}
        <article className="group cursor-pointer mb-16 pl-6 border-l-2 border-emerald-500 transition-colors hover:border-emerald-600">
          <div className="flex items-center gap-4 mb-4">
            <Badge variant="outline" className="border-emerald-600 text-emerald-600 rounded-full px-3 py-0.5 text-xs font-medium bg-transparent hover:bg-emerald-50 transition-colors">
              {featuredPost.category}
            </Badge>
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Clock className="w-3.5 h-3.5" />
              <span>{featuredPost.readTime}</span>
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-medium mb-4 group-hover:text-emerald-700 transition-colors">
            {featuredPost.title}
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6 max-w-3xl">
            {featuredPost.excerpt}
          </p>
          <div className="flex items-center gap-2 text-emerald-600 font-medium text-sm">
            Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </article>

        <Separator className="my-12 bg-slate-200" />

        {/* Regular Posts List */}
        <div className="space-y-12">
          {regularPosts.map((post, index) => (
            <React.Fragment key={index}>
              <article className="group cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8">
                  <div className="md:w-32 shrink-0 text-sm text-slate-400">
                    {post.date}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <Badge variant="outline" className="border-emerald-600 text-emerald-600 rounded-full px-3 py-0.5 text-xs font-medium bg-transparent hover:bg-emerald-50 transition-colors">
                        {post.category}
                      </Badge>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-medium mb-3 group-hover:text-emerald-700 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4 max-w-2xl">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-emerald-600 font-medium text-sm">
                      Read <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </article>
              {index < regularPosts.length - 1 && (
                <Separator className="my-12 bg-slate-200" />
              )}
            </React.Fragment>
          ))}
        </div>
      </main>
    </div>
  );
}
