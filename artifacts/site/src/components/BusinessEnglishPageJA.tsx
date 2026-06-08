import SEO from "./SEO";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Briefcase, TrendingUp, Users, Globe, CheckCircle } from "lucide-react";

export default function BusinessEnglishPageJA() {
  const programs = [
    {
      title: "エグゼクティブコミュニケーション",
      description: "上級管理職およびリーダーシップ役職のための高度な英語",
      duration: "12週間",
      level: "上級",
      features: [
        "プレゼンテーションスキル",
        "会議の進行",
        "交渉テクニック",
        "異文化コミュニケーション",
      ],
    },
    {
      title: "プロフェッショナル会議",
      description: "英語での効果的なビジネス会議の技術をマスター",
      duration: "8週間",
      level: "中級+",
      features: [
        "会議の語彙",
        "議題管理",
        "意思決定の言語",
        "フォローアップコミュニケーション",
      ],
    },
    {
      title: "メール・文書コミュニケーション",
      description: "国際ビジネスのためのプロフェッショナルライティングスキル",
      duration: "6週間",
      level: "中級",
      features: [
        "メールエチケット",
        "レポート作成",
        "提案書作成",
        "プロフェッショナルなトーン",
      ],
    },
  ];

  const benefits = [
    "国際的なビジネス環境での自信を向上",
    "キャリア向上の機会を改善",
    "グローバルな同僚とのより強い関係を構築",
    "プロフェッショナルな評判を向上",
    "業界固有の語彙をマスター",
    "グローバル市場のための文化的認識を発達",
  ];

  return (
    <>
      <SEO
        title="ビジネス英語プログラム - いわき市のTEFL認定指導 | ドリーム英語"
        description="いわき市でTEFL認定ビジネス英語指導とTOEIC対策でキャリアアップ。ビジネスコンサルタント、エグゼクティブ、グローバルキャリアを目指す専門家向けの英語プログラム。"
        keywords="ビジネス英語 いわき, TEFL認定ビジネス研修, TOEIC対策, 専門英語 いわき, エグゼクティブコミュニケーション研修, ビジネス英語クラス 日本"
        lang="ja"
        canonical="https://www.dreamenglishiwaki.com/business-english"
        hreflangAlternates={[
          { hreflang: "ja", href: "https://www.dreamenglishiwaki.com/business-english" },
          { hreflang: "en", href: "https://www.dreamenglishiwaki.com/en/business-english" },
          { hreflang: "x-default", href: "https://www.dreamenglishiwaki.com/business-english" },
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Briefcase className="w-16 h-16 mx-auto mb-6 text-emerald-200" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                ビジネス英語プログラム
              </h1>
              <p className="text-xl text-emerald-100 mb-8">
                現代の職場に合わせたプロフェッショナルな英語コミュニケーションスキルでキャリアを向上させましょう。
              </p>
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600"
                onClick={() => (window.location.href = "/contact")}
              >
                相談予約
              </Button>
            </div>
          </div>
        </div>

        {/* Programs Section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                私たちのビジネス英語プログラム
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                あなたの専門的な発達ニーズに合わせて設計された専門プログラムからお選びください。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {programs.map((program, index) => (
                <Card
                  key={index}
                  className="bg-white shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardHeader>
                    <CardTitle className="text-emerald-700">
                      {program.title}
                    </CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>期間: {program.duration}</span>
                      <span>レベル: {program.level}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  なぜビジネス英語が重要なのか
                </h2>
                <p className="text-lg text-gray-600">
                  今日のグローバル経済において、強力な英語コミュニケーションスキルは専門的な成功に不可欠です。
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="プロフェッショナルなビジネス環境でコミュニケーションを取る多様なグループ"
                className="rounded-lg shadow-2xl"
              />
              <h2 className="text-3xl font-bold text-white mb-6">
                キャリアを向上させる準備はできていますか？
              </h2>
              <p className="text-emerald-100 mb-8">
                私たちのビジネス英語プログラムでキャリアを変革した大手企業の専門家に参加しましょう。
              </p>
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600"
                onClick={() => (window.location.href = "/contact")}
              >
                無料評価を予約
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
