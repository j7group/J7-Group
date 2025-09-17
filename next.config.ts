import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    domains: ["cdn.sanity.io", "res.cloudinary.com", "images.unsplash.com", "picsum.photos", "images.pexels.com"],
  },
};

export default nextConfig;
