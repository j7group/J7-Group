import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navigation/header";
import SmoothScrollProvider from "@/components/layout/navigation/ReactLenis";
import Footer from "@/components/layout/navigation/footer";
import { BaseStructuredData } from "@/components/seo/StructuredData";
import GoogleAnalytics from "@/components/seo/GoogleAnalytics";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "J7 Group — Leading Real Estate & Construction Developer in Pakistan",
  description:
    "J7 Group is a premier real estate and hospitality developer based in Islamabad, Pakistan. Renowned for projects like J7 Emporium, Royal Swiss Islamabad, and Radisson Blu J7 Global, J7 Group is redefining urban living with luxury developments and sustainable innovation.",
    icons: {
      icon: "/j7Logo.png",
      shortcut: "/j7Logo.png"
    },
    openGraph: {
      images: [{
        url: "https://res.cloudinary.com/diqj8so5h/image/upload/v1/Cam_11_final_day_light_bpopj5",
        width: 1200,
        height: 630,
        alt: "J7 Group - Leading Real Estate Developer Pakistan"
      }]
    },
    keywords: [
      "J7 Group",
      "Real Estate",
      "Construction",
      "Islamabad",
      "Pakistan",
      "Luxury",
      "Residential",
      "Commercial",
      "Hospitality",
      "J7 Emporium",
      "Royal Swiss Islamabad",
      "Radisson Blu J7 Global",
      "J7 Icon"
    ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins antialiased overflow-x-hidden`}
      >
        <GoogleAnalytics />
        <BaseStructuredData />
        <meta name="geo.region" content="PK-IS" />
        <meta name="geo.placename" content="Islamabad" />
        {/* Navigation with dropdown support */}
        <Navbar />

        {/* Main content area */}
        <main className="relative">
          <SmoothScrollProvider />
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
