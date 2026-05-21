import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
    ],
  },
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL
  },
};

export default nextConfig;
