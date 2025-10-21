// Updated app/blog/page.tsx (with contentType filter)
import { Metadata } from "next";
import { getBlogPosts, getCategories } from "@/lib/sanity/queries";
import BlogListingClient from "@/components/features/Blogs/components/BlogListingClient";
import { Hero } from "@/components/features/home/components/hero-section";

export const metadata: Metadata = {
  title: "J7 Group Blog - Real Estate News & Updates",
  description: "Latest news, updates, and insights from J7 Group about real estate development, market trends, and project launches in Pakistan.",
  alternates: {
    canonical: "https://j7group.com.pk/blog"
  }
};

export default async function BlogPage() {
   const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://j7group.com.pk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://j7group.com.pk/blog"
      }
    ]
  };

  const [posts, categories] = await Promise.all([
    getBlogPosts(), // Only fetch blog posts (contentType === 'blog')
    getCategories(),
  ]);

  return (
    <>
     <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Hero 
      backgroundSrc="Google_AI_Studio_2025-09-30T08_00_03.071Z_tmg8wn"
      backgroundType="image"
      overlay="medium"
      ariaLabel="Blog Hero section"
      
      />
      <BlogListingClient posts={posts} categories={categories} />;
    </>
  );
}
