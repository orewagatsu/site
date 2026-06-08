// Sitemap generator for Dream English School
export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const generateSitemap = (baseUrl: string = 'https://a2c60b6d-3e58-49b4-a478-cf1ba3d10655.canvases.tempo.build'): string => {
  const currentDate = new Date().toISOString().split('T')[0];
  
  const urls: SitemapUrl[] = [
    // English pages
    { loc: `${baseUrl}/en`, lastmod: currentDate, changefreq: 'weekly', priority: 1.0 },
    { loc: `${baseUrl}/en/business-english`, lastmod: currentDate, changefreq: 'monthly', priority: 0.9 },
    { loc: `${baseUrl}/en/regular-communications`, lastmod: currentDate, changefreq: 'monthly', priority: 0.9 },
    { loc: `${baseUrl}/en/intercultural-consulting`, lastmod: currentDate, changefreq: 'monthly', priority: 0.9 },
    { loc: `${baseUrl}/en/pricing`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${baseUrl}/en/contact`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${baseUrl}/en/blog`, lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
    
    // Japanese pages (default)
    { loc: `${baseUrl}/`, lastmod: currentDate, changefreq: 'weekly', priority: 1.0 },
    { loc: `${baseUrl}/business-english`, lastmod: currentDate, changefreq: 'monthly', priority: 0.9 },
    { loc: `${baseUrl}/regular-communications`, lastmod: currentDate, changefreq: 'monthly', priority: 0.9 },
    { loc: `${baseUrl}/intercultural-consulting`, lastmod: currentDate, changefreq: 'monthly', priority: 0.9 },
    { loc: `${baseUrl}/pricing`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${baseUrl}/contact`, lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { loc: `${baseUrl}/blog`, lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
  ];

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    ${url.priority ? `<priority>${url.priority}</priority>` : ''}
  </url>`).join('\n')}
</urlset>`;

  return xmlContent;
};

// Generate robots.txt content
export const generateRobotsTxt = (baseUrl: string = 'https://a2c60b6d-3e58-49b4-a478-cf1ba3d10655.canvases.tempo.build'): string => {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Disallow tempo development files
Disallow: /tempobook/
Disallow: /_next/
Disallow: /api/

# Allow important pages for SEO
Allow: /en/
Allow: /business-english
Allow: /regular-communications
Allow: /intercultural-consulting
Allow: /pricing
Allow: /contact
Allow: /blog`;
};

// Local business structured data for Iwaki location
export const getLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "name": "Dream English School",
    "alternateName": "ドリーム英語スクール",
    "description": "TEFL-certified English school in Iwaki, Japan specializing in Business English, TOEIC preparation, and intercultural consulting for professionals.",
    "url": "https://a2c60b6d-3e58-49b4-a478-cf1ba3d10655.canvases.tempo.build",
    "telephone": "+81-80-2839-8777",
    "email": "iwakidream@outlook.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sakumachi 3-chome−２−13",
      "addressLocality": "Iwaki",
      "addressRegion": "Fukushima Prefecture",
      "postalCode": "970-8026",
      "addressCountry": "JP"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.048856,
      "longitude": 140.903283
    },
    "openingHours": [
      "Mo 09:00-21:00",
      "Tu 09:00-21:00", 
      "We 09:00-21:00",
      "Th 09:00-21:00",
      "Fr 09:00-21:00",
      "Sa 09:00-21:00"
    ],
    "priceRange": "¥¥",
    "currenciesAccepted": "JPY",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "areaServed": [
      {
        "@type": "City",
        "name": "Iwaki",
        "containedInPlace": {
          "@type": "State",
          "name": "Fukushima Prefecture"
        }
      },
      {
        "@type": "City", 
        "name": "Koriyama"
      },
      {
        "@type": "City",
        "name": "Fukushima City"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 37.048856,
        "longitude": 140.903283
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "English Learning Services in Iwaki",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Business English Training",
            "description": "Professional English communication skills for business professionals in Iwaki and Fukushima",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Dream English School"
            }
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Course",
            "name": "TOEIC Test Preparation",
            "description": "Comprehensive TOEIC preparation courses with certified instructors in Iwaki",
            "provider": {
              "@type": "EducationalOrganization", 
              "name": "Dream English School"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Intercultural Business Consulting",
            "description": "Cross-cultural communication consulting for Japanese businesses expanding globally",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Dream English School"
            }
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/dreamenglishshool",
      "https://www.instagram.com/dreamenglishshool"
    ],
    "keywords": "English school Iwaki, TEFL certified teachers Iwaki, TOEIC preparation Fukushima, Business English Iwaki, English conversation classes Iwaki, intercultural consulting Japan, professional English training Iwaki, ESL Iwaki Japan, いわき 英語, いわき TOEIC, 福島 英語スクール"
  };
};