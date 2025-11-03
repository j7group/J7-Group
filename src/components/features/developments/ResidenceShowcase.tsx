"use client";
import React from "react";

const Features = ({ 
  title = "A World Beyond Luxury",
  description = "At J7 Group, contemporary luxury meets timeless elegance. Crafted for those with a taste for the extraordinary, these residences blend modern architecture, refined interiors, and an effortless connection to a vibrant lifestyle of prestige and comfort.",
}) => {
  return (
    <div className={`py-12 sm:py-16 md:py-20`}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-[#51301F] mb-4 sm:mb-6 leading-tight px-2"
          >
            {title}
          </h2>
          <p 
            className="text-sm sm:text-base max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-3xl mx-auto leading-relaxed font-normal px-4 sm:px-0"
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;