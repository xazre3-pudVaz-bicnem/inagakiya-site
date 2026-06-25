import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/kuminsogi", destination: "/plans/kumin-funeral", permanent: true },
      { source: "/plans/family", destination: "/plans/family-funeral", permanent: true },
      { source: "/plans/ichiniichi", destination: "/plans/oneday-funeral", permanent: true },
      { source: "/plans/kasoushiki", destination: "/plans/cremation", permanent: true },
      { source: "/plans/general", destination: "/plans/general-funeral", permanent: true },
    ];
  },
};

export default nextConfig;
