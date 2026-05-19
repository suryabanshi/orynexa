import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "buffalonas.jp",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "buffalonas.jp",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
