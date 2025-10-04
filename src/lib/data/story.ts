
// data/ourStory/content.ts
export interface OurStoryContent {
  title: string;
  mainStory: string;
  stats: {
    projects: {
      label: string;
      value: string;
      description: string;
    };
    developments: {
      label: string;
      value: string;
      description: string;
    };
  };
  closingStatement: string;
  image: {
    src: string;
    alt: string;
  };
}

export const ourStoryContent: OurStoryContent = {
  title: "OUR STORY",
  mainStory: "J7 Group was founded on a vision that real estate is more than just buildings. It is about shaping skylines, redefining lifestyles, and creating environments that inspire generations. What began as the entrepreneurial vision of Mr. Maqbool Hussain, a pioneer with over 30 years of experience in real estate and construction, and Mr. Yaseen Masud, a dynamic CEO with unmatched expertise in sales, development, and fast-track project delivery, has grown into one of Pakistan's most innovative and trusted real estate development companies.",
  stats: {
    projects: {
      label: "LANDMARK PROJECTS",
      value: "15+",
      description: "Pioneering vision to stand as a testament to enduring innovation and impact."
    },
    developments: {
      label: "Service - YEARS",
      value: "26+",
      description: "We continue to shape Pakistan's skyline and the lives within it."
    }
  },
  closingStatement: "From luxury residences to landmark commercial complexes and mixed-use high-rises, J7 Group has consistently redefined the standards of architecture, quality, and timely delivery. The Group's flagship developments, such as J7 Emporium, have not only transformed Islamabad's skyline but also set new benchmarks for sustainable and technology-driven urban growth.",
  image: {
    src: "About/imgi_27_nmBQKhldrY7nA7RsGAUTfTX8X8.webp",
    alt: "J7 Group founding team and construction workers at early project site"
  }
};