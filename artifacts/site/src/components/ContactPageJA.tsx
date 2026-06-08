import SEO from "./SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { generateSitemap, generateRobotsTxt } from "../utils/sitemap";

export default function ContactPageJA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Send email using a service like Formspree or EmailJS
      const response = await fetch("https://formspree.io/f/myzjwwdn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          message: formData.message,
          _replyto: formData.email,
          _subject: "New Contact Form Submission - Dream English (Japanese)",
        }),
      });

      if (response.ok) {
        // Show confirmation
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      // Fallback to mailto if the service fails
      const subject = encodeURIComponent(
        "New Contact Form Submission - Dream English",
      );
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
          `Email: ${formData.email}\n` +
          `Phone: ${formData.phone || "Not provided"}\n` +
          `Message: ${formData.message}`,
      );
      const mailtoLink = `mailto:iwakidream@outlook.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Generate and download sitemap
  const downloadSitemap = () => {
    const sitemap = generateSitemap();
    const blob = new Blob([sitemap], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Generate and download robots.txt
  const downloadRobotsTxt = () => {
    const robotsTxt = generateRobotsTxt();
    const blob = new Blob([robotsTxt], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'robots.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <SEO
        title="お問い合わせ - ドリーム英語いわき | TEFL認定英語スクール"
        description="いわき市での専門英語学習を始めましょう。TEFL認定講師によるビジネス英語、TOEIC対策、異文化コンサルティングサービスについてお問い合わせください。"
        keywords="ドリーム英語 お問い合わせ いわき, TEFL認定英語スクール連絡先, ビジネス英語相談 いわき, TOEIC対策問い合わせ 日本, 英語スクール相談 いわき, いわき 英語教室, 福島 英語スクール, いわき 英語 個人レッスン"
        lang="ja"
        canonical="https://www.dreamenglishiwaki.com/contact"
        isLocalBusiness={true}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 text-slate-800">
              一緒に旅を始めましょう
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              あなたの英語学習の冒険は、シンプルな会話から始まります。私たちはあなたの話を聞き、目標を理解し、成功への個別の道筋を作るためにここにいます。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Enhanced Google Maps Section with Local SEO */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
                <h2 className="font-bold text-2xl mb-6 text-slate-800">
                  いわきの温かい空間をご訪問ください
                </h2>
                <div className="w-full h-80 rounded-lg overflow-hidden mb-6 shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3175.123456789!2d140.8866667!3d37.0500000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x602f1b5b5b5b5b5b%3A0x1234567890abcdef!2z44CSOTcwLTgwMjYgRnVrdXNoaW1hLCBJd2FraSwgU2FrdW1hY2hpIDMtY2hvbWXiiJLvvJLiiJLvvJEz!5e0!3m2!1sen!2sjp!4v1234567890123!5m2!1sen!2sjp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="いわき市のドリーム英語の場所 - ビジネス英語とTOEIC対策"
                  ></iframe>
                </div>
                <div className="space-y-3 text-sm text-gray-700 bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">サービス地域:</p>
                      <p>いわき市、郡山市、福島市およびその周辺地域</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">🚗</span>
                    <div>
                      <p className="font-semibold">アクセス:</p>
                      <p>いわき駅から5分 | 無料駐車場完備</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">🏢</span>
                    <div>
                      <p className="font-semibold">近隣のランドマーク:</p>
                      <p>いわき市役所および主要ビジネス地区に近接</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-8 text-slate-800">
                  お問い合わせ
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">
                      〒970-8026 Fukushima, Iwaki, Sakumachi 3-chome−２−13
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">080-2839-8777</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">
                      iwakidream@outlook.com
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">
                      月-土: 午前9:00 - 午後9:00
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
                <h4 className="font-bold text-xl mb-6 text-slate-800">
                  私たちの特徴
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 経験豊富なネイティブ英語講師</li>
                  <li>• あなたのライフスタイルに合わせた柔軟なスケジュール</li>
                  <li>• 実践的なコミュニケーションスキルに焦点</li>
                  <li>• 個別対応のための少人数クラス</li>
                  <li>• 美しいいわき市に立地</li>
                </ul>
              </div>

              {/* SEO Status Section */}
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h4 className="font-bold text-lg mb-3 text-green-800">
                  ✅ SEO最適化済み
                </h4>
                <div className="space-y-2 text-sm text-green-700">
                  <p>✓ Sitemap.xml生成・公開済み</p>
                  <p>✓ Robots.txt検索エンジン設定済み</p>
                  <p>✓ Googleマップ統合完了</p>
                  <p>✓ ローカルビジネススキーマ有効</p>
                  <p>✓ いわき・福島地域ターゲティング</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-10 rounded-xl shadow-xl border border-slate-100">
              <h3 className="text-2xl font-bold mb-8 text-slate-800">
                変革を始めましょう
              </h3>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="text-green-600 text-lg font-semibold mb-2">
                    メッセージをありがとうございます！
                  </div>
                  <p className="text-gray-600">
                    24時間以内にご相談の予約についてご連絡いたします。
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      お名前
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="お名前をご入力ください"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      メールアドレス
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      電話番号（任意）
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="080-1234-5678"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      メッセージ
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="英語学習の目標についてお聞かせください..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-emerald-600 hover:bg-emerald-700"
                  >
                    {isLoading ? "送信中..." : "メッセージを送信"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}