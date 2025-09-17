// import ApproachSection from "@/components/features/home/components/ApproachSection";
import ContactFormSection from "@/components/features/home/components/ContactFormSection";
import FAQsSection from "@/components/features/home/components/FAQs";
// import PropertySection from "@/components/features/home/components/featured-projects";
import FeaturedBlogPosts from "@/components/features/home/components/FeaturedBlogPost";
// import FeaturedBlogPosts from "@/components/features/home/components/FeaturedBlogs";
// import LuxuryGallery from "@/components/features/home/components/GalleryComponent";
import { Hero } from "@/components/features/home/components/hero-section";
// import J7Detail from "@/components/features/home/components/j7-detail";
// import J7FeaturesGrid from "@/components/features/home/components/J7Features";
import LuxuryRealEstateComponent from "@/components/features/home/components/NewComponent";
// import LuxuryRealEstateComponent2 from "@/components/features/home/components/NewComponent2";
import CostaMareHero from "@/components/features/home/components/PropertyGallery";
// import TeamCards from "@/components/features/home/components/TeamCards";
import TestimonialsSection from "@/components/features/home/components/Testimonials";
import PropertiesPage from "@/components/features/projects/FeaturedProperties";
import { client } from "@/lib/sanity/client";
import { FEATURED_POSTS_QUERY } from "@/lib/sanity/queries";
import { BlogPost } from "@/lib/sanity/types";
import ResidenceShowcase from "@/components/features/projects/ResidenceShowcase";

import React from "react";

// Fetch featured posts function
async function getFeaturedPosts(): Promise<BlogPost[]> {
  try {
    const posts = await client.fetch<BlogPost[]>(FEATURED_POSTS_QUERY);
    return posts;
  } catch (error) {
    console.error('Error fetching featured posts:', error);
    return [];
  }
}

const page = async() => {
    const featuredPosts = await getFeaturedPosts();
  return (
    <div className="relative">
      {/* Main content sections */}
      <main className="relative z-10">
        <Hero
          title=""
          isHomePage={true}
          backgroundType="video"
          overlay="light"
          backgroundSrc="J7_group_Video_parrct"
          ariaLabel="Altaf Development Home Section"
          contentAlignment="center"
        />
        {/* <J7Detail /> */}
      <ResidenceShowcase />
        {/* <PropertySection /> */}
        <PropertiesPage />
        <CostaMareHero />
        <LuxuryRealEstateComponent />
        {/* <LuxuryRealEstateComponent2 /> */}
        {/* <FeaturedBlogPosts /> */}
        <FeaturedBlogPosts posts={featuredPosts} />
        <TestimonialsSection />
        {/* <J7FeaturesGrid /> */}
        {/* <TeamCards /> */}
        <FAQsSection />
        <ContactFormSection />
        {/* <ApproachSection /> */}
        {/* <FontCOlor /> */}
      </main>
    </div>
  );
};

export default page;
