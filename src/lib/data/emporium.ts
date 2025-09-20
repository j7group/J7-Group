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
  features: PropertyFeature[];
  mainImage: {
    cloudinaryId: string;
    alt: string;
  };
  contactLink?: string;
}
export const j7EmporiumData: ProjectData = {
  name: "J7 Emporium",
  hasVideo: true,
  videoUrl: "https://example.com/j7-emporium-video.mp4",
  images: [
    {
      id: "5",
      cloudinaryId: "output_bc9oqh",
      alt: "J7 Emporium Kitchen",
      type: "exterior",
    },
    {
      id: "1",
      cloudinaryId: "Cam_12_final_day_light_mvu5m6",
      alt: "J7 Emporium Luxury Building",
      type: "exterior",
    },
    {
      id: "2",
      cloudinaryId: "Cam_09_final_daylight_1_inafbw",
      alt: "J7 Emporium Pool Area",
      type: "exterior",
    },
    {
      id: "3",
      cloudinaryId: "Cam_04_final_night_light_fs8sja",
      alt: "J7 Emporium Modern Exterior",
      type: "exterior",
    },
    {
      id: "4",
      cloudinaryId: "Cam_14_final_day_light_edrri3",
      alt: "J7 Emporium Interior Living",
      type: "exterior",
    },
    {
      id: "6",
      cloudinaryId: "bdm79wg1vocjednjsc8o_iol4ix",
      alt: "J7 Emporium Bedroom",
      type: "exterior",
    },
    {
      id: "7",
      cloudinaryId: "AdobeStock_981045239_aiodpz",
      alt: "J7 Emporium Hotel Suite",
      type: "interior",
    },
    {
      id: "8",
      cloudinaryId: "amenities5_nm61l2",
      alt: "J7 Emporium Luxury Room",
      type: "interior",
    },
    {
      id: "9",
      cloudinaryId: "amenities7_id5sqw",
      alt: "J7 Emporium Executive Suite",
      type: "interior",
    },
    {
      id: "10",
      cloudinaryId: "amenities14_wsxyvb",
      alt: "J7 Emporium Co-Working",
      type: "interior",
    },
    {
      id: "11",
      cloudinaryId: "amenities9_vwhjqw",
      alt: "J7 Emporium Banquet Hall",
      type: "interior",
    },
    {
      id: "12",
      cloudinaryId: "amenities10_h7qh1v",
      alt: "J7 Emporium Gymnasium",
      type: "interior",
    },
    {
      id: "12",
      cloudinaryId: "amenities4_uln9lo",
      alt: "J7 Emporium Gymnasium",
      type: "interior",
    },
    {
      id: "12",
      cloudinaryId: "amenities1_vy0dry",
      alt: "J7 Emporium Gymnasium",
      type: "interior",
    },
    {
      id: "12",
      cloudinaryId: "amenities2_m81f6t",
      alt: "J7 Emporium Gymnasium",
      type: "interior",
    },
    {
      id: "12",
      cloudinaryId: "amenities12_qxlvad",
      alt: "J7 Emporium Gymnasium",
      type: "interior",
    },
  ],
};

export const j7EmporiumFeatures: PropertySectionData = {
  title: "Experience Luxury at J7 Emporium",
  description:
    "J7 Emporium represents the pinnacle of modern commercial and residential development. Located in the heart of the business district, this architectural marvel offers premium office spaces, luxury apartments, and world-class retail outlets. Every detail has been carefully crafted to provide an unparalleled experience of sophistication and convenience.",
  mainImage: {
    cloudinaryId: "m5hoguezjidwdmul1iv4_s7alhl",
    alt: "J7 Emporium Luxury Building",
  },
  features: [
    {
      iconId: "imgi_11_67c7bc857d870bdadf59bef6_Rangerak_icon_3_1_vmqha4",
      title: "Business Center",
      description: "State-of-the-art office spaces with modern amenities.",
    },
    {
      iconId: "imgi_12_67ad581258c315dd1bb96954_Rangerak_icon_4_og1ayr",
      title: "Premium Retail",
      description: "High-end shopping and dining experiences.",
    },
    {
      iconId: "imgi_61_67c7bc857d870bdadf59c137_image_20_9_-p-2000_lqnnie",
      title: "Luxury Living",
      description: "Elegant residential units with premium finishes.",
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
