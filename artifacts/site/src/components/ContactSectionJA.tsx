import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactSectionJA() {
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
      // Send email using Formspree
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
          _subject: "New Contact Form Submission - Dream English",
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

  return (
    <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-8 text-gray-800 leading-tight">
            🚀 いわきでの専門英語の旅を始めましょう
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            いわき市のTEFL認定講師とビジネス英語とTOEIC対策を始めましょう。専門的な開発とキャリアアップのための<span className="font-semibold text-orange-600">個別プログラム</span>を実践的な英語コミュニケーションスキルを通じて提供します。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Map Section */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-orange-100 hover:shadow-xl transition-shadow duration-300">
              <h4 className="font-bold text-2xl mb-6 text-gray-800">
                📍 いわきのTEFL認定英語スクールをご訪問ください
              </h4>
              <div className="w-full h-64 rounded-2xl overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d364.356521207025!2d140.9032834101426!3d37.048856429449856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6021111e848bffff%3A0x7863aac45558fb1d!2sDream%20English%20School!5e1!3m2!1sen!2sjp!4v1758499995968!5m2!1sen!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="いわき市のドリーム英語TEFL認定スクールの場所 - ビジネス英語とTOEIC対策"
                ></iframe>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-8 text-gray-800">
                💬 お問い合わせ
              </h3>
              <div className="space-y-6">
                <div className="flex items-center bg-white p-4 rounded-2xl shadow-md border border-orange-100">
                  <MapPin className="w-6 h-6 text-orange-500 mr-4" />
                  <span className="text-gray-700 text-lg">
                    〒970-8026 Fukushima, Iwaki, Sakumachi 3-chome−２−13
                  </span>
                </div>
                <div className="flex items-center bg-white p-4 rounded-2xl shadow-md border border-orange-100">
                  <Phone className="w-6 h-6 text-orange-500 mr-4" />
                  <span className="text-gray-700 text-lg">080-2839-8777</span>
                </div>
                <div className="flex items-center bg-white p-4 rounded-2xl shadow-md border border-orange-100">
                  <Mail className="w-6 h-6 text-orange-500 mr-4" />
                  <span className="text-gray-700 text-lg">iwakidream@outlook.com</span>
                </div>
                <div className="flex items-center bg-white p-4 rounded-2xl shadow-md border border-orange-100">
                  <Clock className="w-6 h-6 text-orange-500 mr-4" />
                  <span className="text-gray-700 text-lg">
                    月-土: 午前9:00 - 午後9:00
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-8 rounded-3xl shadow-lg border-2 border-orange-200">
              <h4 className="font-bold text-2xl mb-6 text-gray-800">
                ⭐ 私たちの特徴
              </h4>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-center"><span className="text-orange-500 mr-3">✓</span> TEFL認定ネイティブ英語講師</li>
                <li className="flex items-center"><span className="text-orange-500 mr-3">✓</span> ビジネス英語とTOEIC対策専門家</li>
                <li className="flex items-center"><span className="text-orange-500 mr-3">✓</span> グローバルビジネスのための異文化コンサルティング</li>
                <li className="flex items-center"><span className="text-orange-500 mr-3">✓</span> キャリアアップのための専門英語トレーニング</li>
                <li className="flex items-center"><span className="text-orange-500 mr-3">✓</span> いわき市の便利な立地</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-3xl shadow-2xl border-2 border-orange-100">
            <h3 className="text-3xl font-bold mb-8 text-gray-800">
              ✨ 変革を始めましょう
            </h3>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="text-green-600 text-2xl font-bold mb-4">
                  🎉 メッセージをありがとうございます！
                </div>
                <p className="text-gray-600 text-lg">
                  24時間以内にご相談の予約についてご連絡いたします。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-lg font-semibold text-gray-700 mb-3"
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
                    className="text-lg p-4 rounded-xl border-2 border-orange-200 focus:border-orange-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-semibold text-gray-700 mb-3"
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
                    className="text-lg p-4 rounded-xl border-2 border-orange-200 focus:border-orange-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-lg font-semibold text-gray-700 mb-3"
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
                    className="text-lg p-4 rounded-xl border-2 border-orange-200 focus:border-orange-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-semibold text-gray-700 mb-3"
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
                    className="text-lg p-4 rounded-xl border-2 border-orange-200 focus:border-orange-400"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xl py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
                >
                  {isLoading ? "送信中..." : "🚀 メッセージを送信"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}