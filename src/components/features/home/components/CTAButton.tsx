// components/CTAButton.tsx
import Link from "next/link";

interface CTAButtonProps {
  isScrolled: boolean;
}

const CTAButton = ({ isScrolled }: CTAButtonProps) => (
  <div className="flex items-center">
    <Link
      href="/contact"
      className={`hidden sm:block group relative overflow-hidden px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 text-xs font-medium tracking-[0.15em] uppercase transition-all duration-500 border rounded-full ${
        isScrolled
          ? "bg-[#51301F] text-white border-2 border-[#51301F] hover:bg-white hover:text-[#51301F]"
          : "bg-transparent border-white/40 text-white hover:bg-white hover:text-gray-900"
      } hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5`}
    >
      <span className="relative z-10 text-nowrap">Get in Touch</span>
    </Link>
  </div>
);

export default CTAButton;