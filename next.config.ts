import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "img.youtube.com" },
      { hostname: "html.pixelfit.agency" },
      { hostname: "picsum.photos" },
    ],
  },
};

export default nextConfig;
