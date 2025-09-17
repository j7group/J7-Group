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
    <section className="w-full min-h-screen bg-white mt-8 sm:mt-12 md:mt-16 lg:mt-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      {/* Mobile Layout - Title and Description First */}
      <div className="lg:hidden py-8 sm:py-10 md:py-12">
        <div className="mx-auto">
          <div className="text-center">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl text-[#51301F] mb-4 tracking-wide px-2">
              {title}
            </h2>
            <p className="text-xs xs:text-sm sm:text-base leading-relaxed font-normal text-[#25130b] max-w-2xl mx-auto px-2">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="w-full">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-2 min-h-[50vh] lg:min-h-screen gap-0">
            
            {/* Image Section */}
            <div className="relative h-[40vh] xs:h-[45vh] sm:h-[50vh] md:h-[55vh] lg:h-[80vh] xl:h-[80vh] mt-4 sm:mt-6 md:mt-8 lg:mt-16 order-1 lg:order-1">
              <CldImage
                src={activeAmenity.imagePublicId}
                alt={activeAmenity.title}
                width={1400}
                height={822}
                className="w-full h-full object-cover"
                priority
                quality={"auto:best"}
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-center bg-white px-3 xs:px-4 sm:px-6 md:px-8 order-2 lg:order-2 py-6 sm:py-8 lg:py-0 -mt-6 sm:-mt-8 md:-mt-10 lg:mt-0">
              <div className="w-full mx-auto lg:mx-0">
                
                {/* Desktop Title and Description */}
                <div className="hidden lg:block mb-6">
                  <h2 className="text-2xl lg:text-3xl xl:text-4xl text-[#51301F] mb-3 lg:mb-4 tracking-wide leading-tight">
                    {title}
                  </h2>
                  <p className="text-sm lg:text-base leading-relaxed font-normal text-[#25130b]">
                    {description}
                  </p>
                </div>

                {/* Amenities Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 mb-6 sm:mb-8 mt-6">
                  {amenities.map((amenity) => (
                    <button
                      key={amenity.id}
                      onClick={() => handleAmenityClick(amenity)}
                      className={`
                        px-3 xs:px-4 py-2 sm:py-3 lg:py-4 text-left transition-all duration-300 focus:outline-none text-xs xs:text-sm border-2
                        ${activeAmenity.id === amenity.id
                          ? 'bg-white text-[#51301F] border-[#51301F] shadow-sm'
                          : 'bg-[#51301F] text-[#ECE4D9] border-[#51301F] hover:bg-transparent hover:text-[#51301F] cursor-pointer'
                        }
                      `}
                    >
                      <span className="block truncate">{amenity.name}</span>
                    </button>
                  ))}
                </div>

                {/* Active Amenity Details */}
                <div className="p-4 xs:p-5 sm:p-6 border border-[#51301F] bg-[#51301F] backdrop-blur-sm">
                  <h3 className="text-base xs:text-lg sm:text-xl font-medium mb-2 xs:mb-3 text-[#ECE4D9]">
                    {activeAmenity.title}
                  </h3>
                  <p className="text-xs xs:text-sm leading-relaxed opacity-90 text-[#ECE4D9]">
                    {activeAmenity.description}
                  </p>
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