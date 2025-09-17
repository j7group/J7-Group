"use client";

import React, { useEffect, useState, useRef, useCallback } from 'react';
import Image from 'next/image';

interface CardData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  aiHint: string;
}

const cards: CardData[] = [
  {
    id: 1,
    title: "Discovery & Consultation",
    subtitle: "(Our Approach)",
    description: "We begin by understanding your vision, needs, and aspirations. Through in-depth discussions, site analysis, and feasibility studies, we gather insights that lay the foundation for a well-informed design strategy.",
    image: "https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    aiHint: "architecture design"
  },
  {
    id: 2,
    title: "Design & Planning",
    subtitle: "(Our Approach)",
    description: "Our team translates ideas into innovative architectural concepts. From conceptual sketches to detailed planning, we ensure that every design balances aesthetics, functionality, and sustainability, tailored to your unique requirements.",
    image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    aiHint: "planning concept"
  },
  {
    id: 3,
    title: "Development & Construction",
    subtitle: "(Our Approach)",
    description: "We oversee the construction process with meticulous attention to detail. Our experienced project managers coordinate with contractors and craftsmen to ensure quality execution and timely completion of your project.",
    image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    aiHint: "construction site"
  },
  {
    id: 4,
    title: "Final Delivery & Support",
    subtitle: "(Our Approach)",
    description: "Upon completion, we conduct thorough quality inspections and provide comprehensive handover documentation. Our commitment extends beyond delivery with ongoing support and maintenance guidance.",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    aiHint: "modern interior"
  }
];

export default function ApproachSection() {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    const section = sectionRef.current;
    if (!container || !section) return;

    const rect = section.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    
    // Calculate progress through the section
    const sectionStart = rect.top;
    const sectionHeight = rect.height - viewportHeight;
    
    // Only calculate when section is in view
    if (sectionStart <= 0 && sectionStart > -sectionHeight) {
      const scrollProgress = Math.abs(sectionStart) / sectionHeight;
      const cardProgress = scrollProgress * (cards.length - 1);
      const newActiveCard = Math.round(cardProgress);
      
      setActiveCard(Math.max(0, Math.min(newActiveCard, cards.length - 1)));
    }
  }, []);

  // Throttle scroll events for performance
  useEffect(() => {
    let ticking = false;
    
    const scrollListener = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', scrollListener);
  }, [handleScroll]);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900"
      style={{ height: `${cards.length * 100}vh` }}
    >
      <div 
        ref={containerRef}
        className="sticky top-0 h-screen overflow-hidden"
      >
        {cards.map((card, index) => {
          const isActive = activeCard === index;
          const isPast = index < activeCard;
          // const isFuture = index > activeCard;
          
          return (
            <div
              key={card.id}
              className={`absolute inset-0 w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${
                isActive 
                  ? "opacity-100 translate-y-0 scale-100" 
                  : isPast
                    ? "opacity-0 -translate-y-8 scale-95" 
                    : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{ 
                zIndex: cards.length - Math.abs(index - activeCard),
                transform: `translateY(${isActive ? 0 : isPast ? -20 : 20}px) scale(${isActive ? 1 : 0.95})`
              }}
            >
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16">
                
                {/* Content Side */}
                <div className="relative lg:order-2 flex flex-col items-start lg:items-end text-left lg:text-right">
                  <div className="mb-6 lg:mb-8">
                    <p className="text-amber-200/70 text-sm sm:text-base lg:text-lg mb-2 font-light tracking-wide">
                      {card.subtitle}
                    </p>
                    <h2 className="text-amber-100 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-6 lg:mb-8 font-light leading-tight tracking-tight">
                      {card.title}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-amber-100/90 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md mb-8 font-light">
                    {card.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto lg:justify-end">
                    <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-amber-900 px-6 sm:px-8 py-3 rounded-full text-sm lg:text-base font-semibold hover:from-yellow-300 hover:to-yellow-400 hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 transform hover:scale-105">
                      Buy Template - $89
                    </button>
                    <div className="flex items-center text-amber-100/70 text-sm justify-center lg:justify-end font-light">
                      <span className="mr-2 text-yellow-400">⚡</span>
                      Made in Framer
                    </div>
                  </div>
                </div>

                {/* Image Side */}
                <div className="relative lg:order-1 flex justify-center lg:justify-start">
                  <div className="relative w-full max-w-lg lg:max-w-xl aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-amber-600/20 group">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      data-ai-hint={card.aiHint}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-amber-100 text-xs font-medium">
                      {String(card.id).padStart(2, '0')}
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex space-x-2">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeCard 
                ? 'bg-yellow-400 w-8' 
                : 'bg-amber-100/30 hover:bg-amber-100/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}