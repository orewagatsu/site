import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Helmet } from "react-helmet-async";

const faqs = [
  {
    question: "無料体験レッスンはありますか？",
    answer:
      "はい、初回の体験レッスンは無料です。お電話またはメールでご予約ください。体験レッスンでは、現在の英語力を確認し、あなたの目標に合ったレッスンプランをご提案します。",
  },
  {
    question: "英語が全くの初心者でも大丈夫ですか？",
    answer:
      "もちろんです。完全な初心者の方から上級者まで、すべてのレベルに対応しています。まず現在の英語力を確認し、あなたのペースで無理なく学べる個別プランを作成します。",
  },
  {
    question: "レッスン料金はいくらですか？",
    answer:
      "料金はレッスンの種類・回数・グループ・個人によって異なります。詳しくは料金ページをご確認いただくか、無料相談でお気軽にお問い合わせください。",
  },
  {
    question: "ビジネス英語コースではどんなことを学べますか？",
    answer:
      "メール・会議・プレゼンテーション・交渉など、実際のビジネスシーンで使える実践的な英語を学びます。業界や職種に合わせた内容にカスタマイズすることも可能です。",
  },
  {
    question: "TOEICスコアはどのくらい上がりますか？",
    answer:
      "個人差はありますが、定期的にレッスンを受けた生徒さんの多くが3〜6ヶ月で100〜200点以上のスコアアップを達成しています。スコア目標に合わせた対策プランを作成します。",
  },
  {
    question: "週に何回レッスンを受けるのが理想ですか？",
    answer:
      "効果的な上達のためには週2〜3回が理想的ですが、週1回からでも着実に力がつきます。お仕事やご都合に合わせてスケジュールを柔軟に調整できます。",
  },
  {
    question: "オンラインレッスンはありますか？",
    answer:
      "はい、ZoomやLINEを使ったオンラインレッスンに対応しています。LINEでのお問い合わせ・ご予約もお気軽にどうぞ。いわき市外にお住まいの方や、ご自宅から受講したい方にも最適です。",
  },
  {
    question: "グループレッスンと個人レッスン、どちらがいいですか？",
    answer:
      "個人レッスンはあなたのペースで集中して学べるため上達が早く、グループレッスンは他の受講生と会話練習ができるため実践力が身につきます。目標に応じてどちらか、または組み合わせをご提案します。",
  },
];

export default function FAQSectionJA() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="py-20 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              よくある質問
            </span>
            <h2 className="text-3xl font-bold text-slate-800">
              ご入会前によくいただくご質問
            </h2>
            <p className="mt-3 text-slate-500 text-base">
              お気軽にお問い合わせください。どんな小さな疑問でも歓迎です。
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-orange-50 transition-colors"
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                >
                  <span className="font-semibold text-slate-800 text-base leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-orange-400 transition-transform duration-200 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === i ? "max-h-48" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-10 text-slate-500 text-sm">
            他にご質問がございましたら、
            <a
              href="/contact"
              className="text-orange-500 font-medium hover:underline"
            >
              お問い合わせページ
            </a>
            からお気軽にどうぞ。
          </p>
        </div>
      </section>
    </>
  );
}
