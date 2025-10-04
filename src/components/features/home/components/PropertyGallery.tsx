"use client";
import React, { useState, useEffect } from "react";
import { FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";
import { Image } from "@imagekit/next";

const CostaMareHero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "J7 Emp/output (1).webp",
    "Radisson/cb8agvkvjeestx6nrcxt_with_bgc.webp",
    "Rotana/rotana1_with_bgc.webp",
    "J7 Icon/icon2.webp",
  ];

  const propertyTitles = [
    "J7 Emporium",
    "Radisson Blu",
    "Rotana",
    "J7 Icon",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:[80vh] lg:h-screen overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0">
        <Image
          urlEndpoint={process.env.NEXT_PUBLIC_URL_ENDPOINT}
          src={
            heroImages[
              currentImageIndex === 0
                ? heroImages.length - 1
                : currentImageIndex - 1
            ]
          }
          alt="Background"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Current Image with Wind Effect */}
      <motion.div
        key={currentImageIndex}
        initial={{
          clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        }}
        animate={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
        transition={{
          duration: 2,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="absolute inset-0"
      >
        <Image
          urlEndpoint={process.env.NEXT_PUBLIC_URL_ENDPOINT}
          src={heroImages[currentImageIndex]}
          alt={`Property ${currentImageIndex + 1}`}
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
      </motion.div>

      {/* Wind Sweep */}
      <motion.div
        key={`sweep-${currentImageIndex}`}
        initial={{
          x: "100%",
          opacity: 0.8,
        }}
        animate={{
          x: "-20%",
          opacity: 0,
        }}
        transition={{
          duration: 2.5,
          delay: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="absolute inset-y-0 w-20 sm:w-32 bg-gradient-to-r from-transparent via-white/8 to-transparent"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 sm:px-6 md:px-8">
        {/* Logo */}
        <motion.div
          className="mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.div
            className="flex flex-col items-center"
            animate={{ x: [0, 1, -1, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-10 sm:w-12 md:w-14 h-0.5 md:h-1 bg-white mb-1"></div>
            <div className="w-7 sm:w-8 md:w-10 h-0.5 md:h-1 bg-white mb-1"></div>
            <div className="w-5 sm:w-6 md:w-7 h-0.5 md:h-1 bg-white mb-4"></div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-light tracking-widest">
              J7 GROUP
            </h1>
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto"
          key={`title-${currentImageIndex}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight"
            animate={{ x: [0, 0.5, -0.5, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Experience Living at {propertyTitles[currentImageIndex]}
          </motion.h2>
        </motion.div>

        {/* CTA Button */}
        <Link
          className="px-8 py-3 border-2 border-white rounded-full text-white bg-transparent flex items-center gap-3 text-base hover:bg-white hover:text-black transition-all duration-300"
          href="/contact"
        >
          <FiPhone className="w-4 h-4" />
          Enquire Now
        </Link>
      </div>
    </div>
  );
};

export default CostaMareHero;
