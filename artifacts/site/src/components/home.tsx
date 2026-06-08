import SEO from "./SEO";
import HeroSection from "./HeroSection";
import ContentSection from "./ContentSection";
import TestimonialSection from "./TestimonialSection";
import ContactSection from "./ContactSection";

export default function Home() {
  return (
    <>
      <SEO
        title="Dream English - Professional TEFL Certified English School in Iwaki, Japan"
        description="Transform your career with professional English training in Iwaki, Japan. TEFL-certified instructors specializing in Business English, TOEIC preparation, and intercultural consulting for Japanese professionals."
        keywords="English school Iwaki Japan, TEFL certified teachers Iwaki, Business English training Iwaki, TOEIC preparation Fukushima, professional English classes Iwaki, intercultural consulting Japan, English conversation Iwaki, ESL school Iwaki, English teacher Iwaki, business communication training"
        lang="en"
        canonical="https://www.dreamenglishiwaki.com/en"
        isLocalBusiness={true}
        hreflangAlternates={[
          { hreflang: "ja", href: "https://www.dreamenglishiwaki.com/" },
          { hreflang: "en", href: "https://www.dreamenglishiwaki.com/en" },
          { hreflang: "x-default", href: "https://www.dreamenglishiwaki.com/" },
        ]}
      />
      <div className="min-h-screen bg-white">
        <HeroSection />
        <ContentSection />
        <TestimonialSection />
        <ContactSection />
      </div>
    </>
  );
}