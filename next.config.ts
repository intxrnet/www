/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  distDir: "out",
};

module.exports = nextConfig;
