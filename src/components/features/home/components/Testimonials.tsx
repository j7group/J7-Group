"use client";

import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Ahmad Hassan",
      role: "Business Owner",
      rating: 5,
      text: "Luxora helped us find the perfect office space for our growing business. Their knowledge of Karachi's commercial properties is exceptional. Highly recommended!",
      property: "Creek Vista Tower",
      location: "DHA Phase 8, Karachi",
      propertyImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=100&h=80&fit=crop",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Fatima Khan",
      role: "Software Engineer", 
      rating: 5,
      text: "Moving from Lahore to Islamabad for work was stressful, but Luxora made house hunting so easy. They found me a beautiful apartment in F-11 within my budget!",
      property: "Centaurus Residency",
      location: "F-11 Markaz, Islamabad",
      propertyImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=100&h=80&fit=crop",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Ali Raza", 
      role: "Teacher",
      rating: 5,
      text: "As a first-time homebuyer, I was overwhelmed by the process. Luxora's team guided me through everything and helped me secure my dream home in Gulberg!",
      property: "Gulberg Heights",
      location: "Gulberg III, Lahore",
      propertyImage: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=100&h=80&fit=crop",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Zara Sheikh",
      role: "Doctor",
      rating: 5,
      text: "Excellent service! I needed a property close to the hospital, and they found me the perfect place in Clifton. Very professional and responsive team.",
      property: "Ocean Towers",
      location: "Clifton Block 5, Karachi",
      propertyImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=100&h=80&fit=crop",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Hassan Ahmed",
      role: "Entrepreneur",
      rating: 5,
      text: "I was looking for an investment property and Luxora provided excellent market insights. Their analysis helped me choose a profitable location in Bahria Town.",
      property: "Bahria Grand City",
      location: "Bahria Town, Rawalpindi",
      propertyImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=100&h=80&fit=crop",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Ayesha Malik",
      role: "Architect",
      rating: 5,
      text: "Being in the construction industry, I'm quite particular about properties. Luxora's attention to detail and understanding of my requirements was impressive.",
      property: "Emaar Canyon Views",
      location: "DHA Phase 2, Islamabad",
      propertyImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100&h=80&fit=crop",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face"
    }
  ];

  // Get 3 consecutive testimonials starting from currentIndex
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const nextTestimonials = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonials = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-3 h-3 sm:w-4 sm:h-4 fill-current ${
              i < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
    );
  };

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="bg-[#51301F] p-6 shadow-lg rounded-sm h-full flex flex-col">
      {/* Customer Info and Rating */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3 min-w-0 flex-1">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-14 h-14 rounded-full object-cover flex-shrink-0"
          />
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-white text-lg truncate">{testimonial.name}</h3>
            <p className="text-sm text-white opacity-90">{testimonial.role}</p>
          </div>
        </div>
        <div className="flex-shrink-0 ml-3">
          <StarRating rating={testimonial.rating} />
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="text-white text-base leading-relaxed flex-grow mb-4">
        &quot;{testimonial.text}&quot;
      </p>

      {/* Property Info */}
      <div className="flex items-center justify-between mt-auto">
        <div className="min-w-0 flex-1 pr-3">
          <h4 className="font-semibold text-white text-base truncate">{testimonial.property}</h4>
          <div className="flex items-center space-x-2 mt-1">
            <MapPin className="w-4 h-4 text-gray-300 flex-shrink-0" />
            <p className="text-sm text-white opacity-90 truncate">{testimonial.location}</p>
          </div>
        </div>
        <img
          src={testimonial.propertyImage}
          alt={testimonial.property}
          className="w-20 h-16 object-cover rounded flex-shrink-0"
        />
      </div>
    </div>
  );

  return (
    <div className="bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#51301F] mb-4 sm:mb-6 leading-tight">
            What Our Happy Clients Say
          </h2>
          <p className="text-[#190d07] text-sm sm:text-base lg:text-lg max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Real Stories From Real Customers! See How We&apos;ve Helped People Find
            <br className="hidden sm:block" />
            Their Dream Homes With Ease And Confidence.
          </p>
        </div>

        {/* Mobile Swiper - Single Card */}
        <div className="lg:hidden mb-8 sm:mb-10">
          <TestimonialCard testimonial={testimonials[currentIndex]} />
          
          {/* Mobile Navigation */}
          <div className="flex items-center justify-center mt-6 gap-x-6">
            <button
              onClick={prevTestimonials}
              className="flex items-center justify-center text-[#51301F] hover:opacity-70 transition-opacity"
              aria-label="Previous testimonial"
            >
              <FaArrowLeftLong className="w-8 h-8" />
            </button>

            <button
              onClick={nextTestimonials}
              className="flex items-center justify-center text-[#51301F] hover:opacity-70 transition-opacity"
              aria-label="Next testimonial"
            >
              <FaArrowRightLong className="w-8 h-8" />
            </button>
          </div>
        </div>

        {/* Desktop Layout - 3 Cards Grid */}
        <div className="hidden lg:block mb-8">
          <div className="grid grid-cols-3 gap-8 min-h-[400px]">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div key={`${testimonial.id}-${currentIndex}-${index}`} className="transform transition-all duration-300 ease-in-out">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-center space-x-8">
          <button 
            onClick={prevTestimonials}
            className="flex items-center justify-center text-[#51301F] hover:opacity-70 transition-opacity p-2"
            aria-label="Previous testimonials"
          >
           <FaArrowLeftLong className="w-8 h-8" />
          </button>
          <button 
            onClick={nextTestimonials}
            className="flex items-center justify-center text-[#51301F] hover:opacity-70 transition-opacity p-2"
            aria-label="Next testimonials"
          >
            <FaArrowRightLong className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;