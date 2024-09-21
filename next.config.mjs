/** @type {import('next').NextConfig} */

import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig = {
  images: {
    // unoptimized: true,
    // domains: ['image.tmdb.org', 'randomuser.me'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, must-revalidate,revalidate=10, max-age=0", // Adjust for your needs
          },
        ],
      },
    ];
  },
};

const NewBundle = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default NewBundle(nextConfig);
