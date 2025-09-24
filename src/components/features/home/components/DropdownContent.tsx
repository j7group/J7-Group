// components/DropdownContent.tsx
import React from 'react';
import DropdownCard from './DropdownCard';
import { DropdownSection, DropdownType } from '@/lib/navbar/types';

interface DropdownContentProps {
  isVisible: boolean;
  type: DropdownType;
  sections: DropdownSection[];
  isScrolled: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const DropdownContent: React.FC<DropdownContentProps> = ({
  isVisible,
  type,
  sections,
  isScrolled,
  onMouseEnter,
  onMouseLeave
}) => {
  if (!isVisible || !type) return null;

  const isMedia = type === 'media';
  const isDevelopments = type === 'developments';
  
  // Set grid layout based on section type
  const gridCols = isMedia ? 'grid-cols-3' : 'grid-cols-4';
  const cardHeight = isMedia ? 'h-84' : 'h-64';
  const gap = isMedia ? 'gap-8' : 'gap-6';

  return (
    <div 
      className={`absolute top-full left-0 right-0 backdrop-blur-xl shadow-2xl transition-colors duration-500 ${
        isScrolled 
          ? 'bg-[#51301F] border-b border-gray-200' 
          : 'border-b border-gray-100'
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="mx-auto px-8 py-12">
        <div className={`grid ${gridCols} ${gap}`}>
          {isMedia ? (
            <>
              {/* First card with description for Media Center */}
              <DropdownCard 
                section={sections[0]}
                showDescription={true}
                height={cardHeight}
                isScrolled={isScrolled}
              />
              {/* Other cards without description */}
              {sections.slice(1).map((section) => (
                <DropdownCard 
                  key={section.id}
                  section={section}
                  height={cardHeight}
                  isScrolled={isScrolled}
                />
              ))}
            </>
          ) : isDevelopments ? (
            /* All cards for Developments (4 items) */
            sections.map((section) => (
              <DropdownCard 
                key={section.id}
                section={section}
                height={cardHeight}
                isScrolled={isScrolled}
              />
            ))
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DropdownContent;