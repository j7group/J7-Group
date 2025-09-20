// components/features/News/components/NewsDetailClient.tsx
"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/lib/sanity/image';
import type { BlogPost } from '@/lib/sanity/types';
import { portableTextComponents } from '../../Blogs/components/PortableTextComponents';

interface NewsDetailClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

// Related News Card Component
const RelatedNewsCard: React.FC<{ post: BlogPost; index: number }> = ({ post, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleViewDetails = (slug: string) => {
    if (post.externalLink) {
      window.open(post.externalLink, '_blank');
    } else {
      window.location.href = `/news/${slug}`;
    }
  };

  return (
    <motion.div
      className="relative h-[480px] overflow-hidden cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Background Image */}
      {post.mainImage && (
        <Image
          src={urlFor(post.mainImage).width(600).height(480).url()}
          alt={post.mainImage.alt || post.title}
          fill
          className="object-cover transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
            className="absolute inset-0 bg-[#51301F] backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
      
      {/* Content Container - Default State */}
      <AnimatePresence>
        {!isHovered && (
          <motion.div 
            className="absolute inset-0 flex flex-col justify-between p-6"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Number Tag - Top Left */}
            <div className="flex justify-between items-start">
              <span className="text-white text-5xl font-medium">
                {String(index + 1).padStart(2, '0')}
              </span>
              {/* External Link Indicator */}
              {post.externalLink && (
                <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              )}
            </div>

            {/* Title and Source - Bottom */}
            <div>
              {post.newsSource && (
                <p className="text-white/80 text-sm mb-2 uppercase tracking-wider font-medium">
                  {post.newsSource}
                </p>
              )}
              <h3 className="text-white text-xl font-medium leading-tight">
                {post.title}
              </h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Container - Hover State */}
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Title - Centered */}
            <motion.h3 
              className="text-white text-xl leading-tight mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {post.title}
            </motion.h3>

            {/* View Details Button */}
            <motion.button
              onClick={() => handleViewDetails(post.slug.current)}
              className="px-8 py-3 bg-white text-[#51301F] cursor-pointer font-medium rounded-full transition-colors duration-300 shadow-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {post.externalLink ? 'Read Article' : 'View Details'}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const NewsDetailClient: React.FC<NewsDetailClientProps> = ({ post, relatedPosts }) => {
  const formatDate = (date: string) => {
    return format(new Date(date), 'MMMM dd, yyyy');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Luxury Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        {post.mainImage && (
          <div className="absolute inset-0">
            <Image
              src={urlFor(post.mainImage).width(1920).height(1080).url()}
              alt={post.mainImage.alt || post.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        )}

        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-12 text-center text-white">

          {/* News Source */}
          {post.newsSource && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <span className="px-6 py-2 bg-[#7A3110] text-white text-sm font-medium rounded-full uppercase tracking-wider">
                {post.newsSource}
              </span>
            </motion.div>
          )}

          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              {post.categories.map((category) => (
                <span
                  key={category._id}
                  className="px-6 py-2 bg-[#7A3110] text-white text-sm font-medium rounded-full"
                >
                  {category.title}
                </span>
              ))}
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl text-white mb-8 leading-tight mx-auto max-w-4xl"
          >
            {post.title}
          </motion.h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-12">
           {/* Meta Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-8 text-white/80 mb-12"
          >
            <div className="flex items-center gap-2 text-[#7A3110]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <time className="text-lg">
                {formatDate(post.pressReleaseDate || post.publishedAt)}
              </time>
            </div>
            
            {post.readingTime && (
              <div className="flex items-center gap-2 text-[#7A3110]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg">{post.readingTime} min read</span>
              </div>
            )}

            {post.author && (
              <div className="flex items-center gap-3 text-[#7A3110]">
                {post.author.image && (
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={urlFor(post.author.image).width(40).height(40).url()}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <span className="text-lg font-medium">by {post.author.name}</span>
              </div>
            )}

            {/* External Link Notice */}
            {post.externalLink && (
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <a 
                  href={post.externalLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg underline hover:text-white transition-colors"
                >
                  Read Full Article
                </a>
              </div>
            )}
          </motion.div>
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=" rounded-md p-12 md:p-16 shadow-sm"
          >
            {/* Excerpt */}
            {post.excerpt && (
              <div className="text-2xl text-[#51301F] leading-relaxed mb-12 pb-12 border-b border-[#51301F]/10 font-medium text-center italic">
                &quot;{post.excerpt}&quot;
              </div>
            )}

            {/* Main Content */}
            {post.body && (
              <div className="prose prose-lg max-w-none luxury-prose">
                <PortableText value={post.body} components={portableTextComponents} />
              </div>
            )}

            {/* External Link CTA */}
            {post.externalLink && (
              <div className="mt-12 text-center border-t border-[#51301F]/10 pt-12">
                <a
                  href={post.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-12 py-4 bg-[#7A3110] text-white font-medium rounded-full hover:bg-[#51301F] transition-all duration-300 text-lg shadow-lg"
                >
                  Read Full Article
                  <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
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
              className="mt-16 bg-white rounded-3xl p-12 shadow-xl"
            >
              <h3 className="text-3xl font-coconat text-[#51301F] text-center mb-8">About the Author</h3>
              <div className="flex flex-col md:flex-row items-center gap-8">
                {post.author.image && (
                  <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0 shadow-lg">
                    <Image
                      src={urlFor(post.author.image).width(128).height(128).url()}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="text-center md:text-left">
                  <h4 className="text-2xl font-semibold text-[#51301F] mb-4">{post.author.name}</h4>
                  <div className="prose prose-lg text-[#51301F]/80">
                    <PortableText value={post.author.bio} />
                  </div>
                  {post.author.social && (
                    <div className="flex justify-center md:justify-start gap-6 mt-6">
                      {post.author.social.twitter && (
                        <a
                          href={post.author.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#7A3110] hover:text-[#51301F] transition-colors text-lg font-medium"
                        >
                          Twitter
                        </a>
                      )}
                      {post.author.social.linkedin && (
                        <a
                          href={post.author.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#7A3110] hover:text-[#51301F] transition-colors text-lg font-medium"
                        >
                          LinkedIn
                        </a>
                      )}
                      {post.author.social.website && (
                        <a
                          href={post.author.social.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#7A3110] hover:text-[#51301F] transition-colors text-lg font-medium"
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
        <section className="py-12">
          <div className="container mx-auto px-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl text-[#51301F] mb-12 text-center"
            >
              Related News
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                >
                  <RelatedNewsCard 
                    post={relatedPost}
                    index={index}
                  />
                </motion.div>
              ))}
            </div>

            {/* Back to News Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <Link 
                href="/media/news"
                className="inline-flex items-center px-12 py-4 hover:bg-transparent hover:border-2 border-[#51301F] text-white bg-[#51301F] font-medium rounded-full hover:text-[#51301F] transition-all duration-300 text-lg"
              >
                <svg 
                  className="mr-3 w-6 h-6" 
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
                View All News
              </Link>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
};

export default NewsDetailClient;