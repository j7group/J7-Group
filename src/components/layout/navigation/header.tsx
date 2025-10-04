// components/RangeNavbar.tsx
"use client";
import React, { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import BackgroundOverlay from "@/components/features/home/components/BackgroundOverlay";
import CTAButton from "@/components/features/home/components/CTAButton";
import DropdownContent from "@/components/features/home/components/DropdownContent";
import DropdownNavItem from "@/components/features/home/components/DropdownNavItem";
import Logo from "@/components/features/home/components/Logo";
import NavLink from "@/components/features/home/components/NavLink";
import { developments, mediaCenter } from "@/lib/data/navbar";
import { DropdownType } from "@/lib/navbar/types";
import Link from "next/link";

const RangeNavbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleDropdownEnter = (dropdownType: DropdownType): void => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(dropdownType);
  };

  const handleDropdownLeave = (): void => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
  };

  const handleMobileDropdownToggle = (dropdownType: DropdownType): void => {
    setActiveDropdown(activeDropdown === dropdownType ? null : dropdownType);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <div className="absolute top-0 left-0 right-0">
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white shadow-xs backdrop-blur-md border-b border-gray-200"
            : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-none px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center h-16 sm:h-18 lg:h-20">
            
            {/* Mobile/Tablet Layout (< 1024px) */}
            <div className="lg:hidden w-full flex items-center">
              {/* Left: Mobile Menu Button - Fixed Width */}
              <div className="w-12 flex justify-start">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`p-2 rounded-md transition-colors duration-300 ${
                    isScrolled
                      ? "text-[#51301F] hover:text-gray-600"
                      : "text-white hover:text-white/80"
                  }`}
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-8 w-8 sm:h-10 sm:w-10 -ml-3" />
                  ) : (
                    <Menu className="h-8 w-8 sm:h-10 sm:w-10 -ml-3" />
                  )}
                </button>
              </div>

              {/* Center: Logo - Flex Grow */}
              <div className="flex-1 flex justify-center">
                <Logo isScrolled={isScrolled} />
              </div>

              {/* Right: CTA Button - Fixed Width */}
              <div className="w-24 sm:w-28 flex justify-end">
                <div className="scale-75 sm:scale-85">
                  <CTAButton isScrolled={isScrolled} />
                </div>
              </div>
            </div>

            {/* Desktop Layout (>= 1024px) */}
            <div className="hidden lg:flex w-full items-center">
              {/* Left Navigation - Fixed Width Container */}
              <div className="w-1/3 flex items-center justify-start">
                <div className="flex items-center space-x-4 xl:space-x-6 2xl:space-x-8">
                  <NavLink href="/about" isScrolled={isScrolled}>
                    About
                  </NavLink>

                  <DropdownNavItem
                    label="Developments"
                    isActive={activeDropdown === "developments"}
                    type="developments"
                    isScrolled={isScrolled}
                    onMouseEnter={() => handleDropdownEnter("developments")}
                    onMouseLeave={handleDropdownLeave}
                  />

                  <DropdownNavItem
                    label="Media Center"
                    isActive={activeDropdown === "media"}
                    type="media"
                    isScrolled={isScrolled}
                    onMouseEnter={() => handleDropdownEnter("media")}
                    onMouseLeave={handleDropdownLeave}
                  />

                  <NavLink href="/villas" isScrolled={isScrolled}>
                    Luxury Villas
                  </NavLink>
                </div>
              </div>

              {/* Center Logo - Fixed Width Container */}
              <div className="w-1/3 flex justify-center">
                <Logo isScrolled={isScrolled} />
              </div>

              {/* Right CTA - Fixed Width Container */}
              <div className="w-1/3 flex justify-end">
                <CTAButton isScrolled={isScrolled} />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Dropdown Content */}
        <div className="hidden lg:block">
          <DropdownContent
            isVisible={activeDropdown === "developments"}
            type="developments"
            sections={developments}
            isScrolled={isScrolled}
            onMouseEnter={() => handleDropdownEnter("developments")}
            onMouseLeave={handleDropdownLeave}
          />

          <DropdownContent
            isVisible={activeDropdown === "media"}
            type="media"
            sections={mediaCenter}
            isScrolled={isScrolled}
            onMouseEnter={() => handleDropdownEnter("media")}
            onMouseLeave={handleDropdownLeave}
          />
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-[999] transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto">
          <div className="px-6 py-8">
            <div className="space-y-1">
              {/* About Link - No Dropdown */}
              <div className="border-b border-gray-100 pb-4 mb-4">
                <Link
                  href="/about"
                  onClick={closeMobileMenu}
                  className="block text-[#51301F] hover:text-gray-600 transition-colors py-3 text-base font-medium"
                >
                  About
                </Link>
              </div>

              {/* Developments Section */}
              <div className="border-b border-gray-100 pb-4 mb-4">
                <button
                  onClick={() => handleMobileDropdownToggle("developments")}
                  className="w-full flex items-center justify-between text-left text-[#51301F] hover:text-gray-600 transition-colors py-3 text-base font-medium"
                >
                  <span>Developments</span>
                  <span className={`transform transition-transform duration-200 text-xs ${
                    activeDropdown === "developments" ? "rotate-180" : ""
                  }`}>
                    +
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${
                  activeDropdown === "developments" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}>
                  <div className="pt-2 space-y-2 pl-4">
                    {developments.map((section) => (
                      <Link
                        key={section.id}
                        href={section.href}
                        onClick={closeMobileMenu}
                        className="block hover:text-[#51301F] transition-colors py-2 text-sm border-b border-[#51301F]"
                      >
                        {section.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Media Center Section */}
              <div className="border-b border-gray-100 pb-4 mb-4">
                <button
                  onClick={() => handleMobileDropdownToggle("media")}
                  className="w-full flex items-center justify-between text-left text-[#51301F] hover:text-gray-600 transition-colors py-3 text-base font-medium"
                >
                  <span>Media Center</span>
                  <span className={`transform transition-transform duration-200 text-xs ${
                    activeDropdown === "media" ? "rotate-180" : ""
                  }`}>
                    +
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${
                  activeDropdown === "media" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}>
                  <div className="pt-2 space-y-2 pl-4">
                    {mediaCenter.map((section) => (
                      <Link
                        key={section.id}
                        href={section.href}
                        onClick={closeMobileMenu}
                        className="block hover:text-[#51301F] transition-colors py-2 text-sm border-b border-[#51301F]"
                      >
                        {section.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Luxury Villas */}
              <div className="border-b border-gray-100 pb-4 mb-4">
                <Link
                  href="/villas"
                  onClick={closeMobileMenu}
                  className="block text-[#51301F] hover:text-gray-600 transition-colors py-3 text-base font-medium"
                >
                  Luxury Villas
                </Link>
              </div>

              {/* Mobile CTA Button - Full Width */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="block w-full text-center bg-[#51301F] text-white border-2 border-[#51301F] hover:bg-white hover:text-[#51301F] transition-all duration-500 px-8 py-3 text-xs font-medium tracking-[0.15em] uppercase rounded-full"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content jump */}
      <div className="h-16 sm:h-18 lg:h-20" />

      {/* Background overlay when dropdown is active on desktop */}
      <BackgroundOverlay isVisible={!!activeDropdown && !isMobileMenuOpen} />
    </div>
  );
};

export default RangeNavbar;