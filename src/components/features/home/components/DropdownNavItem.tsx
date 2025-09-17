// components/DropdownNavItem.tsx
import React from 'react';
import { DropdownType } from '@/lib/navbar/types';

interface DropdownNavItemProps {
  label: string;
  isActive: boolean;
  isScrolled: boolean;
  type: DropdownType;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const DropdownNavItem: React.FC<DropdownNavItemProps> = ({
  label,
  isScrolled,
  onMouseEnter,
  onMouseLeave
}) => {
  return (
    <div 
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={`text-xs lg:text-sm font-light tracking-wide transition-colors duration-500 flex items-center py-6 cursor-pointer whitespace-nowrap ${
        isScrolled 
          ? 'text-[#51301F] hover:text-gray-600 uppercase font-medium'
          : 'text-white hover:text-white/80'
      }`}>
        <span className='text-nowrap'>{label}</span>
        {/* <ChevronDown className={`w-4 h-4 ml-1 transform transition-transform duration-200 flex-shrink-0 ${isActive ? 'rotate-180' : ''}`} /> */}
      </div>
    </div>
  );
};

export default DropdownNavItem;