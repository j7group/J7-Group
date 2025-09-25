import { ResidenceDetail } from "../properties/types";
import { PropertySectionData } from "./emporium";

interface GalleryImage {
  id: string;
  cloudinaryId: string;
  alt: string;
  type: 'exterior' | 'interior';
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
    { id: '1', cloudinaryId: 'icon2_wwpfmi', alt: 'J7 Emporium Luxury Building', type: 'exterior' },
    { id: '2', cloudinaryId: 'icon3_wzqaqu', alt: 'J7 Emporium Pool Area', type: 'exterior' },
    { id: '3', cloudinaryId: 'icon1_mexsjh', alt: 'J7 Emporium Modern Exterior', type: 'exterior' },
    { id: '4', cloudinaryId: 'royal3_t4obn2', alt: 'J7 Emporium Interior Living', type: 'exterior' },
    // { id: '5', cloudinaryId: 'nj35hpsamud4ekxqqqhj_k7g0j8', alt: 'J7 Emporium Kitchen', type: 'exterior' },
    // { id: '6', cloudinaryId: 'bdm79wg1vocjednjsc8o_iol4ix', alt: 'J7 Emporium Bedroom', type: 'exterior' },
    { id: '7', cloudinaryId: 'Hotel_Residences_2_dti3gh', alt: 'J7 Emporium Hotel Suite', type: 'interior' },
    { id: '8', cloudinaryId: 'imgi_31_largeimg-1_arl4qb', alt: 'J7 Emporium Luxury Room', type: 'interior' },
    { id: '9', cloudinaryId: 'Hotel_Residences_1_vmzzra', alt: 'J7 Emporium Executive Suite', type: 'interior' },
    { id: '10', cloudinaryId: 'Co-Working_Spaces_x2rz4t', alt: 'J7 Emporium Co-Working', type: 'interior' },
    { id: '11', cloudinaryId: 'Banquet_Hall_rk47z6', alt: 'J7 Emporium Banquet Hall', type: 'interior' },
    { id: '12', cloudinaryId: 'Gymnesium_jpks5k', alt: 'J7 Emporium Gymnasium', type: 'interior' },
  ]
};

export const iconDetail : ResidenceDetail = {
    title: "A Symbol of Prestige",
    description: "J7 Icon redefines modern excellence with its striking architecture and premium offerings. Designed to embody sophistication and innovation, it stands as a landmark destination that blends luxury, functionality, and an exceptional lifestyle experience for the elite."
}

export const j7IconFeatures: PropertySectionData = {
  title: "J7 Icon – Royal Swiss: Pinnacle of Five-Star Hospitality",
  description: "J7 Icon, the Royal Swiss Hotel, is a 5-star landmark by J7 Group in Mumtaz City, Islamabad — where Swiss-inspired elegance meets world-class hospitality. Strategically located along Srinagar Highway, just minutes from the new airport and major motorways, the project offers luxury hotel suites, fine dining, wellness and spa amenities, banquet and event facilities, and exclusive services. Every element is crafted to set a new standard of prestige and comfort in the capital.",
  mainImage: {
    cloudinaryId: "img1201_oi4zoo",
    alt: "J7 Icon Luxury Building",
  }
}