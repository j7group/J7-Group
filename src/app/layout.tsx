import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navigation/header";
import SmoothScrollProvider from "@/components/layout/navigation/ReactLenis";
import Footer from "@/components/layout/navigation/footer";
import { StructuredData } from "@/components/seo/StructuredData";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "J7 Group — Leading Real Estate & Construction Developer in Pakistan",
  description:
    "J7 Group is a premier real estate and hospitality developer based in Islamabad, Pakistan. Renowned for projects like J7 Emporium, Royal Swiss Islamabad, and Radisson Blu J7 Global, J7 Group is redefining urban living with luxury developments and sustainable innovation.",
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
        <StructuredData />
        {/* Navigation with dropdown support */}
        <Navbar />

        {/* Main content area */}
        <main className="relative">
          <SmoothScrollProvider />
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
