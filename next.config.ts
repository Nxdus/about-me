import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/about-me",
  assetPrefix: "/about-me/",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ["nxdus.github.io"],
  },
};

export default nextConfig;
