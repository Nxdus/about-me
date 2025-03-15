import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/about-me",
  assetPrefix: "/about-me/",
  images: {
    domains: ["nxdus.github.io"],
  },
};

export default nextConfig;
