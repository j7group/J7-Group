import ContactForm1 from "@/components/features/contact/components/Contact";
import GoogleMapsIframe from "@/components/features/contact/components/J7Map";
// import ContactForm from '@/components/features/home/components/ContactFormSection'
import { Hero } from "@/components/features/home/components/hero-section";
import { ContactPageStructuredData } from "@/components/seo/StructuredData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact J7 Group - Get in Touch",
  description:
    "Contact J7 Group for inquiries about our luxury developments, investment opportunities, and property details in Islamabad.",
  alternates: {
    canonical: "https://j7group.com.pk/contact",
  },
  openGraph: {
    title: "Contact J7 Group",
    description:
      "Get in touch with J7 Group for property inquiries and investment opportunities.",
    url: "https://j7group.com.pk/contact",
  },
};
const page = () => {
  return (
    <>
      <ContactPageStructuredData />
      <Hero
        backgroundSrc="Google_AI_Studio_2025-09-30T09_45_34.616Z_m5hlyz"
        backgroundType="image"
        overlay="medium"
      />
      <ContactForm1 />
      <GoogleMapsIframe />
    </>
  );
};

export default page;
