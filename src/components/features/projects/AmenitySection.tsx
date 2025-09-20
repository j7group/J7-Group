// components/AmenitiesSection.tsx
"use client";
import React, { useState } from 'react';
import { CldImage } from 'next-cloudinary';

interface Amenity {
  id: string;
  name: string;
  imagePublicId: string;
  title: string;
  description: string;
}

interface AmenitiesSectionProps {
  propertyName: string;
  amenities: Amenity[];
  title?: string;
  description?: string;
}

const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({
  amenities,
  title = "Premium Amenities",
  description = "At the heart of J7 Group properties lies an exquisite blend of amenities designed to cater to the most discerning tastes. From opulent facilities and modern conveniences to sophisticated spaces and premium services, every aspect has been meticulously crafted making it a sanctuary of luxury and comfort."
}) => {
  const [activeAmenity, setActiveAmenity] = useState<Amenity>(amenities[0]);

  const handleAmenityClick = (amenity: Amenity) => {
    setActiveAmenity(amenity);
  };

  // If no amenities, don't render the section
  if (!amenities || amenities.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-white mt-8 sm:mt-12 lg:mt-20 px-4 sm:px-6 lg:px-12">
      {/* Mobile Layout - Title and Description First */}
      <div className="lg:hidden py-8 sm:py-10 md:py-12">
        <div className="mx-auto">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#51301F] mb-4 tracking-wide px-2 leading-tight">
              {title}
            </h2>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed font-normal text-[#25130b] max-w-2xl mx-auto px-2">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="w-full">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0 lg:gap-6 xl:gap-8">
            
            {/* Image Section */}
            <div className="mt-4 sm:mt-6 lg:mt-16 order-1 lg:order-1">
              <div className="aspect-[4/3] sm:aspect-[4/3] md:aspect-[3/2] lg:aspect-[4/3] xl:aspect-[4/3] 2xl:aspect-[6/5] w-full overflow-hidden">
                <CldImage
                  src={activeAmenity.imagePublicId}
                  alt={activeAmenity.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-all duration-500"
                  priority
                  quality="auto:best"
                  crop="fit"
                  gravity="auto"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="order-2 lg:order-2 py-6 sm:py-8 lg:py-0 -mt-6 sm:-mt-8 lg:mt-16">
              <div className="bg-white px-3 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
                <div className="w-full mx-auto lg:mx-0">
                  
                  {/* Desktop Title and Description */}
                  <div className="hidden lg:block mb-2 sm:mb-3 lg:mb-4">
                    <h2 className="text-2xl lg:text-3xl xl:text-4xl text-[#51301F] mb-3 lg:mb-4 tracking-wide leading-tight">
                      {title}
                    </h2>
                    <p className="text-sm lg:text-base leading-relaxed font-normal text-[#25130b]">
                      {description}
                    </p>
                  </div>

                  {/* Amenities Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 mb-6 sm:mb-8 lg:mb-6 mt-6">
                    {amenities.map((amenity) => (
                      <button
                        key={amenity.id}
                        onClick={() => handleAmenityClick(amenity)}
                        className={`
                          px-3 sm:px-4 py-2 sm:py-3 lg:py-3 xl:py-4 text-left transition-all duration-300 focus:outline-none text-xs sm:text-sm
                          ${activeAmenity.id === amenity.id
                            ? 'bg-[#51301F] text-[#ECE4D9] shadow-sm'
                            : 'bg-transparent text-[#51301F] hover:bg-[#51301F] hover:text-[#ECE4D9] cursor-pointer'
                          }
                        `}
                      >
                        <span className="block truncate font-medium">{amenity.name}</span>
                      </button>
                    ))}
                  </div>

                  {/* Active Amenity Details */}
                  <div className="p-4 sm:p-5 lg:p-5 xl:p-6 border border-[#51301F] bg-[#51301F] backdrop-blur-sm">
                    <h3 className="text-base sm:text-lg lg:text-lg xl:text-xl font-medium mb-2 sm:mb-3 text-[#ECE4D9] leading-tight">
                      {activeAmenity.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed opacity-90 text-[#ECE4D9]">
                      {activeAmenity.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;