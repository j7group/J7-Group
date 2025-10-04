import { ResidenceDetail } from "../properties/types";
import { PropertySectionData } from "./emporium";

interface GalleryImage {
  id: string;
  cloudinaryId: string;
  alt: string;
  type: "exterior" | "interior";
}
export interface ProjectData {
  name: string;
  images: GalleryImage[];
  videoUrl?: string;
  hasVideo?: boolean;
}
export const iconData: ProjectData = {
  name: "J7 Icon",
  hasVideo: false,
  // videoUrl: "https://example.com/j7-emporium-video.mp4",
  images: [
    {
      id: "1",
      cloudinaryId: "J7 Icon/icon3.webp",
      alt: "J7 Emporium Luxury Building",
      type: "exterior",
    },
    {
      id: "2",
      cloudinaryId: "J7 Icon/icon1.webp",
      alt: "J7 Emporium Pool Area",
      type: "exterior",
    },
    {
      id: "3",
      cloudinaryId: "J7 Icon/icon2.webp",
      alt: "J7 Emporium Modern Exterior",
      type: "exterior",
    },
    {
      id: "4",
      cloudinaryId: "J7 Icon/royal1.jpg",
      alt: "J7 Emporium Interior Living",
      type: "exterior",
    },
    // { id: '5', cloudinaryId: 'nj35hpsamud4ekxqqqhj_k7g0j8', alt: 'J7 Emporium Kitchen', type: 'exterior' },
    // { id: '6', cloudinaryId: 'bdm79wg1vocjednjsc8o_iol4ix', alt: 'J7 Emporium Bedroom', type: 'exterior' },
    {
      id: "7",
      cloudinaryId: "Rotana/Amenities/AdobeStock_740512005_with_bgc.webp",
      alt: "J7 Emporium Hotel Suite",
      type: "interior",
    },
    {
      id: "8",
      cloudinaryId: "Rotana/Amenities/AdobeStock_639731555_with_bgc.webp",
      alt: "J7 Emporium Luxury Room",
      type: "interior",
    },
    {
      id: "9",
      cloudinaryId:
        "Rotana/Amenities/AdobeStock_1340126777_1_with_bgc (1).webp",
      alt: "J7 Emporium Executive Suite",
      type: "interior",
    },
    {
      id: "10",
      cloudinaryId:
        "/Rotana/Amenities/modern-architecture-clean-design-bright-lighting-comfortable-seating-indoors-generated-by-artificial-intelligence_1_with_bgc.webp",
      alt: "J7 Emporium Co-Working",
      type: "interior",
    },
    {
      id: "11",
      cloudinaryId: "Rotana/Amenities/AdobeStock_1340126777_1_with_bgc.webp",
      alt: "J7 Emporium Banquet Hall",
      type: "interior",
    },
    {
      id: "12",
      cloudinaryId: "Rotana/Amenities/AdobeStock_891253668_1_with_bgc.webp",
      alt: "J7 Emporium Gymnasium",
      type: "interior",
    },
  ],
};

export const iconDetail: ResidenceDetail = {
  title: "A Symbol of Prestige",
  description:
    "J7 Icon redefines modern excellence with its striking architecture and premium offerings. Designed to embody sophistication and innovation, it stands as a landmark destination that blends luxury, functionality, and an exceptional lifestyle experience for the elite.",
};

export const j7IconFeatures: PropertySectionData = {
  title: "J7 Icon – Royal Swiss: Pinnacle of Five-Star Hospitality",
  description:
    "J7 Icon, the Royal Swiss Hotel, is a 5-star landmark by J7 Group in Mumtaz City, Islamabad — where Swiss-inspired elegance meets world-class hospitality. Strategically located along Srinagar Highway, just minutes from the new airport and major motorways, the project offers luxury hotel suites, fine dining, wellness and spa amenities, banquet and event facilities, and exclusive services. Every element is crafted to set a new standard of prestige and comfort in the capital.",
  mainImage: {
    cloudinaryId: "Rotana/Amenities/teksjagesj7ohg38cdj9_1_with_bgc.webp",
    alt: "J7 Icon Luxury Building",
  },
};
