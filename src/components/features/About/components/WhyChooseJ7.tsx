"use client";
import React, { useState } from 'react';
import { CldImage } from 'next-cloudinary';

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

  const features: FeatureCard[] = [
    {
      id: '01',
      title: 'Innovative Design',
      subtitle: 'Thinking',
      image: '/imgi_5_1731504856-landmark_uyckmr',
      hoverTitle: 'Innovative Design Thinking',
      hoverDescription: 'Every project is approached with a fresh perspective, ensuring it is unique'
    },
    {
      id: '02',
      title: 'Sustainability & Smart',
      subtitle: 'Solutions',
      image: '/imgi_7_lYCuLgK59nD3yv4wHA5j21dNg_wh9z7n',
      hoverTitle: 'Sustainability & Smart Solutions',
      hoverDescription: 'Building for the future with eco-friendly materials and smart technology integration'
    },
    {
      id: '03',
      title: 'Client-Centric',
      subtitle: 'Approach',
      image: '/imgi_6_DU68HHzHwr3XjkCZjuAwY6qYzY_dhbfo2', 
      hoverTitle: 'Client-Centric Approach',
      hoverDescription: 'We work closely with clients, understanding their vision and transforming it into reality'
    },
    {
      id: '04',
      title: 'Collaboration',
      subtitle: 'Culture',
      image: '/imgi_49_1730716625-4-nicole-franzen-111-w57th_living-room_028-copy_jp26ry', // Replace with your actual image path
      hoverTitle: 'Collaboration Culture',
      hoverDescription: 'We value collaboration and teamwork, fostering a culture of creativity and innovation'
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex justify-between">
          <h2 className="text-4xl lg:text-5xl font-light text-[#51301F] mb-4 text-left">
            Why Choose J7 Group<br />
            Architects?
          </h2>
        </div>
          {/* Bottom line */}
        <div className=" pt-8 border-t border-[#51301F]" />
  

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="relative group cursor-pointer overflow-hidden h-[460px]"
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
                    hoveredCard === feature.id 
                      ? 'bg-[#51301F]' 
                      : 'bg-black/10'
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
                    <h3 className="text-3xl font-light text-white mb-6 leading-tight">
                      {feature.hoverTitle}
                    </h3>
                    <p className="text-white leading-relaxed font-light">
                      {feature.hoverDescription}
                    </p>
                  </div>
                ) : (
                  // Default State Content
                  <div className="text-center transform transition-all duration-500 ease-out">
                    <h3 className="text-2xl font-light text-white mb-2 leading-tight">
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
      </div>
    </div>
  );
};

export default WhyChooseJ7Group;