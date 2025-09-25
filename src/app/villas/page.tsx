import CldImage from '@/components/features/home/components/Cld-Image';
import { Hero } from '@/components/features/home/components/hero-section';
import React from 'react';
import { IconType } from 'react-icons';
import { 
  FaEye, 
  FaBed, 
  FaBath, 
  FaCar, 
  FaWater, 
  FaTree, 
  FaGamepad, 
  FaDumbbell, 
  FaWineGlass, 
  FaShieldAlt, 
  FaWifi, 
  FaSnowflake,
  FaUsers,
  FaHome,
  FaMountain,
  FaSun,
  FaCoffee,
  FaUtensils,
  FaCamera,
  FaMusic,
  FaSeedling,
  FaLeaf
} from 'react-icons/fa';

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
      name: "Pine Villas",
      description: "Pine Villa is an ultra-luxurious property located in the prestigious neighborhood of Al Barari, Dubai. Renowned for its exclusivity and lush green surroundings. Spanning an impressive 16,500 square feet, this bespoke residence is designed to meet the highest standards of sophistication and elegance, catering to the discerning tastes of elite investors. The villa features six expansive bedrooms, each thoughtfully crafted to provide unparalleled comfort and style.",
      image: "villas6_xfowy1",
      stats: {
        location: "Multi B-17",
        builtUpArea: "16,000 sqft",
        plotSize: "16,500 sqft",
        bedrooms: 6
      },
      amenities: [
        { icon: FaEye, name: "Gym with Dubai Skyline view" },
        { icon: FaBed, name: "Steam Room" },
        { icon: FaBath, name: "Ice Fountain" },
        { icon: FaWater, name: "Sauna" },
        { icon: FaGamepad, name: "Pool" },
        { icon: FaTree, name: "Cinema Room" },
        { icon: FaWineGlass, name: "Cigar Room" },
        { icon: FaDumbbell, name: "Games Room" }
      ]
    },
    {
      id: 2,
      name: "Palm Villas",
      description: "Palm Villa represents the pinnacle of tropical luxury living, situated in the heart of Dubai's most coveted residential district. This magnificent property showcases contemporary architecture with natural elements, creating a harmonious blend of modern comfort and tropical serenity. With sprawling indoor and outdoor spaces, the villa offers an unmatched lifestyle experience for those who appreciate refined living.",
      image: "villas5_cruiec",
      stats: {
        location: "Multi B-17",
        builtUpArea: "14,500 sqft",
        plotSize: "15,200 sqft",
        bedrooms: 5
      },
      amenities: [
        { icon: FaSeedling, name: "Private Beach Access" },
        { icon: FaWater, name: "Infinity Pool" },
        { icon: FaSun, name: "Rooftop Terrace" },
        { icon: FaCoffee, name: "Chef's Kitchen" },
        { icon: FaUtensils, name: "Formal Dining Room" },
        { icon: FaShieldAlt, name: "24/7 Security" },
        { icon: FaCar, name: "4-Car Garage" },
        { icon: FaWifi, name: "Smart Home System" }
      ]
    },
    {
      id: 3,
      name: "Oasis Villas",
      description: "Oasis Villa is a masterpiece of architectural excellence, designed to provide an exclusive retreat from the bustling city life. Nestled in a serene environment, this luxury residence combines traditional elegance with modern innovations. The villa features meticulously landscaped gardens, state-of-the-art facilities, and premium finishes throughout, making it an ideal sanctuary for discerning homeowners.",
      image: "villas3_hyjhxo",
      stats: {
        location: "Multi B-17",
        builtUpArea: "18,000 sqft",
        plotSize: "20,000 sqft",
        bedrooms: 7
      },
      amenities: [
        { icon: FaMountain, name: "Garden Views" },
        { icon: FaLeaf, name: "Landscaped Gardens" },
        { icon: FaMusic, name: "Entertainment Lounge" },
        { icon: FaCamera, name: "Home Theater" },
        { icon: FaSnowflake, name: "Wine Cellar" },
        { icon: FaUsers, name: "Guest Suites" },
        { icon: FaDumbbell, name: "Private Gymnasium" },
        { icon: FaHome, name: "Maid's Quarters" }
      ]
    }
  ];

  const StatCard: React.FC<StatCardProps> = ({ icon: Icon, label, value }) => (
    <div className="text-center p-4">
      <div className="flex justify-center mb-3">
        <Icon className="w-10 h-10 text-[#51301F]" />
      </div>
      <div className="text-xl text-[#51301F] mb-1">{value}</div>
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
      backgroundSrc='Villas.mp4_1.mp4_bguy7k'
      backgroundType='video'
      overlay='light'
      />

      {/* Villa Sections */}
      {villas.map((villa: Villa, index: number) => {
        const isImageRight: boolean = index % 2 === 0;
        
        return (
          <section key={villa.id} className="py-16 lg:py-24 bg-white">
            <div className="w-full px-4 sm:px-6 lg:px-16">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isImageRight ? '' : 'lg:grid-flow-col-dense'}`}>
                
                {/* Content Section */}
                <div className={`space-y-8 ${isImageRight ? 'lg:pr-8' : 'lg:pl-8 lg:col-start-2'}`}>
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
                    <StatCard icon={FaMountain} label="Location" value={villa.stats.location} />
                    <StatCard icon={FaHome} label="Built up Area" value={villa.stats.builtUpArea} />
                    <StatCard icon={FaEye} label="Plot Size" value={villa.stats.plotSize} />
                    <StatCard icon={FaBed} label="Bedrooms" value={villa.stats.bedrooms} />
                  </div>

                  {/* Amenities */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-medium text-[#51301F] mb-6">Premium Amenities</h3>
                    <div className="grid md:grid-cols-2 gap-x-8">
                      <ul className="space-y-1">
                        {villa.amenities.slice(0, Math.ceil(villa.amenities.length / 2)).map((amenity: Amenity, idx: number) => (
                          <AmenityItem key={idx} icon={amenity.icon} name={amenity.name} />
                        ))}
                      </ul>
                      <ul className="space-y-1">
                        {villa.amenities.slice(Math.ceil(villa.amenities.length / 2)).map((amenity: Amenity, idx: number) => (
                          <AmenityItem key={idx} icon={amenity.icon} name={amenity.name} />
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Image Section */}
                <div className={`relative ${isImageRight ? 'lg:order-2' : 'lg:order-1 lg:col-start-1'}`}>
                  <div className="relative h-96 lg:h-[640px] overflow-hidden">
                    <CldImage
                      src={villa.image}
                      fill
                      alt={villa.name}
                      className="w-full h-full object-cover transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0} // Prioritize first image loading
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