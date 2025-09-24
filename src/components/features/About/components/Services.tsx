"use client";
import React from "react";
import { CldImage } from "next-cloudinary";

const services = [
  {
    id: 1,
    title: "Urban Planning & Landscape Architecture",
    description:
      "Comprehensive urban planning solutions that integrate sustainable development principles with innovative landscape design. We create master plans that balance functionality, aesthetics, and environmental responsibility to build thriving communities for the future.",
    number: "(1)",
  },
  {
    id: 2,
    title: "Premium Interior Design Solutions",
    description:
      "Luxury interior design services that transform spaces into sophisticated environments. Our expert team creates bespoke interiors that reflect personal style while maximizing functionality, using premium materials and cutting-edge design concepts. We prioritize comfort, aesthetics, and functionality to deliver exceptional living experiences.",
    number: "(2)",
  },
  {
    id: 3,
    title: "Sustainable & Green Architecture",
    description:
      "Leading the way in eco-friendly architectural solutions with LEED-certified green building practices. We integrate renewable energy systems, sustainable materials, and innovative technologies to create environmentally responsible structures that reduce carbon footprint while enhancing occupant well-being.",
    number: "(3)",
  },
  {
    id: 4,
    title: "Heritage Restoration & Conservation",
    description:
      "Expert restoration services that preserve architectural heritage while adapting historical buildings for modern use. Our specialized team combines traditional craftsmanship with contemporary technology to maintain cultural significance and structural integrity.",
    number: "(4)",
  },
  {
    id: 5,
    title: "Construction & Project Management",
    description:
      "End-to-end project management services ensuring seamless execution from concept to completion. Our experienced team coordinates all aspects of construction, maintaining quality standards, timeline adherence, and budget control throughout the entire building process.",
    number: "(5)",
    hasButton: true,
  },
  {
    id: 6,
    title: "3D Visualization & BIM Technology",
    description:
      "Advanced 3D modeling and Building Information Modeling (BIM) services that bring architectural visions to life. We utilize cutting-edge technology to create detailed visualizations, virtual walkthroughs, and precise architectural models for enhanced design validation and client presentation.",
    number: "(6)",
    hasButton: true,
  },
];

const Services: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <CldImage
          src="img3088_papmhn"
          alt="Modern architecture background showcasing innovative design"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 sm:bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white">
        {/* Main Content */}
        <main className="px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight pt-8">
              Unveiling Design
              <br />
              Excellence—See What
              <br />
              We Offer
            </h1>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
            {services.map((service) => (
              <div
                key={service.id}
                className={`group cursor-pointer border border-white/20 min-h-[200px] sm:min-h-[250px] lg:min-h-[300px]`}
              >
                <div className="h-full p-4 sm:p-5 lg:p-6 flex flex-col justify-between transition-all duration-300 group-hover:bg-[#7A3110] relative">
                  <div className="flex justify-between items-start mb-4 sm:mb-6">
                    <span className="text-xs sm:text-sm opacity-70 font-medium">
                      {service.number}
                    </span>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="px-3 sm:px-4 py-1 bg-white/20 hover:bg-white/30 rounded-full text-xs transition-colors duration-200">
                        Services
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col justify-end">
                    <h3 className="text-base sm:text-lg lg:text-xl mb-3 sm:mb-4 font-medium leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base opacity-0 group-hover:opacity-90 transition-opacity duration-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional spacing for mobile */}
          <div className="h-8 sm:h-12 lg:h-16"></div>
        </main>
      </div>
    </div>
  );
};

export default Services;
