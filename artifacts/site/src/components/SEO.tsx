import { Helmet, HelmetProvider } from "react-helmet-async";
import { getLocalBusinessSchema } from "../utils/sitemap";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterCard?: string;
  canonical?: string;
  lang?: string;
  structuredData?: object;
  isLocalBusiness?: boolean;
}

const defaultSEO = {
  title: "いわき 英語・英会話スクール | ドリームイングリッシュ | ネイティブ講師・無料体験",
  description: "いわき市の英語・英会話スクール。ネイティブTEFL認定講師による実践的なビジネス英語、TOEIC対策、日常英会話レッスン。いわき駅周辺、マンツーマン・グループレッスン対応。無料体験レッスン受付中。",
  keywords: "いわき 英語, いわき 英会話, いわき 英語スクール, いわき 英会話教室, 英語 いわき, 英会話 いわき, いわき市 英語, いわき市 英会話, いわき ビジネス英語, いわき TOEIC, 福島 英語, 福島 英会話, いわき 英語教室, 英会話スクール いわき, ネイティブ講師 いわき, マンツーマン英会話 いわき, 英語個人レッスン いわき, いわき駅 英語, TEFL認定講師, 英語 福島県, 無料体験レッスン いわき",
  author: "Dream English School",
  ogType: "website",
  ogImage: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=1200&q=80",
  twitterCard: "summary_large_image",
  lang: "ja",
};

export default function SEO({
  title,
  description,
  keywords,
  author = defaultSEO.author,
  ogTitle,
  ogDescription,
  ogType = defaultSEO.ogType,
  ogImage = defaultSEO.ogImage,
  twitterTitle,
  twitterDescription,
  twitterCard = defaultSEO.twitterCard,
  canonical,
  lang = defaultSEO.lang,
  structuredData,
  isLocalBusiness = false,
}: SEOProps) {
  const finalTitle = title || defaultSEO.title;
  const finalDescription = description || defaultSEO.description;
  const finalKeywords = keywords || defaultSEO.keywords;
  const finalOgTitle = ogTitle || finalTitle;
  const finalOgDescription = ogDescription || finalDescription;
  const finalTwitterTitle = twitterTitle || finalTitle;
  const finalTwitterDescription = twitterDescription || finalDescription;

  // Check if we're in a storyboard context (iframe)
  const isInStoryboard = () => {
    try {
      return window.self !== window.top || window.location.pathname.includes('/tempobook');
    } catch {
      return true; // Assume storyboard if we can't check
    }
  };

  // Don't render SEO in storyboards to avoid helmet errors
  if (isInStoryboard()) {
    return null;
  }

  // Use enhanced local business schema or provided structured data
  const finalStructuredData = structuredData || (isLocalBusiness ? getLocalBusinessSchema() : getLocalBusinessSchema());

  return (
    <Helmet>
      <html lang={lang} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />

      {/* Local SEO specific tags */}
      <meta name="geo.region" content="JP-07" />
      <meta name="geo.placename" content="Iwaki, Fukushima" />
      <meta name="geo.position" content="37.048856;140.903283" />
      <meta name="ICBM" content="37.048856, 140.903283" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Dream English School" />
      <meta property="og:locale" content={lang === 'ja' ? 'ja_JP' : 'en_US'} />
      <meta property="og:street-address" content="Sakumachi 3-chome−２−13" />
      <meta property="og:locality" content="Iwaki" />
      <meta property="og:region" content="Fukushima" />
      <meta property="og:postal-code" content="970-8026" />
      <meta property="og:country-name" content="Japan" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={finalTwitterTitle} />
      <meta name="twitter:description" content={finalTwitterDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>

      {/* Additional SEO tags */}
      <meta name="theme-color" content="#fb923c" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      
      {/* Local business specific meta tags */}
      <meta name="business:contact_data:street_address" content="Sakumachi 3-chome−２−13" />
      <meta name="business:contact_data:locality" content="Iwaki" />
      <meta name="business:contact_data:region" content="Fukushima" />
      <meta name="business:contact_data:postal_code" content="970-8026" />
      <meta name="business:contact_data:country_name" content="Japan" />
      <meta name="business:contact_data:phone_number" content="+81-80-2839-8777" />
      <meta name="business:contact_data:email" content="iwakidream@outlook.com" />
    </Helmet>
  );
}