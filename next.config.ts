import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "defynczwzwsiipotwdfp.storage.supabase.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "defynczwzwsiipotwdfp.supabase.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
