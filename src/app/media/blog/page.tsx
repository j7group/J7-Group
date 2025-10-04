// Updated app/blog/page.tsx (with contentType filter)
import React from "react";
import { Metadata } from "next";
import { getBlogPosts, getCategories } from "@/lib/sanity/queries";
import BlogListingClient from "@/components/features/Blogs/components/BlogListingClient";
import { Hero } from "@/components/features/home/components/hero-section";

export const metadata: Metadata = {
  title: "Architecture Blog - Luxury Design & Innovation Insights",
  description:
    "Explore our collection of articles on luxury architecture, innovative design, cutting-edge technology, and sustainable construction practices.",
  openGraph: {
    title: "Architecture Blog - Luxury Design & Innovation Insights",
    description:
      "Explore our collection of articles on luxury architecture, innovative design, cutting-edge technology, and sustainable construction practices.",
    type: "website",
  },
};

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getBlogPosts(), // Only fetch blog posts (contentType === 'blog')
    getCategories(),
  ]);

  return (
    <div>
      <Hero 
      backgroundSrc="Google_AI_Studio_2025-09-30T08_00_03.071Z_tmg8wn"
      backgroundType="image"
      overlay="medium"
      ariaLabel="Blog Hero section"
      
      />
      <BlogListingClient posts={posts} categories={categories} />;
    </div>
  );
}
