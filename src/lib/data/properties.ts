// data/propertyData.ts
// export const propertyImages = [
//   {
//     name: "J7 Emporium",
//     images: [
//       "output_bc9oqh",
//       "Cam_07_final_daylight_1_bymlvx",
//       "Cam_06_final_day_light_yilqob",
//       "Cam_13_final_day_light_qmm0vf",
//       "Cam_04_final_night_light_fs8sja",
//       "Cam_12_final_day_light_mvu5m6",
//       "Cam_09_final_daylight_1_inafbw",
//       "Cam_14_final_day_light_edrri3",
//       "Cam_11_final_day_light_n4hp8l",
//     ],
//   },
//   {
//     name: "Radisson",
//     images: [
//       "radisson_lobby_main",
//       "radisson_exterior_day",
//       "radisson_suite_premium",
//       "radisson_restaurant_fine",
//       "radisson_conference_hall",
//       "radisson_pool_area",
//       "radisson_spa_wellness",
//       "radisson_fitness_center",
//       "radisson_business_lounge",
//     ],
//   },
//   {
//     name: "J7 Mall",
//     images: [
//       "j7mall_exterior_main",
//       "j7mall_atrium_central",
//       "j7mall_retail_space",
//       "j7mall_food_court",
//       "j7mall_cinema_complex",
//       "j7mall_parking_level",
//       "j7mall_entertainment_zone",
//       "j7mall_luxury_stores",
//       "j7mall_night_view",
//     ],
//   },
//   {
//     name: "Rotana",
//     images: [
//       "rotana_exterior_luxury",
//       "rotana_lobby_grand",
//       "rotana_suite_presidential",
//       "rotana_restaurant_rooftop",
//       "rotana_ballroom_elegant",
//       "rotana_pool_infinity",
//       "rotana_spa_royal",
//       "rotana_gym_premium",
//       "rotana_lounge_executive",
//     ],
//   },
// ];

interface Amenity {
  id: string;
  name: string;
  imagePublicId: string;
  title: string;
  description: string;
}

interface PropertyAmenities {
  propertyName: string;
  title?: string;
  description?: string;
  amenities: Amenity[];
}

// J7 Emporium Amenities
export const j7EmporiumAmenities: PropertyAmenities = {
  propertyName: "J7 Emporium",
  title: "Premium Amenities",
  description:
    "At the heart of J7 Emporium properties lies a refined blend of amenities for the most discerning tastes. With opulent facilities, modern conveniences, and premium services, every detail is meticulously crafted to create a true sanctuary of luxury and comfort.",
  amenities: [
    {
      id: "salon",
      name: "Men Salon",
      imagePublicId: "/Amenities J7 Emp/img4150.jpg",
      title: "Grand Lobby Experience",
      description:
        "Welcome to an impressive double-height lobby featuring premium marble finishes, contemporary seating areas, and sophisticated lighting.",
    },
    {
      id: "fitness",
      name: "Fitness Centre",
      imagePublicId: "/Rotana/Amenities/AdobeStock_1340126777_1_with_bgc (1).webp",
      title: "State-of-the-Art Fitness Center",
      description:
        "A fully equipped fitness center with the latest cardio and strength training equipment, personal training areas, and panoramic views.",
    },
    {
      id: "rooftop",
      name: "Rooftop Restaurant",
      imagePublicId: "/Amenities J7 Emp/vlcsnap-2025-09-18-11h46m09s155.webp",
      title: "Rooftop Dining Experience",
      description:
        "Enjoy exquisite dining with panoramic city views and premium culinary offerings.",
    },
    {
      id: "pool",
      name: "Swimming Pool",
      imagePublicId: "/Amenities J7 Emp/img4622.jpg",
      title: "Indoor Pool Paradise",
      description:
        "Temperature-controlled indoor swimming pool with luxurious amenities and relaxation areas.",
    },
    {
      id: "spa",
      name: "SPA",
      imagePublicId: "/Amenities J7 Emp/img2969.jpg",
      title: "Luxury Spa & Wellness Center",
      description:
        "Indulge in rejuvenating treatments at our world-class spa facility with massage therapy rooms and relaxation areas.",
    },
    {
      id: "lounge",
      name: "Executive Lounge",
      imagePublicId: "Amenities J7 Emp/img611.jpg",
      title: "Premium Executive Lounge",
      description:
        "Sophisticated lounge space designed for business meetings and exclusive gatherings.",
    },
    {
      id: "cinema",
      name: "Cinema Hall",
      imagePublicId: "/Amenities J7 Emp/vlcsnap-2025-09-18-12h00m52s017.webp",
      title: "Professional Business Center",
      description:
        "A sophisticated workspace with high-speed internet, private meeting rooms, and premium office amenities.",
    },
    {
      id: "gym",
      name: "Gymnasium",
      imagePublicId: "/Amenities J7 Emp/img1437.jpg",
      title: "Full-Service Gymnasium",
      description:
        "Complete gymnasium facilities with professional-grade equipment and personal training services.",
    },
    {
      id: "sitting",
      name: "Sitting Area",
      imagePublicId: "/Amenities J7 Emp/img1201.jpg",
      title: "Modern Co-working Space",
      description:
        "Flexible co-working environment with modern amenities and collaborative spaces.",
    },
    {
      id: "banquet",
      name: "Banquet Hall",
      imagePublicId: "/Amenities J7 Emp/Banquet Hall.webp",
      title: "Elegant Banquet Hall",
      description:
        "Spacious banquet facilities perfect for events, celebrations, and corporate functions.",
    },
    {
      id: "parking",
      name: "Parking Garage",
      imagePublicId: "/Rotana/Amenities/AdobeStock_740512005_with_bgc.webp",
      title: "Smart Parking System",
      description:
        "Multi-level parking facility with smart parking guidance, electric vehicle charging stations, and convenient access to all mall levels.",
    },
    {
      id: "cafe",
      name: "Premium Cafe",
      imagePublicId: "/Amenities J7 Emp/img1319.jpg",
      title: "Luxury Premium Suite",
      description:
        "Exceptional suite accommodations with premium amenities and stunning views.",
    },
  ],
};

// Radisson Amenities
export const radissonAmenities: PropertyAmenities = {
  propertyName: "Radisson",
  title: "Radisson Premium Hospitality",
  description:
    "Experience world-class hospitality at Radisson with our carefully curated amenities. Each facility is designed to provide exceptional comfort and luxury for business and leisure travelers, featuring international standards and premium services.",
  amenities: [
    {
      id: "lobby",
      name: "Sky Lobby",
      imagePublicId: "/Amenities Radisson/lr8nsjhpgkizarxcrzub.webp",
      title: "Grand Lobby Experience",
      description:
        "Welcome to an impressive double-height lobby featuring premium marble finishes, contemporary seating areas, and sophisticated lighting.",
    },
    {
      id: "fitness",
      name: "Fitness Centre",
      imagePublicId: "/Amenities Radisson/r76cxjkw9hdiaxpqq2f2.webp",
      title: "State-of-the-Art Fitness Center",
      description:
        "A fully equipped fitness center with the latest cardio and strength training equipment, personal training areas, and panoramic views.",
    },
    {
      id: "rooftop",
      name: "Rooftop Restaurant",
      imagePublicId: "/Amenities Radisson/kh4uo8ftnul6dmw21qry.webp",
      title: "Rooftop Dining Experience",
      description:
        "Enjoy exquisite dining with panoramic city views and premium culinary offerings.",
    },
    {
      id: "pool",
      name: "Swimming Pool",
      imagePublicId: "/Amenities Radisson/szwmdfxaffngq0ppi7zk.webp",
      title: "Indoor Pool Paradise",
      description:
        "Temperature-controlled indoor swimming pool with luxurious amenities and relaxation areas.",
    },
    {
      id: "spa",
      name: "Spa & Wellness",
      imagePublicId: "/Amenities Radisson/ovw4hcryj7pwjyoyrgz5.webp",
      title: "Luxury Spa & Wellness Center",
      description:
        "Indulge in rejuvenating treatments at our world-class spa facility with massage therapy rooms and relaxation areas.",
    },
    {
      id: "lounge",
      name: "Executive Lounge",
      imagePublicId: "/Amenities Radisson/yzujzobpkaoucmypn7ev.webp",
      title: "Premium Executive Lounge",
      description:
        "Sophisticated lounge space designed for business meetings and exclusive gatherings.",
    },
    {
      id: "business",
      name: "Business Lounge",
      imagePublicId: "/Amenities Radisson/smqz3r8wcfedqdoc9sup.webp",
      title: "Professional Business Center",
      description:
        "A sophisticated workspace with high-speed internet, private meeting rooms, and premium office amenities.",
    },
    {
      id: "gym",
      name: "Gymnasium",
      imagePublicId: "/Amenities Radisson/r76cxjkw9hdiaxpqq2f2.webp",
      title: "Full-Service Gymnasium",
      description:
        "Complete gymnasium facilities with professional-grade equipment and personal training services.",
    },
    {
      id: "coworking",
      name: "Co-working Space",
      imagePublicId: "/Amenities Radisson/mvekjynsu85dwzb1qkvz.webp",
      title: "Modern Co-working Space",
      description:
        "Flexible co-working environment with modern amenities and collaborative spaces.",
    },
    {
      id: "banquet",
      name: "Banquet Hall",
      imagePublicId: "/Amenities Radisson/egkmhcvbsurke9vyepe0.webp",
      title: "Elegant Banquet Hall",
      description:
        "Spacious banquet facilities perfect for events, celebrations, and corporate functions.",
    },
    {
      id: "airline",
      name: "Airline Lounge",
      imagePublicId: "/Amenities Radisson/n0rkrhlbps12mulzl6f0.webp",
      title: "Premium Airline Lounge",
      description:
        "Exclusive lounge facilities designed for airline crew and VIP guests.",
    },
    {
      id: "terrace",
      name: "Terrace",
      imagePublicId: "/Amenities Radisson/aqfg0tma72m6bwdrxmbp.webp",
      title: "Luxury Premium Suite",
      description:
        "Exceptional suite accommodations with premium amenities and stunning views.",
    },
  ],
};

// J7 Mall Amenities
export const j7IconAmenities: PropertyAmenities = {
  propertyName: "J7 Mall",
  title: "Premium Shopping Experience",
  description:
    "J7 Mall redefines retail excellence with a comprehensive shopping and entertainment destination. Featuring world-class brands, dining options, and entertainment facilities, every visit promises an exceptional experience for the whole family.",
  amenities: [
    {
      id: "meet",
      name: "Meeting Room",
      imagePublicId: "Rotana/Amenities/AdobeStock_1340126777_1_with_bgc.webp",
      title: "Premium Brand Stores",
      description:
        "Over 200 international and local brands featuring fashion, electronics, home decor, and specialty stores with modern retail spaces.",
    },
    {
      id: "lobby",
      name: "Sky Lobby",
      imagePublicId: "Rotana/Amenities/teksjagesj7ohg38cdj9_with_bgc.webp",
      title: "Grand Central Atrium",
      description:
        "Impressive multi-level atrium with natural lighting, artistic installations, and comfortable seating areas for relaxation and social gatherings.",
    },
    {
      id: "foodcourt-mall",
      name: "Food Court",
      imagePublicId: "/Rotana/Amenities/AdobeStock_637166455_with_bgc.webp",
      title: "International Food Court",
      description:
        "Diverse dining options featuring international cuisines, fast food, casual dining, and premium restaurants with spacious seating areas.",
    },
    {
      id: "retail-store",
      name: "Branded Retail Store",
      imagePublicId: "/Rotana/Amenities/AdobeStock_891253668_1_with_bgc.webp",
      title: "Multiplex Cinema Experience",
      description:
        "State-of-the-art cinema complex with multiple screens, premium sound systems, comfortable seating, and latest movie releases.",
    },
    {
      id: "entertainment-mall",
      name: "Entertainment Zone",
      imagePublicId: "/Rotana/Amenities/AdobeStock_639731555_with_bgc.webp",
      title: "Family Entertainment Center",
      description:
        "Exciting entertainment facilities including gaming zones, kids' play areas, arcade games, and family-friendly activities.",
    },
    {
      id: "parking-mall",
      name: "Smart Parking",
      imagePublicId: "/Rotana/Amenities/AdobeStock_740512005_with_bgc.webp",
      title: "Intelligent Parking System",
      description:
        "Multi-level parking facility with smart parking guidance, electric vehicle charging stations, and convenient access to all mall levels.",
    },
    {
      id: "events-mall",
      name: "Event Plaza",
      imagePublicId:
        "Rotana/Amenities/modern-architecture-clean-design-bright-lighting-comfortable-seating-indoors-generated-by-artificial-intelligence_1_with_bgc.webp",
      title: "Community Event Space",
      description:
        "Flexible event spaces for exhibitions, promotional events, fashion shows, and community gatherings with professional event support.",
    },
    {
      id: "services-mall",
      name: "Luxury Bedroom",
      imagePublicId: "/Rotana/Amenities/teksjagesj7ohg38cdj9_1_with_bgc.webp",
      title: "Premium Customer Care",
      description:
        "Comprehensive customer services including information desk, lost and found, banking services, and personal shopping assistance.",
    },
    {
      id: "gym",
      name: "Gymnasium",
      imagePublicId: "Rotana/Amenities/AdobeStock_1340126777_1_with_bgc (1).webp",
      title: "Wellness Center",
      description:
        "Wellness center with state-of-the-art fitness equipment, yoga studio, and spa services for relaxation and rejuvenation.",
    },
    {
      id: "spa",
      name: "Spa & Wellness",
      imagePublicId: "/Amenities J7 Emp/img3796.jpg",
      title: "Luxury Spa & Wellness Center",
      description:
        "Exclusive spa and wellness center with luxurious amenities, professional therapists, and rejuvenating treatments.",
    },
    {
      id: "business",
      name: "Business Lounge",
      imagePublicId: "/Amenities J7 Emp/img2381.jpg",
      title: "Professional Business Center",
      description:
        "A sophisticated workspace with high-speed internet, private meeting rooms, and premium office amenities.",
    },
    {
      id: "lounge",
      name: "Executive Lounge",
      imagePublicId: "/Amenities J7 Emp/img611.jpg",
      title: "Premium Executive Lounge",
      description:
        "Sophisticated lounge space designed for business meetings and exclusive gatherings.",
    },
  ],
};

// Rotana Amenities
export const rotanaAmenities: PropertyAmenities = {
  propertyName: "Rotana",
  title: "Rotana Luxury Collection",
  description:
    "Rotana represents the pinnacle of luxury hospitality, offering world-class amenities and services. Every detail is crafted to provide an extraordinary experience, combining traditional elegance with contemporary sophistication.",
  amenities: [
    {
      id: "lobby-rotana",
      name: "Grand Lobby",
      imagePublicId: "Amenities J7 Emp/img2263.jpg",
      title: "Majestic Reception Hall",
      description:
        "An opulent lobby featuring marble columns, crystal chandeliers, premium furnishings, and personalized welcome services with dedicated concierge.",
    },
    {
      id: "presidential-rotana",
      name: "Presidential Suite",
      imagePublicId: "Amenities J7 Emp/img6864.jpg",
      title: "Presidential Suite Experience",
      description:
        "Ultra-luxury presidential suite with panoramic views, private butler service, premium amenities, and exclusive access to VIP facilities.",
    },
    {
      id: "salon",
      name: "Men Salon",
      imagePublicId: "Amenities J7 Emp/img4268.jpg",
      title: "Elegant Grand Ballroom",
      description:
        "Spectacular ballroom with crystal lighting, premium decor, flexible layouts, and comprehensive event planning for weddings and galas.",
    },
    {
      id: "pool-rotana",
      name: "Infinity Pool",
      imagePublicId: "Amenities J7 Emp/img4740.jpg",
      title: "Infinity Pool Paradise",
      description:
        "Stunning infinity pool with city views, poolside cabanas, premium pool service, and temperature-controlled water year-round.",
    },
    {
      id: "spa-rotana",
      name: "Royal Spa",
      imagePublicId: "Amenities J7 Emp/img2851.jpg",
      title: "Royal Wellness Sanctuary",
      description:
        "World-class spa facility offering signature treatments, private treatment suites, relaxation lounges, and holistic wellness programs.",
    },
    {
      id: "gym-rotana",
      name: "Premium Fitness",
      imagePublicId: "Amenities J7 Emp/img1556.jpg",
      title: "Elite Fitness Center",
      description:
        "State-of-the-art fitness facility with premium equipment, personal trainers, group classes, and stunning views during workouts.",
    },
    {
      id: "lounge-rotana",
      name: "Executive Lounge",
      imagePublicId: "Amenities J7 Emp/img1555.jpg",
      title: "Exclusive Executive Access",
      description:
        "Private executive lounge with complimentary refreshments, business facilities, meeting spaces, and personalized service for VIP guests.",
    },
    {
      id: "dining-rotana",
      name: "Fine Dining",
      imagePublicId: "Amenities J7 Emp/img965.jpg",
      title: "Michelin-Quality Dining",
      description:
        "Multiple premium restaurants featuring international cuisines, award-winning chefs, wine cellars, and private dining options.",
    },
    {
      id: "business-rotana",
      name: "Business Center",
      imagePublicId: "Amenities J7 Emp/img611.jpg",
      title: "Premium Business Facilities",
      description:
        "Comprehensive business center with conference rooms, high-tech equipment, secretarial services, and 24/7 business support.",
    },
    {
      id: "valet-rotana",
      name: "Valet Services",
      imagePublicId: "Amenities J7 Emp/img729.jpg",
      title: "Premium Concierge Services",
      description:
        "Full-service concierge and valet services including car service, shopping assistance, tour arrangements, and personal assistance.",
    },
    {
      id: "club-rotana",
      name: "Club Lounge",
      imagePublicId: "Amenities J7 Emp/img847.jpg",
      title: "Exclusive Members Club",
      description:
        "Private members' club with premium bar service, networking events, entertainment, and exclusive access for distinguished guests.",
    },
    {
      id: "female-salon",
      name: "Women Salon",
      imagePublicId: "Amenities J7 Emp/img7100.jpg",
      title: "Elegant Grand Ballroom",
      description:
        "Spectacular ballroom with crystal lighting, premium decor, flexible layouts, and comprehensive event planning for weddings and galas.",
    },
  ],
};

// Helper function to get amenities by property name
export const getAmenitiesByProperty = (
  propertyName: string
): PropertyAmenities | null => {
  switch (propertyName.toLowerCase().trim()) {
    case "j7 emporium":
    case "j7emporium":
    case "emporium":
      return j7EmporiumAmenities;
    case "radisson":
      return radissonAmenities;
    case "j7 icon":
    case "j7icon":
    case "icon":
      return j7IconAmenities;
    case "rotana":
      return rotanaAmenities;
    default:
      return null;
  }
};

// Helper function to get images by property name
// export const getImagesByProperty = (propertyName: string): string[] => {
//   const property = propertyImages.find(
//     (prop) => prop.name.toLowerCase() === propertyName.toLowerCase()
//   );
//   return property ? property.images : [];
// };

// Export all amenities for easy access
export const allPropertyAmenities = {
  j7Emporium: j7EmporiumAmenities,
  radisson: radissonAmenities,
  j7Icon: j7IconAmenities,
  rotana: rotanaAmenities,
};

// Property metadata for additional information
export const propertyMetadata = {
  "J7 Emporium": {
    type: "Mixed-Use Development",
    location: "Prime Business District",
    status: "Completed",
    features: ["Residential", "Commercial", "Hospitality"],
  },
  Radisson: {
    type: "Luxury Hotel",
    location: "City Center",
    status: "Operational",
    features: ["5-Star Hotel", "Business Center", "Events"],
  },
  "J7 Mall": {
    type: "Shopping Mall",
    location: "Commercial Hub",
    status: "Completed",
    features: ["Retail", "Entertainment", "Dining"],
  },
  Rotana: {
    type: "Premium Hotel",
    location: "Downtown",
    status: "Operational",
    features: ["Luxury Hospitality", "Fine Dining", "Events"],
  },
};

// Export types for better TypeScript support
export type { Amenity, PropertyAmenities };
