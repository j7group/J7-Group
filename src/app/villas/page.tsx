import { Hero } from "@/components/features/home/components/hero-section";
import { Image } from "@imagekit/next";
import React from "react";
import { IconType } from "react-icons";
import {
  FaEye,
  FaBed,
  FaBath,
  FaCar,
  FaTree,
  FaShieldAlt,
  FaWifi,
  FaSnowflake,
  FaHome,
  FaMountain,
  FaLeaf,
} from "react-icons/fa";

interface Amenity {
  icon: IconType;
  name: string;
}

interface VillaStats {
  location: string;
  builtUpArea: string;
  plotSize: string;
  bedrooms: number;
}

interface Villa {
  id: number;
  name: string;
  description: string;
  image: string;
  stats: VillaStats;
  amenities: Amenity[];
}

interface StatCardProps {
  icon: IconType;
  label: string;
  value: string | number;
}

interface AmenityItemProps {
  icon: IconType;
  name: string;
}

const VillasLandingPage: React.FC = () => {
  const villas: Villa[] = [
    {
      id: 1,
      name: "PINE VILLAS",
      description:
        "Nestled at the foothills of the majestic Margalla Hills, our luxury villas in Multi Garden B-17 offer an exceptional living experience in one of Islamabad's most prestigious residential societies. Developed by Multi Professional Cooperative Housing Society (MPCHS), these villas combine contemporary architecture with serene natural surroundings. Each villa is thoughtfully designed with earthquake-resistant structure, high-quality materials, and premium finishes to provide both safety and sophistication. Experience panoramic views of Margalla Hills while enjoying world-class amenities and easy access to GT Road and M-1 Motorway.",
      image: "Villas/villas6_2_cropped.webp",
      stats: {
        location: "Multi Garden B-17",
        builtUpArea: "3,000 - 3,500 sqft",
        plotSize: "8 - 10 Marla",
        bedrooms: 5,
      },
      amenities: [
        { icon: FaMountain, name: "Margalla Hills View" },
        { icon: FaShieldAlt, name: "Earthquake Proof Structure" },
        { icon: FaHome, name: "American Style Kitchen" },
        { icon: FaSnowflake, name: "Built-in AC Ducting" },
        { icon: FaWifi, name: "Cable TV & Telephone" },
        { icon: FaBath, name: "Imported Sanitary Fittings" },
        { icon: FaCar, name: "Spacious Car Porch" },
        { icon: FaTree, name: "Lush Green Surroundings" },
      ],
    },
    {
      id: 2,
      name: "PALM Villas",
      description:
        "Palm Villas represents the pinnacle of affordable luxury in MPCHS Multi Garden B-17 Islamabad. Offering unparalleled panoramic views of the enchanting Margalla Hills from the comfort of your room, these turnkey villas are elegantly designed with top-of-the-line furnishings and amenities. The project features contemporary living spaces with solid doors, stylish wardrobes, marble flooring, and decorative false ceilings with concealed lighting. Quality materials ensure durability and comfort, while the strategic location in the heart of B-17 provides easy accessibility to all major facilities including markets, schools, and mosques.",
      image: "Villas/villas5_3_cropped.webp",
      stats: {
        location: "Multi Garden B-17",
        builtUpArea: "3,060 - 3,110 sqft",
        plotSize: "8 Marla",
        bedrooms: 4,
      },
      amenities: [
        { icon: FaMountain, name: "Panoramic Margalla Views" },
        { icon: FaHome, name: "Decorative False Ceiling" },
        { icon: FaLeaf, name: "Marble/Tile Flooring" },
        { icon: FaBath, name: "Imported Bathroom Tiles" },
        { icon: FaWifi, name: "UPS Wiring System" },
        { icon: FaSnowflake, name: "Aluminum Windows" },
        { icon: FaCar, name: "Covered Car Parking" },
        { icon: FaTree, name: "Stylish Wardrobes" },
      ],
    },
  ];

  const StatCard: React.FC<StatCardProps> = ({ icon: Icon, label, value }) => (
    <div className="text-center p-4">
      <div className="flex justify-center mb-3">
        <Icon className="w-10 h-10 text-[#51301F]" />
      </div>
      <div className="text-md text-[#51301F] mb-1">{value}</div>
      <div className="text-sm text-[#51301F] opacity-70">{label}</div>
    </div>
  );

  const AmenityItem: React.FC<AmenityItemProps> = ({ icon: Icon, name }) => (
    <li className="flex items-center space-x-3 text-[#51301F] mb-3">
      <Icon className="w-5 h-5 text-[#51301F]" />
      <span className="text-base">{name}</span>
    </li>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        backgroundSrc="Villas_new_dgitte"
        backgroundType="video"
        overlay="light"
      />

      {/* Villa Sections */}
      {villas.map((villa: Villa, index: number) => {
        const isImageRight: boolean = index % 2 === 0;

        return (
          <section key={villa.id} className="py-16 lg:py-24 bg-white">
            <div className="w-full px-4 sm:px-6 lg:px-16">
              <div
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isImageRight ? "" : "lg:grid-flow-col-dense"}`}
              >
                {/* Content Section */}
                <div
                  className={`space-y-8 ${isImageRight ? "lg:pr-8" : "lg:pl-8 lg:col-start-2"}`}
                >
                  <div>
                    <h2 className="text-4xl font-light text-[#51301F] mb-6 tracking-wide">
                      {villa.name}
                    </h2>
                    <p className="text-[#160b05] text-sm sm:text-base leading-relaxed">
                      {villa.description}
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-white border-t border-b border-gray-200">
                    <StatCard
                      icon={FaMountain}
                      label="Location"
                      value={villa.stats.location}
                    />
                    <StatCard
                      icon={FaHome}
                      label="Built up Area"
                      value={villa.stats.builtUpArea}
                    />
                    <StatCard
                      icon={FaEye}
                      label="Plot Size"
                      value={villa.stats.plotSize}
                    />
                    <StatCard
                      icon={FaBed}
                      label="Bedrooms"
                      value={villa.stats.bedrooms}
                    />
                  </div>

                  {/* Amenities */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-medium text-[#51301F] mb-6">
                      Premium Amenities
                    </h3>
                    <div className="grid md:grid-cols-2 gap-x-8">
                      <ul className="space-y-1">
                        {villa.amenities
                          .slice(0, Math.ceil(villa.amenities.length / 2))
                          .map((amenity: Amenity, idx: number) => (
                            <AmenityItem
                              key={idx}
                              icon={amenity.icon}
                              name={amenity.name}
                            />
                          ))}
                      </ul>
                      <ul className="space-y-1">
                        {villa.amenities
                          .slice(Math.ceil(villa.amenities.length / 2))
                          .map((amenity: Amenity, idx: number) => (
                            <AmenityItem
                              key={idx}
                              icon={amenity.icon}
                              name={amenity.name}
                            />
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Image Section */}
                <div
                  className={`relative ${isImageRight ? "lg:order-2" : "lg:order-1 lg:col-start-1"}`}
                >
                  <div className="relative h-96 lg:h-[680px] overflow-hidden">
                    <Image
                      urlEndpoint={process.env.NEXT_PUBLIC_URL_ENDPOINT}
                      src={villa.image}
                      fill
                      alt={villa.name}
                      className="w-full h-full object-cover transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default VillasLandingPage;
