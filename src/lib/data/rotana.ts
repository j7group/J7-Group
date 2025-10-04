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
export const rotanaData: ProjectData = {
  name: "Rotana",
  hasVideo: false,
  // videoUrl: "https://example.com/j7-emporium-video.mp4",
  images: [
    {
      id: "1",
      cloudinaryId: "Rotana/rotana2.webp",
      alt: "Rotana Luxury Building",
      type: "exterior",
    },
    {
      id: "2",
      cloudinaryId: "Rotana/rotana.webp",
      alt: "Rotana Exterior",
      type: "exterior",
    },
    {
      id: "3",
      cloudinaryId: "Rotana/rotana1_with_bgc.webp",
      alt: "Rotana Exterior",
      type: "exterior",
    },
    // { id: '3', cloudinaryId: 'bdm79wg1vocjednjsc8o_iol4ix', alt: 'J7 Emporium Modern Exterior', type: 'exterior' },
    // { id: '4', cloudinaryId: 'biv8tzmbnryxtp229hvg_vd9ufi', alt: 'J7 Emporium Interior Living', type: 'exterior' },
    // { id: '5', cloudinaryId: 'nj35hpsamud4ekxqqqhj_k7g0j8', alt: 'J7 Emporium Kitchen', type: 'exterior' },
    // { id: '6', cloudinaryId: 'bdm79wg1vocjednjsc8o_iol4ix', alt: 'J7 Emporium Bedroom', type: 'exterior' },
        {
      id: "7",
      cloudinaryId: "/Amenities J7 Emp/img7100.jpg",
      alt: "J7 Emporium Hotel Suite",
      type: "interior",
    },
    {
      id: "7",
      cloudinaryId: "Rotana/Amenities/AdobeStock_740512005_with_bgc.webp",
      alt: "J7 Emporium Hotel Suite",
      type: "interior",
    },
        {
      id: "14",
      cloudinaryId: "/Amenities J7 Emp/img1201.jpg",
      alt: "J7 Emporium Gymnasium",
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
      id: "8",
      cloudinaryId: "/Amenities J7 Emp/img1319.jpg",
      alt: "J7 Emporium Luxury Room",
      type: "interior",
    },
  ],
};

export const rotanaFeatures: PropertySectionData = {
  title: "Signature Rotana Islamabad – Landmark of Luxury Hospitality",
  description:
    "Signature Rotana Islamabad sets a new benchmark in luxury hospitality. Situated in TopCity-1 on the Main Srinagar Highway, this 26-storey masterpiece features 378 hotel rooms and 144 branded residence apartments — a total of 522 keys, combining Rotana’s world-class standards with sophistication and ease. Business Traveller Guests and residents will enjoy a full range of premium amenities, including an expansive business centre with six meeting rooms, banquet and multipurpose halls, two speciality restaurants, and a café. For wellness and recreation there’s an indoor pool, gymnasium, spa, thermal facilities, and dedicated relaxation lounges.",
  mainImage: {
    cloudinaryId: "/Amenities J7 Emp/img7100.jpg",
    alt: "Radisson Blu Islamabad Interior",
  },
};

export const rotanaDetail: ResidenceDetail = {
  title: "The New Face of Hospitality",
  description:
    "J7 Rotana embodies world-class hospitality, where refined luxury meets exceptional comfort. Designed to international standards, it offers elegant spaces, premium services, and a vibrant atmosphere, making it the perfect destination for business, leisure, and an elevated lifestyle experience.",
};
