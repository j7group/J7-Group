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
export const radissonData: ProjectData = {
  name: "Radisson Blu",
  hasVideo: true,
  videoUrl: "https://example.com/j7-emporium-video.mp4",
  images: [
    { id: '1', cloudinaryId: 'unrdxwszgeenqwunfr6t_tjgaqi', alt: 'J7 Emporium Luxury Building', type: 'exterior' },
    { id: '2', cloudinaryId: 'bu6bonjx9ob7knrb24gw_hgpyzo', alt: 'J7 Emporium Pool Area', type: 'exterior' },
    { id: '3', cloudinaryId: 'uhdmrixyi8ckcfl9ozlk_gum4ab', alt: 'J7 Emporium Modern Exterior', type: 'exterior' },
    { id: '4', cloudinaryId: 'kulcodji7sra4mdrkd1y_eyltxt', alt: 'J7 Emporium Interior Living', type: 'exterior' },
    { id: '5', cloudinaryId: 'cb8agvkvjeestx6nrcxt_ovgqmz', alt: 'J7 Emporium Kitchen', type: 'exterior' },
    { id: '6', cloudinaryId: 'arbwaavarkppzcxkwrkf_tbecl6', alt: 'J7 Emporium Bedroom', type: 'exterior' },
    { id: '7', cloudinaryId: 'rtxerroioyipklgevnpo_q9xmde', alt: 'J7 Emporium Hotel Suite', type: 'interior' },
    { id: '10', cloudinaryId: 'Hotel_Residences_3_h05hhs', alt: 'J7 Emporium Co-Working', type: 'interior' },
    { id: '11', cloudinaryId: 'Hotel_Residences_2_nsxczz', alt: 'J7 Emporium Banquet Hall', type: 'interior' },
    { id: '8', cloudinaryId: 'nnkxbpqpth1ttswvmsas_sz08ck', alt: 'J7 Emporium Luxury Room', type: 'interior' },
    { id: '9', cloudinaryId: 'nadel741o9ghn2h2sj7o_jnc3eb', alt: 'J7 Emporium Executive Suite', type: 'interior' },
    { id: '12', cloudinaryId: 'Hotel_Residences_1_tklkzv', alt: 'J7 Emporium Gymnasium', type: 'interior' },
  ]
};


export const radissonFeatures: PropertySectionData = {
  title: "Discover the Ultimate in Radisson Blu Islamabad",
  description: "Introducing Radisson Blu Islamabad — offering elegant studio, 1-bedroom, and 2-bedroom apartments, hotel suites, and high-end retail shops. Located in Mumtaz City on Srinagar Highway, moments from Islamabad International Airport, this development stands at the confluence of luxury and accessibility. With architecture inspired by modern design and meticulous craftsmanship, every residence and space is created for refined living, emphasizing sophistication, prestige, and comfort.",
  mainImage: {
    cloudinaryId: "rtxerroioyipklgevnpo_q9xmde",
    alt: "Radisson Blu Islamabad Interior"
  },
};

export const radissonDetail : ResidenceDetail = {
  title: "A Landmark of Contemporary Luxury",
  description: "At Radisson Blu Islamabad, contemporary luxury is redefined through exceptional design and world-class hospitality. Designed for discerning guests, this iconic destination offers refined interiors, state-of-the-art amenities, and seamless access to the capital’s vibrant lifestyle—an address that reflects prestige, comfort, and sophistication."
}
