"use client";

import React, { useState, useEffect } from "react";
import { CldImage } from "next-cloudinary";
import { UnitType, PropertyData } from "@/lib/apartments/types";
import { propertyConfigurations } from "@/lib/data/apartments";
import { Image } from "@imagekit/next";

interface ReusableBuildingShowcaseProps {
  propertyId: string;
  className?: string;
}

const ReusableBuildingShowcase: React.FC<ReusableBuildingShowcaseProps> = ({
  propertyId,
  className = "",
}) => {
  const [showFloorPlan, setShowFloorPlan] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState<UnitType>("Studio");

  // Get property configuration from propertyConfigurations
  const propertyConfig: PropertyData | undefined =
    propertyConfigurations[propertyId];

  // Move useEffect BEFORE any conditional returns
  useEffect(() => {
    if (
      propertyConfig &&
      propertyConfig.availableUnits.length > 0 &&
      !propertyConfig.availableUnits.includes(selectedUnit)
    ) {
      setSelectedUnit(propertyConfig.availableUnits[0]);
    }
  }, [propertyConfig, selectedUnit]);

  // Conditional return AFTER all hooks
  if (!propertyConfig) {
    console.warn(`Property configuration not found for: ${propertyId}`);
    return (
      <div className="flex items-center justify-center h-64 bg-gray-100">
        <p className="text-gray-600">Property configuration not found</p>
      </div>
    );
  }

  const { name, backgroundImage, floorPlans, availableUnits } = propertyConfig;

  const handleUnitClick = (unitType: string) => {
    setSelectedUnit(unitType as UnitType);
    setShowFloorPlan(true);
  };

  return (
    <div
      className={`relative w-full h-[60vh] sm:h-[70vh] md:h-screen min-h-[500px] overflow-hidden ${className}`}
    >
      {/* Background Image with Enhanced Quality */}
      <Image
        urlEndpoint={process.env.NEXT_PUBLIC_URL_ENDPOINT}
        src={backgroundImage}
        alt={name}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Unit Type Options - Listed as column on left bottom */}
      <div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6 md:left-8 md:bottom-8 space-y-2 sm:space-y-3 md:space-y-4 z-30">
        {availableUnits.map((unitType) => (
          <div
            key={unitType}
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer group"
            onClick={() => handleUnitClick(unitType)}
          >
            {/* Dot - responsive sizing with hover effect */}
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-white/80 bg-transparent group-hover:bg-white/50 transition-colors duration-300" />

            {/* Label - responsive text with hover effect */}
            <span className="text-white font-normal text-sm sm:text-base md:text-lg whitespace-nowrap group-hover:text-white/90 transition-colors duration-300">
              {unitType}
            </span>
          </div>
        ))}
      </div>

      {/* Floor Plan Details Modal - Simplified */}
      {showFloorPlan && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-40 p-4"
          onClick={() => setShowFloorPlan(false)}
        >
          <div
            className="bg-white p-4 sm:p-6 rounded-lg shadow-2xl relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title - responsive sizing */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-[#51301F] mb-3 sm:mb-4 pr-8">
              {selectedUnit}
            </h2>

            {/* Unit Type Selector - responsive layout - only show available units */}
            {availableUnits.length > 1 && (
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                {availableUnits.map((unit) => (
                  <button
                    key={unit}
                    onClick={() => setSelectedUnit(unit)}
                    className={`px-3 sm:px-4 py-2 text-xs sm:text-sm border transition-all duration-300 ${
                      selectedUnit === unit
                        ? "bg-[#51301F] text-white"
                        : "bg-white border-[#51301F] text-[#51301F]"
                    }`}
                  >
                    {unit}
                  </button>
                ))}
              </div>
            )}

            {/* Floor Plan Details - responsive spacing and text */}
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              {/* Only show non-zero/non-N/A values */}
              {floorPlans[selectedUnit] && (
                <>
                  <div className="flex justify-between py-1 sm:py-1.5 border-b border-gray-200">
                    <span className="font-medium text-xs sm:text-sm">
                      UNIT TYPE
                    </span>
                    <span className="text-xs sm:text-sm text-right">
                      {floorPlans[selectedUnit].name}
                    </span>
                  </div>

                  {floorPlans[selectedUnit].totalArea !== "0 sq.ft." &&
                    floorPlans[selectedUnit].totalArea !== "N/A" && (
                      <div className="flex justify-between py-1 sm:py-1.5 border-b border-gray-200">
                        <span className="font-medium text-xs sm:text-sm">
                          TOTAL AREA
                        </span>
                        <span className="text-xs sm:text-sm text-right">
                          {floorPlans[selectedUnit].totalArea}
                        </span>
                      </div>
                    )}

                  {floorPlans[selectedUnit].rate !== "N/A" &&
                    floorPlans[selectedUnit].rate && (
                      <div className="flex justify-between py-1 sm:py-1.5 border-b border-gray-200">
                        <span className="font-medium text-xs sm:text-sm">
                          RATE PER SQ.FT
                        </span>
                        <span className=" text-xs sm:text-sm text-right font-semibold text-[#51301F]">
                          {floorPlans[selectedUnit].rate}
                        </span>
                      </div>
                    )}

                  {floorPlans[selectedUnit].unitNumber !== "N/A" &&
                    floorPlans[selectedUnit].unitNumber && (
                      <div className="flex justify-between py-1 sm:py-1.5 border-b border-gray-200">
                        <span className="font-medium text-xs sm:text-sm">
                          AVAILABILITY
                        </span>
                        <span className="text-xs sm:text-sm text-right">
                          {floorPlans[selectedUnit].unitNumber}
                        </span>
                      </div>
                    )}

                  {floorPlans[selectedUnit].floors !== "N/A" &&
                    floorPlans[selectedUnit].floors && (
                      <div className="flex justify-between py-1 sm:py-1.5 border-b border-gray-200">
                        <span className="font-medium text-xs sm:text-sm">
                          FLOORS
                        </span>
                        <span className="text-xs sm:text-sm text-right">
                          {floorPlans[selectedUnit].floors}
                        </span>
                      </div>
                    )}
                </>
              )}
            </div>

            {/* Close Button - responsive positioning */}
            <button
              onClick={() => setShowFloorPlan(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-[#51301F] hover:text-gray-900 transition-colors duration-300 text-lg sm:text-xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReusableBuildingShowcase;
