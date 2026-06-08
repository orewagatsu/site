export default function TestimonialSectionJA() {
  const testimonials = [
    {
      name: "田中",
      role: "ビジネスプロフェッショナル",
      content:
        "ドリーム英語に初めて来た時、会議で英語の文章をほとんど話すことができませんでした。TEFL認定のビジネス英語プログラムを通じて、今では国際的なプレゼンテーションを自信を持って主導し、TOEIC700点を達成しました。向上した専門英語スキルのおかげで地域マネージャーに昇進しました。",
      avatar:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=yuki&backgroundColor=b6e3f4&clothesColor=262e33",
      achievement: "地域マネージャーに昇進",
    },
    {
      name: "佐藤",
      role: "退職教師",
      content:
        "教師を退職した後、頭を鋭く健康に保つことを心配していました。ドリーム英語の会話クラスは、精神的に活発でいるのを助けただけでなく、世界を旅するという私の夢もサポートしてくれました。今では旅行中に様々な国の人々と自信を持ってコミュニケーションを取り、各旅行をより意味深く豊かなものにしています。",
      avatar:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=hiroshi&backgroundColor=c084fc&clothesColor=3c4142",
      achievement: "世界旅行者・活発な心",
    },
    {
      name: "山本",
      role: "英語愛好家",
      content:
        "学校での教え方のせいで英語が嫌いでした - 文法ばかりで実際のコミュニケーションがありませんでした。しかし、ドリーム英語は英語が世界中の人々とつながることだと教えてくれました。クラスを通じて異文化コミュニケーションへの情熱を発見し、今ではシンガポールの友人と定期的に英語でチャットしています。言語が大陸を越えた友情を開くことができるのは素晴らしいことです。",
      avatar:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=akiko&backgroundColor=fbbf24&clothesColor=65a30d",
      achievement: "グローバル友情・コミュニケーション",
    },
  ];

  const examples = [
    "専門的なコミュニケーションのためのビジネス英語ロールプレイ",
    "TOEIC対策戦略と模擬テスト",
    "グローバルビジネス成功のための異文化コンサルティング",
    "効果的な学習のためのTEFL認定指導方法",
  ];

  return (
    <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-8 text-gray-800 leading-tight">
            ✨ 変革的な成功ストーリー
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            私たちのドアを通る学生一人一人にはユニークな夢があります。ここでは、英語の目標を<span className="font-semibold text-orange-600">人生を変える成果</span>に変えた学習者の感動的な旅をご紹介します。
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-orange-100 hover:border-orange-200 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-8">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mr-6 border-4 border-orange-200 shadow-md"
                />
                <div>
                  <h4 className="font-bold text-gray-800 text-xl">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 font-medium text-lg">
                    {testimonial.role}
                  </p>
                  <div className="bg-gradient-to-r from-orange-400 to-amber-400 text-white text-sm px-4 py-2 rounded-full mt-3 inline-block font-semibold shadow-md">
                    🎉 {testimonial.achievement}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 leading-relaxed text-lg font-light">
                &quot;{testimonial.content}&quot;
              </blockquote>
            </div>
          ))}
        </div>

        {/* Real-world Examples */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">
            🌍 学生が実生活で英語をどのように活用するか
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {examples.map((example, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border-l-6 border-gradient-to-b from-orange-400 to-amber-400 hover:transform hover:scale-105"
                style={{borderLeftColor: index % 2 === 0 ? '#fb923c' : '#f59e0b'}}
              >
                <p className="text-gray-700 font-medium text-lg leading-relaxed">{example}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}