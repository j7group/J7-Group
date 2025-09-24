// components/OurStory.tsx
import React from "react";
import CldImage from "../../home/components/Cld-Image";
import { ourStoryContent } from "@/lib/data/story";

const OurStory = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Title with accent border */}
            <div className="flex items-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#51301F] font-light tracking-wide">
                {ourStoryContent.title}
              </h2>
            </div>

            {/* Main story paragraph */}
            <p className="text-sm leading-relaxed">
              {ourStoryContent.mainStory}
            </p>

            {/* Statistics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8">
              {/* Projects Stat */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-[#51301F] tracking-wider uppercase">
                  {ourStoryContent.stats.projects.label}
                </h3>
                <div className="text-4xl lg:text-5xl text-[#51301F] font-light">
                  {ourStoryContent.stats.projects.value}
                </div>
                <p className="text-sm leading-relaxed">
                  {ourStoryContent.stats.projects.description}
                </p>
              </div>

              {/* Developments Stat */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-[#51301F] tracking-wider uppercase">
                  {ourStoryContent.stats.developments.label}
                </h3>
                <div className="text-4xl lg:text-5xl font-light text-[#51301F]">
                  {ourStoryContent.stats.developments.value}
                </div>
                <p className="text-sm leading-relaxed">
                  {ourStoryContent.stats.developments.description}
                </p>
              </div>
            </div>

            {/* Closing statement */}
            <p className="text-sm leading-relaxed pt-4">
              {ourStoryContent.closingStatement}
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="aspect-[4/3] sm:aspect-[14/13] w-full overflow-hidden">
              <CldImage
                src={ourStoryContent.image.src}
                alt={ourStoryContent.image.alt}
                className="w-full h-full object-cover transition-all duration-500"
                fill
              />
            </div>
            {/* Optional overlay text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-medium">J7 Group Heritage</p>
                <p className="text-xs opacity-90">Building Pakistan&apos;s Future Since Foundation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
