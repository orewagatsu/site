import { BookOpen, Users, Globe, Target } from "lucide-react";

export default function ContentSectionJA() {
  const sections = [
    {
      id: "about",
      title: "いわき市の英語・英会話スクール",
      content:
        "ドリームイングリッシュは、いわき市にあるTEFL認定ネイティブ講師による英語・英会話スクールです。ビジネス英語、TOEIC対策、日常英会話まで、あなたの目標に合わせた実践的な英語学習をサポートします。いわき駅周辺で通いやすく、無料体験レッスンも実施中です。",
    },
    {
      id: "philosophy",
      title: "実践重視の英語学習",
      content:
        "従来の文法中心の学習ではなく、実際に使える英語・英会話力を身につけることを重視しています。ビジネスシーン、日常会話、TOEIC試験対策など、あなたのニーズに合わせたレッスンで、確実に英語力をアップさせます。",
    },
    {
      id: "programs",
      title: "多彩なレッスンプログラム",
      content:
        "ビジネス英語、日常英会話、TOEIC対策、マンツーマンレッスン、グループレッスンなど、様々なプログラムをご用意。いわき市で本格的な英語学習をお探しの方、まずは無料体験レッスンでお試しください。",
    },
  ];

  const features = [
    {
      icon: <BookOpen className="w-10 h-10 text-orange-500" />,
      title: "ネイティブ講師",
      description: "TEFL認定のネイティブスピーカーが丁寧に指導",
    },
    {
      icon: <Users className="w-10 h-10 text-amber-500" />,
      title: "少人数制レッスン",
      description: "一人ひとりに合わせた丁寧な指導",
    },
    {
      icon: <Globe className="w-10 h-10 text-orange-500" />,
      title: "ビジネス英語",
      description: "実務で使える英語コミュニケーション力を習得",
    },
    {
      icon: <Target className="w-10 h-10 text-amber-500" />,
      title: "TOEIC対策",
      description: "スコアアップのための実践的なトレーニング",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-orange-50 py-20">
      <div className="container mx-auto px-4">
        {/* Features Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-6 p-4 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full w-20 h-20 mx-auto items-center group-hover:shadow-lg transition-shadow">
                {feature.icon}
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {sections.map((section, index) => (
            <div key={section.id} className="max-w-4xl mx-auto text-center">
              <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-100">
                <h2 className="text-4xl font-bold mb-8 text-gray-800 leading-tight">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}