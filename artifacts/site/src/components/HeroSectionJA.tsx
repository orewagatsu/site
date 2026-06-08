import { Button } from "@/components/ui/button";

export default function HeroSectionJA() {
  return (
    <div className="bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 text-white">
      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              いわきで英語・英会話
              <span className="block text-4xl md:text-5xl font-light text-orange-100 mt-2">
                ドリームイングリッシュ
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-orange-100 leading-relaxed font-light">
              いわき市のネイティブTEFL認定講師による実践的な<span className="font-semibold text-white">英語・英会話レッスン</span>。ビジネス英語、TOEIC対策、日常英会話まで。あなたの目標に合わせたマンツーマン・グループレッスンで、<span className="font-semibold text-white">楽しく確実に英語力アップ</span>。
            </p>
            <div className="space-x-4">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                onClick={() => (window.location.href = "/contact")}
              >
                🌟 無料相談を予約する
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-300 to-yellow-300 rounded-2xl blur opacity-30"></div>
            <img
              src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&q=80"
              alt="いわき市でのTEFL認定英語教師によるビジネス英語とTOEIC対策クラス"
              className="relative rounded-2xl shadow-2xl border-4 border-white/20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}