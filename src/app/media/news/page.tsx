// app/news/page.tsx
import React from 'react';
import { Metadata } from 'next';
import { getNewsPosts, getCategories } from '@/lib/sanity/queries';
import NewsListingClient from '@/components/features/news/components/NewsComponentClient';

export const metadata: Metadata = {
  title: 'News and Press Releases - Latest Architecture Updates',
  description: 'Stay updated with the latest news, press releases, and announcements from the world of luxury architecture and real estate development.',
  openGraph: {
    title: 'News and Press Releases - Latest Architecture Updates',
    description: 'Stay updated with the latest news, press releases, and announcements from the world of luxury architecture and real estate development.',
    type: 'website',
    url: 'https://j7group.com.pk/media/news',
  },
};

export default async function NewsPage() {
  const [posts, categories] = await Promise.all([
    getNewsPosts(),
    getCategories(),
  ]);

  return <NewsListingClient posts={posts} categories={categories} />;
}