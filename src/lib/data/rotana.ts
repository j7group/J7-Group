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
export const rotanaData: ProjectData = {
  name: "Rotana",
  hasVideo: true,
  videoUrl: "https://example.com/j7-emporium-video.mp4",
  images: [
    { id: '1', cloudinaryId: 'imgi_66_1-5.jpg-1_s17rfp', alt: 'J7 Emporium Luxury Building', type: 'exterior' },
    { id: '2', cloudinaryId: 'rotana2_icu3pe', alt: 'J7 Emporium Pool Area', type: 'exterior' },
    { id: '3', cloudinaryId: 'bdm79wg1vocjednjsc8o_iol4ix', alt: 'J7 Emporium Modern Exterior', type: 'exterior' },
    { id: '4', cloudinaryId: 'biv8tzmbnryxtp229hvg_vd9ufi', alt: 'J7 Emporium Interior Living', type: 'exterior' },
    { id: '5', cloudinaryId: 'nj35hpsamud4ekxqqqhj_k7g0j8', alt: 'J7 Emporium Kitchen', type: 'exterior' },
    { id: '6', cloudinaryId: 'bdm79wg1vocjednjsc8o_iol4ix', alt: 'J7 Emporium Bedroom', type: 'exterior' },
    { id: '7', cloudinaryId: 'AdobeStock_981045239_aiodpz', alt: 'J7 Emporium Hotel Suite', type: 'interior' },
    { id: '8', cloudinaryId: 'modern-architecture-clean-design-bright-lighting-comfortable-seating-indoors-generated-by-artificial-intelligence_duuk74', alt: 'J7 Emporium Luxury Room', type: 'interior' },
    { id: '9', cloudinaryId: 'AdobeStock_1118174747_epp4dv', alt: 'J7 Emporium Executive Suite', type: 'interior' },
    { id: '10', cloudinaryId: 'AdobeStock_639731555_w6eo8y', alt: 'J7 Emporium Co-Working', type: 'interior' },
    { id: '11', cloudinaryId: 'AdobeStock_637166455_pqwjl1', alt: 'J7 Emporium Banquet Hall', type: 'interior' },
    { id: '12', cloudinaryId: 'Gymnesium_jpks5k', alt: 'J7 Emporium Gymnasium', type: 'interior' },
  ]
};


export const rotanaFeatures: PropertySectionData = {
  title: "Signature Rotana Islamabad – Landmark of Luxury Hospitality",
  description: "Signature Rotana Islamabad sets a new benchmark in luxury hospitality. Situated in TopCity-1 on the Main Srinagar Highway, this 26-storey masterpiece features 378 hotel rooms and 144 branded residence apartments — a total of 522 keys, combining Rotana’s world-class standards with sophistication and ease. Business Traveller Guests and residents will enjoy a full range of premium amenities, including an expansive business centre with six meeting rooms, banquet and multipurpose halls, two speciality restaurants, and a café. For wellness and recreation there’s an indoor pool, gymnasium, spa, thermal facilities, and dedicated relaxation lounges.",
  mainImage: {
    cloudinaryId: "img7218_cecutc",
    alt: "Radisson Blu Islamabad Interior"
  },
};

export const rotanaDetail : ResidenceDetail = {
  title: "The New Face of Hospitality",
  description: "J7 Rotana embodies world-class hospitality, where refined luxury meets exceptional comfort. Designed to international standards, it offers elegant spaces, premium services, and a vibrant atmosphere, making it the perfect destination for business, leisure, and an elevated lifestyle experience."
}

