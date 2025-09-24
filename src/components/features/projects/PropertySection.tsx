"use client";
import React, { useState } from "react";
import CldImage from "../home/components/Cld-Image";
// import Link from "next/link";
import { PropertySectionData } from "@/lib/data/emporium";

interface PropertySectionProps {
  data: PropertySectionData;
  propertyName: string; // Add property name prop for tracking
  className?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const PropertySection: React.FC<PropertySectionProps> = ({
  data,
  propertyName,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [requestType, setRequestType] = useState<"brochure" | "factsheet">(
    "brochure"
  );
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { title, description, mainImage } = data;

  const handleDownloadRequest = (type: "brochure" | "factsheet") => {
    setRequestType(type);
    setShowForm(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create message with property tracking
    // const message = `
    //   Property: ${propertyName}
    //   Request Type: ${requestType === "brochure" ? "Project Brochure" : "Fact Sheet"}
      
    //   Name: ${formData.name}
    //   Email: ${formData.email}
    //   Phone: ${formData.phone}
      
    //   Additional Message:
    //   ${formData.message}
    // `;

    console.log("Form submitted:", {
      property: propertyName,
      requestType,
      ...formData,
    });

    // Here you would typically send this data to your backend
    // For now, we'll just close the form
    alert(
      `Thank you! Your ${requestType === "brochure" ? "Project Brochure" : "Fact Sheet"} request for ${propertyName} has been submitted.`
    );
    setShowForm(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      className={`w-full py-8 sm:py-12 md:py-16 lg:py-20 xl:py-28 relative overflow-hidden`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Main Content Grid - Side by Side Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center order-1">
            <div className="max-w-2xl">
              <h1 className="text-2xl sm:text-3xl font-light leading-tight text-[#51301F] mb-6 lg:mb-8 tracking-tight uppercase">
                {title}
              </h1>

              <div className="space-y-4 mb-8 lg:mb-12">
                <p className="text-sm sm:text-base leading-relaxed font-normal">
                  {description}
                </p>
              </div>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => handleDownloadRequest("brochure")}
                  className="flex items-center gap-3 px-0 py-2 text-[#51301F] transition-colors group"
                >
                  <div className="w-16 h-16 border border-gray-900 flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-colors">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium uppercase tracking-wide">
                      PROJECT BROCHURE
                    </div>
                    <div className="text-xs text-[#51301F] font-semibold tracking-[0.1em] uppercase">
                      DOWNLOAD ↓
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleDownloadRequest("factsheet")}
                  className="flex items-center gap-3 px-0 py-2 text-[#51301F] transition-colors group"
                >
                  <div className="w-16 h-16 border border-gray-900 flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-colors">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium uppercase tracking-wide">
                      FACT SHEET
                    </div>
                    <div className="text-xs text-[#51301F] font-semibold tracking-[0.1em] uppercase">
                      DOWNLOAD ↓
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full aspect-[4/3]">
              <CldImage
                src={mainImage.cloudinaryId}
                alt={mainImage.alt}
                fill
                className="object-cover"
                priority
                quality={100}
                format="webp"
                dpr={2}
                crop="fill"
                gravity="auto"
                fetchPriority="high"
                flags="progressive"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-sm shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-medium text-[#51301F] mb-1">
                    Request{" "}
                    {requestType === "brochure"
                      ? "Project Brochure"
                      : "Fact Sheet"}
                  </h3>
                  <p className="text-sm text-[#51301F] font-bold">
                    Property: {propertyName}
                  </p>
                </div>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4 ">
                <div className="flex items-center justify-between">
                  <div className="">
                    <label className="block text-sm mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-[#51301F] rounded-xs "
                    />
                  </div>

                  <div className="mt-1">
                    <label className="block text-sm">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-[#51301F] rounded-xs focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-[#51301F] rounded-xs"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">
                    Additional Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-[#51301F] rounded-xs focus:border-transparent resize-none"
                    placeholder="Any specific requirements or questions..."
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-[#51301F] cursor-pointer hover:border hover:border-[#51301F] hover:bg-transparent hover:text-[#51301F] text-white py-3 rounded-xs font-medium duration-300 ease-in transition-colors focus:outline-none"
                  >
                    Submit Request
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xs font-medium hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PropertySection;
