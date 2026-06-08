import SEO from "./SEO";
import HeroSectionJA from "./HeroSectionJA";
import ContentSectionJA from "./ContentSectionJA";
import TestimonialSectionJA from "./TestimonialSectionJA";
import FAQSectionJA from "./FAQSectionJA";
import ContactSectionJA from "./ContactSectionJA";

export default function HomeJA() {
  return (
    <>
      <SEO
        title="いわき 英語・英会話スクール | ドリームイングリッシュ | ビジネス英語・TOEIC対策"
        description="いわき市の英語・英会話スクール。ネイティブTEFL認定講師による実践的なビジネス英語、TOEIC対策、日常英会話レッスン。いわき駅近く、無料体験レッスン受付中。"
        keywords="いわき 英語スクール, TEFL認定講師 いわき, ビジネス英語 い���き, TOEIC対策 福島, 英語教室 いわき, 異文化コンサルティング 日本, 英会話 いわき, ESL いわき, 英語講師 いわき, ビジネスコミュニケーション研修, いわき 英語 個人レッスン"
        lang="ja"
        canonical="https://www.dreamenglishiwaki.com/"
        isLocalBusiness={true}
        hreflangAlternates={[
          { hreflang: "ja", href: "https://www.dreamenglishiwaki.com/" },
          { hreflang: "en", href: "https://www.dreamenglishiwaki.com/en" },
          { hreflang: "x-default", href: "https://www.dreamenglishiwaki.com/" },
        ]}
      />

      <div className="min-h-screen bg-white">
        <HeroSectionJA />
        <ContentSectionJA />
        <TestimonialSectionJA />
        <FAQSectionJA />
        <ContactSectionJA />
      </div>
    </>
  );
}