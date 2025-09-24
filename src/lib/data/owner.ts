// data/owner/content.ts
export interface OwnerContent {
  title: string;
  paragraphs: string[];
  quote: {
    text: string;
    author: string;
    position: string;
  };
  image: {
    src: string;
    alt: string;
  };
}

export const ownerContent: OwnerContent = {
  title: "Message From CEO",
  paragraphs: [
    "At J7 Group, we are not just building structures; we are crafting the future of Pakistan's real estate landscape. Since our establishment, we have served as a true catalyst in driving economic development and leading contemporary infrastructure development across the nation.",
    "Through integrating state-of-the-art technology and innovative designs, applied through unwavering professionalism, we are creating a significant impact in the construction and real estate sector. Our flagship J7 Emporium project stands as one of Pakistan's highest mixed-use buildings, representing our commitment to excellence and innovation.",
    "Our strategic partnerships, including our collaboration with Radisson Hotel Group and the recent cooperation agreement with China's IBI Group, demonstrate our global vision and commitment to bringing world-class developments to Pakistan. We don't just deliver projects; we deliver promises, consistently achieving timely completion and exceeding expectations."
  ],
  quote: {
    text: "We don't just deliver projects; we deliver promises, consistently achieving timely completion and exceeding expectations.",
    author: "Yaseen Mahsud",
    position: "CEO J7 Group"
  },
  image: {
    src: "CEO_1_mviway",
    alt: "Yaseen Mahsud - Chief Executive Officer, J7 Group"
  }
};

// data/chairman/content.ts
export interface ChairmanContent {
  title: string;
  message: {
    text: string;
    attribution: {
      name: string;
      title: string;
      company: string;
    };
  };
  image: {
    src: string;
    alt: string;
  };
  meta: {
    motto?: string;
    lastUpdated?: string;
  };
}

export const chairmanContent: ChairmanContent = {
  title: "Message From The Chairman",
  message: {
    text: "At J7 Group, we don't just build - we create thriving communities that enrich lives. Our commitment to excellence, innovation, and luxury drives us to revolutionize Pakistan's real estate landscape. From our flagship J7 Emporium project in Islamabad's Sector B-17 to our expanding portfolio across the twin cities, we continue to set new standards in development.\n\nOur motto 'Hum sirf banaate hi nahi, aabaad bhi karte hain' reflects our dedication to not just constructing buildings, but fostering vibrant communities. With every project, we strive to exceed expectations and deliver exceptional lifestyle experiences that redefine urban living in Pakistan.",
    attribution: {
      name: "Maqbool Hussain Awan",
      title: "Founder & Chairman",
      company: "J7 Group"
    }
  },
  image: {
    src: "chairman_ihrfrj",
    alt: "Maqbool Hussain Awan - Founder & Chairman, J7 Group"
  },
  meta: {
    motto: "Hum sirf banaate hi nahi, aabaad bhi karte hain",
    lastUpdated: "2024-01-15"
  }
}; 