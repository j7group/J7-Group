// components/seo/structured-data.tsx
import React from 'react';

export function StructuredData() {
  // Organization Schema - Main Company
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://j7group.com/#organization",
    "name": "J7 Group",
    "legalName": "J7 Group of Companies",
    "url": "https://j7group.com",
    "logo": "https://j7group.com/logo.png",
    "description": "J7 Group is a premier real estate and hospitality developer based in Islamabad, Pakistan. Leading developer of luxury hotels, branded residences, commercial spaces, and mixed-use developments.",
    "foundingDate": "2015",
    "founder": {
      "@type": "Person",
      "name": "J7 Group Founders"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Islamabad",
      "addressRegion": "Punjab",
      "addressCountry": "PK"
    },
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+92-51-XXXXXXX",
      "contactType": "Customer Service",
      "areaServed": "PK",
      "availableLanguage": ["English", "Urdu"]
    }],
    "sameAs": [
      "https://www.facebook.com/j7global",
      "https://pk.linkedin.com/company/j7group",
      "https://pk.linkedin.com/company/j7groupislamabad"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Real Estate & Hospitality Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Luxury Residential Development",
            "description": "Premium apartments, branded residences, and penthouses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "5-Star Hotel Development",
            "description": "International branded hotels including Radisson Blu, Rotana, and Royal Swiss"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Real Estate",
            "description": "Shopping malls, office spaces, and STZA IT zones"
          }
        }
      ]
    }
  };

  // Real Estate Agent Schema
  const realEstateAgentSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": "https://j7group.com/#realestate",
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
      "STZA IT Zones",
      "Mixed-use Developments"
    ]
  };

  // J7 Emporium Property Schema
  const j7EmporiumSchema = {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    "@id": "https://j7group.com/projects/j7-emporium#property",
    "name": "J7 Emporium",
    "description": "30-story mixed-use development featuring residential apartments, STZA IT zone, commercial shops, and hotel suites in Multi Garden, B-17 Islamabad",
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
    "numberOfBedrooms": "Studio to 3 Bedroom",
    "floorSize": {
      "@type": "QuantitativeValue",
      "value": "705",
      "minValue": "705",
      "maxValue": "2837",
      "unitCode": "FTK"
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Shopping Mall",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "STZA IT Zone",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Swimming Pool",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Gym",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "24/7 Security",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Parking",
        "value": true
      }
    ],
    "containedInPlace": {
      "@type": "City",
      "name": "Islamabad"
    },
    "developer": {
      "@id": "https://j7group.com/#organization"
    }
  };

  // Radisson Blu Hotel Schema
  const radissonBluSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": "https://j7group.com/projects/radisson-blu#hotel",
    "name": "Radisson Blu Hotel & Residences Islamabad",
    "description": "15-story 5-star international hotel and residences by Radisson Hotel Group and J7 Group at Mumtaz City, Srinagar Highway",
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
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.6168",
      "longitude": "73.0715"
    },
    "brand": {
      "@type": "Brand",
      "name": "Radisson Blu"
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Restaurant",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Business Center",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Spa",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Indoor Pool",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Conference Facilities",
        "value": true
      }
    ],
    "priceRange": "PKR 45,000 - PKR 50,000 per sq.ft.",
    "developer": {
      "@id": "https://j7group.com/#organization"
    }
  };

  // Signature Rotana Hotel Schema
  const rotanaSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": "https://j7group.com/projects/signature-rotana#hotel",
    "name": "Signature Rotana Hotel & Residences Islamabad",
    "description": "26-story international 5-star hotel and branded residences by Rotana Hospitality Group and J7 Group at Top City-1, Srinagar Highway",
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
      {
        "@type": "LocationFeatureSpecification",
        "name": "Multiple Restaurants",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Spa & Wellness Center",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Kids Club",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Airport Shuttle",
        "value": true
      }
    ],
    "priceRange": "PKR 35,000 per sq.ft.",
    "developer": {
      "@id": "https://j7group.com/#organization"
    }
  };

  // J7 Icon (Royal Swiss) Schema
  const j7IconSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": "https://j7group.com/projects/j7-icon#hotel",
    "name": "J7 Icon - Royal Swiss Hotel Islamabad",
    "description": "14-story 5-star luxury hotel with Royal Swiss brand standards, shopping mall, and commercial spaces at Mumtaz City, Srinagar Highway",
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
      {
        "@type": "LocationFeatureSpecification",
        "name": "Shopping Mall",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Food Court",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Valet Parking",
        "value": true
      }
    ],
    "priceRange": "PKR 40,000 - PKR 48,000 per sq.ft.",
    "developer": {
      "@id": "https://j7group.com/#organization"
    }
  };

  // ItemList Schema for Projects
  const projectsListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "J7 Group Projects",
    "description": "Portfolio of luxury real estate and hospitality developments by J7 Group",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@id": "https://j7group.com/developments/j7-emporium",
          "name": "J7 Emporium",
          "description": "30-story mixed-use development in B-17 Islamabad"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@id": "https://j7group.com/projects/radisson-blu",
          "name": "Radisson Blu Hotel & Residences",
          "description": "5-star international hotel at Mumtaz City"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@id": "https://j7group.com/projects/signature-rotana",
          "name": "Signature Rotana Hotel & Residences",
          "description": "26-story Rotana branded hotel at Top City-1"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@id": "https://j7group.com/projects/j7-icon",
          "name": "J7 Icon - Royal Swiss Hotel",
          "description": "14-story luxury hotel with shopping mall"
        }
      }
    ]
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://j7group.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://j7group.com/projects"
      }
    ]
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://j7group.com/#website",
    "url": "https://j7group.com",
    "name": "J7 Group",
    "description": "Premier real estate and hospitality developer in Pakistan",
    "publisher": {
      "@id": "https://j7group.com/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://j7group.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://j7group.com/#localbusiness",
    "name": "J7 Group",
    "image": "https://j7group.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Islamabad",
      "addressRegion": "Punjab",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.6844",
      "longitude": "73.0479"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "telephone": "+92-51-XXXXXXX",
    "priceRange": "PKR",
    "servesCuisine": "Real Estate Services"
  };

  return (
    <>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      {/* Real Estate Agent Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateAgentSchema) }}
      />
      
      {/* Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      
      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      {/* J7 Emporium Property Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(j7EmporiumSchema) }}
      />
      
      {/* Radisson Blu Hotel Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(radissonBluSchema) }}
      />
      
      {/* Signature Rotana Hotel Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rotanaSchema) }}
      />
      
      {/* J7 Icon Hotel Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(j7IconSchema) }}
      />
      
      {/* Projects List Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsListSchema) }}
      />
      
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}