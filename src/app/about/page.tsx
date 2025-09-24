import Awards from "@/components/features/About/components/Awards";
import BrandCollaborations from "@/components/features/About/components/Brands";
import Owner from "@/components/features/About/components/Owner";
import Services from "@/components/features/About/components/Services";
import WhyChooseJ7Group from "@/components/features/About/components/WhyChooseJ7";
import ResidenceShowcase from "@/components/features/projects/ResidenceShowcase";
import { Hero } from "@/components/features/home/components/hero-section";
import React from "react";
import { aboutDetail } from "@/lib/data/emporium";
import ChairmanMessage from "@/components/features/About/components/AboutLuxury";

const page = () => {
  return (
    <div>
      {/* <MissionVision /> */}
      <Hero
        backgroundType="image"
        backgroundSrc="Cam_14_final_day_light_edrri3"
        overlay="medium"
        ariaLabel="About Hero section"
      />
      <ResidenceShowcase
        title={aboutDetail.title}
        description={aboutDetail.description}
      />
      <ChairmanMessage />
      <Owner />
      <Services />
      <Awards />
      <BrandCollaborations />
      <WhyChooseJ7Group />
    </div>
  );
};

export default page;
