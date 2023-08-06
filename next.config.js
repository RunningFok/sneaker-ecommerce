/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.stockx.com",
      },
      {
        protocol: "https",
        hostname: "stockx-assets.imgix.net",
      },
    ],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
    stripe_secrete_key: process.env.STRIPE_SECRET_KEY,
  }
};

module.exports = nextConfig;
