"use client";

import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      id: 1,
      name: "Muhammad Kashif",
      role: "Business Owner",
      rating: 5,
      text: "J7 Group delivered beyond expectations! I invested in J7 Emporium for my retail business and the location in B-17 is perfect. The construction quality and timely delivery show their professionalism.",
      property: "J7 Emporium",
      location: "Sector B-17, Islamabad",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Sana Iqbal",
      role: "IT Professional",
      rating: 5,
      text: "After extensive research, I chose Palm Villas for my family. The spacious design, modern amenities, and prime location in B-17 made it an easy decision. J7 Group's reputation for quality is well-deserved!",
      property: "Palm Villas",
      location: "B-17 Multi Gardens, Islamabad",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Ahmed Raza",
      role: "Bank Manager",
      rating: 5,
      text: "As a first-time investor, J7 Group made the entire process smooth and transparent. Their commitment to excellence and timely delivery at J7 Emporium gave me complete confidence in my investment.",
      property: "J7 Emporium",
      location: "Block C, B-17 Islamabad",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Dr. Ayesha Khan",
      role: "Medical Consultant",
      rating: 5,
      text: "The luxurious apartments at J7 Emporium offer everything I need - modern design, excellent location with easy access to GT Road and Motorway, plus world-class amenities. Worth every penny!",
      property: "J7 Emporium Residences",
      location: "B-17 Islamabad",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Tariq Mahmood",
      role: "Entrepreneur",
      rating: 5,
      text: "J7 Group's vision for B-17 is remarkable. I purchased a commercial unit at J7 Emporium and the ROI potential is excellent. Their state-of-the-art facilities and strategic planning make it Islamabad's new business hub.",
      property: "J7 Emporium Commercial",
      location: "B-17 Multi Gardens, Islamabad",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    },
    {
      id: 6,
      name: "Hina Sarfraz",
      role: "Architect",
      rating: 5,
      text: "Being in the construction field, I appreciate J7 Group's attention to architectural excellence and innovative design. Palm Villas showcase their commitment to creating premium lifestyle spaces with top-notch construction standards.",
      property: "Palm Villas",
      location: "B-17 Islamabad",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    },
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
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-3 h-3 sm:w-4 sm:h-4 fill-current ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
    );
  };

  const TestimonialCard = ({
    testimonial,
  }: {
    testimonial: (typeof testimonials)[0];
  }) => (
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
            <h3 className="font-semibold text-white text-lg truncate">
              {testimonial.name}
            </h3>
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
          <h4 className="font-semibold text-white text-base truncate">
            {testimonial.property}
          </h4>
          <div className="flex items-center space-x-2 mt-1">
            <MapPin className="w-4 h-4 text-gray-300 flex-shrink-0" />
            <p className="text-sm text-white opacity-90 truncate">
              {testimonial.location}
            </p>
          </div>
        </div>
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
            Real Stories From Real Customers! See How We&apos;ve Helped People
            Find
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
              <div
                key={`${testimonial.id}-${currentIndex}-${index}`}
                className="transform transition-all duration-300 ease-in-out"
              >
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
