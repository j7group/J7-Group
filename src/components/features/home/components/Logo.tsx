// components/Logo.tsx
import Link from "next/link";

interface LogoProps {
  isScrolled: boolean;
}

const Logo = ({ isScrolled }: LogoProps) => (
  <div className="flex-shrink-0 z-10">
    <Link href="/" className="group block">
      <div className="relative">
        <h1
          className={`text-2xl lg:text-3xl font-light tracking-[0.05em] transition-all duration-500 ${
            isScrolled ? "text-[#51301F]" : "text-white"
          }`}
        >
          <span className="font-normal text-3xl ml-8 sm:ml-0 mt-1 sm:mt-0 text-center">J7GROUP</span>
        </h1>
      </div>
    </Link>
  </div>
);

export default Logo;