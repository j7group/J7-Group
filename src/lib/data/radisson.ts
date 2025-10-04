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
export const radissonData: ProjectData = {
  name: "Radisson Blu",
  hasVideo: false,
  // videoUrl: "https://example.com/j7-emporium-video.mp4",
  images: [
    {
      id: "1",
      cloudinaryId: "/Radisson/cb8agvkvjeestx6nrcxt_with_bgc.webp",
      alt: "Radisson Luxury Building",
      type: "exterior",
    },
    {
      id: "2",
      cloudinaryId: "/Radisson/bu6bonjx9ob7knrb24gw_with_bgc.webp",
      alt: "Radisson Pool Area",
      type: "exterior",
    },
    {
      id: "3",
      cloudinaryId: "/Radisson/Hotel_Residences_3_with_bgc (1).webp",
      alt: "Radisson Modern Exterior",
      type: "exterior",
    },
    {
      id: "4",
      cloudinaryId: "/Radisson/unrdxwszgeenqwunfr6t_with_bgc.webp",
      alt: "Radisson Interior Living",
      type: "exterior",
    },
    {
      id: "5",
      cloudinaryId: "/Radisson/uhdmrixyi8ckcfl9ozlk_with_bgc.webp",
      alt: "Radisson Kitchen",
      type: "exterior",
    },
    {
      id: "6",
      cloudinaryId: "/Radisson/lu0gcb0ob0b8xlisbvl8_with_bgc.webp",
      alt: "Radisson Bedroom",
      type: "exterior",
    },
    {
      id: "7",
      cloudinaryId: "/Radisson/rtxerroioyipklgevnpo_with_bgc.webp",
      alt: "Radisson Hotel Suite",
      type: "interior",
    },
    {
      id: "10",
      cloudinaryId: "/Radisson/kulcodji7sra4mdrkd1y_with_bgc.webp",
      alt: "Radisson Co-Working",
      type: "interior",
    },
    {
      id: "11",
      cloudinaryId: "/Radisson/gvd9vrx9gfew7lk7xdxr_with_bgc.webp",
      alt: "Radisson Hotel Residences",
      type: "interior",
    },
    {
      id: "8",
      cloudinaryId: "/Radisson/Hotel_Residences_2_with_bgc.webp",
      alt: "Radisson Luxury Room",
      type: "interior",
    },
    {
      id: "9",
      cloudinaryId: "/Radisson/nnkxbpqpth1ttswvmsas_with_bgc.webp",
      alt: "Radisson Executive Suite",
      type: "interior",
    },
    {
      id: "12",
      cloudinaryId: "Amenities Radisson/egkmhcvbsurke9vyepe0.webp",
      alt: "Banquet Hall",
      type: "interior",
    },
    {
      id: "12",
      cloudinaryId: "Amenities Radisson/aqfg0tma72m6bwdrxmbp.webp",
      alt: "Terrace",
      type: "interior",
    },
  ],
};

export const radissonFeatures: PropertySectionData = {
  title: "Discover the Ultimate in Radisson Blu Islamabad",
  description:
    "Introducing Radisson Blu Islamabad — offering elegant studio, 1-bedroom, and 2-bedroom apartments, hotel suites, and high-end retail shops. Located in Mumtaz City on Srinagar Highway, moments from Islamabad International Airport, this development stands at the confluence of luxury and accessibility. With architecture inspired by modern design and meticulous craftsmanship, every residence and space is created for refined living, emphasizing sophistication, prestige, and comfort.",
  mainImage: {
    cloudinaryId: "/Radisson/unrdxwszgeenqwunfr6t_with_bgc.webp",
    alt: "Radisson Blu Islamabad Interior",
  },
};

export const radissonDetail: ResidenceDetail = {
  title: "A Landmark of Contemporary Luxury",
  description:
    "At Radisson Blu Islamabad, contemporary luxury is redefined through exceptional design and world-class hospitality. Designed for discerning guests, this iconic destination offers refined interiors, state-of-the-art amenities, and seamless access to the capital’s vibrant lifestyle—an address that reflects prestige, comfort, and sophistication.",
};
