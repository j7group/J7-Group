"use client";
import React, { useState, useEffect } from "react";
import StatsSection from "./Stats";
import { Image } from "@imagekit/next";

const J7GroupHero = () => {
  const [, setCurrentImageIndex] = useState(0);

  // Moving strip images (modern architecture and interiors)
  const movingImages = [
    "Events/ach1.jpg",
    "Events/acheivements1.jpg",
    "Events/achievements6.jpg",
    "Events/event (3).webp",
    "Events/ChairmanAch3.jpg",
    "Events/event (5).webp",
    "Events/achievements2.jpg",
    "Events/achievements6.jpg",
    "Events/ach3.jpg",
  ];

  const propertyTitles = ["J7 Emporium", "J7 Mall", "J7 Global", "Top City"];

  const stats = [
    {
      number: "26+",
      label: "Years experience",
      description: "Improving homes with expert craftsmanship for years",
    },
    {
      number: "15+",
      label: "Projects completed",
      description:
        "Over 250 successful projects delivered with quality and care",
    },
    {
      number: "30+",
      label: "Skilled Tradespeople",
      description: "Our team of 30 experts ensures top-quality results",
    },
    {
      number: "100%",
      label: "Client satisfaction",
      description: "All of our clients are satisfied with our work and service",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % propertyTitles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [propertyTitles.length]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden pt-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-coconat text-[#51301F] mb-8 text-center py-12">
        Our Achievements
      </h1>
      {/* Continuously Moving Images Strip */}
      <div className="relative w-full h-[460px] overflow-hidden bg-white ">
        <div
          className="flex h-full animate-moveLeft gap-6"
          style={{
            width: `${movingImages.length * 2 * 384}px`, // 384px = w-96 in pixels
            animation: "moveLeft 30s linear infinite",
          }}
        >
          {/* Duplicate images twice for seamless loop */}
          {[...movingImages, ...movingImages].map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-96 h-full relative group"
            >
              <Image
                urlEndpoint={process.env.NEXT_PUBLIC_URL_ENDPOINT}
                fill
                src={image}
                alt={`Interior ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
      <StatsSection stats={stats} />
      <style jsx>{`
        @keyframes moveLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out 0.5s both;
        }

        .animate-slideUp {
          animation: slideUp 1s ease-out 0.8s both;
        }

        .animate-moveLeft {
          animation: moveLeft 60s linear infinite;
        }

        .animate-moveLeftSlow {
          animation: moveLeftSlow 120s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default J7GroupHero;
