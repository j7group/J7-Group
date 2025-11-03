// components/features/projects/ReusableProgressSection.tsx
import React from 'react';
import { client } from '@/lib/sanity/client';
import { 
  getConstructionProgressByPropertyQuery, 
  type ConstructionProgress 
} from '@/lib/sanity/constructionProgress';

interface ProgressItem {
  percentage: number;
  title: string;
}

interface CircularProgressProps {
  percentage: number;
  title: string;
}

interface ReusableProgressSectionProps {
  propertyName: string;
  fallbackData?: {
    overall: number;
    exterior: number;
    interior: number;
    infrastructure: number;
  };
  title?: string;
  description?: string;
  className?: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ percentage, title }) => {
  // Responsive sizing for circles
  const mobileRadius = 45;    // Small on mobile
  const tabletRadius = 60;    // Medium on tablet
  const desktopRadius = 70;   // Large on desktop
  
  const strokeWidth = 4; // Reduced stroke width for mobile
  const smStrokeWidth = 5; // Medium stroke width for tablet
  const lgStrokeWidth = 6; // Original stroke width for desktop
  
  // Calculate for mobile (default)
  const mobileNormalizedRadius = mobileRadius - strokeWidth * 2;
  const mobileCircumference = mobileNormalizedRadius * 2 * Math.PI;
  const mobileStrokeDasharray = `${mobileCircumference} ${mobileCircumference}`;
  const mobileStrokeDashoffset = mobileCircumference - (percentage / 100) * mobileCircumference;
  
  // Calculate for tablet
  const tabletNormalizedRadius = tabletRadius - smStrokeWidth * 2;
  const tabletCircumference = tabletNormalizedRadius * 2 * Math.PI;
  const tabletStrokeDasharray = `${tabletCircumference} ${tabletCircumference}`;
  const tabletStrokeDashoffset = tabletCircumference - (percentage / 100) * tabletCircumference;
  
  // Calculate for desktop
  const desktopNormalizedRadius = desktopRadius - lgStrokeWidth * 2;
  const desktopCircumference = desktopNormalizedRadius * 2 * Math.PI;
  const desktopStrokeDasharray = `${desktopCircumference} ${desktopCircumference}`;
  const desktopStrokeDashoffset = desktopCircumference - (percentage / 100) * desktopCircumference;

  return (
    <div className="flex flex-col items-center text-center text-white">
      {/* Mobile Circle (default) */}
      <div className="relative mb-3 sm:mb-4 md:mb-6 lg:mb-8 block sm:hidden">
        <svg
          height={mobileRadius * 2}
          width={mobileRadius * 2}
          className="transform -rotate-90"
        >
          <circle
            stroke="rgba(255, 255, 255, 0.15)"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={mobileNormalizedRadius}
            cx={mobileRadius}
            cy={mobileRadius}
            strokeLinecap="round"
          />
          <circle
            stroke="white"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={mobileStrokeDasharray}
            strokeDashoffset={mobileStrokeDashoffset}
            strokeLinecap="round"
            r={mobileNormalizedRadius}
            cx={mobileRadius}
            cy={mobileRadius}
            className="transition-all duration-1500 ease-in-out"
            style={{
              filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.3))'
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-semibold text-white drop-shadow-sm">
            {percentage}%
          </span>
        </div>
      </div>

      {/* Tablet Circle (sm to md) */}
      <div className="relative mb-4 md:mb-6 lg:mb-8 hidden sm:block lg:hidden">
        <svg
          height={tabletRadius * 2}
          width={tabletRadius * 2}
          className="transform -rotate-90"
        >
          <circle
            stroke="rgba(255, 255, 255, 0.15)"
            fill="transparent"
            strokeWidth={smStrokeWidth}
            r={tabletNormalizedRadius}
            cx={tabletRadius}
            cy={tabletRadius}
            strokeLinecap="round"
          />
          <circle
            stroke="white"
            fill="transparent"
            strokeWidth={smStrokeWidth}
            strokeDasharray={tabletStrokeDasharray}
            strokeDashoffset={tabletStrokeDashoffset}
            strokeLinecap="round"
            r={tabletNormalizedRadius}
            cx={tabletRadius}
            cy={tabletRadius}
            className="transition-all duration-1500 ease-in-out"
            style={{
              filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.3))'
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl text-white drop-shadow-sm">
            {percentage}%
          </span>
        </div>
      </div>

      {/* Desktop Circle (lg and up) */}
      <div className="relative mb-2 hidden lg:block">
        <svg
          height={desktopRadius * 2}
          width={desktopRadius * 2}
          className="transform -rotate-90"
        >
          <circle
            stroke="rgba(255, 255, 255, 0.15)"
            fill="transparent"
            strokeWidth={lgStrokeWidth}
            r={desktopNormalizedRadius}
            cx={desktopRadius}
            cy={desktopRadius}
            strokeLinecap="round"
          />
          <circle
            stroke="white"
            fill="transparent"
            strokeWidth={lgStrokeWidth}
            strokeDasharray={desktopStrokeDasharray}
            strokeDashoffset={desktopStrokeDashoffset}
            strokeLinecap="round"
            r={desktopNormalizedRadius}
            cx={desktopRadius}
            cy={desktopRadius}
            className="transition-all duration-1500 ease-in-out"
            style={{
              filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.3))'
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl text-white drop-shadow-sm">
            {percentage}%
          </span>
        </div>
      </div>

      <h3 className="text-xs sm:text-sm md:text-base lg:text-lg tracking-wide text-white text-center leading-tight">
        {title}
      </h3>
    </div>
  );
};

// Loading skeleton component
const ProgressSkeleton: React.FC = () => {
  return (
    <div className="bg-[#51301F] py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto">
        <div className="grid grid-cols-4 gap-3 sm:gap-6 md:gap-8 lg:gap-12">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex flex-col items-center text-center animate-pulse">
              <div className="relative mb-3 sm:mb-4 md:mb-6 lg:mb-8">
                {/* Mobile skeleton */}
                <div className="w-[100px] h-[100px] sm:hidden rounded-full border-4 border-white/15"></div>
                {/* Tablet skeleton */}
                <div className="w-[130px] h-[130px] hidden sm:block lg:hidden rounded-full border-5 border-white/15"></div>
                {/* Desktop skeleton */}
                <div className="w-40 h-40 hidden lg:block rounded-full border-6 border-white/15"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-4 sm:w-10 sm:h-5 lg:w-12 lg:h-8 bg-white/20 rounded"></div>
                </div>
              </div>
              <div className="w-16 h-3 sm:w-20 sm:h-4 lg:w-24 lg:h-4 bg-white/20 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

async function ProgressContent({ 
  propertyName, 
  fallbackData, 
}: ReusableProgressSectionProps) {
  let progressData: ConstructionProgress | null = null;

  try {
    progressData = await client.fetch<ConstructionProgress>(
      getConstructionProgressByPropertyQuery, 
      { propertyName }
    );
  } catch (error) {
    console.error('Error fetching construction progress:', error);
  }

  // Use Sanity data if available, otherwise fallback to props
  const data = progressData?.progressData || fallbackData;
  // const title = progressData?.title || customTitle || 'Construction Progress';
  // const description = progressData?.description || customDescription || 'Track our construction milestones and development phases';

  if (!data) {
    return (
      <div className="bg-[#51301F] py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto text-center">
          <div className="text-white/60">
            <p className="text-sm sm:text-base">Construction progress data not available for {propertyName}</p>
          </div>
        </div>
      </div>
    );
  }

  const progressItems: ProgressItem[] = [
    {
      percentage: data.overall,
      title: 'OVERALL'
    },
    {
      percentage: data.exterior,
      title: 'EXTERIOR'
    },
    {
      percentage: data.interior,
      title: 'INTERIOR'
    },
    {
      percentage: data.infrastructure,
      title: 'INFRASTRUCTURE'
    }
  ];

  return (
    <div className="bg-[#51301F] mt-12 sm:mt-16 md:mt-20 px-4 sm:px-8 md:px-12 lg:px-16 mb-8 sm:mb-10 md:mb-12">
      <div className="mx-auto pt-8 sm:pt-10 md:pt-12">
        {/* Always 4 columns, but responsive sizing */}
        <div className="grid grid-cols-4 gap-3 sm:gap-6 md:gap-8 lg:gap-12">
          {progressItems.map((item: ProgressItem, index: number) => (
            <CircularProgress
              key={index}
              percentage={item.percentage}
              title={item.title}
            />
          ))}
        </div>
      </div>

      {/* Last updated info if from Sanity */}
      {progressData?.lastUpdated && (
        <div className="text-center mt-6 sm:mt-8 pb-6">
          <p className="text-xs sm:text-sm text-white/90">
            Last updated: {new Date(progressData.lastUpdated).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>
      )}
    </div>
  );
}

const ReusableProgressSection: React.FC<ReusableProgressSectionProps> = (props) => {
  return (
    <React.Suspense fallback={<ProgressSkeleton />}>
      <ProgressContent {...props} />
    </React.Suspense>
  );
};

export default ReusableProgressSection;