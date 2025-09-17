// lib/sanity/constructionProgress.ts
import { groq } from 'next-sanity'

// Types
export interface ProgressData {
  overall: number;
  exterior: number;
  interior: number;
  infrastructure: number;
}

export interface ConstructionImage {
  cloudinaryPublicId: string;
  alt: string;
  title?: string;
  phase?: string;
  captureDate?: string;
}

export interface ConstructionProgress {
  _id: string;
  propertyName: string;
  slug: {
    current: string;
  };
  title: string;
  description: string;
  progressData: ProgressData;
  galleryImages: ConstructionImage[];
  galleryTitle: string;
  galleryDescription: string;
  isActive: boolean;
  lastUpdated: string;
}

// Get construction progress by property name
export const getConstructionProgressByPropertyQuery = groq`
  *[_type == "constructionProgress" && propertyName == $propertyName && isActive == true][0] {
    _id,
    propertyName,
    slug,
    title,
    description,
    progressData {
      overall,
      exterior,
      interior,
      infrastructure
    },
    galleryImages[] {
      cloudinaryPublicId,
      alt,
      title,
      phase,
      captureDate
    },
    galleryTitle,
    galleryDescription,
    isActive,
    lastUpdated
  }
`

// Get construction progress by slug
export const getConstructionProgressBySlugQuery = groq`
  *[_type == "constructionProgress" && slug.current == $slug && isActive == true][0] {
    _id,
    propertyName,
    slug,
    title,
    description,
    progressData {
      overall,
      exterior,
      interior,
      infrastructure
    },
    galleryImages[] {
      cloudinaryPublicId,
      alt,
      title,
      phase,
      captureDate
    },
    galleryTitle,
    galleryDescription,
    isActive,
    lastUpdated
  }
`

// Get all active construction progress entries
export const getAllConstructionProgressQuery = groq`
  *[_type == "constructionProgress" && isActive == true] | order(lastUpdated desc) {
    _id,
    propertyName,
    slug,
    title,
    description,
    progressData {
      overall,
      exterior,
      interior,
      infrastructure
    },
    galleryImages[] {
      cloudinaryPublicId,
      alt,
      title,
      phase,
      captureDate
    },
    galleryTitle,
    galleryDescription,
    isActive,
    lastUpdated
  }
`

// Get only progress data (without images) by property name
export const getProgressDataByPropertyQuery = groq`
  *[_type == "constructionProgress" && propertyName == $propertyName && isActive == true][0] {
    _id,
    propertyName,
    title,
    description,
    progressData {
      overall,
      exterior,
      interior,
      infrastructure
    },
    lastUpdated
  }
`

// Get only gallery images by property name
export const getGalleryImagesByPropertyQuery = groq`
  *[_type == "constructionProgress" && propertyName == $propertyName && isActive == true][0] {
    _id,
    propertyName,
    galleryImages[] {
      cloudinaryPublicId,
      alt,
      title,
      phase,
      captureDate
    },
    galleryTitle,
    galleryDescription
  }
`

// Get property names that have construction progress
export const getPropertiesWithProgressQuery = groq`
  *[_type == "constructionProgress" && isActive == true] {
    propertyName,
    slug,
    "progressOverall": progressData.overall,
    lastUpdated
  } | order(propertyName asc)
`