"use client";
import React from "react";
import { CldImage } from "next-cloudinary";

const J7GroupAbout = () => {
  return (
    <div className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-[#FFFFFF]">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 sm:gap-20 md:gap-24 lg:gap-28 items-start">
          {/* Left Content */}
          <div className="space-y-12 sm:space-y-16 w-full lg:max-w-3xl lg:flex-shrink-0 order-2 lg:order-1">
            <div className="">
              <h1 className="text-4xl  mb-4 text-[#51301F] leading-none tracking-tighter">
                About
              </h1>            </div>
            
            <div className="">
              <div className="">
                <p className="text-lg text-[#1a0d06] leading-relaxed font-light max-w-xl">
                  J7 Group is a Dubai-based team of real estate and development
                  specialists. Their mission is to provide clients with a
                  dynamic set of tools to help realize their real estate goals.
                  With an in-depth market knowledge, an impeccable eye for
                  detail, J7 Group sees full efforts into every listing and
                  acquisition — without compromise.
                </p>
              </div>
              
              <div className="">
                <div className="inline-block">
                  <p className="text-2xl text-[#51301F] font-thin italic leading-tight max-w-xl">
                    Premium, bespoke properties & elegance is at the core of J7 Group.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Visual Content */}
          <div className="relative w-full lg:flex-1 order-1 lg:order-2">
            <div className="space-y-3">
              {/* Top two images side by side */}
              <div className="flex gap-3">
                <div className="relative flex-1 h-[150px] sm:h-[180px] md:h-[200px] lg:h-[220px] xl:h-[240px] group overflow-hidden">
                  <div className="absolute inset-0 bg-black/5 z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
                  <CldImage
                    src="imgi_42_1743686885-web-6_qy5uap"
                    alt="J7 Group brochure top left"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-102"
                    quality="auto:best"
                    format="auto"
                    dpr="auto"
                    crop="fill"
                    gravity="auto"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 40vw, (max-width: 1024px) 35vw, (max-width: 1280px) 25vw, 20vw"
                  />
                </div>
                
                <div className="relative flex-1 h-[150px] sm:h-[180px] md:h-[200px] lg:h-[220px] xl:h-[240px] group overflow-hidden">
                  <div className="absolute inset-0 bg-black/5 z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
                  <CldImage
                    src="imgi_60_1730716138-16-nicole-franzen-111-w57th_bedroom-1_013-copy_iux5dy"
                    alt="J7 Group brochure top right"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-102"
                    quality="auto:best"
                    format="auto"
                    dpr="auto"
                    crop="fill"
                    gravity="auto"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 40vw, (max-width: 1024px) 35vw, (max-width: 1280px) 25vw, 20vw"
                  />
                </div>
              </div>
              
              {/* Bottom full width image */}
              <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] group overflow-hidden">
                <div className="absolute inset-0 bg-black/5 z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
                <CldImage
                  src="imgi_43_1743686885-web-4_fcgswq"
                  alt="J7 Group brochure bottom"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-102"
                  priority
                  quality="auto:best"
                  format="auto"
                  dpr="auto"
                  crop="fill"
                  gravity="auto"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw, (max-width: 1280px) 50vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default J7GroupAbout;