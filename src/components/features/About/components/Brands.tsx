"use client";
import React from "react";

const BrandCollaborations = () => {
  const brands = [
    { name: "Acme Corp", logo: ">" },
    { name: "Outside", logo: "Outside" },
    { name: "PULSE", logo: "PULSE" },
    { name: "Quantum", logo: "✦ Quantum" },
    { name: "Celestial", logo: "✱ Celestial" },
    { name: "Echo Valley", logo: "✕ Echo Valley" },
    { name: "Acme Corp", logo: ">" },
    { name: "Outside", logo: "Outside" },
    { name: "PULSE", logo: "PULSE" },
    { name: "Quantum", logo: "✦ Quantum" },
    { name: "Celestial", logo: "✱ Celestial" },
  ];

  return (
    <div className="bg-white py-16 overflow-hidden">
      <div className=" mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-4xl lg:text-5xl font-light text-[#51301F] mb-4">
              Brand Collaborations
            </h2>
          </div>

          <div className="max-w-md text-right">
            <p className="text-sm text-left text-[#51301F] leading-relaxed font-semibold font-sans">
              Our commitment to design excellence, innovation, and
              sustainability has been recognized globally. Over the years, we
              have received numerous prestigious awards for our outstanding
              contributions to architecture and urban development.
            </p>
          </div>
        </div>
        {/* Bottom line */}
        <div className="mb-16">
          <div className="w-full h-[1px] bg-[#51301F]"></div>
        </div>
        {/* Infinite Scrolling Brands */}
        <div className="relative">
          {/* Gradient fade on edges */}
          {/* <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#ECE4D9] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[#ECE4D9] to-transparent z-10"></div> */}

          {/* Scrolling Container */}
          <div className="flex">
            <div className="flex animate-scroll">
              {/* First set of brands */}
              {brands.map((brand, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-32 h-32 bg-[#51301F] flex items-center justify-center mx-1 transition-colors duration-300 cursor-pointer"
                >
                  <span className="text-[#C4A484] font-bold font-sans text-sm text-center px-2">
                    {brand.logo}
                  </span>
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {brands.map((brand, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-32 h-32 bg-[#51301F] flex items-center justify-center mx-1 transition-colors duration-300 cursor-pointer"
                >
                  <span className="text-[#C4A484] font-bold font-sans  text-sm text-center px-2">
                    {brand.logo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: calc(
            136px * ${brands.length * 2}
          ); /* 32 * 4 + 4 margin = 136px per item */
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default BrandCollaborations;
