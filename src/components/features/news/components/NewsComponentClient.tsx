// components/features/News/components/NewsListingClient.tsx
"use client";
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { format } from 'date-fns';
import { urlFor } from '@/lib/sanity/image';
import type { BlogPost, Category } from '@/lib/sanity/types';

interface NewsListingClientProps {
  posts: BlogPost[];
  categories: Category[];
}

// News Card Component
const NewsListingCard: React.FC<{ post: BlogPost; index: number }> = ({ post, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleViewDetails = (slug: string) => {
    if (post.externalLink) {
      window.open(post.externalLink, '_blank');
    } else {
      window.location.href = `/media/news/${slug}`;
    }
  };

  return (
    <motion.article
      className="relative w-full bg-white overflow-hidden cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Image Container with Proper Aspect Ratio */}
      <div className="relative w-full aspect-square md:aspect-[4/3]">
        {post.mainImage && (
          <Image
            src={urlFor(post.mainImage).quality(100).url()}
            alt={post.mainImage.alt || post.title}
            fill
            className="object-cover transition-transform duration-700 ease-in"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
            quality={100}
            priority={index < 4}
          />
        )}
        
        {/* White Overlay - Hover State */}
        <div className={`absolute inset-0 bg-white/95 backdrop-blur-sm transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        
        {/* News Badge */}
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 text-xs sm:text-sm font-semibold shadow-lg">
            News
          </span>
        </div>
        
        {/* External Link Icon */}
        {post.externalLink && (
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
            <div className="p-2 bg-black/20 backdrop-blur-sm rounded-full">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </div>
        )}
        
        {/* Content - Hover State Only */}
        <div className={`absolute inset-0 bg-[#51301F] flex flex-col justify-center items-center p-4 sm:p-6 text-center transition-all duration-500 transform ${isHovered ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
          {post.publishedAt && (
            <p className="text-sm sm:text-base text-white font-medium mb-3 sm:mb-4">
              {format(new Date(post.publishedAt), 'MMMM dd, yyyy')}
            </p>
          )}
          
          <h2 className="text-lg sm:text-xl text-white font-normal leading-tight mb-6 sm:mb-8 max-w-sm line-clamp-3">
            {post.title}
          </h2>
          
          <motion.button
            onClick={() => handleViewDetails(post.slug.current)}
            className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-3 bg-white text-[#51301F] font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {post.externalLink ? (
              <>
                <span>Read Article</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </>
            ) : (
              <>
                <span>View Details</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </>
            )}
          </motion.button>
        </div>
      </div>

      {/* Title and Date - Now Outside Image */}
      <div className="p-4 sm:p-6 bg-white">
        {post.publishedAt && (
          <p className="text-sm sm:text-base font-medium mb-2 text-[#51301F]">
            {format(new Date(post.publishedAt), 'MMMM dd, yyyy')}
          </p>
        )}
        <h2 className="text-lg sm:text-xl md:text-2xl font-normal text-[#51301F] leading-tight line-clamp-2">
          {post.title}
        </h2>
      </div>
    </motion.article>
  );
};

const NewsListingClient: React.FC<NewsListingClientProps> = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    let filtered = posts;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => 
        post.categories?.some(cat => cat.slug.current === selectedCategory)
      );
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt?.toLowerCase().includes(query) ||
        post.newsSource?.toLowerCase().includes(query) ||
        post.categories?.some(cat => cat.title.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [posts, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#51301F] via-[#7A3110] to-[#51301F]" />
        <div className="relative mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-coconat text-white mb-4 sm:mb-6 md:mb-8 leading-tight">
              News & <span className="text-[#ECE4D9]">Press</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/85 mx-auto leading-relaxed max-w-4xl">
              Stay updated with the latest news, press releases, and announcements from the world of 
              luxury architecture and real estate development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-[#FFF]">
        <div className="mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchQuery}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                  {filteredPosts.map((post, index) => (
                    <NewsListingCard key={post._id} post={post} index={index} />
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-16 sm:py-20 lg:py-24"
                >
                  <div className="max-w-lg mx-auto">
                    <div className="mb-8">
                      <svg className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-coconat text-gray-900 mb-4">
                      No news found
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
                      Try adjusting your search terms or selecting a different category to discover our latest news and press releases.
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('all');
                      }}
                      className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-[#7A3110] hover:bg-[#5D2612] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                    >
                      View All News
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

export default NewsListingClient;