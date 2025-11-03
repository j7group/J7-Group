// components/seo/base-structured-data.tsx

// Only include Organization and Website schemas in root layout
export function BaseStructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://j7group.com.pk/#organization",
    "name": "J7 Group",
    "legalName": "J7 Group of Companies",
    "url": "https://j7group.com.pk",
    "logo": "https://j7group.com.pk/icons/j7Logo.png",
    "description": "J7 Group is a premier real estate and hospitality developer based in Islamabad, Pakistan. Leading developer of luxury hotels, branded residences, commercial spaces, and mixed-use developments.",
    "foundingDate": "2018",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Islamabad",
      "addressRegion": "Punjab",
      "addressCountry": "PK"
    },
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+92 337 7777700",
      "contactType": "Customer Service",
      "areaServed": "PK",
      "availableLanguage": ["English", "Urdu"]
    }],
    "sameAs": [
      "https://www.facebook.com/j7group",
      "https://pk.linkedin.com/company/j7group"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://j7group.com.pk/#website",
    "url": "https://j7group.com.pk",
    "name": "J7 Group",
    "description": "Premier real estate and hospitality developer in Pakistan",
    "publisher": {
      "@id": "https://j7group.com.pk/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://j7group.com.pk/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

// ============================================
// 2. HOMEPAGE STRUCTURED DATA
// app/page.tsx (add this component)
// ============================================
export function HomePageStructuredData() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://j7group.com.pk"
      }
    ]
  };

  const realEstateAgentSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": "https://j7group.com.pk/#realestate",
    "name": "J7 Group",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Islamabad",
      "addressRegion": "Punjab",
      "addressCountry": "Pakistan"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Islamabad"
      },
      {
        "@type": "City",
        "name": "Rawalpindi"
      }
    ],
    "priceRange": "PKR 3,000,000 - PKR 100,000,000+",
    "knowsAbout": [
      "Luxury Apartments",
      "Hotel Suites",
      "Commercial Properties",
      "Branded Residences",
      "STZA IT Zones"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateAgentSchema) }}
      />
    </>
  );
}

// ============================================
// 3. J7 EMPORIUM PAGE STRUCTURED DATA
// app/developments/emporium/page.tsx
// ============================================
export function J7EmporiumStructuredData() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://j7group.com.pk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Developments",
        "item": "https://j7group.com.pk/developments"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "J7 Emporium",
        "item": "https://j7group.com.pk/developments/emporium"
      }
    ]
  };

  const propertySchema = {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    "@id": "https://j7group.com.pk/developments/emporium#property",
    "name": "J7 Emporium",
    "description": "30-story mixed-use development featuring residential apartments, STZA IT zone, commercial shops, and hotel suites in Multi Garden, B-17 Islamabad",
    "url": "https://j7group.com.pk/developments/emporium",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Multi Garden, Sector B-17",
      "addressLocality": "Islamabad",
      "addressRegion": "Punjab",
      "postalCode": "44000",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.6844",
      "longitude": "73.0479"
    },
    "numberOfRooms": "500+",
    "floorSize": {
      "@type": "QuantitativeValue",
      "value": "705",
      "minValue": "705",
      "maxValue": "2837",
      "unitCode": "FTK"
    },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Shopping Mall", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "STZA IT Zone", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Swimming Pool", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Gym", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "24/7 Security", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "24/7 Electricity", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Imtiaz Cash and Carry", "value": true },
    ],
    "developer": {
      "@id": "https://j7group.com.pk/#organization"
    }
  };

  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": "18500",
      "priceCurrency": "PKR",
      "unitCode": "FTK",
      "unitText": "per square foot"
    },
    "seller": {
      "@id": "https://j7group.com.pk/#organization"
    },
    "itemOffered": {
      "@id": "https://j7group.com.pk/developments/emporium#property"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(propertySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />
    </>
  );
}

// ============================================
// 4. RADISSON BLU PAGE STRUCTURED DATA
// app/developments/radisson/page.tsx
// ============================================
export function RadissonBluStructuredData() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://j7group.com.pk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Developments",
        "item": "https://j7group.com.pk/developments"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Radisson Blu",
        "item": "https://j7group.com.pk/developments/radisson"
      }
    ]
  };

  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": "https://j7group.com.pk/developments/radisson#hotel",
    "name": "Radisson Blu Hotel & Residences Islamabad",
    "description": "15-story 5-star international hotel and residences by Radisson Hotel Group and J7 Group",
    "url": "https://j7group.com.pk/developments/radisson",
    "starRating": {
      "@type": "Rating",
      "ratingValue": "5"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mumtaz City, Srinagar Highway",
      "addressLocality": "Islamabad",
      "addressRegion": "Punjab",
      "addressCountry": "PK"
    },
    "brand": {
      "@type": "Brand",
      "name": "Radisson Blu"
    },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Restaurant", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Spa", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Indoor Pool", "value": true }
    ],
    "priceRange": "PKR 45,000 - PKR 50,000",
    "developer": {
      "@id": "https://j7group.com.pk/#organization"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
      />
    </>
  );
}

// 5. J7 ICON PAGE STRUCTURED DATA
// app/developments/icon/page.tsx
// ============================================
export function J7IconStructuredData() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://j7group.com.pk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Developments",
        "item": "https://j7group.com.pk/developments"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "J7 Icon",
        "item": "https://j7group.com.pk/developments/icon"
      }
    ]
  };

  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": "https://j7group.com.pk/developments/icon#hotel",
    "name": "J7 Icon - Royal Swiss Hotel Islamabad",
    "description": "14-story 5-star luxury hotel with Royal Swiss brand standards",
    "url": "https://j7group.com.pk/developments/icon",
    "starRating": {
      "@type": "Rating",
      "ratingValue": "5"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mumtaz City, Srinagar Highway",
      "addressLocality": "Islamabad",
      "addressRegion": "Punjab",
      "addressCountry": "PK"
    },
    "brand": {
      "@type": "Brand",
      "name": "Royal Swiss"
    },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Shopping Mall", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Food Court", "value": true }
    ],
    "priceRange": "PKR 40,000 - PKR 48,000",
    "developer": {
      "@id": "https://j7group.com.pk/#organization"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
      />
    </>
  );
}

// ============================================
// 6. ROTANA PAGE STRUCTURED DATA
// app/developments/rotana/page.tsx
export function RotanaStructuredData() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://j7group.com.pk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Developments",
        "item": "https://j7group.com.pk/developments"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Signature Rotana",
        "item": "https://j7group.com.pk/developments/rotana"
      }
    ]
  };

  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": "https://j7group.com.pk/developments/rotana#hotel",
    "name": "Signature Rotana Hotel & Residences Islamabad",
    "description": "26-story international 5-star hotel and branded residences",
    "url": "https://j7group.com.pk/developments/rotana",
    "starRating": {
      "@type": "Rating",
      "ratingValue": "5"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Top City-1, Srinagar Highway",
      "addressLocality": "Islamabad",
      "addressRegion": "Punjab",
      "addressCountry": "PK"
    },
    "brand": {
      "@type": "Brand",
      "name": "Rotana"
    },
    "numberOfRooms": "300+",
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Multiple Restaurants", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Spa & Wellness Center", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Kids Club", "value": true }
    ],
    "priceRange": "PKR 35,000",
    "developer": {
      "@id": "https://j7group.com.pk/#organization"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
      />
    </>
  );
}

// ============================================
// 7. ABOUT PAGE STRUCTURED DATA
// app/about/page.tsx
// ============================================
export function AboutPageStructuredData() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://j7group.com.pk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://j7group.com.pk/about"
      }
    ]
  };

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://j7group.com.pk/about#webpage",
    "url": "https://j7group.com.pk/about",
    "name": "About J7 Group",
    "description": "Learn about J7 Group, Pakistan's leading real estate and hospitality developer",
    "mainEntity": {
      "@id": "https://j7group.com.pk/#organization"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
    </>
  );
}

// ============================================
// 8. CONTACT PAGE STRUCTURED DATA
// app/contact/page.tsx
// ============================================
export function ContactPageStructuredData() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://j7group.com.pk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://j7group.com.pk/contact"
      }
    ]
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://j7group.com.pk/contact#webpage",
    "url": "https://j7group.com.pk/contact",
    "name": "Contact J7 Group",
    "description": "Get in touch with J7 Group for inquiries about our properties and developments"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
    </>
  );
}

export const VillasStructuredData = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://j7group.com.pk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Villas",
        "item": "https://j7group.com.pk/villas"
      }
    ]
  }
  const villasSchema = {
    "@context": "https://schema.org",
    "@type": "Villas",
    "@id": "https://j7group.com.pk/villas#webpage",
    "url": "https://j7group.com.pk/villas",
    "name": "Villas",
    "description": "Discover luxurious villas and apartments in Islamabad, Pakistan",
    "mainEntity": {
      "@id": "https://j7group.com.pk/#organization"
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(villasSchema) }}
      />
    </>
  );
};