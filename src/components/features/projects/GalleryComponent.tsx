"use client";
import React, { useState, useEffect } from 'react';
import {  Play } from 'lucide-react';
import { CldImage } from 'next-cloudinary';
import { ProjectData } from '@/lib/data/emporium';

type ViewType = 'EXTERIOR' | 'INTERIOR' | 'VIDEO';

interface InteractiveProjectGalleryProps {
  project: ProjectData;
  autoPlayInterval?: number;
  thumbnailCount?: number;
  resumeAutoPlayDelay?: number;
}

/**
 * InteractiveProjectGallery - A comprehensive gallery component for showcasing project images and videos
 */
const InteractiveProjectGallery: React.FC<InteractiveProjectGalleryProps> = ({
  project,
  autoPlayInterval = 5000,
  thumbnailCount = 4,
  resumeAutoPlayDelay = 10000
}) => {
  const [activeView, setActiveView] = useState<ViewType>('EXTERIOR');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Filter images based on active view
  const filteredImages = project.images.filter(img => 
    activeView === 'EXTERIOR' ? img.type === 'exterior' : 
    activeView === 'INTERIOR' ? img.type === 'interior' : 
    true
  );

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || activeView === 'VIDEO' || filteredImages.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [filteredImages.length, isAutoPlaying, activeView, autoPlayInterval]);

  // Reset index when view changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeView]);

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), resumeAutoPlayDelay);
  };

  const handleViewChange = (view: ViewType) => {
    setActiveView(view);
    setIsAutoPlaying(true);
    
    if (view === 'VIDEO' && project.videoUrl) {
      console.log(`Playing video for ${project.name}:`, project.videoUrl);
    }
  };

  // Available views based on project data
  const availableViews: ViewType[] = ['EXTERIOR', 'INTERIOR'];
  if (project.hasVideo || project.videoUrl) {
    availableViews.push('VIDEO');
  }

  return (
    <section className="w-full bg-white">
      {/* Project Title Header */}
      <header className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#51301F] mb-4 sm:mb-6 leading-tight px-2">
            Each and Every Residence, a<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Panorama of the Sea.
          </h2>
          <p className="text-sm sm:text-base max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto leading-relaxed text-[#26140b] font-normal px-4 sm:px-0">
            At {project.name}, contemporary luxury meets panoramic coastal beauty.
            Designed for those with a taste for the extraordinary, this exquisite
            waterfront escape offers modern interiors, sweeping sea views, and an
            effortless connection to Al Marjan Island&apos;s vibrant lifestyle.
          </p>
        </div>
      </div>
      </header>

      {/* Gallery Container */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[95vh] overflow-hidden">
        
        {/* Main Image Display */}
        {activeView !== 'VIDEO' && filteredImages.length > 0 && (
          <div className="absolute inset-0">
            <CldImage
              src={filteredImages[currentImageIndex]?.cloudinaryId}
              alt={filteredImages[currentImageIndex]?.alt || project.name}
              fill
              className="object-cover transition-all duration-1000 ease-in-out"
              priority
              quality={95}
              format="webp"
              dpr="auto"
              sizes="100vw"
              crop="fill"
              gravity="auto"
            />
            {/* Subtle overlay for better UI visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10"></div>
          </div>
        )}

        {/* Video View */}
        {activeView === 'VIDEO' && (
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <div className="text-center text-white px-4">
              <Play className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-4 sm:mb-6 opacity-80" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-light mb-2 sm:mb-3">{project.name}</h3>
              <p className="text-gray-300 text-base sm:text-lg">Video Experience</p>
              {/* Video player would be implemented here */}
            </div>
          </div>
        )}

        {/* View Navigation - Mobile Bottom, Desktop Bottom Center */}
        <nav className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 z-30 px-4 w-full sm:w-auto">
          <div className="flex bg-white/10 rounded-full p-0.5 sm:p-1 items-center justify-center shadow-lg border border-white/20 max-w-full overflow-x-auto">
            {availableViews.map((view) => (
              <button
                key={view}
                onClick={() => handleViewChange(view)}
                className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 cursor-pointer rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-1 sm:space-x-2 whitespace-nowrap flex-shrink-0 ${
                  activeView === view
                    ? 'bg-white text-[#51301F] shadow-lg'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {view === 'VIDEO' && <Play className="w-3 h-3 sm:w-4 sm:h-4" />}
                <span>{view}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Thumbnail Navigation - Responsive positioning */}
        {activeView !== 'VIDEO' && filteredImages.length > 1 && (
          <>
            {/* Desktop - Right side vertical */}
            <div className="hidden md:block absolute right-4 lg:right-6 top-1/2 transform -translate-y-1/2 z-30">
              <div className="flex flex-col space-y-2 lg:space-y-3">
                {filteredImages.slice(0, thumbnailCount).map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => handleThumbnailClick(index)}
                    className={`relative w-16 h-12 lg:w-20 lg:h-14 xl:w-28 xl:h-20 overflow-hidden transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white ${
                      currentImageIndex === index 
                        ? 'ring-2 ring-white shadow-lg transform scale-105' 
                        : 'ring-1 ring-white/30 hover:ring-white/60'
                    }`}
                  >
                    <CldImage
                      src={image.cloudinaryId}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      quality={95}
                      format="webp"
                      crop="fill"
                      gravity="auto"
                    />
                    
                    {/* Active indicator */}
                    {currentImageIndex === index && (
                      <div className="absolute inset-0 bg-white/20 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-white rounded-full shadow-lg"></div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile/Tablet - Bottom horizontal */}
            <div className="block md:hidden absolute bottom-14 sm:bottom-16 left-1/2 transform -translate-x-1/2 z-30 px-4">
              <div className="flex space-x-2 justify-center">
                {filteredImages.slice(0, Math.min(thumbnailCount, 3)).map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => handleThumbnailClick(index)}
                    className={`relative w-12 h-9 sm:w-16 sm:h-12 overflow-hidden transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white ${
                      currentImageIndex === index 
                        ? 'ring-2 ring-white shadow-lg transform scale-105' 
                        : 'ring-1 ring-white/30 hover:ring-white/60'
                    }`}
                  >
                    <CldImage
                      src={image.cloudinaryId}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      quality={"auto:best"}
                      format="webp"
                      crop={"fill"}
                    />
                    
                    {/* Active indicator */}
                    {currentImageIndex === index && (
                      <div className="absolute inset-0 bg-white/20 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full shadow-lg"></div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default InteractiveProjectGallery;