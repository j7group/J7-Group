// app/blog/[slug]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getRelatedPosts } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import BlogDetailClient from "@/components/features/Blogs/components/BlogDetailClient";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || post.contentType !== "blog") {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const metaTitle = post.seo?.metaTitle || `${post.title} - Architecture Blog`;
  const metaDescription =
    post.seo?.metaDescription ||
    post.excerpt ||
    "Luxury architecture insights and design innovation.";
  const ogImage = post.seo?.openGraphImage
    ? urlFor(post.seo.openGraphImage).width(1200).height(630).url()
    : post.mainImage
      ? urlFor(post.mainImage).width(1200).height(630).url()
      : undefined;

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      authors: post.author ? [post.author.name] : undefined,
      images: ogImage
        ? [{ url: ogImage, width: 1200, height: 630 }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://j7group.com.pk",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://j7group.com.pk/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "J7 Group Blog",
        item: `https://j7group.com.pk/blog/${slug}`,
      },
    ],
  };

  // Ensure this is actually a blog post
  if (!post || post.contentType !== "blog") {
    notFound();
  }

  // Get related blog posts
  const categoryRefs = post.categories?.map((cat) => cat._id) || [];
  const relatedPosts = await getRelatedPosts(post._id, categoryRefs, "blog");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogDetailClient post={post} relatedPosts={relatedPosts} />
    </>
  );
}
