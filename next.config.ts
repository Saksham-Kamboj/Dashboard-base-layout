import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["img.freepik.com"],
  },
  env:{
    NEXT_PUBLIC_API_URL:process.env.NEXT_PUBLIC_API_URL
  }
};

export default nextConfig;
