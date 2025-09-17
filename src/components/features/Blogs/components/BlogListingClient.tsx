// components/BlogListingClient.tsx
"use client";
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { urlFor } from '@/lib/sanity/image';
import type { BlogPost, Category } from '@/lib/sanity/types';

interface BlogListingClientProps {
  posts: BlogPost[];
  categories: Category[];
}

// Blog Card Component with improved image quality and layout
const BlogListingCard: React.FC<{ post: BlogPost; index: number }> = ({ post, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleViewDetails = (slug: string) => {
    window.location.href = `/media/blog/${slug}`;
  };

  const formatDate = (date: string) => {
    return format(new Date(date), 'MMM dd, yyyy');
  };

  return (
    <motion.div
      className="relative overflow-hidden cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Image Container with responsive aspect ratio */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[420px] xl:h-[480px] 2xl:h-[560px]">
        {/* Background Image - Responsive quality settings */}
        {post.mainImage && (
          <Image
            src={urlFor(post.mainImage)
              .width(800)
              .height(600)
              .quality(85)
              .format('webp')
              .url()}
            alt={post.mainImage.alt || post.title}
            fill
            className="object-cover transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 700px"
            priority={index < 4} // Prioritize first 4 images
          />
        )}

        {/* Light Overlay for Hover State */}
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              className="absolute inset-0 bg-[#51301F]"
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
              className="absolute inset-0 flex flex-col justify-between p-3 sm:p-4 md:p-5 lg:p-6"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Number Tag - Top Left */}
              <div className="flex justify-start">
                <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium drop-shadow-lg">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content Container - Hover State */}
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-6 md:p-7 lg:p-8 text-center"
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Title - Centered */}
              <motion.h3 
                className="text-base sm:text-lg md:text-xl lg:text-xl text-white font-light leading-tight mb-4 sm:mb-6 lg:mb-8 max-w-xs sm:max-w-sm px-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {post.title}
              </motion.h3>

              {/* View Details Button */}
              <motion.button
                onClick={() => handleViewDetails(post.slug.current)}
                className="px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 bg-white text-[#51301F] cursor-pointer font-medium rounded-full transition-colors duration-300 shadow-lg text-sm sm:text-base"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                whileTap={{ scale: 0.98 }}
              >
                View Details
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Title and Date Below Image */}
      <div className="pt-4 sm:pt-5 lg:pt-6 pb-3 sm:pb-4">
        <h3 className="text-[#51301F] text-base sm:text-lg lg:text-xl font-medium leading-tight mb-2  transition-colors duration-300 line-clamp-2">
          <Link href={`/media/blog/${post.slug.current}`}>
            {post.title}
          </Link>
        </h3>
        
        {/* Date and Category Info */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 text-xs sm:text-sm">
          <time dateTime={post.publishedAt}>
            {formatDate(post.publishedAt)}
          </time>
          
          {post.categories && post.categories.length > 0 && (
            <div className="flex gap-1 sm:gap-2 flex-wrap">
              {post.categories.slice(0, 2).map((category) => (
                <span
                  key={category._id}
                  className="px-2 sm:px-3 py-1 bg-white text-[#7A3110] text-xs font-medium rounded-full whitespace-nowrap"
                >
                  {category.title}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Excerpt if available */}
        {post.excerpt && (
          <p className=" text-xs sm:text-sm mt-2 sm:mt-3 leading-relaxed line-clamp-2 sm:line-clamp-3">
            {post.excerpt}
          </p>
        )}
      </div>
    </motion.div>
  );
};

const BlogListingClient: React.FC<BlogListingClientProps> = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    let filtered = posts;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => 
        post.categories?.some(cat => cat.slug.current === selectedCategory)
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt?.toLowerCase().includes(query) ||
        post.categories?.some(cat => cat.title.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [posts, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white">

      {/* Blog Posts Grid */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="container mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                  {filteredPosts.map((post, index) => (
                    <motion.div
                      key={post._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                    >
                      <BlogListingCard post={post} index={index} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12 sm:py-16 lg:py-20"
                >
                  <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 lg:p-16 max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
                    <svg className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-gray-300 mx-auto mb-4 sm:mb-6 lg:mb-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.137 0-4.146-.832-5.657-2.343m0 0L3.515 9.829C2.424 8.738 3.222 7 4.757 7h14.486c1.535 0 2.333 1.738 1.242 2.829l-2.828 2.828z" />
                    </svg>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-900 mb-2 sm:mb-3 lg:mb-4">No articles found</h3>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed px-2 sm:px-4">
                      Try adjusting your search terms or selecting a different category to discover our luxury architecture insights.
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('all');
                      }}
                      className="mt-4 sm:mt-6 lg:mt-8 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-[#7A3110] text-white rounded-full hover:bg-[#8B3A1A] transition-all duration-300 font-medium text-sm sm:text-base"
                    >
                      View All Articles
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default BlogListingClient;