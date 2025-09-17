// components/NavLink.tsx
import Link from 'next/link';
import React from 'react';

interface NavLinkProps {
  href: string;
  isScrolled: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, isScrolled, children }) => {
  return (
    <Link
      href={href} 
      className={`text-xs lg:text-sm tracking-wide text-nowrap  duration-500 whitespace-nowrap ${
        isScrolled
          ? 'text-[#51301F] hover:text-gray-600 font-medium uppercase'
          : 'text-white hover:text-white/80'
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;