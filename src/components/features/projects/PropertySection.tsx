import React from "react";
import CldImage from "../home/components/Cld-Image";
import Link from "next/link";
import { PropertySectionData } from "@/lib/data/emporium";

interface PropertySectionProps {
  data: PropertySectionData;
  className?: string;
}

const PropertySection: React.FC<PropertySectionProps> = ({
  data,
  className = ""
}) => {
  const {
    title,
    description,
    features,
    mainImage,
  } = data;

  return (
    <section className={`w-full py-8 sm:py-12 md:py-16 lg:py-20 xl:py-28 relative overflow-hidden ${className}`}>      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Mobile Layout - Title & Description First */}
        <div className="lg:hidden mb-6 sm:mb-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extralight leading-tight mb-4 sm:mb-6 text-[#51301F] tracking-tight px-2">
              {title}
            </h1>
            
            <p className="text-sm sm:text-base text-[#51301F] leading-relaxed mb-6 sm:mb-8 font-normal px-4 max-w-2xl mx-auto">
              {description}
            </p>
            
            <Link
              href="/contact"
              className="inline-block bg-[#51301F] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-light text-sm sm:text-base border-2 border-[#51301F] transition-colors duration-300 hover:bg-white hover:text-[#51301F] focus:outline-none focus:ring-2 focus:ring-[#51301F] focus:ring-opacity-50"
            >
              Contact Now
            </Link>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row items-stretch gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          
          {/* Desktop Left Side - Content (Hidden on Mobile) */}
          <div className="hidden lg:flex flex-1 max-w-full lg:max-w-2xl flex-col justify-center">
            <div className="text-left">
              <h1 className="text-3xl md:text-4xl font-extralight leading-tight mb-6 md:mb-8 text-[#51301F] tracking-tight">
                {title}
              </h1>
              
              <p className="text-base text-[#51301F] leading-relaxed mb-8 font-normal">
                {description}
              </p>
              
              <Link
                href="/contact"
                className="inline-block bg-[#51301F] text-white  px-8 py-4 rounded-full font-normal text-base border-2 border-[#51301F] transition-colors duration-300 hover:bg-white hover:text-[#51301F] focus:outline-none focus:ring-2 focus:ring-[#51301F] focus:ring-opacity-50"
              >
                Contact Now
              </Link>
            </div>
          </div>
          
          {/* Image Section - Using Aspect Ratios */}
          <div className="flex-1 mb-8 lg:mb-0">
            <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] md:aspect-[16/10]">
              <CldImage
                src={"imgi_8_hQKWW0IAdFbtbRj3GkJkAsKh90_hrdbae"}
                alt={mainImage.alt}
                fill
                className="object-cover"
                priority
                quality={100}
                format="webp"
                dpr={2}
                crop="fill"
                gravity="auto"
                fetchPriority="high"
                flags="progressive"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                loading="eager"
              />
            </div>
          </div>
        </div>
        
        {/* Feature Cards - Full Width Below */}
        <div className="mt-8 sm:mt-12 md:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#51301F] p-4 sm:p-5 lg:p-6 transition-all duration-300 flex flex-col items-center text-center min-h-[180px] sm:min-h-[200px] lg:min-h-[220px] group hover:bg-[#5e3625] hover:shadow-lg"
              >
                <div className="mb-3 sm:mb-4 text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <CldImage
                    src={feature.iconId}
                    alt={feature.title}
                    width={64}
                    height={64}
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 object-contain bg-white rounded-sm p-1 sm:p-2 group-hover:bg-gray-100 transition-colors duration-300"
                    format="webp"
                    quality={95}
                    dpr="auto"
                  />
                </div>
                <h3 className="font-normal text-white text-sm sm:text-base lg:text-lg mb-2 flex-shrink-0 group-hover:text-gray-100 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-white flex-grow group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySection;