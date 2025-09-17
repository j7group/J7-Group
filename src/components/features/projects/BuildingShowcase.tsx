'use client';

import React, { useState, useEffect } from 'react';
import { CldImage } from 'next-cloudinary';
import { UnitType } from '@/lib/apartments/types';
import { propertyConfigurations } from '@/lib/data/apartments';

interface ReusableBuildingShowcaseProps {
  propertyId: string;
  className?: string;
  onEnquireClick?: () => void;
}

const ReusableBuildingShowcase: React.FC<ReusableBuildingShowcaseProps> = ({
  propertyId,
  className = '',
  onEnquireClick
}) => {
  const [showFloorPlan, setShowFloorPlan] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState<UnitType>('Studio');
  const [selectedFloor, setSelectedFloor] = useState<string>('');

  // Get property configuration
  const propertyConfig = propertyConfigurations[propertyId];

  // Move useEffect BEFORE any conditional returns
  useEffect(() => {
    if (propertyConfig && propertyConfig.availableUnits.length > 0 && !propertyConfig.availableUnits.includes(selectedUnit)) {
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

  const { name, backgroundImage, floors, floorPlans, availableUnits } = propertyConfig;

  const handleFloorClick = (floorId: string, floorName: string) => {
    setSelectedFloor(floorName);
    setShowFloorPlan(true);
  };

  const handleEnquireClick = () => {
    if (onEnquireClick) {
      onEnquireClick();
    } else {
      // Default behavior - could be a contact form modal, navigation, etc.
      console.log('Enquiry for:', name, selectedUnit, selectedFloor);
    }
  };

  return (
    <div className={`relative w-full h-[60vh] sm:h-[70vh] md:h-screen min-h-[500px] overflow-hidden ${className}`}>
      {/* Background Image with Enhanced Quality */}
      <CldImage
        src={backgroundImage}
        alt={name}
        fill
        className="object-cover"
        priority
        quality="auto:best"
        format="auto"
        dpr="auto"
        sizes="100vw"
        gravity="auto"
        crop={"fill"}
      />

      {/* Floor Options - Responsive positioning */}
      <div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6 md:left-8 md:bottom-8 space-y-2 sm:space-y-3 md:space-y-4 z-30">
        {floors.map((floor) => (
          <div
            key={floor.id}
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer group"
            onClick={() => handleFloorClick(floor.id, floor.name)}
          >
            {/* Dot - responsive sizing with hover effect */}
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-white/80 bg-transparent group-hover:bg-white/50 transition-colors duration-300" />
            
            {/* Label - responsive text with hover effect */}
            <span className="text-white font-normal text-sm sm:text-base md:text-lg whitespace-nowrap group-hover:text-white/90 transition-colors duration-300">
              {floor.name}
            </span>
          </div>
        ))}
      </div>

      {/* Floor Plan Details Modal - Fully Responsive */}
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
              {selectedFloor}
            </h2>
            
            {/* Unit Type Selector - responsive layout - only show available units */}
            {availableUnits.length > 0 && (
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-4 sm:mb-6">
                {availableUnits.map((unit) => (
                  <button
                    key={unit}
                    onClick={() => setSelectedUnit(unit)}
                    className={`px-3 sm:px-4 py-2 text-xs sm:text-sm border transition-all duration-300 flex-1 sm:flex-none ${
                      selectedUnit === unit
                        ? 'bg-[#51301F] text-white border-gray-900'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-gray-500'
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
                    <span className="font-medium text-gray-600 text-xs sm:text-sm">ROOM</span>
                    <span className="text-gray-900 text-xs sm:text-sm text-right">{floorPlans[selectedUnit].name}</span>
                  </div>
                  
                  {floorPlans[selectedUnit].totalArea !== '0 sq.ft.' && (
                    <div className="flex justify-between py-1 sm:py-1.5 border-b border-gray-200">
                      <span className="font-medium text-gray-600 text-xs sm:text-sm">TOTAL AREA</span>
                      <span className="text-gray-900 text-xs sm:text-sm text-right">{floorPlans[selectedUnit].totalArea}</span>
                    </div>
                  )}
                  
                  {floorPlans[selectedUnit].internal !== '0 sq.ft.' && (
                    <div className="flex justify-between py-1 sm:py-1.5 border-b border-gray-200">
                      <span className="font-medium text-gray-600 text-xs sm:text-sm">INTERNAL</span>
                      <span className="text-gray-900 text-xs sm:text-sm text-right">{floorPlans[selectedUnit].internal}</span>
                    </div>
                  )}
                  
                  {floorPlans[selectedUnit].outdoor !== '0 sq.ft.' && (
                    <div className="flex justify-between py-1 sm:py-1.5 border-b border-gray-200">
                      <span className="font-medium text-gray-600 text-xs sm:text-sm">OUTDOOR</span>
                      <span className="text-gray-900 text-xs sm:text-sm text-right">{floorPlans[selectedUnit].outdoor}</span>
                    </div>
                  )}
                  
                  {floorPlans[selectedUnit].view !== 'N/A' && (
                    <div className="flex justify-between py-1 sm:py-1.5 border-b border-gray-200">
                      <span className="font-medium text-gray-600 text-xs sm:text-sm">VIEW</span>
                      <span className="text-gray-900 text-xs sm:text-sm text-right">{floorPlans[selectedUnit].view}</span>
                    </div>
                  )}
                  
                  {floorPlans[selectedUnit].unitNumber !== 'N/A' && (
                    <div className="flex justify-between py-1 sm:py-1.5 border-b border-gray-200">
                      <span className="font-medium text-gray-600 text-xs sm:text-sm">UNIT NUMBER</span>
                      <span className="text-gray-900 text-xs sm:text-sm text-right">{floorPlans[selectedUnit].unitNumber}</span>
                    </div>
                  )}
                  
                  {floorPlans[selectedUnit].floors !== 'N/A' && (
                    <div className="flex justify-between py-1 sm:py-1.5">
                      <span className="font-medium text-gray-600 text-xs sm:text-sm">FLOORS</span>
                      <span className="text-gray-900 text-xs sm:text-sm text-right">{floorPlans[selectedUnit].floors}</span>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Enquire Button - responsive sizing */}
            <button 
              onClick={handleEnquireClick}
              className="w-full sm:w-auto bg-gray-900 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-gray-800 transition-colors duration-300 text-xs sm:text-sm"
            >
              Enquire Now
            </button>

            {/* Close Button - responsive positioning */}
            <button 
              onClick={() => setShowFloorPlan(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors duration-300 text-lg sm:text-xl"
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