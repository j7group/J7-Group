// components/Owner.tsx (Updated)
import React from "react";
import { ownerContent } from "@/lib/data/owner";
import { Image } from "@imagekit/next";

const Owner = () => {
  return (
    <div className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 sm:space-y-8 order-1">
            <div className="flex">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#51301F] leading-tight">
                {ownerContent.title}
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {ownerContent.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[#22120a] text-sm sm:text-base leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quote Highlight */}
            <div className="bg-[#51301F] text-white p-4 sm:p-6">
              <blockquote className="text-sm sm:text-base italic leading-relaxed">
                &quot;{ownerContent.quote.text}&quot;
              </blockquote>
              <cite className="text-xs text-white sm:text-sm opacity-80 mt-2 block">
                — {ownerContent.quote.author}, {ownerContent.quote.position}
              </cite>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative order-1 lg:order-2">
            <div className="aspect-[3/4] sm:aspect-[4/3] lg:aspect-[14/13] w-full overflow-hidden">
              <Image
                urlEndpoint={process.env.NEXT_PUBLIC_URL_ENDPOINT}
                src={ownerContent.image.src}
                alt={ownerContent.image.alt}
                className="w-full h-full object-cover transition-transform duration-300"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Owner;
