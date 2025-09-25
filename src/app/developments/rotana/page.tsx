import ContactFormSection from "@/components/features/home/components/ContactFormSection";
import { Hero } from "@/components/features/home/components/hero-section";
import AmenitiesSection from "@/components/features/projects/AmenitySection";
import BuildingShowcase from "@/components/features/projects/BuildingShowcase";
import GalleryComponent from "@/components/features/projects/GalleryComponent";
import PropertySection from "@/components/features/projects/PropertySection";
import ResidenceShowcase from "@/components/features/projects/ResidenceShowcase";
import RotanaIframe from "@/components/features/projects/rotana/Map";
import { getAmenitiesByProperty } from "@/lib/data/properties";
import { rotanaData, rotanaDetail, rotanaFeatures } from "@/lib/data/rotana";
import React from "react";

const page = () => {
  const propertyAmenities = getAmenitiesByProperty("Rotana");
  console.log(propertyAmenities);
  return (
    <div className="">
      <Hero
        isHomePage={false}
        backgroundType="video"
        backgroundSrc="render.mov_j8bghj"
        overlay="light"
        ariaLabel="Hero section"
        enableAnimations={true}
      />
      <ResidenceShowcase 
      title={rotanaDetail.title}
      description={rotanaDetail.description}
      />
      <BuildingShowcase 
      propertyId="rotana"
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
      project={rotanaData}
      autoPlayInterval={4000}
      />
      <PropertySection data={rotanaFeatures} propertyName="Rotana"/>

      <RotanaIframe />
      <ContactFormSection property="Rotana"/>
    </div>
  );
};

export default page;
