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
    { id: '1', cloudinaryId: 'm5hoguezjidwdmul1iv4_s7alhl', alt: 'J7 Emporium Luxury Building', type: 'exterior' },
    { id: '2', cloudinaryId: 'Render_J7Global_7_jkjfjq', alt: 'J7 Emporium Pool Area', type: 'exterior' },
    { id: '3', cloudinaryId: 'bdm79wg1vocjednjsc8o_iol4ix', alt: 'J7 Emporium Modern Exterior', type: 'exterior' },
    { id: '4', cloudinaryId: 'biv8tzmbnryxtp229hvg_vd9ufi', alt: 'J7 Emporium Interior Living', type: 'exterior' },
    { id: '5', cloudinaryId: 'nj35hpsamud4ekxqqqhj_k7g0j8', alt: 'J7 Emporium Kitchen', type: 'exterior' },
    { id: '6', cloudinaryId: 'bdm79wg1vocjednjsc8o_iol4ix', alt: 'J7 Emporium Bedroom', type: 'exterior' },
    { id: '7', cloudinaryId: 'Hotel_Residences_2_dti3gh', alt: 'J7 Emporium Hotel Suite', type: 'interior' },
    { id: '8', cloudinaryId: 'Hotel_Residences_3_jlsjoo', alt: 'J7 Emporium Luxury Room', type: 'interior' },
    { id: '9', cloudinaryId: 'Hotel_Residences_1_vmzzra', alt: 'J7 Emporium Executive Suite', type: 'interior' },
    { id: '10', cloudinaryId: 'Co-Working_Spaces_x2rz4t', alt: 'J7 Emporium Co-Working', type: 'interior' },
    { id: '11', cloudinaryId: 'Banquet_Hall_rk47z6', alt: 'J7 Emporium Banquet Hall', type: 'interior' },
    { id: '12', cloudinaryId: 'Gymnesium_jpks5k', alt: 'J7 Emporium Gymnasium', type: 'interior' },
  ]
};


export const radissonFeatures: PropertySectionData = {
  title: "Discover the Ultimate in Radisson Blu Islamabad",
  description: "Introducing The Beach Vista in Al Marjan Island – featuring luxurious studio, 1-bedroom, and 2-bedroom apartments. Located directly across from Wynn Marjan Island and offering breathtaking views of the Arabian Gulf, The Beach Vista's architectural design is inspired by the serene beauty of the coastline. Each residence is designed to provide a serene beachfront living experience, emphasizing sophistication and elegance.",
  mainImage: {
    cloudinaryId: "nj35hpsamud4ekxqqqhj_k7g0j8",
    alt: "Radisson Blu Islamabad Interior"
  },
  features: [
    {
      iconId: "imgi_11_67c7bc857d870bdadf59bef6_Rangerak_icon_3_1_vmqha4",
      title: "Prime Location",
      description: "Situated directly opposite the Wynn Al Marjan."
    },
    {
      iconId: "imgi_12_67ad581258c315dd1bb96954_Rangerak_icon_4_og1ayr",
      title: "Exclusive Units",
      description: "Exclusive units with panoramic views."
    },
    {
      iconId: "imgi_61_67c7bc857d870bdadf59c137_image_20_9_-p-2000_lqnnie",
      title: "Luxury Amenities",
      description: "Pristine swimming pool and a premium gym"
    }
  ],
};

export const radissonDetail : ResidenceDetail = {
  title: "A Landmark of Contemporary Luxury",
  description: "At Radisson Blu Islamabad, contemporary luxury is redefined through exceptional design and world-class hospitality. Designed for discerning guests, this iconic destination offers refined interiors, state-of-the-art amenities, and seamless access to the capital’s vibrant lifestyle—an address that reflects prestige, comfort, and sophistication."
}
