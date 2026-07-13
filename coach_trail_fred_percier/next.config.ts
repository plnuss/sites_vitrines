import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholders thematiques (montagne / trail / foret / coureur).
    // A remplacer plus tard par de vraies photos hebergees.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
