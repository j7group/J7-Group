// lib/utils/constructionProgress.ts
import { client } from '@/lib/sanity/client';
import { 
  getConstructionProgressByPropertyQuery, 
  getProgressDataByPropertyQuery,
  getGalleryImagesByPropertyQuery,
  type ConstructionProgress,
  type ProgressData,
  type ConstructionImage
} from '@/lib/sanity/constructionProgress';
import { useEffect, useState } from 'react';

/**
 * Utility functions for working with construction progress data
 */
export class ConstructionProgressUtils {
  
  /**
   * Get complete construction progress data for a property
   */
  static async getProgressByProperty(propertyName: string): Promise<ConstructionProgress | null> {
    try {
      return await client.fetch<ConstructionProgress>(
        getConstructionProgressByPropertyQuery, 
        { propertyName }
      );
    } catch (error) {
      console.error(`Error fetching progress for ${propertyName}:`, error);
      return null;
    }
  }

  /**
   * Get only progress percentages (no images)
   */
  static async getProgressDataOnly(propertyName: string): Promise<ProgressData | null> {
    try {
      const result = await client.fetch(getProgressDataByPropertyQuery, { propertyName });
      return result?.progressData || null;
    } catch (error) {
      console.error(`Error fetching progress data for ${propertyName}:`, error);
      return null;
    }
  }

  /**
   * Get only gallery images (no progress data)
   */
  static async getGalleryImagesOnly(propertyName: string): Promise<ConstructionImage[] | null> {
    try {
      const result = await client.fetch(getGalleryImagesByPropertyQuery, { propertyName });
      return result?.galleryImages || null;
    } catch (error) {
      console.error(`Error fetching gallery images for ${propertyName}:`, error);
      return null;
    }
  }

  /**
   * Calculate overall progress from individual components
   */
  static calculateOverallProgress(progressData: ProgressData): number {
    const { overall, exterior, interior, infrastructure } = progressData;
    return Math.round((overall + exterior + interior + infrastructure) / 4);
  }

  /**
   * Get progress status based on percentage
   */
  static getProgressStatus(percentage: number): {
    status: string;
    color: string;
    description: string;
  } {
    if (percentage >= 90) {
      return {
        status: 'Near Completion',
        color: 'text-green-600',
        description: 'Almost finished'
      };
    } else if (percentage >= 70) {
      return {
        status: 'Advanced',
        color: 'text-blue-600',
        description: 'Significant progress'
      };
    } else if (percentage >= 50) {
      return {
        status: 'In Progress',
        color: 'text-yellow-600',
        description: 'Active development'
      };
    } else if (percentage >= 25) {
      return {
        status: 'Early Stage',
        color: 'text-orange-600',
        description: 'Getting started'
      };
    } else {
      return {
        status: 'Planning',
        color: 'text-gray-600',
        description: 'Initial phase'
      };
    }
  }

  /**
   * Format construction phase for display
   */
  static formatPhase(phase?: string): string {
    if (!phase) return '';
    
    const phaseMap: Record<string, string> = {
      'foundation': 'Foundation Work',
      'structure': 'Structural Development',
      'exterior': 'Exterior Construction',
      'interior': 'Interior Finishing',
      'finishing': 'Final Touches',
      'landscaping': 'Landscaping & Grounds'
    };

    return phaseMap[phase.toLowerCase()] || phase;
  }

  /**
   * Group images by construction phase
   */
  static groupImagesByPhase(images: ConstructionImage[]): Record<string, ConstructionImage[]> {
    return images.reduce((groups, image) => {
      const phase = image.phase || 'general';
      if (!groups[phase]) {
        groups[phase] = [];
      }
      groups[phase].push(image);
      return groups;
    }, {} as Record<string, ConstructionImage[]>);
  }

  /**
   * Get the most recent images (by capture date)
   */
  static getRecentImages(images: ConstructionImage[], limit: number = 5): ConstructionImage[] {
    return images
      .filter(img => img.captureDate)
      .sort((a, b) => new Date(b.captureDate!).getTime() - new Date(a.captureDate!).getTime())
      .slice(0, limit);
  }

  /**
   * Validate progress data
   */
  static validateProgressData(data: ProgressData): {
    isValid: boolean;
    errors: string[];
  } {
    const errors: string[] = [];
    
    if (data.overall < 0 || data.overall > 100) {
      errors.push('Overall progress must be between 0 and 100');
    }
    if (data.exterior < 0 || data.exterior > 100) {
      errors.push('Exterior progress must be between 0 and 100');
    }
    if (data.interior < 0 || data.interior > 100) {
      errors.push('Interior progress must be between 0 and 100');
    }
    if (data.infrastructure < 0 || data.infrastructure > 100) {
      errors.push('Infrastructure progress must be between 0 and 100');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}

/**
 * Hook for using construction progress data in React components
 */
export const useConstructionProgress = (propertyName: string) => {
  const [data, setData] = useState<ConstructionProgress | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await ConstructionProgressUtils.getProgressByProperty(propertyName);
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch construction progress');
      } finally {
        setLoading(false);
      }
    };

    if (propertyName) {
      fetchData();
    }
  }, [propertyName]);

  return { data, loading, error };
};

export default ConstructionProgressUtils;