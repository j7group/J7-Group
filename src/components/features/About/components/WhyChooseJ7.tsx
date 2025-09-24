"use client";
import React, { useState, useEffect } from "react";
import { CldImage } from "next-cloudinary";

interface FeatureCard {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  hoverTitle: string;
  hoverDescription: string;
}

const WhyChooseJ7Group: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying] = useState(true);

  const features: FeatureCard[] = [
    {
      id: "01",
      title: "Innovative Design",
      subtitle: "Thinking",
      image: "/imgi_5_1731504856-landmark_uyckmr",
      hoverTitle: "Innovative Design Thinking",
      hoverDescription:
        "Every project is approached with a fresh perspective, ensuring it is unique",
    },
    {
      id: "02",
      title: "Sustainability & Smart",
      subtitle: "Solutions",
      image: "/imgi_7_lYCuLgK59nD3yv4wHA5j21dNg_wh9z7n",
      hoverTitle: "Sustainability & Smart Solutions",
      hoverDescription:
        "Building for the future with eco-friendly materials and smart technology integration",
    },
    {
      id: "03",
      title: "Client-Centric",
      subtitle: "Approach",
      image: "/imgi_6_DU68HHzHwr3XjkCZjuAwY6qYzY_dhbfo2",
      hoverTitle: "Client-Centric Approach",
      hoverDescription:
        "We work closely with clients, understanding their vision and transforming it into reality",
    },
    {
      id: "04",
      title: "Collaboration",
      subtitle: "Culture",
      image:
        "/imgi_49_1730716625-4-nicole-franzen-111-w57th_living-room_028-copy_jp26ry",
      hoverTitle: "Collaboration Culture",
      hoverDescription:
        "We value collaboration and teamwork, fostering a culture of creativity and innovation",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === features.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, features.length]);

  return (
    <div className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex justify-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-[#51301F] mb-4 text-center">
            Why Choose J7 Group
          </h2>
        </div>

        {/* Desktop Grid - Hidden on mobile */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-3 mt-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="relative group cursor-pointer overflow-hidden h-[420px] xl:h-[460px]"
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <CldImage
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-in group-hover:scale-110"
                />
                {/* Overlay */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    hoveredCard === feature.id ? "bg-[#51301F]" : "bg-black/10"
                  }`}
                />
              </div>

              {/* Card Number */}
              <div className="absolute top-4 right-4 z-10">
                <span className="text-white/80 text-sm font-medium">
                  ({feature.id})
                </span>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-center items-center z-10">
                {hoveredCard === feature.id ? (
                  // Hover State Content
                  <div className="text-center transform transition-all duration-500 ease-in">
                    <h3 className="text-2xl xl:text-3xl font-light text-white mb-6 leading-tight">
                      {feature.hoverTitle}
                    </h3>
                    <p className="text-white leading-relaxed font-light text-sm xl:text-base">
                      {feature.hoverDescription}
                    </p>
                  </div>
                ) : (
                  // Default State Content
                  <div className="text-center transform transition-all duration-500 ease-out">
                    <h3 className="text-xl xl:text-2xl font-light text-white mb-2 leading-tight">
                      {feature.title}
                      {feature.subtitle && (
                        <>
                          <br />
                          {feature.subtitle}
                        </>
                      )}
                    </h3>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Tablet Grid - 2 columns */}
        <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-3 mt-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="relative group cursor-pointer overflow-hidden h-[380px]"
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <CldImage
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-in group-hover:scale-110"
                />
                {/* Overlay */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    hoveredCard === feature.id ? "bg-[#51301F]" : "bg-black/10"
                  }`}
                />
              </div>

              {/* Card Number */}
              <div className="absolute top-4 right-4 z-10">
                <span className="text-white/80 text-sm font-medium">
                  ({feature.id})
                </span>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-center items-center z-10">
                {hoveredCard === feature.id ? (
                  // Hover State Content
                  <div className="text-center transform transition-all duration-500 ease-in">
                    <h3 className="text-2xl font-light text-white mb-6 leading-tight">
                      {feature.hoverTitle}
                    </h3>
                    <p className="text-white leading-relaxed font-light text-sm">
                      {feature.hoverDescription}
                    </p>
                  </div>
                ) : (
                  // Default State Content
                  <div className="text-center transform transition-all duration-500 ease-out">
                    <h3 className="text-xl font-light text-white mb-2 leading-tight">
                      {feature.title}
                      {feature.subtitle && (
                        <>
                          <br />
                          {feature.subtitle}
                        </>
                      )}
                    </h3>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden mt-8">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {features.map((feature) => (
                <div key={feature.id} className="w-full flex-shrink-0 px-2">
                  <div
                    className="relative cursor-pointer overflow-hidden h-[400px] mx-auto max-w-sm"
                    onClick={() =>
                      setHoveredCard(
                        hoveredCard === feature.id ? null : feature.id
                      )
                    }
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <CldImage
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover transition-transform duration-500 ease-in"
                      />
                      {/* Overlay */}
                      <div
                        className={`absolute inset-0 transition-all duration-500 ${
                          hoveredCard === feature.id
                            ? "bg-[#51301F]"
                            : "bg-black/20"
                        }`}
                      />
                    </div>

                    {/* Card Number */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="text-white/80 text-sm font-medium">
                        ({feature.id})
                      </span>
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-center items-center z-10">
                      {hoveredCard === feature.id ? (
                        // Touch/Click State Content
                        <div className="text-center transform transition-all duration-500 ease-in">
                          <h3 className="text-xl font-light text-white mb-4 leading-tight">
                            {feature.hoverTitle}
                          </h3>
                          <p className="text-white leading-relaxed font-light text-sm">
                            {feature.hoverDescription}
                          </p>
                        </div>
                      ) : (
                        // Default State Content
                        <div className="text-center transform transition-all duration-500 ease-out">
                          <h3 className="text-lg font-light text-white mb-2 leading-tight">
                            {feature.title}
                            {feature.subtitle && (
                              <>
                                <br />
                                {feature.subtitle}
                              </>
                            )}
                          </h3>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseJ7Group;
