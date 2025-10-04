import { ResidenceDetail } from "../properties/types";

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

export interface PropertyFeature {
  iconId: string;
  title: string;
  description: string;
}

export interface PropertySectionData {
  title: string;
  description: string;
  mainImage: {
    cloudinaryId: string;
    alt: string;
  };
  contactLink?: string;
}
export const j7EmporiumData: ProjectData = {
  name: "J7 Emporium",
  hasVideo: false,
  // videoUrl: "https://example.com/j7-emporium-video.mp4",
  images: [
    {
      id:"0",
      cloudinaryId: "J7 Emp/Cam_09 final daylight (1).webp",
      alt: "J7 Emporium Modern Exterior",
      type: "exterior",
    },
    {
      id: "1",
      cloudinaryId: "J7 Emp/output (1).webp",
      alt: "J7 Emporium Luxury Building",
      type: "exterior",
    },
    {
      id: "19",
      cloudinaryId: "J7 Emp/Cam_12 final day light.webp",
      alt: "J7 Emporium Kitchen",
      type: "exterior",
    },
    {
      id: "2",
      cloudinaryId: "J7 Emp/Cam_13 final day light.webp",
      alt: "J7 Emporium Pool Area",
      type: "exterior",
    },
    {
      id: "3",
      cloudinaryId: "J7 Emp/Cam_11 final day light.webp",
      alt: "J7 Emporium Pool Area",
      type: "exterior",
    },
    {
      id: "4",
      cloudinaryId: "J7 Emp/Cam_04 final night light.webp",
      alt: "J7 Emporium Modern Exterior",
      type: "exterior",
    },
    {
      id: "5",
      cloudinaryId: "J7 Emp/Cam_11 final day light.webp",
      alt: "J7 Emporium Interior Living",
      type: "exterior",
    },
    {
      id: "6",
      cloudinaryId: "J7 Emp/Cam_07 final daylight (1).webp",
      alt: "J7 Emporium Bedroom",
      type: "exterior",
    },
    {
      id: "7",
      cloudinaryId: "/Amenities J7 Emp/img7100.jpg",
      alt: "J7 Emporium Hotel Suite",
      type: "interior",
    },
    {
      id: "8",
      cloudinaryId: "/Amenities J7 Emp/img1319.jpg",
      alt: "J7 Emporium Luxury Room",
      type: "interior",
    },
    {
      id: "14",
      cloudinaryId: "/Amenities J7 Emp/img1201.jpg",
      alt: "J7 Emporium Gymnasium",
      type: "interior",
    },
    {
      id: "9",
      cloudinaryId: "/Amenities J7 Emp/img4504.jpg",
      alt: "J7 Emporium Executive Suite",
      type: "interior",
    },
    {
      id: "10",
      cloudinaryId: "/Amenities J7 Emp/img4858.jpg",
      alt: "J7 Emporium Co-Working",
      type: "interior",
    },
    {
      id: "11",
      cloudinaryId: "/Amenities J7 Emp/img5330.jpg",
      alt: "J7 Emporium Banquet Hall",
      type: "interior",
    },
    {
      id: "12",
      cloudinaryId: "/Amenities J7 Emp/img2851.jpg",
      alt: "J7 Emporium Gymnasium",
      type: "interior",
    },
    {
      id: "13",
      cloudinaryId: "/Amenities J7 Emp/img7336.jpg",
      alt: "J7 Emporium Gymnasium",
      type: "interior",
    },
    {
      id: "15",
      cloudinaryId: "/Amenities J7 Emp/img4150.jpg",
      alt: "J7 Emporium Gymnasium",
      type: "interior",
    },
    {
      id: "16",
      cloudinaryId: "/Amenities J7 Emp/img611.jpg",
      alt: "J7 Emporium Gymnasium",
      type: "interior",
    },
  ],
};

export const emporiumDetail: ResidenceDetail = {
  title: "The Epitome of Elegance",
  description:
    "J7 Emporium stands as a symbol of sophistication, where contemporary architecture meets timeless design. With premium spaces, curated amenities, and a vibrant atmosphere, it offers an elevated lifestyle experience tailored for those who aspire to the extraordinary.",
};

export const aboutDetail: ResidenceDetail = {
  title: "Where Luxury Meets Convenience",
  description: "J7 Group stands as a symbol of sophistication, where contemporary architecture meets timeless design. With premium spaces, curated amenities, and a vibrant atmosphere, it offers an elevated lifestyle experience tailored for those who aspire to the extraordinary."
}

export const emporiumFeatures: PropertySectionData = {
  title: "J7 Emporium – Islamabad’s Premier Mixed-Use Icon",
  description: "Rising in the heart of B-17, Islamabad, J7 Emporium is a 30-storey masterpiece covering 46 kanals of prime real estate. This landmark development blends luxury residences, a grand shopping mall, corporate offices, and hotel suites—all unified by world-class amenities. With features such as Pakistan’s first skywalk, towering atrium, rooftop restaurants, spa & gym, and cutting-edge infrastructure, J7 Emporium redefines urban excellence and offers unmatched investment opportunity and lifestyle sophistication.",
  mainImage: {
    cloudinaryId: "Amenities J7 Emp/img1083.jpg",
    alt: "J7 Emporium Luxury Building",
  }
}