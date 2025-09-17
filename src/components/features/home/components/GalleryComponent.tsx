"use client";
import React, { useState, useEffect, useCallback } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { CldImage } from "next-cloudinary";

// Types
interface CloudinaryImage {
  id: number;
  cloudinaryPublicId: string;
  alt: string;
  title?: string;
  phase?: string;
}

interface ReusableCarouselGalleryProps {
  propertyName: string;
  fallbackImages?: CloudinaryImage[];
  title?: string;
  description?: string;
  className?: string;
  imageWidth?: number;
  imageHeight?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  // Add these props to receive data from server
  images?: CloudinaryImage[];
  galleryTitle?: string;
  galleryDescription?: string;
}

const ReusableCarouselGallery: React.FC<ReusableCarouselGalleryProps> = ({
  propertyName,
  fallbackImages = [],
  title = "Construction Progress Gallery",
  description = "Follow our project development through visual documentation",
  imageWidth = 1200,
  imageHeight = 800,
  autoPlay = false,
  autoPlayInterval = 4000,
  // Server-provided data
  images: serverImages,
  galleryTitle: serverTitle,
  galleryDescription: serverDescription,
}) => {
  // Use server data if available, otherwise fallback
  const images =
    serverImages && serverImages.length > 0 ? serverImages : fallbackImages;
  const galleryTitle = serverTitle || title;
  const galleryDescription = serverDescription || description;

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  
  const nextImage = useCallback((): void => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);
  
  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || images.length <= 1) return;

    const interval = setInterval(() => {
      nextImage();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, currentIndex, autoPlayInterval, images.length, nextImage]);

  const prevImage = useCallback((): void => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToImage = useCallback(
    (index: number): void => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
      setIsPlaying(false); // Stop auto-play when user manually navigates
    },
    [currentIndex]
  );

  const getVisibleImages = useCallback(() => {
    if (images.length === 0)
      return {
        prev: null,
        current: null,
        next: null,
        prevIndex: 0,
        nextIndex: 0,
      };

    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    const nextIndex = (currentIndex + 1) % images.length;

    return {
      prev: images[prevIndex],
      current: images[currentIndex],
      next: images[nextIndex],
      prevIndex,
      nextIndex,
    };
  }, [images, currentIndex]);

  const { prev, current, next, prevIndex, nextIndex } = getVisibleImages();

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98,
    }),
  };

  // Show empty state if no images
  if (!images || images.length === 0) {
    return (
      <div className="relative w-full">
        <div className="text-center py-8 md:py-12 bg-white px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#51301F] mb-4">
            {galleryTitle}
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            No construction images available for {propertyName}
          </p>
        </div>
      </div>
    );
  }

  if (!current) {
    return (
      <div className="relative w-full">
        <div className="text-center py-8 md:py-12 bg-white px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#51301F] mb-4">
            {galleryTitle}
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Loading images...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      {/* Title */}
      <div className="text-center py-8 md:py-12 bg-white px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#51301F] uppercase tracking-wide mb-4">
          {galleryTitle}
        </h1>
        <p className="text-base md:text-lg text-[#51301F] max-w-2xl mx-auto">
          {galleryDescription}
        </p>
      </div>

      {/* Gallery */}
      <div className="relative w-full">
        {/* Mobile Layout */}
        <div className="block md:hidden">
          <div className="relative h-[300px] sm:h-[400px] overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`mobile-${currentIndex}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full h-full absolute inset-0"
              >
                <CldImage
                  src={current.cloudinaryPublicId}
                  alt={current.alt}
                  width={imageWidth}
                  height={imageHeight}
                  className="w-full h-full object-cover"
                  sizes="100vw"
                  quality={90}
                  crop="fill"
                  gravity="center"
                  priority={currentIndex === 0}
                />
                {current.title && (
                  <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-2 rounded">
                    <h3 className="font-medium text-sm">{current.title}</h3>
                    {current.phase && (
                      <p className="text-xs opacity-80 capitalize">
                        {current.phase}
                      </p>
                    )}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop/Tablet Layout */}
        <div className="hidden md:block">
          <div className="relative w-full h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden">
            <div className="flex h-full items-center justify-center gap-1">
              {/* Left Image */}
              {prev && images.length > 1 && (
                <motion.div
                  className="w-1/4 h-full cursor-pointer relative overflow-hidden rounded-l-xl"
                  onClick={() => goToImage(prevIndex)}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <CldImage
                    src={prev.cloudinaryPublicId}
                    alt={prev.alt}
                    width={600}
                    height={1000}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 300px"
                    quality={85}
                    crop="fill"
                    gravity="center"
                  />
                  <div className="absolute inset-0 bg-black/20 transition-colors duration-200"></div>
                  {prev.phase && (
                    <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded capitalize">
                      {prev.phase}
                    </div>
                  )}
                </motion.div>
              )}

              {/* Center Image */}
              <div
                className={`${images.length === 1 ? "w-full" : "w-1/2"} h-full relative overflow-hidden ${images.length === 1 ? "rounded-xl" : ""}`}
              >
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={`desktop-${currentIndex}-${current.cloudinaryPublicId}`}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="w-full h-full absolute inset-0"
                  >
                    <CldImage
                      src={current.cloudinaryPublicId}
                      alt={current.alt}
                      width={2400}
                      height={1920}
                      className="w-full h-full object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      quality={95}
                      crop="fill"
                      gravity="center"
                      priority={true}
                    />
                    {current.title && (
                      <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-2 rounded">
                        <h3 className="font-medium">{current.title}</h3>
                        {current.phase && (
                          <p className="text-sm opacity-80 capitalize">
                            {current.phase}
                          </p>
                        )}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Image */}
              {next && images.length > 1 && (
                <motion.div
                  className="w-1/4 h-full cursor-pointer relative overflow-hidden rounded-r-xl"
                  onClick={() => goToImage(nextIndex)}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <CldImage
                    src={next.cloudinaryPublicId}
                    alt={next.alt}
                    width={600}
                    height={1000}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 300px"
                    quality={"auto:best"}
                    crop="fill"
                    gravity="center"
                  />
                  <div className="absolute inset-0 bg-black/20 transition-colors duration-200"></div>
                  {next.phase && (
                    <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded capitalize">
                      {next.phase}
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <motion.button
              onClick={() => {
                prevImage();
                setIsPlaying(false);
              }}
              className="absolute left-2 md:left-4 lg:left-8 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-2 md:p-3 rounded-full transition-all duration-200 z-30 hover:bg-white/30"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9, x: -2 }}
              aria-label="Previous image"
            >
              <FaArrowLeftLong className="w-4 h-4 md:w-5 md:h-5" />
            </motion.button>

            <motion.button
              onClick={() => {
                nextImage();
                setIsPlaying(false);
              }}
              className="absolute right-2 md:right-4 lg:right-8 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-2 md:p-3 rounded-full transition-all duration-200 z-30 hover:bg-white/30"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9, x: 2 }}
              aria-label="Next image"
            >
              <FaArrowRightLong className="w-4 h-4 md:w-5 md:h-5" />
            </motion.button>
          </>
        )}

        {/* Progress bar (if autoPlay is enabled) */}
        {autoPlay && isPlaying && images.length > 1 && (
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
            <motion.div
              className="h-full bg-white"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: autoPlayInterval / 1000, ease: "linear" }}
              key={currentIndex}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ReusableCarouselGallery;
