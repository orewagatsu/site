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
  DollarSign,
  MapPin,
  Users,
  Briefcase,
  CheckCircle,
} from "lucide-react";

export default function PricingPageJA() {
  const pricingPlans = [
    {
      icon: <Users className="w-12 h-12 text-emerald-600" />,
      title: "グループクラス",
      subtitle: "教室またはオンライン",
      price: "¥11,000",
      period: "月額",
      description: "週1回、教室またはオンラインでのグループクラス",
      features: [
        "週1回90分のセッション",
        "少人数環境（4-6名）",
        "TEFL認定講師による指導",
        "オンラインまたは対面の柔軟なオプション",
        "ビジネス英語または会話重視",
      ],
      popular: false,
    },
    {
      icon: <Briefcase className="w-12 h-12 text-blue-600" />,
      title: "プライベートレッスン",
      subtitle: "個別学習",
      price: "¥5,500",
      period: "1レッスン",
      description: "マンツーマンレッスン、週1-6回",
      features: [
        "カスタマイズされたカリキュラム",
        "柔軟なスケジュール（週1-6回）",
        "個別指導",
        "ビジネス英語またはTOEIC対策",
        "進捗追跡",
      ],
      popular: true,
    },
    {
      icon: <MapPin className="w-12 h-12 text-purple-600" />,
      title: "出張クラス",
      subtitle: "企業・グループ研修",
      price: "¥50,000",
      period: "月額",
      description: "企業、老人ホームなどでのグループクラス",
      features: [
        "お客様の場所での出張研修",
        "企業英語プログラム",
        "スタッフ向けグループ研修",
        "カスタマイズされたビジネス内容",
        "※交通費別途",
      ],
      popular: false,
    },
  ];

  return (
    <>
      <SEO
        title="英語学習料金 - ドリーム英語いわき | TEFL認定指導"
        description="いわき市でのTEFL認定英語指導の透明な料金設定。ビジネス英語、TOEIC対策、会話クラス、異文化コンサルティングサービスからお選びください。"
        keywords="英語学習料金 いわき, TEFL認定英語クラス費用, ビジネス英語料金 日本, TOEIC対策費用, 英会話クラス価格, 異文化コンサルティング料金"
        lang="ja"
        canonical="https://www.dreamenglishiwaki.com/pricing"
        hreflangAlternates={[
          { hreflang: "ja", href: "https://www.dreamenglishiwaki.com/pricing" },
          { hreflang: "en", href: "https://www.dreamenglishiwaki.com/en/pricing" },
          { hreflang: "x-default", href: "https://www.dreamenglishiwaki.com/pricing" },
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <DollarSign className="w-16 h-16 mx-auto mb-6 text-emerald-200" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                英語学習料金 - ドリーム英語いわき
              </h1>
              <p className="text-xl text-emerald-100 mb-8">
                いわき市でのTEFL認定英語指導の透明な料金設定。ビジネス英語、TOEIC対策、会話クラス、異文化コンサルティングサービスからお選びください。
              </p>
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600"
                onClick={() => (window.location.href = "/contact")}
              >
                無料相談を受ける
              </Button>
            </div>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                学習パスを選択
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                あらゆる学習スタイルとスケジュールに対応する柔軟な料金オプション。すべてのプログラムにTEFL認定指導が含まれます。
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`bg-white shadow-lg hover:shadow-xl transition-shadow relative ${
                    plan.popular ? "border-2 border-emerald-500" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        最も人気
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center pt-8">
                    <div className="flex justify-center mb-4">{plan.icon}</div>
                    <CardTitle className="text-gray-800">
                      {plan.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {plan.subtitle}
                    </CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-gray-800">
                        {plan.price}
                      </span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      {plan.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-emerald-600 hover:bg-emerald-700"
                          : "bg-gray-600 hover:bg-gray-700"
                      }`}
                      onClick={() => (window.location.href = "/contact")}
                    >
                      始める
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Consulting Services */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                コンサルティング・講演
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                企業や組織向けの専門的な異文化コンサルティングと講演サービス。
              </p>
              <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-6">
                    <Briefcase className="w-12 h-12 text-indigo-600 mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        カスタム料金
                      </h3>
                      <p className="text-gray-600">
                        イベント、タイミング、要件に基づく
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        コンサルティングサービス:
                      </h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• 異文化コミュニケーション研修</li>
                        <li>• ビジネス英語プログラム開発</li>
                        <li>• 国際チーム管理</li>
                        <li>• グローバル展開戦略</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        講演:
                      </h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• 企業ワークショップ</li>
                        <li>• 教育セミナー</li>
                        <li>• 会議プレゼンテーション</li>
                        <li>• 研修イベント</li>
                      </ul>
                    </div>
                  </div>
                  <Button
                    size="lg"
                    className="bg-indigo-600 hover:bg-indigo-700"
                    onClick={() => (window.location.href = "/contact")}
                  >
                    見積もり依頼
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-r from-slate-50 to-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                よくある質問
              </h2>
              <div className="space-y-6">
                <Card className="bg-white shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      入会金はありますか？
                    </h3>
                    <p className="text-gray-600">
                      入会金はありません。受講されるレッスン料金のみお支払いいただきます。
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      レッスン頻度は変更できますか？
                    </h3>
                    <p className="text-gray-600">
                      はい、プライベートレッスンの頻度はお客様のスケジュールとニーズに基づいて調整できます。
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      出張クラスの交通費はどのくらいですか？
                    </h3>
                    <p className="text-gray-600">
                      交通費はいわき事務所からの距離によって異なります。お客様の場所に基づいて見積もりを提供いたします。
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">
                学習を始める準備はできていますか？
              </h2>
              <p className="text-emerald-100 mb-8">
                今日お問い合わせいただき、無料相談であなたのニーズに最適な英語学習プログラムを見つけましょう。
              </p>
              <div className="space-x-4">
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600"
                  onClick={() => (window.location.href = "/contact")}
                >
                  無料相談を予約
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
