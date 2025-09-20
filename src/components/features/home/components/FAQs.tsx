"use client";
import { CldImage } from 'next-cloudinary';
import React, { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

const FAQsSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
  {
    id: 1,
    question: "How long has J7 Group been operating in Pakistan's construction industry?",
    answer: "J7 Group has been a leading name in Pakistan's real estate and construction industry for over 30 years. Since our establishment, we have built a reputation for delivering exceptional projects that transform spaces into outstanding destinations. Our three decades of experience have made us one of Islamabad's most trusted real estate developers and construction companies."
  },
  {
    id: 2,
    question: "What makes J7 Group's hotel projects unique in Islamabad?",
    answer: "J7 Group's hotel projects, including J7 Signature Hotels and Royal Swiss Islamabad, epitomize a fusion of international hospitality standards with our enduring legacy of excellence. We have partnerships with renowned brands like Radisson for upcoming hotels in Islamabad, offering investors hassle-free, high-return investment opportunities in luxury hospitality properties that meet 5-star deluxe standards."
  },
  {
    id: 4,
    question: "Does J7 Group offer investment opportunities in Islamabad real estate?",
    answer: "Yes, J7 Group provides excellent investment opportunities across our diverse portfolio of residential, commercial, and hospitality projects in Islamabad. Our developments, including J7 Emporium, Royal Swiss Islamabad, and upcoming Radisson hotels, offer high-return investment potential with flexible payment plans and guaranteed rental yields for investors seeking premium real estate opportunities in Pakistan's capital."
  },
  {
    id: 6,
    question: "How does J7 Group ensure customer satisfaction in their real estate projects?",
    answer: "J7 Group's customer-centric approach sets us apart in Pakistan's real estate market. We prioritize open communication, accommodate client requests, and maintain transparency from initial consultation to final handover. Our dedicated customer service team ensures stress-free experiences, timely project delivery, and comprehensive after-sales support, making us a trusted choice for property buyers and investors in Islamabad."
  },
  {
    id: 7,
    question: "What amenities can residents expect in J7 Group's residential projects?",
    answer: "J7 Group's residential developments feature world-class amenities including modern fitness centers, swimming pools, landscaped gardens, 24/7 security systems, backup power generation, covered parking, children's play areas, and community centers. Our luxury projects like J7 Emporium also include retail spaces, restaurants, and premium services that enhance the lifestyle experience for residents."
  },
  {
    id: 8,
    question: "Does J7 Group develop projects outside Islamabad in Pakistan?",
    answer: "Yes, besides our flagship projects in Islamabad, J7 Group has expanded to other premium locations including Murree, where we've developed Signature Resort featuring luxury villas, suites, and chalets in the scenic Murree valley. We continue to explore opportunities across Pakistan's major cities while maintaining our focus on delivering exceptional real estate and hospitality projects."
  },
  {
    id: 9,
    question: "What payment plans does J7 Group offer for property purchases?",
    answer: "J7 Group offers flexible and convenient payment plans tailored to meet diverse financial needs of our clients. Our payment structures include easy installment options, down payment flexibility, and customized financing solutions for residential, commercial, and investment properties. We work with leading financial institutions to provide accessible payment options that make premium real estate ownership achievable for our valued customers."
  }
];

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#51301F] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#51301F] leading-relaxed font-light max-w-2xl mx-auto px-4 sm:px-0">
            Get answers to the most common questions about J7 Group&apos;s construction services, 
            processes, and commitment to excellence.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-x-6 sm:gap-x-8 lg:gap-x-12">
          {/* Left Side - Single Full Height Image */}
          <div className="lg:w-1/2 order-2 lg:order-1 mb-8 lg:mb-0">
            <div className="relative group overflow-hidden h-64 sm:h-80 lg:h-full lg:min-h-[600px]">
              <CldImage
                src="imgi_9_7i6IELAZjs38Kk7pbY6PuCgJiY_zgr6an"
                fill
                alt="J7 Group Construction Project"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Side - FAQs */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="space-y-0">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="border-b border-gray-200"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-0 py-4 sm:py-6 text-left flex justify-between items-start hover:bg-gray-50/30 transition-colors duration-200 cursor-pointer bg-white border-b-2 border-[#51301F]"
                  >
                    <h3 className="text-sm sm:text-base font-medium text-[#51301F] pr-4 leading-relaxed flex-1">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 mt-1">
                      {openFAQ === faq.id ? (
                        <HiChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#51301F]" />
                      ) : (
                        <HiChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#51301F]" />
                      )}
                    </div>
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFAQ === faq.id
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pb-4 sm:pb-6">
                      <p className="text-[#51301F] leading-relaxed text-xs sm:text-sm">
                        {faq.answer}
                      </p>
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

export default FAQsSection;