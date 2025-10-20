// pages/j7-emporium/page.tsx
import ContactFormSection from "@/components/features/home/components/ContactFormSection";
import { Hero } from "@/components/features/home/components/hero-section";
import AmenitiesSection from "@/components/features/projects/AmenitySection";
import BuildingShowcase from "@/components/features/projects/BuildingShowcase";
import GalleryComponent from "@/components/features/projects/GalleryComponent";
import PropertySection from "@/components/features/projects/PropertySection";
import ResidenceShowcase from "@/components/features/projects/ResidenceShowcase";
import { getAmenitiesByProperty } from "@/lib/data/properties";
// import CarouselGalleryWrapper from "@/components/features/projects/CarouselGalleryWrapper";
// import ReusableProgressSection from "@/components/features/projects/ProgressIndicator";
import { iconData, iconDetail, j7IconFeatures } from "@/lib/data/icon";
import IconIframe from "@/components/features/projects/j7Icon/Map";

const J7EmporiumPage = () => {
  const propertyAmenities = getAmenitiesByProperty("J7 Icon");

  // Fallback data in case Sanity data is not available
  // const fallbackProgressData = {
  //   overall: 85,
  //   exterior: 90,
  //   interior: 75,
  //   infrastructure: 80,
  // };

  // const fallbackGalleryImages = [
  //   {
  //     id: 1,
  //     cloudinaryPublicId: "construction/j7-emporium/foundation-phase",
  //     alt: "Foundation construction phase showing concrete work and structural preparation",
  //     title: "Foundation Work Complete",
  //     phase: "foundation",
  //   },
  //   {
  //     id: 2,
  //     cloudinaryPublicId: "construction/j7-emporium/structure-phase",
  //     alt: "Structural framework and steel beams during construction phase",
  //     title: "Structure Development",
  //     phase: "structure",
  //   },
  //   {
  //     id: 3,
  //     cloudinaryPublicId: "construction/j7-emporium/exterior-phase",
  //     alt: "Exterior walls, windows and facade work in progress",
  //     title: "Exterior Work Progress",
  //     phase: "exterior",
  //   },
  //   {
  //     id: 4,
  //     cloudinaryPublicId: "construction/j7-emporium/interior-phase",
  //     alt: "Interior finishing work including flooring and electrical systems",
  //     title: "Interior Finishing",
  //     phase: "interior",
  //   },
  //   {
  //     id: 5,
  //     cloudinaryPublicId: "construction/j7-emporium/landscaping-phase",
  //     alt: "Landscaping and outdoor areas development around the building",
  //     title: "Landscaping Development",
  //     phase: "landscaping",
  //   },
  //   {
  //     id: 6,
  //     cloudinaryPublicId: "construction/j7-emporium/aerial-view",
  //     alt: "Aerial view of the complete J7 Emporium construction site",
  //     title: "Aerial Overview",
  //     phase: "overview",
  //   },
  // ];

  return (
    <div className="bg-white">
      <Hero
        isHomePage={false}
        backgroundType="video"
        backgroundSrc="RoyalSwissNew_dng2q1"
        overlay="light"
        ariaLabel="J7 Emporium Hero section"
        enableAnimations={true}
      />
      <ResidenceShowcase
        title={iconDetail.title}
        description={iconDetail.description}
      />
      <BuildingShowcase propertyId="j7-icon" />

      {/* Conditional rendering based on available amenities */}
      {propertyAmenities && (
        <AmenitiesSection
          propertyName={propertyAmenities.propertyName}
          amenities={propertyAmenities.amenities}
          title={propertyAmenities.title}
          description={propertyAmenities.description}
        />
      )}

      <GalleryComponent project={iconData} autoPlayInterval={4000} />
      <PropertySection data={j7IconFeatures} propertyName="J7 Icon" />

      {/* Reusable Carousel Gallery - Enhanced with better configuration */}
      {/* <CarouselGalleryWrapper
        propertyName="J7 Emporium"
        fallbackImages={fallbackGalleryImages}
        title="Construction Progress Gallery"
        description="Follow our project development through comprehensive visual documentation"
        imageWidth={1400} // Higher resolution for better quality
        imageHeight={900} // Better aspect ratio
        autoPlay={true} // Enable auto-play functionality
        autoPlayInterval={6000} // 6 seconds between slides
        className="construction-gallery" // Custom CSS class if needed
      /> */}

      {/* Reusable Progress Section - will fetch from Sanity or use fallback */}
      {/* <ReusableProgressSection
        propertyName="J7 Emporium"
        fallbackData={fallbackProgressData}
        title="Construction Progress"
        description="Track our construction milestones and development phases"
      /> */}
      <IconIframe />
      <ContactFormSection property="J7 Icon"/>
    </div>
  );
};

export default J7EmporiumPage;
