// pages/j7-emporium/page.tsx
import ContactFormSection from "@/components/features/home/components/ContactFormSection";
import { Hero } from "@/components/features/home/components/hero-section";
import AmenitiesSection from "@/components/features/projects/AmenitySection";
// import BuildingShowcase from "@/components/features/projects/BuildingShowcase";
import GalleryComponent from "@/components/features/projects/GalleryComponent";
import PropertySection from "@/components/features/projects/PropertySection";
import ResidenceShowcase from "@/components/features/projects/ResidenceShowcase";
import { emporiumDetail, j7EmporiumData, emporiumFeatures } from "@/lib/data/emporium";
import { getAmenitiesByProperty } from "@/lib/data/properties";
import React from "react";
import CarouselGalleryWrapper from "@/components/features/projects/CarouselGalleryWrapper";
import ReusableProgressSection from "@/components/features/projects/ProgressIndicator";
import ReusableBuildingShowcase from "@/components/features/projects/BuildingShowcase";
import GoogleMapsIframe from "@/components/features/contact/components/J7Map";

import type { Metadata } from "next";
import { J7EmporiumStructuredData } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "J7 Emporium - Mixed-Use Development in B-17 Islamabad",
  description: "30-story mixed-use tower featuring luxury apartments, STZA IT zone, commercial shops, and hotel suites. Starting from PKR 18,500/sq.ft.",
  alternates: {
    canonical: "https://j7group.com.pk/developments/emporium"
  },
  openGraph: {
    title: "J7 Emporium - Premium Apartments & Commercial Spaces",
    description: "Explore J7 Emporium's residential, commercial, and STZA IT zone spaces in Multi Garden, B-17 Islamabad.",
    url: "https://j7group.com.pk/developments/emporium",
    images: [{
      url: `https://res.cloudinary.com/diqj8so5h/image/upload/v1/Cam_13_final_day_light_qpbu12`,
      width: 1200,
      height: 630,
      alt: "J7 Emporium - Premium View"
    }]
  }
};

const J7EmporiumPage = () => {
  const propertyAmenities = getAmenitiesByProperty("J7 Emporium");
  // const handleEnquireClick = () => {
  //   // Default behavior - could be a contact form modal, navigation, etc.
  //   console.log("Enquiry for: J7 Emporium");
  // };

  // Fallback data in case Sanity data is not available
  const fallbackProgressData = {
    overall: 85,
    exterior: 90,
    interior: 75,
    infrastructure: 80,
  };

  const fallbackGalleryImages = [
    {
      id: 1,
      cloudinaryPublicId: "construction/j7-emporium/foundation-phase",
      alt: "Foundation construction phase showing concrete work and structural preparation",
      title: "Foundation Work Complete",
      phase: "foundation",
    },
    {
      id: 2,
      cloudinaryPublicId: "construction/j7-emporium/structure-phase",
      alt: "Structural framework and steel beams during construction phase",
      title: "Structure Development",
      phase: "structure",
    },
    {
      id: 3,
      cloudinaryPublicId: "construction/j7-emporium/exterior-phase",
      alt: "Exterior walls, windows and facade work in progress",
      title: "Exterior Work Progress",
      phase: "exterior",
    },
    {
      id: 4,
      cloudinaryPublicId: "construction/j7-emporium/interior-phase",
      alt: "Interior finishing work including flooring and electrical systems",
      title: "Interior Finishing",
      phase: "interior",
    },
    {
      id: 5,
      cloudinaryPublicId: "construction/j7-emporium/landscaping-phase",
      alt: "Landscaping and outdoor areas development around the building",
      title: "Landscaping Development",
      phase: "landscaping",
    },
    {
      id: 6,
      cloudinaryPublicId: "construction/j7-emporium/aerial-view",
      alt: "Aerial view of the complete J7 Emporium construction site",
      title: "Aerial Overview",
      phase: "overview",
    },
  ];

  return (
    <div className="bg-white">
      <J7EmporiumStructuredData />
      <Hero
        isHomePage={false}
        backgroundType="video"
        backgroundSrc="J7EmpNew_rq41tb"
        overlay="light"
        ariaLabel="J7 Emporium Hero section"
        enableAnimations={true}
      />
      <ResidenceShowcase 
      title={emporiumDetail.title}
      description={emporiumDetail.description}
      />
       <ReusableBuildingShowcase 
        propertyId="j7-emporium"
      />

      {/* Conditional rendering based on available amenities */}
      {propertyAmenities && (
        <AmenitiesSection
          propertyName={propertyAmenities.propertyName}
          amenities={propertyAmenities.amenities}
          title={propertyAmenities.title}
          description={propertyAmenities.description}
        />
      )}

      <GalleryComponent project={j7EmporiumData} autoPlayInterval={4000} />
      <PropertySection data={emporiumFeatures} propertyName="J7 Emporium"/>

      {/* Reusable Carousel Gallery - Enhanced with better configuration */}
      <CarouselGalleryWrapper
        propertyName="J7 Emporium"
        fallbackImages={fallbackGalleryImages}
        title="Construction Progress Gallery"
        description="Follow our project development through comprehensive visual documentation"
        imageWidth={1400} // Higher resolution for better quality
        imageHeight={900} // Better aspect ratio
        autoPlay={true} // Enable auto-play functionality
        autoPlayInterval={6000} // 6 seconds between slides
        className="construction-gallery" // Custom CSS class if needed
      />

      {/* Reusable Progress Section - will fetch from Sanity or use fallback */}
      <ReusableProgressSection
        propertyName="J7 Emporium"
        fallbackData={fallbackProgressData}
        title="Construction Progress"
        description="Track our construction milestones and development phases"
      />
      <GoogleMapsIframe />
      <ContactFormSection property="J7 Emporium"/>
    </div>
  );
};

export default J7EmporiumPage;
