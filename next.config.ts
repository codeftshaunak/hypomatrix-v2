import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { hostname: "img.youtube.com" },
      { hostname: "html.pixelfit.agency" },
      { hostname: "picsum.photos" },
      {
        protocol: "https",
        hostname: "**.graphassets.com",
      },
    ],
  },
};

export default nextConfig;
