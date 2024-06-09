/** @type {import('next').NextConfig} */
const path = require("path");
const sitemap = require("./next-sitemap.config");
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "./src/app/styles/index.scss")],
  },
  swcMinify: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },
  env: {
    sitemap,
  },
  // "output": "export",
};

module.exports = nextConfig;
