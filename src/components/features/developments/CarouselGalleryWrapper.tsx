// components/features/projects/CarouselGalleryWrapper.tsx
import React from "react";
import { client } from "@/lib/sanity/client";
import {
  getConstructionProgressByPropertyQuery,
  type ConstructionProgress,
} from "@/lib/sanity/constructionProgress";
import ReusableCarouselGallery from "../home/components/GalleryComponent";

// Types
interface CloudinaryImage {
  id: number;
  cloudinaryPublicId: string;
  alt: string;
  title?: string;
  phase?: string;
}

interface CarouselGalleryWrapperProps {
  propertyName: string;
  fallbackImages?: CloudinaryImage[];
  title?: string;
  description?: string;
  className?: string;
  imageWidth?: number;
  imageHeight?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

// This is now a Server Component (no 'use client' directive)
const CarouselGalleryWrapper: React.FC<CarouselGalleryWrapperProps> = async (
  props
) => {
  let progressData: ConstructionProgress | null = null;

  try {
    progressData = await client.fetch<ConstructionProgress>(
      getConstructionProgressByPropertyQuery,
      { propertyName: props.propertyName }
    );
  } catch (error) {
    console.error("Error fetching construction progress:", error);
  }

  // Transform Sanity data to component format
  const sanityImages =
    progressData?.galleryImages?.map((img, index) => ({
      id: index + 1,
      cloudinaryPublicId: img.cloudinaryPublicId,
      alt: img.alt || `Construction image ${index + 1}`,
      title: img.title,
      phase: img.phase,
    })) || [];

  // Use Sanity data if available, otherwise fallback to props
  const images =
    sanityImages.length > 0 ? sanityImages : props.fallbackImages || [];
  const galleryTitle =
    progressData?.galleryTitle ||
    props.title ||
    "Construction Progress Gallery";
  const galleryDescription =
    progressData?.galleryDescription ||
    props.description ||
    "Follow our project development through visual documentation";

  return (
    <ReusableCarouselGallery
      {...props}
      images={images}
      galleryTitle={galleryTitle}
      galleryDescription={galleryDescription}
    />
  );
};

export default CarouselGalleryWrapper;