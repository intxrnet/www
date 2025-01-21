import type { NextConfig } from "next";

const nextConfig = {
  output: "export", // This is crucial for static exports
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
