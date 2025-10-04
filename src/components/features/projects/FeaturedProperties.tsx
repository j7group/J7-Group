// pages/properties.tsx
"use client";
import React, { useState } from "react";
import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaLocationPin,
} from "react-icons/fa6";
import Link from "next/link";
import { Image } from "@imagekit/next";

interface Property {
  id: string;
  title: string;
  location: string;
  image: string;
  type?: string;
  sqft?: string;
  year?: string;
  href: string;
}

const properties: Property[] = [
  {
    id: "1",
    title: "J7 Emporium",
    location: "Multi Gardens B-17",
    image: "J7 Emp/Cam_12 final day light.webp",
    type: "Residential",
    sqft: "250,000",
    year: "2023",
    href: "/developments/emporium",
  },
  {
    id: "2",
    title: "Radisson Blu by J7 Group",
    location: "Mumtaz City Islamabad",
    image: "Radisson/bu6bonjx9ob7knrb24gw_with_bgc.webp",
    type: "Commercial",
    sqft: "350,000",
    year: "2024",
    href: "/developments/radisson",
  },
  {
    id: "3",
    title: "Royal Swiss by J7 Group",
    location: "Mumtaz City Islamabad",
    image: "J7 Icon/icon3.webp",
    type: "Residential",
    sqft: "180,000",
    year: "2024",
    href: "/developments/mall",
  },
  {
    id: "4",
    title: "Rotana by J7 Group",
    location: "Top City Islamabad",
    image: "Rotana/rotana2.webp",
    type: "Residential",
    sqft: "220,000",
    year: "2023",
    href: "/developments/rotana",
  },
];

const PropertiesPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProperty = () => {
    setCurrentIndex((prev) => (prev + 1) % properties.length);
  };

  const prevProperty = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + properties.length) % properties.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#51301F] leading-relaxed max-w-2xl mb-6 sm:mb-8">
          Featured Properties
        </h1>
      </header>

      {/* Properties Grid/Swiper */}
      <main className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-12 sm:pb-16 md:pb-20">
        {/* Mobile Swiper */}
        <div className="md:hidden">
          <div className="relative">
            {/* Current Property */}
            <Link
              href={properties[currentIndex].href}
              className="group cursor-pointer relative overflow-hidden block"
            >
              {/* Property Image */}
              <div className="aspect-[6/5] relative mb-3 sm:mb-4">
                <Image
                  urlEndpoint={process.env.NEXT_PUBLIC_URL_ENDPOINT}
                  src={properties[currentIndex].image}
                  alt={properties[currentIndex].title}
                  fill
                  className="h-full object-cover transition-transform duration-700"
                  sizes="100vw"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#51301F] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-center text-white px-4 sm:px-6 md:px-8">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-light mb-3 sm:mb-4">
                      {properties[currentIndex].title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
                      A stylish living experience with green spaces, wellness
                      facilities, and a vibrant neighborhood.
                    </p>
                    <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white cursor-pointer text-[#51301F] rounded-full hover:bg-transparent hover:text-white border border-white transition-all ease-in duration-300 text-sm sm:text-base">
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              {/* Property Info - Now Outside Image */}
              <div className="text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-1 sm:mb-2 text-[#51301F]">
                  {properties[currentIndex].title}
                </h3>
                <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm opacity-70 justify-center text-[#51301F]">
                  <span className="flex items-center gap-1 text-[#51301F]">
                    <FaLocationPin className="text-xs sm:text-sm" />
                    {properties[currentIndex].location}
                  </span>
                </div>
              </div>
            </Link>

            {/* Navigation Arrows */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={prevProperty}
                className="flex items-center justify-center w-12 h-12 bg-[#51301F] text-white rounded-full hover:bg-[#5e3625] transition-colors duration-300 disabled:opacity-50"
                aria-label="Previous property"
              >
                <FaArrowLeftLong className="w-5 h-5" />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {properties.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentIndex
                        ? "bg-[#51301F]"
                        : "bg-transparent border border-[#51301F]"
                    }`}
                    aria-label={`Go to property ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextProperty}
                className="flex items-center justify-center w-12 h-12 bg-[#51301F] text-white rounded-full hover:bg-[#5e3625] transition-colors duration-300 disabled:opacity-50"
                aria-label="Next property"
              >
                <FaArrowRightLong className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {properties.map((property) => (
            <Link
              href={property.href}
              key={property.id}
              className="group cursor-pointer relative overflow-hidden"
            >
              {/* Property Image */}
              <div className="aspect-[6/5] relative mb-3 sm:mb-4">
                <Image
                  urlEndpoint={process.env.NEXT_PUBLIC_URL_ENDPOINT}
                  src={property.image}
                  alt={property.title}
                  fill
                  className="h-full object-cover transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#51301F] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-center text-white px-4 sm:px-6 md:px-8">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-light mb-3 sm:mb-4">
                      {property.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
                      A stylish living experience with green spaces, wellness
                      facilities, and a vibrant neighborhood.
                    </p>
                    <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white cursor-pointer text-[#51301F] rounded-full hover:bg-transparent hover:text-white border border-white transition-all ease-in duration-300 text-sm sm:text-base">
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              {/* Property Info - Now Outside Image */}
              <div className="text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-1 sm:mb-2 text-[#51301F]">
                  {property.title}
                </h3>
                <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm justify-center text-[#51301F]">
                  <span className="flex items-center gap-1 text-[#51301F]">
                    <FaLocationPin className="text-xs sm:text-sm" />
                    {property.location}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PropertiesPage;
