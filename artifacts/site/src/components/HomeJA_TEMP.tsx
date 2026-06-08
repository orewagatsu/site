import SEO from "./SEO";
import HeroSectionJA from "./HeroSectionJA";
import ContentSectionJA from "./ContentSectionJA";
import TestimonialSectionJA from "./TestimonialSectionJA";
import ContactSectionJA from "./ContactSectionJA";

export default function HomeJA() {
  return (
    <>
      <SEO
        title="いわき 英語・英会話スクール | ドリームイングリッシュ | ビジネス英語・TOEIC対策"
        description="いわき市の英語・英会話スクール。ネイティブTEFL認定講師による実践的なビジネス英語、TOEIC対策、日常英会話レッスン。いわき駅近く、無料体験レッスン受付中。"
        keywords="いわき 英語, いわき 英会話, いわき 英語スクール, いわき 英会話教室, 英語 いわき, 英会話 いわき, いわき市 英語, いわき市 英会話, いわき ビジネス英語, いわき TOEIC, 福島 英語, 福島 英会話, いわき 英語教室, いわき 英語学校, 英会話スクール いわき, TEFL認定講師 いわき, 英語個人レッスン いわき, マンツーマン英会話 いわき"
        lang="ja"
        canonical="https://www.dreamenglishiwaki.com/"
        isLocalBusiness={true}
      />

      <div className="min-h-screen bg-white">
        <HeroSectionJA />
        <ContentSectionJA />
        <TestimonialSectionJA />
        <ContactSectionJA />
      </div>
    </>
  );
}
