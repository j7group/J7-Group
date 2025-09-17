"use client";
import React, { useState } from "react";
import { CldImage } from "next-cloudinary";
import { motion } from "framer-motion";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    interestedIn: "",
    message: "",
  });

  const propertyOptions = [
    "J7 Emporium",
    "Royal Swiss",
    "Radisson Blu",
    "Rotana",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <CldImage
        src="imgi_1_xhUOxefU5jO3bNObumKRkEZ5KCU_qvjgbx"
        alt="Luxury interior background"
        fill
        className="object-cover"
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
            Unlock Unparalleled Real Estate Opportunities - Let&apos;s Craft Your
            Next Chapter Together.
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
              Contact us
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
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 font-sans rounded-sm bg-white backdrop-blur-sm border-0  focus:outline-none transition-all ease-in text-sm sm:text-base"
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
                className="px-3 sm:px-4 py-2 sm:py-2.5 font-sans rounded-sm bg-white backdrop-blur-sm border-0 text-gray-800  focus:outline-none   transition-all text-sm sm:text-base"
                transition={{ duration: 0.2 }}
              />
              <motion.input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="px-3 sm:px-4 py-2 sm:py-2.5 font-sans rounded-sm bg-white backdrop-blur-sm border-0 text-gray-800  focus:outline-none   transition-all text-sm sm:text-base"
                transition={{ duration: 0.2 }}
              />
            </div>

            {/* Interested In Property */}
            <motion.select
              name="interestedIn"
              value={formData.interestedIn}
              onChange={handleInputChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 font-sans rounded-sm bg-white backdrop-blur-sm border-0 text-gray-800 focus:outline-none   transition-all text-sm sm:text-base"
              transition={{ duration: 0.2 }}
            >
              <option value="">Interested in Property</option>
              {propertyOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </motion.select>

            {/* Message */}
            <motion.textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 font-sans rounded-sm bg-white backdrop-blur-sm border-0  focus:outline-none transition-all resize-none text-sm sm:text-base"
              transition={{ duration: 0.2 }}
            />

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full font-sans rounded-sm hover:bg-transparent hover:border-2 hover:border-white hover:text-white bg-white py-3 sm:py-4 px-6 sm:px-8 font-medium text-xs sm:text-sm uppercase tracking-wider transition-colors ease-in duration-300 cursor-pointer"
              transition={{ duration: 0.2 }}
            >
              SEND
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactFormSection;