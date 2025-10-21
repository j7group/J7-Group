import ContactFormSection from "@/components/features/home/components/ContactFormSection";
import { Hero } from "@/components/features/home/components/hero-section";
import AmenitiesSection from "@/components/features/projects/AmenitySection";
import BuildingShowcase from "@/components/features/projects/BuildingShowcase";
import GalleryComponent from "@/components/features/projects/GalleryComponent";
import PropertySection from "@/components/features/projects/PropertySection";
import ResidenceShowcase from "@/components/features/projects/ResidenceShowcase";
import RotanaIframe from "@/components/features/projects/rotana/Map";
import { RotanaStructuredData } from "@/components/seo/StructuredData";
import { getAmenitiesByProperty } from "@/lib/data/properties";
import { rotanaData, rotanaDetail, rotanaFeatures } from "@/lib/data/rotana";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signature Rotana Hotel & Residences Islamabad",
  description: "26-story international 5-star Rotana hotel and branded residences at Top City-1, Srinagar Highway. PKR 35,000/sq.ft.",
  alternates: {
    canonical: "https://j7group.com.pk/developments/rotana"
  },
  openGraph: {
    title: "Signature Rotana - International 5-Star Living",
    description: "Rotana's signature hospitality and luxury residences in Islamabad's prime location.",
    url: "https://j7group.com.pk/developments/rotana",
    images: [{
      url: "https://res.cloudinary.com/diqj8so5h/image/upload/v1/rotana2_stowlu",
      width: 1200,
      height: 630,
      alt: "Signature Rotana Hotel Islamabad"
    }]
  }
};
const page = () => {
  const propertyAmenities = getAmenitiesByProperty("Rotana");
  console.log(propertyAmenities);
  return (
    <div className="">
      <RotanaStructuredData />
      <Hero
        isHomePage={false}
        backgroundType="video"
        backgroundSrc="Rotana_compressed_krduwe"
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
