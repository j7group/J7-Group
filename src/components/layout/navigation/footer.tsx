"use client";
import React, { useState, useEffect } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    // Check initial screen size
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/media/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Developments", href: "/developments" },
    { name: "News", href: "/media/news" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ];

  const socialLinks = [
    {
      icon: <FaYoutube size={isLargeScreen ? 20 : 16} />,
      name: "YouTube",
      href: "#",
      color: "hover:text-red-400",
    },
    {
      icon: <FaFacebookF size={isLargeScreen ? 20 : 16} />,
      name: "Facebook",
      href: "#",
      color: "hover:text-blue-400",
    },
    {
      icon: <FaTiktok size={isLargeScreen ? 20 : 16} />,
      name: "TikTok",
      href: "#",
      color: "hover:text-white",
    },
    {
      icon: <FaLinkedinIn size={isLargeScreen ? 20 : 16} />,
      name: "LinkedIn",
      href: "#",
      color: "hover:text-blue-300",
    },
    {
      icon: <FaInstagram size={isLargeScreen ? 20 : 16} />,
      name: "Instagram",
      href: "#",
      color: "hover:text-pink-400",
    },
  ];

  return (
    <>
      <footer className="relative bg-[#51301F] py-12 text-white overflow-hidden">
        {/* Main Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <div className="mb-6 lg:mb-8">
                  <h2 className="text-2xl lg:text-3xl text-white mb-3 lg:mb-4 tracking-wide">
                    J7 GROUP
                  </h2>
                  <div className="text-xs lg:text-sm font-light tracking-wider text-red-100 mb-4 lg:mb-6">
                    DEVELOPMENTS
                  </div>
                </div>

                <p className="text-red-100 leading-relaxed mb-6 lg:mb-8 text-sm lg:text-base">
                  J7 Group, a leading technology and development company,
                  delivers comprehensive solutions for all kinds of development
                  projects, media services, and digital innovation from initial
                  concept through completion and ongoing support.
                </p>
              </div>

              {/* Quick Links */}
              <div className="lg:col-span-1">
                <h3 className="text-base lg:text-lg font-normal mb-4 lg:mb-6 text-white tracking-wide">
                  QUICK LINKS
                </h3>
                <ul className="space-y-1">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-red-100 hover:text-white transition-colors duration-200 text-sm lg:text-base leading-relaxed block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Us */}
              <div className="lg:col-span-1">
                <h3 className="text-base lg:text-lg font-normal text-white mb-4 lg:mb-6 tracking-wide">
                  CONTACT US
                </h3>
                <div className="space-y-3 lg:space-y-4">
                  <div className="flex items-start">
                    <FaPhone
                      className="text-red-200 mt-1 mr-3 flex-shrink-0"
                      size={14}
                    />
                    <div>
                      <a
                        href="tel:+923377777700"
                        className="text-red-100 hover:text-white transition-colors text-sm lg:text-base"
                      >
                        +923377777700
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaEnvelope
                      className="text-red-200 mt-1 mr-3 flex-shrink-0"
                      size={14}
                    />
                    <div>
                      <a
                        href="mailto:info@j7group.com"
                        className="text-red-100 hover:text-white transition-colors text-sm lg:text-base"
                      >
                        info@j7group.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaMapMarkerAlt
                      className="text-red-200 mt-1 mr-3 flex-shrink-0"
                      size={14}
                    />
                    <div>
                      <p className="text-red-100 text-sm lg:text-base leading-relaxed">
                        MR 9, Block C Multi Gardens B-17
                        <br />
                        Islamabad
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Newsletter & Social */}
              <div className="lg:col-span-1">
                <h3 className="text-base lg:text-lg text-white mb-4 lg:mb-6 tracking-wide">
                  SUBSCRIBE TO NEWSLETTER
                </h3>

                {/* Newsletter Form */}
                <div className="mb-4 lg:mb-6">
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      className="flex-1 px-3 lg:px-4  focus:outline-none border border-red-300/30  text-white placeholder-red-200 text-sm lg:text-base backdrop-blur-sm"
                    />
                    <button className="bg-white text-red-800 px-3 lg:px-4 py-2 rounded-r-lg hover:bg-red-50 transition-colors flex items-center justify-center">
                      <span className="text-xl lg:text-2xl">→</span>
                    </button>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-2 lg:space-x-3 mb-4 lg:mb-6">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      className={`w-8 h-8 lg:w-10 lg:h-10 bg-white rounded-lg flex items-center justify-center text-[#51301F] ${social.color} transition-colors duration-200 backdrop-blur-sm border border-red-300/20 hover:border-red-300/40`}
                      title={social.name}
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>

                {/* Channel Partner Button */}
                {/* <button className="w-full bg-white text-red-800 py-2 lg:py-3 px-3 lg:px-4 rounded-lg font-semibold text-xs lg:text-sm tracking-wide hover:bg-red-50 transition-colors">
                  BECOME A CHANNEL PARTNER
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
