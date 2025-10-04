"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Image } from "@imagekit/next";

interface ContactFormSectionProps {
  /**
   * Specific property to show in dropdown. If not provided, shows all properties
   */
  property?: string;
  /**
   * Custom title text. If not provided, uses default title
   */
  title?: string;
  /**
   * Custom background image. If not provided, uses default image
   */
  backgroundImage?: string;
  /**
   * Custom form heading. If not provided, uses "Contact us"
   */
  formHeading?: string;
  /**
   * Additional CSS classes for the container
   */
  className?: string;
  /**
   * Callback function when form is submitted
   */
  onSubmit?: (formData: FormData) => void;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  interestedIn: string;
  message: string;
}

const ContactFormSection: React.FC<ContactFormSectionProps> = ({
  property,
  title = "Unlock Unparalleled Real Estate Opportunities - Let's Craft Your Next Chapter Together.",
  backgroundImage = "Amenities J7 Emp/img4386.jpg",
  formHeading = "Contact us",
  className = "",
  onSubmit,
}) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    interestedIn: property || "", // Pre-select if property prop is passed
    message: "",
  });

  // All available properties
  const allPropertyOptions = [
    "J7 Emporium",
    "Royal Swiss",
    "Radisson Blu",
    "Rotana",
  ];

  // Determine which properties to show based on prop
  const propertyOptions = property ? [property] : allPropertyOptions;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // If custom onSubmit is provided, use it; otherwise use default behavior
    if (onSubmit) {
      onSubmit(formData);
    } else {
      console.log("Form submitted:", formData);
      // You can add default form submission logic here (e.g., API call)
    }
  };

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Background Image */}
      <Image
      urlEndpoint={process.env.NEXT_PUBLIC_URL_ENDPOINT}
        src={backgroundImage}
        alt="Luxury interior background"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-8 lg:py-2.5 gap-8 lg:gap-0">
        
        {/* Left Content */}
        <motion.div
          className="flex-1 max-w-2xl text-center lg:text-left order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-white text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-light leading-tight mb-6 sm:mb-8 px-2 lg:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {title}
          </motion.h1>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          className="flex-1 max-w-xl w-full order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Contact Us Header */}
          <div className="text-center mb-6 sm:mb-8">
            <motion.h2
              className="text-white text-2xl sm:text-3xl font-light mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {formHeading}
            </motion.h2>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-3 sm:space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {/* Full Name */}
            <motion.input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 font-sans rounded-sm bg-white backdrop-blur-sm border-0 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all ease-in text-sm sm:text-base text-gray-800"
              transition={{ duration: 0.2 }}
            />

            {/* Email and Phone Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <motion.input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="px-3 sm:px-4 py-2 sm:py-2.5 font-sans rounded-sm bg-white backdrop-blur-sm border-0 text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-sm sm:text-base"
                transition={{ duration: 0.2 }}
              />
              <motion.input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="px-3 sm:px-4 py-2 sm:py-2.5 font-sans rounded-sm bg-white backdrop-blur-sm border-0 text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-sm sm:text-base"
                transition={{ duration: 0.2 }}
              />
            </div>

            {/* Interested In Property */}
            <motion.select
              name="interestedIn"
              value={formData.interestedIn}
              onChange={handleInputChange}
              disabled={!!property} // Disable if specific property is passed
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 font-sans rounded-sm bg-white backdrop-blur-sm border-0 text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-sm sm:text-base disabled:opacity-100 disabled:cursor-not-allowed"
              transition={{ duration: 0.2 }}
            >
              <option value="">
                {property ? `Interested in ${property}` : "Interested in Property"}
              </option>
              {!property && propertyOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </motion.select>

            {/* Message */}
            <motion.textarea
              name="message"
              placeholder={property ? `Tell us about your interest in ${property}...` : "Tell us about your requirements..."}
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 font-sans rounded-sm bg-white backdrop-blur-sm border-0 text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all resize-none text-sm sm:text-base"
              transition={{ duration: 0.2 }}
            />

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full font-sans rounded-sm hover:bg-transparent hover:border-2 hover:border-white hover:text-white bg-white py-3 sm:py-4 px-6 sm:px-8 font-medium text-xs sm:text-sm uppercase tracking-wider transition-colors ease-in duration-300 cursor-pointer text-gray-800"
              transition={{ duration: 0.2 }}
            >
              {property ? `INQUIRE ABOUT ${property.toUpperCase()}` : "SEND MESSAGE"}
            </motion.button>
          </motion.form>

          {/* Property-specific additional info */}
          {property && (
            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <p className="text-white/80 text-sm">
                Get exclusive details about {property}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactFormSection;