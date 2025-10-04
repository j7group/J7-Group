// components/ChairmanMessage.tsx (Updated)
import React from "react";
import { chairmanContent } from "@/lib/data/owner";
import { Image } from "@imagekit/next";

const ChairmanMessage = () => {
  // Split message text by \n\n to create paragraphs
  const messageParagraphs = chairmanContent.message.text.split('\n\n');

  return (
    <div className="py-16 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="flex">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#51301F] leading-tight">
                {chairmanContent.title}
              </h2>
            </div>
                       
            <div className="text-[#22120a] text-sm sm:text-base leading-relaxed">
              <blockquote>
                {messageParagraphs.map((paragraph, index) => (
                  <React.Fragment key={index}>
                    &quot;{paragraph}&quot;
                    {index < messageParagraphs.length - 1 && (
                      <>
                        <br />
                        <br />
                      </>
                    )}
                  </React.Fragment>
                ))}
              </blockquote>
              
              <div className="mt-6">
                <p className="font-semibold">
                  — {chairmanContent.message.attribution.name}
                </p>
                <p className="text-[#51301F] font-medium">
                  {chairmanContent.message.attribution.title}, {chairmanContent.message.attribution.company}
                </p>
              </div>
            </div>
          </div>
           
          {/* Right Column - Image */}
          <div className="relative">
            <div className="aspect-[3/4] sm:aspect-[4/3] lg:aspect-[14/13] w-full overflow-hidden">
              <Image
              urlEndpoint={process.env.NEXT_PUBLIC_URL_ENDPOINT}
                src={chairmanContent.image.src}
                alt={chairmanContent.image.alt}
                className="w-full h-full object-cover"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChairmanMessage;
