import Awards from "@/components/features/About/components/Awards";
import BrandCollaborations from "@/components/features/About/components/Brands";
import Owner from "@/components/features/About/components/Owner";
import Services from "@/components/features/About/components/Services";
import WhyChooseJ7Group from "@/components/features/About/components/WhyChooseJ7";
import ResidenceShowcase from "@/components/features/developments/ResidenceShowcase";
import { Hero } from "@/components/features/home/components/hero-section";
import React from "react";
import { aboutDetail } from "@/lib/data/emporium";
import ChairmanMessage from "@/components/features/About/components/AboutLuxury";
import OurStory from "@/components/features/About/components/story";

import type { Metadata } from "next";
import { AboutPageStructuredData } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "About J7 Group - Premier Real Estate Developer",
  description: "Learn about J7 Group's journey in transforming Pakistan's real estate landscape with world-class developments and international partnerships.",
  alternates: {
    canonical: "https://j7group.com.pk/about"
  },
  openGraph: {
    title: "About J7 Group",
    description: "Leading real estate and hospitality developer in Pakistan.",
    url: "https://j7group.com.pk/about",
    images: [{
      url: "https://res.cloudinary.com/diqj8so5h/image/upload/v1/08_tjjknv",
      width: 1200,
      height: 630,
      alt: "About J7 Group"
    }]
  }
};

const page = () => {
  return (
    <>
    <AboutPageStructuredData />
      <Hero
        backgroundType="image"
        backgroundSrc="Cam_13_final_day_light_qpbu12"
        overlay="medium"
        ariaLabel="About Hero section"
      />
      <ResidenceShowcase
        title={aboutDetail.title}
        description={aboutDetail.description}
      />
      <OurStory />
      <ChairmanMessage />
      <Owner />
      <Services />
      <Awards />
      <BrandCollaborations />
      <WhyChooseJ7Group />
    </>
  );
};

export default page;
