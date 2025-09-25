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
      id: "5",
      cloudinaryId: "output_bc9oqh",
      alt: "J7 Emporium Kitchen",
      type: "exterior",
    },
    {
      id: "1",
      cloudinaryId: "Cam_04_final_night_light_kazjdn",
      alt: "J7 Emporium Luxury Building",
      type: "exterior",
    },
    {
      id: "2",
      cloudinaryId: "Cam_12_final_day_light_vq6sry",
      alt: "J7 Emporium Pool Area",
      type: "exterior",
    },
    {
      id: "3",
      cloudinaryId: "Cam_13_final_day_light_vbsgsb",
      alt: "J7 Emporium Modern Exterior",
      type: "exterior",
    },
    {
      id: "4",
      cloudinaryId: "Cam_09_final_daylight_1_kbnlar",
      alt: "J7 Emporium Interior Living",
      type: "exterior",
    },
    {
      id: "6",
      cloudinaryId: "Cam_14_final_day_light_zdb4aa",
      alt: "J7 Emporium Bedroom",
      type: "exterior",
    },
    {
      id: "7",
      cloudinaryId: "img7690_cnxaz6",
      alt: "J7 Emporium Hotel Suite",
      type: "interior",
    },
    {
      id: "8",
      cloudinaryId: "img7336_knnbfm",
      alt: "J7 Emporium Luxury Room",
      type: "interior",
    },
    {
      id: "9",
      cloudinaryId: "img5330_rh0t0x",
      alt: "J7 Emporium Executive Suite",
      type: "interior",
    },
    {
      id: "10",
      cloudinaryId: "img4622_rkcsji",
      alt: "J7 Emporium Co-Working",
      type: "interior",
    },
    {
      id: "11",
      cloudinaryId: "img4268_tmjolm",
      alt: "J7 Emporium Banquet Hall",
      type: "interior",
    },
    {
      id: "12",
      cloudinaryId: "img4150_fbmhyv",
      alt: "J7 Emporium Gymnasium",
      type: "interior",
    },
    {
      id: "13",
      cloudinaryId: "img4032_lovlsw",
      alt: "J7 Emporium Gymnasium",
      type: "interior",
    },
    {
      id: "14",
      cloudinaryId: "img3560_a1ngcb",
      alt: "J7 Emporium Gymnasium",
      type: "interior",
    },
    {
      id: "15",
      cloudinaryId: "img2969_mnkua3",
      alt: "J7 Emporium Gymnasium",
      type: "interior",
    },
    {
      id: "16",
      cloudinaryId: "img2027_o1jpjx",
      alt: "J7 Emporium Gymnasium",
      type: "interior",
    },
    {
      id: "17",
      cloudinaryId: "img965_hxrum2",
      alt: "J7 Emporium Gymnasium",
      type: "interior",
    },
    {
      id: "18",
      cloudinaryId: "img2027_o1jpjx",
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
    cloudinaryId: "img2145_qnp7ky",
    alt: "J7 Emporium Luxury Building",
  }
}