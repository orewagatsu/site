import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 text-white">
      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Dream English
              <span className="block text-4xl md:text-5xl font-light text-orange-100 mt-2">
                TEFL Certified ESL School
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-orange-100 leading-relaxed font-light">
              At Dream, we focus on practical, real-​world English
              communication. Language should be <span className="font-semibold text-white">fun and useful</span>, not ​just about
              grammar and tests. We encourage you to focus on your ​passions and
              use English as a <span className="font-semibold text-white">bridge to ​share those passions</span> with the world.
            </p>
            <div className="space-x-4">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                onClick={() => (window.location.href = "/en/contact")}
              >
                🌟 Schedule Your Free Consultation
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-300 to-yellow-300 rounded-2xl blur opacity-30"></div>
            <img
              src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&q=80"
              alt="TEFL certified English teachers conducting Business English and TOEIC preparation classes in Iwaki, Japan"
              className="relative rounded-2xl shadow-2xl border-4 border-white/20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}