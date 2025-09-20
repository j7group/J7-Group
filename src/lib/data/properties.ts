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
      id: "mall",
      name: "Shopping Mall",
      imagePublicId: "vlcsnap-2025-09-18-12h02m35s127_g7zqva",
      title: "Grand Lobby Experience",
      description:
        "Welcome to an impressive double-height lobby featuring premium marble finishes, contemporary seating areas, and sophisticated lighting.",
    },
    {
      id: "fitness",
      name: "Fitness Centre",
      imagePublicId: "AdobeStock_1340126777_g43is3",
      title: "State-of-the-Art Fitness Center",
      description:
        "A fully equipped fitness center with the latest cardio and strength training equipment, personal training areas, and panoramic views.",
    },
    {
      id: "rooftop",
      name: "Rooftop Restaurant",
      imagePublicId: "vlcsnap-2025-09-18-11h46m09s155_wtojcq",
      title: "Rooftop Dining Experience",
      description:
        "Enjoy exquisite dining with panoramic city views and premium culinary offerings.",
    },
    {
      id: "pool",
      name: "Swimming Pool",
      imagePublicId: "vlcsnap-2025-09-18-11h45m53s857_jky2eb",
      title: "Indoor Pool Paradise",
      description:
        "Temperature-controlled indoor swimming pool with luxurious amenities and relaxation areas.",
    },
    {
      id: "elevators",
      name: "Elevators",
      imagePublicId: "vlcsnap-2025-09-18-12h01m25s712_p96ccv",
      title: "Luxury Spa & Wellness Center",
      description:
        "Indulge in rejuvenating treatments at our world-class spa facility with massage therapy rooms and relaxation areas.",
    },
    {
      id: "lounge",
      name: "Executive Lounge",
      imagePublicId: "modern-architecture-clean-design-bright-lighting-comfortable-seating-indoors-generated-by-artificial-intelligence_duuk74",
      title: "Premium Executive Lounge",
      description:
        "Sophisticated lounge space designed for business meetings and exclusive gatherings.",
    },
    {
      id: "cinema",
      name: "Cinema Hall",
      imagePublicId: "vlcsnap-2025-09-18-12h00m52s017_mwlmje",
      title: "Professional Business Center",
      description:
        "A sophisticated workspace with high-speed internet, private meeting rooms, and premium office amenities.",
    },
    {
      id: "gym",
      name: "Gymnasium",
      imagePublicId: "AdobeStock_1340126777_g43is3",
      title: "Full-Service Gymnasium",
      description:
        "Complete gymnasium facilities with professional-grade equipment and personal training services.",
    },
    {
      id: "sitting",
      name: "Sitting Area",
      imagePublicId: "vlcsnap-2025-09-18-12h01m09s860_iuirvx",
      title: "Modern Co-working Space",
      description:
        "Flexible co-working environment with modern amenities and collaborative spaces.",
    },
    {
      id: "banquet",
      name: "Banquet Hall",
      imagePublicId: "vlcsnap-2025-09-18-11h51m38s271_lemaqa",
      title: "Elegant Banquet Hall",
      description:
        "Spacious banquet facilities perfect for events, celebrations, and corporate functions.",
    },
    {
      id: "parking",
      name: "Parking Garage",
      imagePublicId: "AdobeStock_740512005_wcf31x",
      title: "Premium Airline Lounge",
      description:
        "Exclusive lounge facilities designed for airline crew and VIP guests.",
    },
    {
      id: "cafe",
      name: "Premium Cafe",
      imagePublicId: "vlcsnap-2025-09-18-12h00m42s489_hhp0b4",
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
      imagePublicId: "Sky_Lobby_aybbhv",
      title: "Grand Lobby Experience",
      description:
        "Welcome to an impressive double-height lobby featuring premium marble finishes, contemporary seating areas, and sophisticated lighting.",
    },
    {
      id: "fitness",
      name: "Fitness Centre",
      imagePublicId: "AdobeStock_1340126777_g43is3",
      title: "State-of-the-Art Fitness Center",
      description:
        "A fully equipped fitness center with the latest cardio and strength training equipment, personal training areas, and panoramic views.",
    },
    {
      id: "rooftop",
      name: "Rooftop Restaurant",
      imagePublicId: "Rooftop_Restaurant_so4cas",
      title: "Rooftop Dining Experience",
      description:
        "Enjoy exquisite dining with panoramic city views and premium culinary offerings.",
    },
    {
      id: "pool",
      name: "Swimming Pool",
      imagePublicId: "Indoor_Swiming_Pool_kmbf0h",
      title: "Indoor Pool Paradise",
      description:
        "Temperature-controlled indoor swimming pool with luxurious amenities and relaxation areas.",
    },
    {
      id: "spa",
      name: "Spa & Wellness",
      imagePublicId: "Sauna_Spa_dmq8rr",
      title: "Luxury Spa & Wellness Center",
      description:
        "Indulge in rejuvenating treatments at our world-class spa facility with massage therapy rooms and relaxation areas.",
    },
    {
      id: "lounge",
      name: "Executive Lounge",
      imagePublicId: "Executive_Lounge_if9xsn",
      title: "Premium Executive Lounge",
      description:
        "Sophisticated lounge space designed for business meetings and exclusive gatherings.",
    },
    {
      id: "business",
      name: "Business Lounge",
      imagePublicId: "Business_Lounge_qgwtal",
      title: "Professional Business Center",
      description:
        "A sophisticated workspace with high-speed internet, private meeting rooms, and premium office amenities.",
    },
    {
      id: "gym",
      name: "Gymnasium",
      imagePublicId: "vlcsnap-2025-09-18-12h00m47s408_orv4nh",
      title: "Full-Service Gymnasium",
      description:
        "Complete gymnasium facilities with professional-grade equipment and personal training services.",
    },
    {
      id: "coworking",
      name: "Co-working Space",
      imagePublicId: "Co-Working_Spaces_x2rz4t",
      title: "Modern Co-working Space",
      description:
        "Flexible co-working environment with modern amenities and collaborative spaces.",
    },
    {
      id: "banquet",
      name: "Banquet Hall",
      imagePublicId: "Banquet_Hall_rk47z6",
      title: "Elegant Banquet Hall",
      description:
        "Spacious banquet facilities perfect for events, celebrations, and corporate functions.",
    },
    {
      id: "airline",
      name: "Airline Lounge",
      imagePublicId: "Airline_Crew_Lounge_mbpkqt",
      title: "Premium Airline Lounge",
      description:
        "Exclusive lounge facilities designed for airline crew and VIP guests.",
    },
    {
      id: "amenity10",
      name: "Premium Suite",
      imagePublicId: "vlcsnap-2025-09-18-11h48m40s647_zodvmz",
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
      id: "lobby",
      name: "Sky Lobby",
      imagePublicId: "AdobeStock_1654036467_tprbsj",
      title: "Grand Central Atrium",
      description:
        "Impressive multi-level atrium with natural lighting, artistic installations, and comfortable seating areas for relaxation and social gatherings.",
    },
    {
      id: "meet",
      name: "Meeting Room",
      imagePublicId: "AdobeStock_1118174747_epp4dv",
      title: "Premium Brand Stores",
      description:
        "Over 200 international and local brands featuring fashion, electronics, home decor, and specialty stores with modern retail spaces.",
    },
    {
      id: "foodcourt-mall",
      name: "Food Court",
      imagePublicId: "AdobeStock_639731555_w6eo8y",
      title: "International Food Court",
      description:
        "Diverse dining options featuring international cuisines, fast food, casual dining, and premium restaurants with spacious seating areas.",
    },
    {
      id: "retail-store",
      name: "Branded Retail Store",
      imagePublicId: "AdobeStock_891253668_dgtxvu",
      title: "Multiplex Cinema Experience",
      description:
        "State-of-the-art cinema complex with multiple screens, premium sound systems, comfortable seating, and latest movie releases.",
    },
    {
      id: "entertainment-mall",
      name: "Entertainment Zone",
      imagePublicId: "vlcsnap-2025-09-18-11h58m46s691_nvy3om",
      title: "Family Entertainment Center",
      description:
        "Exciting entertainment facilities including gaming zones, kids' play areas, arcade games, and family-friendly activities.",
    },
    {
      id: "parking-mall",
      name: "Smart Parking",
      imagePublicId: "AdobeStock_740512005_wcf31x",
      title: "Intelligent Parking System",
      description:
        "Multi-level parking facility with smart parking guidance, electric vehicle charging stations, and convenient access to all mall levels.",
    },
    {
      id: "events-mall",
      name: "Event Plaza",
      imagePublicId: "AdobeStock_637166455_pqwjl1",
      title: "Community Event Space",
      description:
        "Flexible event spaces for exhibitions, promotional events, fashion shows, and community gatherings with professional event support.",
    },
    {
      id: "services-mall",
      name: "Luxury Bedroom",
      imagePublicId: "AdobeStock_981045239_aiodpz",
      title: "Premium Customer Care",
      description:
        "Comprehensive customer services including information desk, lost and found, banking services, and personal shopping assistance.",
    },
    {
      id: "swimming-pool",
      name: "Swimming Pool",
      imagePublicId: "vlcsnap-2025-09-18-12h01m15s202_lkxo4s",
      title: "Health & Wellness Hub",
      description:
        "Dedicated wellness area featuring pharmacies, optical stores, beauty salons, and health services for complete family care.",
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
      imagePublicId: "rotana_lobby_grand",
      title: "Majestic Reception Hall",
      description:
        "An opulent lobby featuring marble columns, crystal chandeliers, premium furnishings, and personalized welcome services with dedicated concierge.",
    },
    {
      id: "presidential-rotana",
      name: "Presidential Suite",
      imagePublicId: "rotana_suite_presidential",
      title: "Presidential Suite Experience",
      description:
        "Ultra-luxury presidential suite with panoramic views, private butler service, premium amenities, and exclusive access to VIP facilities.",
    },
    {
      id: "rooftop-rotana",
      name: "Rooftop Restaurant",
      imagePublicId: "rotana_restaurant_rooftop",
      title: "Sky-High Culinary Experience",
      description:
        "Exclusive rooftop dining with breathtaking city views, gourmet cuisine, premium wine selection, and intimate fine dining atmosphere.",
    },
    {
      id: "ballroom-rotana",
      name: "Grand Ballroom",
      imagePublicId: "rotana_ballroom_elegant",
      title: "Elegant Grand Ballroom",
      description:
        "Spectacular ballroom with crystal lighting, premium decor, flexible layouts, and comprehensive event planning for weddings and galas.",
    },
    {
      id: "pool-rotana",
      name: "Infinity Pool",
      imagePublicId: "rotana_pool_infinity",
      title: "Infinity Pool Paradise",
      description:
        "Stunning infinity pool with city views, poolside cabanas, premium pool service, and temperature-controlled water year-round.",
    },
    {
      id: "spa-rotana",
      name: "Royal Spa",
      imagePublicId: "rotana_spa_royal",
      title: "Royal Wellness Sanctuary",
      description:
        "World-class spa facility offering signature treatments, private treatment suites, relaxation lounges, and holistic wellness programs.",
    },
    {
      id: "gym-rotana",
      name: "Premium Fitness",
      imagePublicId: "rotana_gym_premium",
      title: "Elite Fitness Center",
      description:
        "State-of-the-art fitness facility with premium equipment, personal trainers, group classes, and stunning views during workouts.",
    },
    {
      id: "lounge-rotana",
      name: "Executive Lounge",
      imagePublicId: "rotana_lounge_executive",
      title: "Exclusive Executive Access",
      description:
        "Private executive lounge with complimentary refreshments, business facilities, meeting spaces, and personalized service for VIP guests.",
    },
    {
      id: "dining-rotana",
      name: "Fine Dining",
      imagePublicId: "rotana_restaurant_fine",
      title: "Michelin-Quality Dining",
      description:
        "Multiple premium restaurants featuring international cuisines, award-winning chefs, wine cellars, and private dining options.",
    },
    {
      id: "business-rotana",
      name: "Business Center",
      imagePublicId: "rotana_business_center",
      title: "Premium Business Facilities",
      description:
        "Comprehensive business center with conference rooms, high-tech equipment, secretarial services, and 24/7 business support.",
    },
    {
      id: "valet-rotana",
      name: "Valet Services",
      imagePublicId: "rotana_valet_service",
      title: "Premium Concierge Services",
      description:
        "Full-service concierge and valet services including car service, shopping assistance, tour arrangements, and personal assistance.",
    },
    {
      id: "club-rotana",
      name: "Club Lounge",
      imagePublicId: "rotana_club_lounge",
      title: "Exclusive Members Club",
      description:
        "Private members' club with premium bar service, networking events, entertainment, and exclusive access for distinguished guests.",
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
  "Radisson": {
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
  "Rotana": {
    type: "Premium Hotel",
    location: "Downtown",
    status: "Operational",
    features: ["Luxury Hospitality", "Fine Dining", "Events"],
  },
};

// Export types for better TypeScript support
export type { Amenity, PropertyAmenities };