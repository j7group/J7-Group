"use client";
import { CldImage } from "next-cloudinary";
import React from "react";

const Awards = () => {
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

  return (
    <div className=" py-16">
      <div className="mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <h2 className="text-4xl lg:text-5xl font-light text-[#51301F] mb-4">
              Awards & Recognitions
            </h2>
          </div>
          
          <div className="max-w-md text-right">
            <p className="text-sm text-left text-[#51301F] font-sans leading-relaxed font-medium">
              Our commitment to design excellence, innovation, and sustainability has been recognized globally. Over the years, we have received numerous prestigious awards for our outstanding contributions to architecture and urban development.
            </p>
          </div>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <div 
              key={index} 
              className="group bg-[#51301F]  p-8 transition-all duration-300 cursor-pointer"
            >
              {/* Logo Container */}
              <div className="mb-8 flex justify-center">
                <div className="w-20 h-36 flex items-center justify-center transition-colors duration-300">
                  <CldImage 
                    src={award.logo}
                    alt={`${award.title} Logo`}
                    width={100}
                    height={100}
                    className="w-20 h-20 object-contain rounded"
                  />
                </div>
              </div>

              {/* Year Badge */}
              <div className="mb-4 flex justify-center">
                <span className="inline-block px-4 py-1 text-xs font-medium text-[#C4A484] border border-[#C4A484] rounded-full group-hover:text-[#D4B494] group-hover:border-[#D4B494] transition-colors duration-300">
                  {award.year}
                </span>
              </div>

              {/* Award Title */}
              <h3 className="text-white text-lg text-center font-light leading-tight group-hover:text-gray-100 transition-colors duration-300">
                {award.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;