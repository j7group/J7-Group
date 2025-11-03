import ContactFormSection from "@/components/features/home/components/ContactFormSection";
import { Hero } from "@/components/features/home/components/hero-section";
import AmenitiesSection from "@/components/features/developments/AmenitySection";
import BuildingShowcase from "@/components/features/developments/BuildingShowcase";
import CarouselGalleryWrapper from "@/components/features/developments/CarouselGalleryWrapper";
import GalleryComponent from "@/components/features/developments/GalleryComponent";
import ReusableProgressSection from "@/components/features/developments/ProgressIndicator";
import PropertySection from "@/components/features/developments/PropertySection";
import MapLocation from "@/components/features/developments/radisson/Map";
import ResidenceShowcase from "@/components/features/developments/ResidenceShowcase";
import { RadissonBluStructuredData } from "@/components/seo/StructuredData";
import { getAmenitiesByProperty } from "@/lib/data/properties";
import { radissonData, radissonDetail, radissonFeatures } from "@/lib/data/radisson";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Radisson Blu Hotel & Residences Islamabad",
  description: "15-story 5-star Radisson Blu hotel and residences at Mumtaz City, Srinagar Highway. Premium international hospitality and branded residences.",
  alternates: {
    canonical: "https://j7group.com.pk/developments/radisson"
  },
  openGraph: {
    title: "Radisson Blu Hotel & Residences - 5-Star Living",
    description: "Experience world-class Radisson Blu standards in Islamabad's premier location.",
    url: "https://j7group.com.pk/developments/radisson",
    images: [{
      url: "https://res.cloudinary.com/diqj8so5h/image/upload/v1/DJI_20250911154643_0012_D.00_01_02_09.Still004_qdar0f",
      width: 1200,
      height: 630,
      alt: "Radisson Blu Hotel Islamabad"
    }]
  }
};
const page = () => {
  const propertyAmenities = getAmenitiesByProperty("Radisson");
  
  console.log(propertyAmenities);
  return (
    <div className="bg-white">
      <RadissonBluStructuredData />
      <Hero
        isHomePage={false}
        backgroundType="video"
        backgroundSrc="RadissonNew_xlklbc"
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
      <PropertySection data={radissonFeatures} propertyName="Radisson"/>
      
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

      <ContactFormSection property="Radisson"/>
    </div>
  );
};

export default page;
