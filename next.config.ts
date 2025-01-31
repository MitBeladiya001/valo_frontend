import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: 50 * 1024 * 1024, // 50MB limit (adjust as needed)
    },
  },
};

export default nextConfig;
