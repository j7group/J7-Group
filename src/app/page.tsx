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
import PropertiesPage from "@/components/features/developments/FeaturedProperties";
import { client } from "@/lib/sanity/client";
import { FEATURED_POSTS_QUERY } from "@/lib/sanity/queries";
import { BlogPost } from "@/lib/sanity/types";
import ResidenceShowcase from "@/components/features/developments/ResidenceShowcase";

import type { Metadata } from "next";
import { HomePageStructuredData } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "J7 Group — Leading Real Estate Developer in Pakistan",
  description: "Discover J7 Group's portfolio of luxury developments including J7 Emporium, Radisson Blu, Signature Rotana, and J7 Icon in Islamabad.",
  alternates: {
    canonical: "https://j7group.com.pk"
  },
  openGraph: {
    images: [{
      url: `https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/v1/Cam_11_final_day_light_bpopj5`,
      width: 1200,
      height: 630,
      alt: "J7 Group - Leading Real Estate Developer Pakistan"
    }]
  }
};
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
      <HomePageStructuredData />
      {/* Main content sections */}
      <main className="relative z-10">
        <Hero
          title=""
          isHomePage={true}
          backgroundType="video"
          overlay="light"
          backgroundSrc="J7_group_new_fsiz2b"
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
        {featuredPosts ? <FeaturedBlogPosts posts={featuredPosts} /> : null}
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
