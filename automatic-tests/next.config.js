/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["bitad.ath.bielsko.pl", "source.unsplash.com"],
  },
  output: "standalone",
};

module.exports = nextConfig;
