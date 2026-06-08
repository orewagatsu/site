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
  Globe,
  Users,
  TrendingUp,
  Award,
  Target,
  Lightbulb,
} from "lucide-react";

export default function InterculturalConsultingPageJA() {
  const services = [
    {
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      title: "国際コミュニケーション",
      description:
        "グローバルビジネスコミュニケーションにおける文化的ギャップを橋渡し",
      features: [
        "異文化コミュニケーション戦略",
        "国際会議の進行",
        "グローバルチームコラボレーション",
        "文化的感受性トレーニング",
      ],
    },
    {
      icon: <Users className="w-12 h-12 text-purple-600" />,
      title: "リーダーシップトレーニング",
      description: "多文化環境でのリーダーシップスキルを発達",
      features: [
        "包括的リーダーシップ実践",
        "多様なチームの管理",
        "文化を超えた紛争解決",
        "グローバル環境でのエグゼクティブプレゼンス",
      ],
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-emerald-600" />,
      title: "経営コンサルティング",
      description: "国際ビジネス拡大のための戦略的ガイダンス",
      features: [
        "市場参入戦略",
        "組織文化評価",
        "変革管理",
        "パフォーマンス最適化",
      ],
    },
  ];

  const industries = [
    "テクノロジー・ソフトウェア",
    "製造業・エンジニアリング",
    "ヘルスケア・製薬",
    "金融サービス",
    "教育・研究",
    "観光・ホスピタリティ",
  ];

  const consultingProcess = [
    {
      step: "1",
      title: "評価",
      description: "現在の国際コミュニケーションの課題と組織文化の包括的分析。",
    },
    {
      step: "2",
      title: "戦略開発",
      description:
        "特定の異文化ビジネスニーズと目標に対処するために設計されたカスタムソリューション。",
    },
    {
      step: "3",
      title: "実装",
      description:
        "新しいコミュニケーション戦略とリーダーシップ実践を実装するための実践的サポートとトレーニング。",
    },
    {
      step: "4",
      title: "評価",
      description:
        "国際業務の持続可能な改善を確保するための継続的な監視と調整。",
    },
  ];

  const caseStudies = [
    {
      company: "テックスタートアップ",
      challenge: "限られた英語コミュニケーションスキルでアメリカ市場に拡大",
      solution:
        "エグゼクティブチーム向け6ヶ月リーダーシップトレーニングプログラム",
      result: "40%の収益成長でアメリカ事業を成功裏に開始",
    },
    {
      company: "製造会社",
      challenge: "国際サプライチェーンパートナーシップの管理",
      solution: "調達チーム向け異文化コミュニケーションワークショップ",
      result: "サプライヤー関係の改善と25%のコスト削減",
    },
  ];

  return (
    <>
      <SEO
        title="ビジネスコンサルティングサービス - いわき市のTEFL認定専門家 | ドリーム英語"
        description="TEFL認定ビジネスコンサルタントによる国際コミュニケーション専門指導で、組織のグローバル能力を変革。いわき拠点チームが国際ビジネス英語、経営管理、グローバル展開戦略の専門ガイダンスを提供。"
        keywords="ビジネスコンサルティング いわき, TEFL認定ビジネスコンサルタント, 国際コミュニケーション研修, 国際ビジネス英語, グローバル展開戦略, ビジネス管理 日本"
        lang="ja"
        canonical="https://zealous-chandrasekhar2-9jm3e.view-3.tempo-dev.app/business-consulting"
      />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Globe className="w-16 h-16 mx-auto mb-6 text-indigo-200" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                ビジネスコンサルティングサービス
              </h1>
              <p className="text-xl text-indigo-100 mb-8">
                国際コミュニケーション、リーダーシップ、経営コンサルティングの専門ガイダンスで、組織のグローバル能力を変革しましょう。
              </p>
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600"
                onClick={() => (window.location.href = "/contact")}
              >
                戦略セッションを予約
              </Button>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                私たちのコンサルティングサービス
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                グローバル市場で組織が成功するのを支援する包括的ソリューション。
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="bg-white shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-gray-800">
                      {service.title}
                    </CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Target className="w-4 h-4 text-indigo-600 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700">
                      詳細を見る
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Industries Served */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Award className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  サービス提供業界
                </h2>
                <p className="text-lg text-gray-600">
                  私たちの専門知識は様々な業界にわたり、あらゆる規模の組織が国際的な成功を達成するのを支援します。
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {industries.map((industry, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg text-center"
                  >
                    <span className="text-gray-700 font-medium">
                      {industry}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Consulting Process */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Lightbulb className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                私たちのコンサルティングプロセス
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                国際ビジネス能力を変革するための体系的アプローチ。
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultingProcess.map((phase, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 shadow-lg"
                >
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {phase.step}
                    </div>
                    <CardTitle className="text-indigo-700">
                      {phase.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{phase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                成功事例
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                国際業務を変革した組織からの実際の結果。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {caseStudies.map((study, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 shadow-lg"
                >
                  <CardHeader>
                    <CardTitle className="text-indigo-700">
                      {study.company}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        課題:
                      </h4>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        ソリューション:
                      </h4>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        結果:
                      </h4>
                      <p className="text-emerald-600 text-sm font-medium">
                        {study.result}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <Globe className="w-12 h-12 mx-auto mb-4 text-white" />
              <h2 className="text-3xl font-bold text-white mb-6">
                グローバル展開の準備はできていますか？
              </h2>
              <p className="text-indigo-100 mb-8">
                実証済みの戦略と専門ガイダンスで、組織の国際的な可能性を解き放つお手伝いをさせてください。
              </p>
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600"
                onClick={() => (window.location.href = "/contact")}
              >
                相談を予約
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
