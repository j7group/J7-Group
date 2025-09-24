"use client";
import { CldImage } from "next-cloudinary";
import React, { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Awards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const awards = [
    {
      year: "2021",
      title: "Business Excellence Award From President Of Pakistan | Dr Arif Alvi",
      logo: "imgi_31_Vji1faKB5MrEoKLLjb6nBRRUDA_skw84g"
    },
    {
      year: "2023", 
      title: "Best Sustainable Architecture Firm",
      logo: "imgi_30_ADlIphUowsyADZQM0XQkocqaEK4_a9hydf"
    },
    {
      year: "2022",
      title: "Urban Design Excellence Award", 
      logo: "imgi_29_6WqoaxtEikAfd5t5wlELdCmSE_uyz4eu" 
    },
    {
      year: "2022",
      title: "Luxury Living Design Award",
      logo: "imgi_13_SStfFEYvzlt3abHcGd5j7BgYIM_gvnn3q"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === awards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? awards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="py-8 sm:py-12 lg:py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-8 sm:mb-10 lg:mb-12 gap-6 lg:gap-8">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-[#51301F] mb-4">
              Awards & Recognitions
            </h2>
          </div>
          
          <div className="lg:max-w-md lg:text-right flex-shrink-0">
            <p className="text-xs sm:text-sm text-left text-[#51301F] font-sans leading-relaxed font-medium">
              Our commitment to design excellence, innovation, and sustainability has been recognized globally. Over the years, we have received numerous prestigious awards for our outstanding contributions to architecture and urban development.
            </p>
          </div>
        </div>

        {/* Awards Grid - Desktop and Tablet */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="group bg-[#51301F] p-6 lg:p-8 transition-all duration-300 w-full h-80 lg:h-96 flex flex-col justify-between"
            >
              {/* Logo Container */}
              <div className="flex-1 flex justify-center items-center mb-4">
                <div className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center transition-colors duration-300">
                  <CldImage 
                    src={award.logo}
                    alt={`${award.title} Logo`}
                    width={100}
                    height={100}
                    className="w-full h-full object-contain rounded"
                  />
                </div>
              </div>

              {/* Year Badge */}
              <div className="mb-4 flex justify-center">
                <span className="inline-block px-3 py-1 lg:px-4 lg:py-1 text-xs font-medium text-[#C4A484] border border-[#C4A484] rounded-full group-hover:text-[#D4B494] group-hover:border-[#D4B494] transition-colors duration-300">
                  {award.year}
                </span>
              </div>

              {/* Award Title */}
              <h3 className="text-white text-sm lg:text-lg text-center font-light leading-tight group-hover:text-gray-100 transition-colors duration-300 min-h-[3rem] lg:min-h-[4rem] flex items-center justify-center">
                {award.title}
              </h3>
            </div>
          ))}
        </div>

        

        {/* Mobile Slider */}
        <div className="md:hidden">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className="group bg-[#51301F] p-6 transition-all duration-300 cursor-pointer w-full h-80 flex flex-col justify-between mx-auto max-w-sm">
                    {/* Logo Container */}
                    <div className="flex-1 flex justify-center items-center mb-4">
                      <div className="w-16 h-16 flex items-center justify-center transition-colors duration-300">
                        <CldImage 
                          src={award.logo}
                          alt={`${award.title} Logo`}
                          width={100}
                          height={100}
                          className="w-full h-full object-contain rounded"
                        />
                      </div>
                    </div>

                    {/* Year Badge */}
                    <div className="mb-4 flex justify-center">
                      <span className="inline-block px-3 py-1 text-xs font-medium text-[#C4A484] border border-[#C4A484] rounded-full group-hover:text-[#D4B494] group-hover:border-[#D4B494] transition-colors duration-300">
                        {award.year}
                      </span>
                    </div>

                    {/* Award Title */}
                    <h3 className="text-white text-sm text-center font-light leading-tight group-hover:text-gray-100 transition-colors duration-300 min-h-[3rem] flex items-center justify-center">
                      {award.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

         {/* Mobile Navigation Controls */}
        <div className="flex justify-center gap-4 items-center mt-6 md:hidden">
          <button 
            onClick={prevSlide}
            className="p-3 rounded-full text-[#51301F] transition-colors duration-300 cursor-pointer"
            aria-label="Previous award"
          >
            <FaArrowLeftLong size={28} />
          </button>
          <button 
            onClick={nextSlide}
            className="p-3 rounded-full text-[#51301F] transition-colors duration-300 cursor-pointer"
            aria-label="Next award"
          >
            <FaArrowRightLong size={28} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Awards;