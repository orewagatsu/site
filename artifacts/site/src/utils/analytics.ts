// SEO Analytics and Tracking Setup
// Add this to your main.tsx or App.tsx

export const initializeAnalytics = () => {
  // Google Analytics 4 (GA4) - Replace with your actual GA4 ID
  const GA4_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 measurement ID
  
  // Google Analytics script
  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  document.head.appendChild(gaScript);

  // GA4 configuration
  const gaConfig = document.createElement('script');
  gaConfig.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA4_ID}', {
      page_title: document.title,
      page_location: window.location.href,
      custom_map: {
        'custom_parameter_1': 'english_school_iwaki',
        'custom_parameter_2': 'tefl_certified'
      }
    });
  `;
  document.head.appendChild(gaConfig);

  // Google Search Console verification - Replace with your actual verification code
  const gscMeta = document.createElement('meta');
  gscMeta.name = 'google-site-verification';
  gscMeta.content = 'your-google-search-console-verification-code'; // Replace with actual code
  document.head.appendChild(gscMeta);

  // Bing Webmaster Tools verification - Replace with your actual verification code
  const bingMeta = document.createElement('meta');
  bingMeta.name = 'msvalidate.01';
  bingMeta.content = 'your-bing-verification-code'; // Replace with actual code
  document.head.appendChild(bingMeta);
};

// Track custom events for English school interactions
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, {
      event_category: 'English School Interaction',
      event_label: 'Dream English Iwaki',
      ...parameters
    });
  }
};

// Specific tracking functions for English school actions
export const trackContactFormSubmission = () => {
  trackEvent('contact_form_submit', {
    event_category: 'Lead Generation',
    event_label: 'Contact Form - Dream English Iwaki'
  });
};

export const trackConsultationBooking = () => {
  trackEvent('consultation_booking', {
    event_category: 'Lead Generation',
    event_label: 'Free Consultation - TEFL Certified'
  });
};

export const trackBlogRead = (articleTitle: string) => {
  trackEvent('blog_article_read', {
    event_category: 'Content Engagement',
    event_label: articleTitle,
    custom_parameter_1: 'english_learning_content'
  });
};

export const trackServicePageView = (serviceName: string) => {
  trackEvent('service_page_view', {
    event_category: 'Service Interest',
    event_label: serviceName,
    custom_parameter_1: 'tefl_certified_services'
  });
};

// Local business schema markup for better local SEO
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Dream English School",
  "alternateName": "ドリーム英語スクール",
  "description": "TEFL-certified English school in Iwaki, Japan specializing in Business English, TOEIC preparation, and intercultural consulting for professionals.",
  "url": "https://your-domain.com",
  "telephone": "+81-80-2839-8777",
  "email": "iwakidream@outlook.com",
  "foundingDate": "2020",
  "founder": {
    "@type": "Person",
    "name": "Dream English Founder"
  },
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
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "21:00"
    }
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
    "name": "English Learning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Course",
          "name": "Business English Course",
          "description": "Professional English training for business communication and career advancement",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Dream English School"
          }
        },
        "price": "Contact for pricing",
        "priceCurrency": "JPY"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Course",
          "name": "TOEIC Preparation Course",
          "description": "Specialized TOEIC test preparation with TEFL-certified instructors",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Dream English School"
          }
        },
        "price": "Contact for pricing",
        "priceCurrency": "JPY"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Intercultural Consulting",
          "description": "Cross-cultural communication consulting for businesses and professionals",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Dream English School"
          }
        },
        "price": "Contact for pricing",
        "priceCurrency": "JPY"
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "47",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Tanaka"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Dream English helped me achieve a 700 TOEIC score and get promoted to regional manager. The TEFL-certified instructors are excellent!"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/dreamenglishiwaki",
    "https://www.instagram.com/dreamenglishiwaki",
    "https://www.linkedin.com/company/dream-english-iwaki"
  ]
};