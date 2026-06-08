import SEO from "./SEO";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MessageCircle,
  Coffee,
  Heart,
  Star,
  Users,
  Clock,
  Briefcase,
  TrendingUp,
  Globe,
  Award,
  Target,
} from "lucide-react";

export default function RegularCommunicationsPageJA() {
  const conversationTopics = [
    {
      icon: <Coffee className="w-8 h-8 text-amber-600" />,
      title: "日常生活と文化",
      description: "日本と国際的な文化についての体験を共有",
      examples: ["食べ物と料理", "旅行体験", "地元の祭り", "家族の伝統"],
    },
    {
      icon: <Heart className="w-8 h-8 text-rose-500" />,
      title: "趣味と興味",
      description: "あなたの情熱について話し、新しい興味を発見",
      examples: ["写真", "音楽と芸術", "スポーツとフィットネス", "読書と映画"],
    },
    {
      icon: <Star className="w-8 h-8 text-purple-600" />,
      title: "夢と目標",
      description: "あなたの願望と将来の計画を表現",
      examples: ["キャリアの野望", "旅行の夢", "個人的成長", "人生の成果"],
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "社会的つながり",
      description: "社会的状況での自信を構築",
      examples: [
        "友達作り",
        "社会的イベント",
        "コミュニティ参加",
        "ネットワーキング",
      ],
    },
  ];

  const classFormats = [
    {
      title: "会話サークル",
      description: "リラックスした雰囲気での少人数グループディスカッション",
      duration: "90分",
      size: "4-6名",
      frequency: "週1回",
    },
    {
      title: "マンツーマンセッション",
      description: "専用の注意を払った個別の会話練習",
      duration: "60分",
      size: "1名",
      frequency: "柔軟",
    },
    {
      title: "コーヒーチャットセッション",
      description: "コーヒーとスナックを楽しみながらのカジュアルな英語練習",
      duration: "45分",
      size: "2-4名",
      frequency: "隔週",
    },
  ];

  const testimonials = [
    {
      name: "鈴木 恵",
      role: "大学生",
      content:
        "会話クラスのおかげで国際的な友達を作ることができ、どんな状況でも英語を話すことに自信を持てるようになりました。",
      avatar:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=suzuki&backgroundColor=b6e3f4&clothesColor=262e33&eyesColor=262e33&facialHairColor=724133&hairColor=724133&hatColor=0052cc&mouthColor=d50000&skinColor=fdbcb4",
    },
    {
      name: "中村 武",
      role: "退職者",
      content:
        "旅行の話を共有し、他の文化について学ぶのが大好きです。これらのクラスは私を積極的に参加させ、学習を続けさせてくれます。",
      avatar:
        "https://api.dicebear.com/7.x/avataaars/svg?seed=nakamura&backgroundColor=c084fc&clothesColor=3c4142&eyesColor=262e33&facialHairColor=724133&hairColor=65471f&hatColor=0052cc&mouthColor=d50000&skinColor=f8d25c",
    },
  ];

  return (
    <>
      <SEO
        title="定期英会話クラス - いわき市のTEFL認定指導 | ドリーム英語"
        description="いわき市でTEFL認定講師による自然な英会話スキル構築。実践的コミュニケーション練習と文化交流を通じて、ビジネス英語とTOEIC対策プログラムを補完するクラス。"
        keywords="英会話クラス いわき, TEFL認定会話指導, 英語スピーキング練習, 会話サークル いわき, 英語コミュニケーションスキル 日本"
        lang="ja"
        canonical="https://zealous-chandrasekhar2-9jm3e.view-3.tempo-dev.app/regular-communications"
      />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-rose-500 to-pink-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <MessageCircle className="w-16 h-16 mx-auto mb-6 text-rose-200" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                定期英会話クラス
              </h1>
              <p className="text-xl text-rose-100 mb-8">
                人生、文化、そしてあなたの興味について意味のある議論を通じて、自然な英会話スキルを構築しましょう。
              </p>
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600"
                onClick={() => (window.location.href = "/contact")}
              >
                会話サークルに参加
              </Button>
            </div>
          </div>
        </div>

        {/* Conversation Topics */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                私たちが話すこと
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                私たちの会話は、あなたにとって重要なトピックをカバーし、英語学習を自然で楽しいものにします。
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {conversationTopics.map((topic, index) => (
                <Card
                  key={index}
                  className="bg-white shadow-lg hover:shadow-xl transition-shadow text-center"
                >
                  <CardHeader>
                    <div className="flex justify-center mb-4">{topic.icon}</div>
                    <CardTitle className="text-gray-800">
                      {topic.title}
                    </CardTitle>
                    <CardDescription>{topic.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {topic.examples.map((example, idx) => (
                        <li key={idx}>• {example}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Class Formats */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Clock className="w-12 h-12 mx-auto mb-4 text-rose-600" />
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                学習スタイルを選択
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                あなたのスケジュールと学習の好みに合わせた柔軟な形式を提供します。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {classFormats.map((format, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-rose-50 to-pink-50 shadow-lg"
                >
                  <CardHeader>
                    <CardTitle className="text-rose-700">
                      {format.title}
                    </CardTitle>
                    <CardDescription>{format.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex justify-between">
                        <span>時間:</span>
                        <span className="font-medium">{format.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>クラスサイズ:</span>
                        <span className="font-medium">{format.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>頻度:</span>
                        <span className="font-medium">{format.frequency}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                学生の体験
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                英会話スキルを変革した学生の声をお聞きください。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">
                      &quot;{testimonial.content}&quot;
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Practical Business Focus Section */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Briefcase className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                実践的ビジネス重視
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                私たちの会話クラスは、実世界のビジネスシナリオであなたの専門的発達を補完します。
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-white shadow-md">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">
                      キャリア向上
                    </h3>
                    <p className="text-gray-600 text-sm">
                      専門的成長に直接影響する英語スキルを練習
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white shadow-md">
                  <CardContent className="p-6 text-center">
                    <Users className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">
                      ネットワーキングスキル
                    </h3>
                    <p className="text-gray-600 text-sm">
                      国際ビジネスネットワーキングイベントでの自信を構築
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white shadow-md">
                  <CardContent className="p-6 text-center">
                    <Globe className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">
                      グローバルコミュニケーション
                    </h3>
                    <p className="text-gray-600 text-sm">
                      国際的成功のための異文化コミュニケーションをマスター
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Cultural Bridge Expertise Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Globe className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  文化の架け橋専門知識
                </h2>
                <p className="text-lg text-gray-600">
                  私たちの専門的アプローチを通じて、文化的違いを自信を持ってナビゲートしましょう。
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    日本-西洋ビジネス文化
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 西洋の直接性と日本の繊細さの理解</li>
                    <li>• 国際会議でのコミュニケーションスタイルの適応</li>
                    <li>• 文化的境界を越えた関係構築</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    異文化能力
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 文化的誤解の回避</li>
                    <li>• 文化を越えたアイデアの明確な表現</li>
                    <li>• 国際的な専門関係の構築</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specialized Programs Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Award className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                専門会話プログラム
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                特定の目標と業界向けに設計されたターゲット会話プログラムからお選びください。
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Briefcase className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-800 mb-2">
                    ビジネス会話
                  </h3>
                  <p className="text-gray-600 text-sm">
                    専門シナリオと業界固有の語彙
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Target className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-800 mb-2">
                    TOEICスピーキング
                  </h3>
                  <p className="text-gray-600 text-sm">
                    TOEICスピーキングテスト成功のためのターゲット練習
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-800 mb-2">社会英語</h3>
                  <p className="text-gray-600 text-sm">
                    社会的・旅行状況でのカジュアル会話
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Globe className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-800 mb-2">文化交流</h3>
                  <p className="text-gray-600 text-sm">
                    日本と国際文化についての深い議論
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-rose-500 to-pink-600 py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <MessageCircle className="w-12 h-12 mx-auto mb-4 text-white" />
              <h2 className="text-3xl font-bold text-white mb-6">
                会話の旅を始めましょう
              </h2>
              <p className="text-rose-100 mb-8">
                英語学習者の温かいコミュニティに参加し、今日から意味のある会話を始めましょう。
              </p>
              <div className="space-x-4">
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600"
                  onClick={() => (window.location.href = "/contact")}
                >
                  体験クラスを予約
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
