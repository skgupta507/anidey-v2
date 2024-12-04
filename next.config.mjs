/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s4.anilist.co",
      },
      {
        protocol: "https",
        hostname: "artworks.thetvdb.com",
      },
      {
        protocol: "https",
        hostname: "media.kitsu.io",
      },
      {
        protocol: "https",
        hostname: "media.kitsu.app",
      },
      {
        protocol: "https",
        hostname: "kitsu-production-media.s3.us-west-002.backblazeb2.com",
      },
    ],
  },
  crossOrigin: "anonymous",
};

export default nextConfig;
