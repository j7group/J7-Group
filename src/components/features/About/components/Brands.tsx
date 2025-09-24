"use client";
import React from "react";

const BrandCollaborations = () => {
  const brands = [
    { name: "Chaye Khanna", logo: "* Chaaye Khana" },
    { name: "Mini Minors", logo: "* Mini Minors" },
    { name: "Bareeze", logo: "* Bareeze" },
    { name: "Chinyere", logo: "* Chinyere" },
    { name: "Kayseria", logo: "* Kayseria" },
    { name: "Leisure Club", logo: "* Leisure Club" },
    { name: "Rang Ja", logo: "* Rang Ja" },
    { name: "Bareeze Man", logo: "* Bareeze Man" },
    { name: "China Town", logo: "* China Town" },
    { name: "Jade", logo: "* Jade" },
    { name: "Vostro World", logo: "* Vostro World" },
    { name: "Essentia", logo: "* Essentia" },
    { name: "Air Cell", logo: "* Air Cell" },
    { name: "Khas", logo: "* Khas" },
    { name: "Ittehad", logo: "* Ittehad" },
    { name: "Lime Light", logo: "* Lime Light" },
    { name: "The Entertainer", logo: "* The Entertainer" },
    { name: "Edenrobe", logo: "* Edenrobe" },
    { name: "Furor", logo: "* Furor" },
    { name: "Miniso", logo: "* Miniso" },
    { name: "Ndure", logo: "* Ndure" },
    { name: "Imtiaz Cash and Carry", logo: "* Imtiaz" },
    { name: "Mr Baby", logo: "* Mr Baby" },
    { name: "Headrogen", logo: "* Headrogen" },
    { name: "Shapers", logo: "* Shapers" },
    { name: "ARA Associates", logo: "* ARA Associates" },
    { name: "PTCL", logo: "* PTCL" },
    { name: "Nayatel", logo: "* Nayatel" },
    { name: "TEVTA", logo: "* TEVTA" },
    { name: "STZA", logo: "* STZA" },
    { name: "PEB", logo: "* PEB" },
    { name: "ICII", logo: "* ICII" },
    { name: "FPCCI", logo: "* FPCCI" },
  ];

  return (
    <div className="bg-white py-8 sm:py-12 lg:py-16 overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-8">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-[#51301F] mb-4">
              Brand Collaborations
            </h2>
          </div>

          <div className="lg:max-w-md lg:text-right flex-shrink-0">
            <p className="text-xs sm:text-sm text-left text-[#51301F] leading-relaxed font-semibold font-sans">
              Our commitment to design excellence, innovation, and
              sustainability has been recognized globally. Over the years, we
              have received numerous prestigious awards for our outstanding
              contributions to architecture and urban development.
            </p>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="w-full h-[1px] bg-[#51301F]"></div>
        </div>

        {/* Infinite Scrolling Brands */}
        <div className="relative">
          {/* Gradient fade on edges - responsive */}
          <div className="absolute left-0 top-0 w-4 sm:w-8 lg:w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-4 sm:w-8 lg:w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Scrolling Container */}
          <div className="flex">
            <div className="flex animate-scroll-mobile sm:animate-scroll-tablet lg:animate-scroll-desktop">
              {/* First set of brands */}
              {brands.map((brand, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-[#51301F] flex items-center justify-center mx-0.5 sm:mx-1 transition-colors duration-300 cursor-pointer"
                >
                  <span className="text-white font-bold text-xs sm:text-sm lg:text-base text-center px-1 sm:px-2">
                    {brand.logo}
                  </span>
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {brands.map((brand, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-[#51301F] flex items-center justify-center mx-0.5 sm:mx-1 transition-colors duration-300 cursor-pointer"
                >
                  <span className="text-[#C4A484] font-bold font-sans text-xs sm:text-sm lg:text-base text-center px-1 sm:px-2">
                    {brand.logo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation - Responsive */}
      <style jsx>{`
        @keyframes scroll-mobile {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-tablet {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-desktop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-mobile {
          animation: scroll-mobile 40s linear infinite;
          width: calc(100px * ${brands.length * 2}); /* Mobile: 24*4 + 2 margin = 100px per item */
        }

        .animate-scroll-tablet {
          animation: scroll-tablet 35s linear infinite;
          width: calc(136px * ${brands.length * 2}); /* Tablet: 32*4 + 4 margin = 136px per item */
        }

        .animate-scroll-desktop {
          animation: scroll-desktop 30s linear infinite;
          width: calc(164px * ${brands.length * 2}); /* Desktop: 40*4 + 4 margin = 164px per item */
        }

        .animate-scroll-mobile:hover,
        .animate-scroll-tablet:hover,
        .animate-scroll-desktop:hover {
          animation-play-state: paused;
        }

        /* Responsive animation classes */
        @media (max-width: 639px) {
          .animate-scroll-tablet,
          .animate-scroll-desktop {
            animation: scroll-mobile 40s linear infinite;
            width: calc(100px * ${brands.length * 2});
          }
        }

        @media (min-width: 640px) and (max-width: 1023px) {
          .animate-scroll-mobile,
          .animate-scroll-desktop {
            animation: scroll-tablet 35s linear infinite;
            width: calc(136px * ${brands.length * 2});
          }
        }

        @media (min-width: 1024px) {
          .animate-scroll-mobile,
          .animate-scroll-tablet {
            animation: scroll-desktop 30s linear infinite;
            width: calc(164px * ${brands.length * 2});
          }
        }
      `}</style>
    </div>
  );
};

export default BrandCollaborations;