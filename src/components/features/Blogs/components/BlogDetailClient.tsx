// components/BlogDetailClient.tsx
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/sanity/image";
import type { BlogPost } from "@/lib/sanity/types";
import { portableTextComponents } from "./PortableTextComponents";
import { Hero } from "../../home/components/hero-section";

interface BlogDetailClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

// Related Blog Card Component with title under image
const RelatedBlogCard: React.FC<{ post: BlogPost; index: number }> = ({
  post,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleViewDetails = (slug: string) => {
    window.location.href = `/media/blog/${slug}`;
  };

  return (
    <motion.div
      className="relative cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Image Container */}
      <div className="relative h-[280px] sm:h-[320px] md:h-[380px] lg:h-[480px] overflow-hidden rounded-lg">
        {/* Background Image */}
        {post.mainImage && (
          <Image
            src={urlFor(post.mainImage).width(600).height(480).url()}
            alt={post.mainImage.alt || post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        )}

        {/* Dark Overlay - Only visible when not hovered */}
        <AnimatePresence>
          {!isHovered && (
            <motion.div
              className="absolute inset-0 bg-black/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>

        {/* Light Overlay for Hover State */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-[#51301F]/90 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>

        {/* Number Tag - Top Left (Only visible when not hovered) */}
        <AnimatePresence>
          {!isHovered && (
            <motion.div
              className="absolute top-3 left-3 sm:top-4 sm:left-4 lg:top-6 lg:left-6"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">
                {String(index + 1).padStart(2, "0")}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hover Content - Centered */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-5 md:p-6 lg:p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Title - Centered */}
              <motion.h3
                className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-tight mb-4 sm:mb-5 md:mb-6 lg:mb-8 max-w-xs sm:max-w-sm px-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {post.title}
              </motion.h3>
              {/* View Details Button */}
              <motion.button
                onClick={() => handleViewDetails(post.slug.current)}
                className="px-5 sm:px-6 md:px-7 lg:px-8 py-2 sm:py-2.5 lg:py-3 bg-white text-[#51301F] cursor-pointer font-semibold rounded-full transition-colors duration-300 text-xs sm:text-sm lg:text-base shadow-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                View Details
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Title Under Image */}
      <div className="pt-3 sm:pt-4 lg:pt-6">
        <h3 className="text-[#51301F] text-base sm:text-lg lg:text-xl font-medium leading-tight line-clamp-2">
          {post.title}
        </h3>
      </div>
    </motion.div>
  );
};

const BlogDetailClient: React.FC<BlogDetailClientProps> = ({
  post,
  relatedPosts,
}) => {
  const formatDate = (date: string) => {
    return format(new Date(date), "MMMM dd, yyyy");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Luxury Design */}
      <Hero 
      title={post?.title}
      backgroundType="image"
      backgroundSrc="teksjagesj7ohg38cdj9_1_with_bgc_sdntmc"
      />

      {/* Content Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-5 sm:p-6 md:p-10 lg:p-12 xl:p-16 shadow-sm"
          >
            {/* Meta Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-12 text-[#51301F]"
            >
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <time className="text-xs sm:text-sm md:text-base lg:text-lg">
                  {formatDate(post.publishedAt)}
                </time>
              </div>

              {post?.readingTime && (
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-xs sm:text-sm md:text-base lg:text-lg">
                    {post.readingTime} min read
                  </span>
                </div>
              )}

              {post?.author && (
                <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3">
                  <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium">
                    by {post?.author.name}
                  </span>
                </div>
              )}
            </motion.div>

            {/* Excerpt */}
            {post.excerpt && (
              <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#51301F] leading-relaxed mb-6 sm:mb-8 lg:mb-12 pb-6 sm:pb-8 lg:pb-12 border-b border-[#51301F]/10 font-medium text-center italic px-2 sm:px-4">
                &quot;{post.excerpt}&quot;
              </div>
            )}

            {/* Main Content */}
            {post.body && (
              <div className="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl max-w-none luxury-prose">
                <PortableText
                  value={post.body}
                  components={portableTextComponents}
                />
              </div>
            )}
          </motion.article>

          {/* Author Section */}
          {post.author && post.author.bio && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-10 sm:mt-12 lg:mt-16 p-5 sm:p-6 md:p-8 lg:p-12 bg-white/50 rounded-xl sm:rounded-2xl"
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-coconat text-[#51301F] text-center mb-5 sm:mb-6 lg:mb-8">
                About the Author
              </h3>
              <div className="flex flex-col md:flex-row items-center gap-5 sm:gap-6 lg:gap-8">
                {post.author.image && (
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 overflow-hidden flex-shrink-0 shadow-lg rounded-full">
                    <Image
                      src={urlFor(post.author.image)
                        .width(128)
                        .height(128)
                        .url()}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="text-center md:text-left">
                  <h4 className="text-lg sm:text-xl lg:text-2xl text-[#51301F] mb-2 sm:mb-3 lg:mb-4 font-semibold">
                    {post.author.name}
                  </h4>
                  <div className="prose prose-sm sm:prose-base lg:prose-lg text-[#51301F]/80">
                    <PortableText value={post.author.bio} />
                  </div>
                  {post.author.social && (
                    <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 lg:gap-6 mt-3 sm:mt-4 lg:mt-6">
                      {post.author.social.twitter && (
                        <a
                          href={post.author.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#7A3110] hover:text-[#51301F] transition-colors text-sm sm:text-base lg:text-lg font-medium"
                        >
                          Twitter
                        </a>
                      )}
                      {post.author.social.linkedin && (
                        <a
                          href={post.author.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#7A3110] hover:text-[#51301F] transition-colors text-sm sm:text-base lg:text-lg font-medium"
                        >
                          LinkedIn
                        </a>
                      )}
                      {post.author.social.website && (
                        <a
                          href={post.author.social.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#7A3110] hover:text-[#51301F] transition-colors text-sm sm:text-base lg:text-lg font-medium"
                        >
                          Website
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-transparent to-[#ECE4D9]/30">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#51301F] py-3 sm:py-4 mb-6 sm:mb-8 lg:mb-12 font-coconat text-center"
            >
              Related Articles
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  <RelatedBlogCard post={relatedPost} index={index} />
                </motion.div>
              ))}
            </div>

            {/* Back to Blog Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-10 sm:mt-12 lg:mt-16"
            >
              <Link
                href="/media/blog"
                className="inline-flex bg-[#51301F] items-center px-6 sm:px-8 md:px-10 lg:px-12 py-2.5 sm:py-3 lg:py-4 rounded-full border-2 border-white text-[#ECE4D9] font-medium hover:bg-transparent hover:border-2 hover:border-[#51301F] ease-in hover:text-[#51301F] transition-all duration-300 text-sm sm:text-base lg:text-lg shadow-lg"
              >
                <svg
                  className="mr-2 sm:mr-2.5 lg:mr-3 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
                View All Articles
              </Link>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogDetailClient;