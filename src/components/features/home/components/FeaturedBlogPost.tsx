// Featured Blog Posts Component
"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity/image';
import type { BlogPost } from '@/lib/sanity/types';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

interface BlogCardProps {
  post: BlogPost;
  index: number;
  onViewDetails: (slug: string, contentType: 'blog' | 'news') => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <motion.div
        className="relative h-[360px] sm:h-[420px] md:h-[480px] overflow-hidden cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Background Image */}
        {post.mainImage && (
          <Image
            src={urlFor(post.mainImage)
              .quality(100)
              .format('webp')
              .url()}
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
              className="absolute inset-0 flex flex-col justify-start p-4 sm:p-6"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Number Tag - Top Left */}
              <div className="flex justify-start">
                <span className="text-white text-3xl sm:text-4xl md:text-5xl font-medium font-coconat">
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
              className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Title - Centered */}
              <motion.h3 
                className="text-[#ECE4D9] text-lg sm:text-xl font-normal leading-tight mb-6 sm:mb-8 max-w-xs sm:max-w-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {post.title}
              </motion.h3>

              {/* View Details Button */}
              <motion.button
                onClick={() => onViewDetails(post.slug.current, post.contentType)}
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#ECE4D9] text-[#51301F] cursor-pointer font-medium text-sm sm:text-base rounded-full transition-colors duration-300 shadow-lg"
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
      </motion.div>

      {/* Title - Outside Bottom of Image */}
      <div className="pt-3 sm:pt-4">
        <h3 className="text-[#51301F] text-lg sm:text-xl font-light leading-tight">
          {post.title}
        </h3>
      </div>
    </div>
  );
};

interface FeaturedBlogPostsProps {
  posts: BlogPost[];
}

const FeaturedBlogPosts: React.FC<FeaturedBlogPostsProps> = ({ posts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleViewDetails = (slug: string, contentType: 'blog' | 'news') => {
    // Navigate based on content type
    const basePath = contentType === 'news' ? '/media/news' : '/media/blog';
    window.location.href = `${basePath}/${slug}`;
  };

  const nextPost = () => {
    setCurrentIndex((prev) => (prev + 1) % posts.length);
  };

  const prevPost = () => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  return (
    <div className="w-full bg-white py-12 sm:py-16">
      <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#51301F] py-3 sm:py-4 px-4 sm:px-8 md:px-12 mb-6 sm:mb-8 font-coconat'>
        Featured Blog Posts
      </h1>
      
      {/* Mobile Swiper */}
      <div className="md:hidden px-4 sm:px-8">
        <div className="relative">
          {/* Current Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.4,
              ease: "easeOut"
            }}
          >
            <BlogCard 
              post={posts[currentIndex]}
              index={currentIndex}
              onViewDetails={handleViewDetails}
            />
          </motion.div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={prevPost}
              className="flex items-center justify-center w-12 h-12 bg-[#51301F] text-white rounded-full hover:bg-[#5e3625] transition-colors duration-300 disabled:opacity-50"
              aria-label="Previous post"
            >
              <FaArrowLeftLong className="w-5 h-5" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {posts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-[#51301F]' : 'bg-transparent border border-[#51301F]'
                  }`}
                  aria-label={`Go to post ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextPost}
              className="flex items-center justify-center w-12 h-12 bg-[#51301F] text-white rounded-full hover:bg-[#5e3625] transition-colors duration-300 disabled:opacity-50"
              aria-label="Next post"
            >
              <FaArrowRightLong className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Desktop Grid */}
      <div className="hidden md:block px-4 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <BlogCard 
                post={post}
                index={index}
                onViewDetails={handleViewDetails}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogPosts;