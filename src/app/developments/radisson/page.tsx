import ContactFormSection from "@/components/features/home/components/ContactFormSection";
import { Hero } from "@/components/features/home/components/hero-section";
import AmenitiesSection from "@/components/features/projects/AmenitySection";
import BuildingShowcase from "@/components/features/projects/BuildingShowcase";
import CarouselGalleryWrapper from "@/components/features/projects/CarouselGalleryWrapper";
import GalleryComponent from "@/components/features/projects/GalleryComponent";
import ReusableProgressSection from "@/components/features/projects/ProgressIndicator";
import PropertySection from "@/components/features/projects/PropertySection";
import MapLocation from "@/components/features/projects/radisson/Map";
import ResidenceShowcase from "@/components/features/projects/ResidenceShowcase";
import { getAmenitiesByProperty } from "@/lib/data/properties";
import { radissonData, radissonDetail, radissonFeatures } from "@/lib/data/radisson";
import React from "react";

const page = () => {
  const propertyAmenities = getAmenitiesByProperty("Radisson");
  
  console.log(propertyAmenities);
  return (
    <div className="bg-white">
      <Hero
        isHomePage={false}
        backgroundType="video"
        backgroundSrc="Render_animation_desktop_zqweot"
        overlay="light"
        ariaLabel="Hero section"
        enableAnimations={true}
      />
      <ResidenceShowcase 
      title={radissonDetail.title}
      description={radissonDetail.description}
      />
      <BuildingShowcase 
      propertyId="radisson"
      />
      {/* Conditional rendering based on available amenities */}
      {propertyAmenities && (
        <AmenitiesSection
          propertyName={propertyAmenities.propertyName}
          amenities={propertyAmenities.amenities}
          title={propertyAmenities.title}
          description={propertyAmenities.description}
        />
      )}{" "}
      <GalleryComponent 
      project={radissonData}
      autoPlayInterval={4000}
      />
      <PropertySection data={radissonFeatures}/>
      
         <CarouselGalleryWrapper
        propertyName="Radisson"
        // fallbackImages={fallbackGalleryImages}
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
        propertyName="Radisson"
        // fallbackData={fallbackProgressData}
        title="Construction Progress"
        description="Track our construction milestones and development phases"
      />
      <MapLocation />

      <ContactFormSection />
    </div>
  );
};

export default page;
