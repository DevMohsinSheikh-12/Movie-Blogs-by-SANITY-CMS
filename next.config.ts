import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Disable ESLint during production build
    ignoreDuringBuilds: true,
  },
 images:{
  remotePatterns:[
    {
      protocol:'https',
      hostname:'cdn.sanity.io',
      port:'',
    },
  ],
 },
};

export default nextConfig;
