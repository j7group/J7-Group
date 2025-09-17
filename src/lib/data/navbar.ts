// data/navbarData.ts

import { DropdownSection } from "../navbar/types";

export const aboutSections: DropdownSection[] = [
  {
    id: 1,
    category: "About Us",
    title: "Our Story",
    image: "J7Emporium-View1_1_oskv4d",
    description: "Range Ras Al Khaimah, part of Range Developments, offers luxury beachfront apartments in Al Marjan. With a decade of expertise, we craft bespoke living experiences in one of the UAE's most coveted destinations.",
    href: "/about/story"
  },
  {
    id: 2,
    category: "About Us", 
    title: "Partnerships",
    image: "samples/landscapes/girl-urban-view",
    href: "/about/partnerships"
  },
  {
    id: 3,
    category: "About Us",
    title: "Our Team", 
    image: "samples/people/jazz",
    href: "/about/team"
  }
];

export const developments: DropdownSection[] = [
  {
    id: 1,
    category: "Developments",
    title: "J7 Emporium",
    image: "J7Emporium-View1_1_oskv4d",
    href: "/developments/emporium"
  },
  {
    id: 2,
    category: "Developments",
    title: "Radisson Blu",
    image: "nj35hpsamud4ekxqqqhj_k7g0j8",
    href: "/developments/radisson"
  },
  {
    id: 3,
    category: "Developments", 
    title: "J7 Icon",
    image: "icon3_wzqaqu",
    href: "/developments/mall"
  },
  {
    id: 4,
    category: "Developments",
    title: "Rotana",
    image: "rotana2_icu3pe",
    href:"/developments/rotana"
  }
];

export const mediaCenter: DropdownSection[] = [
  {
    id: 1,
    category: "Media Center",
    title: "News and Press Releases",
    image: "imgi_29_1731504856-landmark_ndh3z3",
    href: "/media/news" 
  },
  {
    id: 2,
    category: "Media Center",
    title: "Blog",
    image: "imgi_27_1730466661-design-3-copy_phol9i",
    href: "/media/blog" // Added route for blog
  },
  {
    id: 3,
    category: "Media Center",
    title: "Events",
    image: "imgi_81_kam-idris-vqMQN9zImG4-unsplash_1_-min_eidivr",
    href: "/media/events" // Future events page
  },
  {
    id: 4,
    category: "Media Center",
    title: "Gallery",
    image: "imgi_3_3kgjP9qDZpTTY29GYKnxPhfglWs_rhkhtw",
    href: "/media/gallery" // Future gallery page
  }
];
