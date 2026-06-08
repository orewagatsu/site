import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Helmet } from "react-helmet-async";

const faqs = [
  {
    question: "Do you offer a free trial lesson?",
    answer:
      "Yes! Your first trial lesson is completely free. Simply contact us by phone or email to book a time. During the trial, we'll assess your current level and suggest a learning plan tailored to your goals.",
  },
  {
    question: "I'm a complete beginner — is that OK?",
    answer:
      "Absolutely. We welcome all levels, from total beginners to advanced speakers. We'll assess where you are and create a personalized plan so you can learn at a comfortable pace without feeling overwhelmed.",
  },
  {
    question: "How much do lessons cost?",
    answer:
      "Pricing varies depending on lesson type, frequency, and whether you choose individual or group sessions. Please see our Pricing page for full details, or reach out for a free consultation and we'll find the right option for you.",
  },
  {
    question: "What does the Business English course cover?",
    answer:
      "Our Business English program covers real-world skills: professional emails, meetings, presentations, negotiations, and industry-specific vocabulary. Lessons are customized to match your job role and the situations you actually face at work.",
  },
  {
    question: "How much can I improve my TOEIC score?",
    answer:
      "Results vary, but many of our students improve by 100–200+ points within 3 to 6 months of regular lessons. We create a score-targeted study plan and track your progress at every stage.",
  },
  {
    question: "How many times per week should I take lessons?",
    answer:
      "Two to three times per week is ideal for steady progress, but even once a week produces real results over time. We'll work around your schedule — we offer flexible time slots to fit busy professionals.",
  },
  {
    question: "Are online lessons available?",
    answer:
      "Yes, we offer online lessons via Zoom. This is a great option if you live outside Iwaki, travel frequently for work, or simply prefer the convenience of learning from home.",
  },
  {
    question: "Which is better — group or private lessons?",
    answer:
      "Private lessons let you focus entirely on your own goals and progress faster, while group lessons give you practice talking with others in a realistic conversation setting. Many students do both. We'll recommend what suits you best during the free trial.",
  },
];

export default function FAQSection() {
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
              FAQ
            </span>
            <h2 className="text-3xl font-bold text-slate-800">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-slate-500 text-base">
              Have more questions? We're happy to help.
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
            Still have questions?{" "}
            <a
              href="/en/contact"
              className="text-orange-500 font-medium hover:underline"
            >
              Contact us
            </a>{" "}
            — we'd love to hear from you.
          </p>
        </div>
      </section>
    </>
  );
}
