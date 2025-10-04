// ContactForm.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { useContactForm } from "@/hooks/useContactForm";
import { Image } from "@imagekit/next";

const ContactForm = () => {
  const { formData, isSubmitting, handleInputChange, handleSubmit, isFormValid } = useContactForm();

  const propertyOptions = [
    "J7 Emporium",
    "Radisson Blu", 
    "J7 Icon",
    "Rotana",
    "Luxury Villas",
  ];

  return (
    <>
      <Toaster position="top-right" />
      <div className="min-h-screen py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20">
        {/* Header */}
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-light text-[#51301F] mb-2 sm:mb-3 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Get in Touch
          </motion.h2>
          <motion.p
            className="text-xs sm:text-sm md:text-base text-[#201109] font-light text-center px-2 sm:px-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            We&apos;d love to hear from you. Send us a message and we&apos;ll respond as
            soon as possible.
          </motion.p>
        </div>
        
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Left Side - Image */}
          <motion.div
            className="relative aspect-[4/3] w-full order-2 lg:order-1 overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
            urlEndpoint={process.env.NEXT_PUBLIC_URL_ENDPOINT}
              src="Contact/imgi_10_5NlrQffMZNCcGX0kIlwRQpXM.webp"
              alt="Luxury real estate"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            className="w-full flex items-center justify-center order-1"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-full h-full flex items-center">
              {/* Form */}
              <motion.form
                onSubmit={handleSubmit}
                className="w-full space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 px-2 sm:px-4 md:px-6 lg:px-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-0 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base text-[#51301F] placeholder-[#51301F] bg-transparent border-0 border-b border-[#51301F] focus:outline-none focus:border-stone-900 transition-colors duration-300 disabled:opacity-50"
                    required
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="px-0 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base text-[#51301F] placeholder-[#51301F] bg-transparent border-0 border-b border-[#51301F] focus:outline-none focus:border-stone-900 transition-colors duration-300 disabled:opacity-50"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="px-0 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base text-[#51301F] placeholder-[#51301F] bg-transparent border-0 border-b border-[#51301F] focus:outline-none focus:border-stone-900 transition-colors duration-300 disabled:opacity-50"
                  />
                </div>

                {/* Property Interest */}
                <div>
                  <select
                    name="interestedIn"
                    value={formData.interestedIn}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-0 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base text-[#51301F] bg-transparent border-0 border-b border-[#51301F] focus:outline-none focus:border-stone-900 transition-colors duration-300 appearance-none cursor-pointer disabled:opacity-50"
                  >
                    <option value="" className="text-stone-400 bg-white">
                      Property Interest
                    </option>
                    {propertyOptions.map((option, index) => (
                      <option
                        key={index}
                        value={option}
                        className="text-[#51301F] bg-white"
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    rows={4}
                    className="w-full px-0 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base text-[#51301F] placeholder-[#51301F] bg-transparent border-0 border-b border-[#51301F] focus:outline-none focus:border-stone-900 transition-colors duration-300 resize-none sm:rows-5 md:rows-6 disabled:opacity-50"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4 sm:pt-6 md:pt-8">
                  <motion.button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className="group relative w-full py-3 sm:py-4 md:py-4 px-4 sm:px-6 md:px-8 bg-[#51301F] cursor-pointer text-white font-light text-xs sm:text-sm uppercase tracking-widest border border-[#51301F] transition-all duration-300 ease-in hover:bg-transparent hover:text-[#51301F] touch-manipulation disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#51301F] disabled:hover:text-white"
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    <span className="relative z-10">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </span>
                  </motion.button>
                </div>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;