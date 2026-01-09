import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Gera HTML estático
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
