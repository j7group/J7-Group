// components/DropdownCard.tsx
import React from "react";
import Link from "next/link";
import { DropdownSection } from "@/lib/navbar/types";
import { Image } from "@imagekit/next";

interface DropdownCardProps {
  section: DropdownSection;
  showDescription?: boolean;
  height?: string;
  isScrolled: boolean;
}

const DropdownCard: React.FC<DropdownCardProps> = ({
  section,
  showDescription = false,
  height = "h-72",
}) => {
  const cardContent = (
    <div className="group cursor-pointer">
      <div
        className={`relative overflow-hidden ${height} ${showDescription ? "mb-4" : ""}`}
      >
        <Image
          urlEndpoint={process.env.NEXT_PUBLIC_URL_ENDPOINT}
          src={section.image}
          alt={section.title}
          fill
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-white/90 text-xs uppercase tracking-wider mb-2">
            {section.category}
          </p>
          <h3
            className={`text-white font-light ${showDescription ? "text-xl mb-3" : "text-lg"}`}
          >
            {section.title}
          </h3>
        </div>
      </div>
    </div>
  );

  // If href exists, wrap with Link, otherwise return the card as is
  return section.href ? (
    <Link href={section.href}>{cardContent}</Link>
  ) : (
    cardContent
  );
};

export default DropdownCard;
