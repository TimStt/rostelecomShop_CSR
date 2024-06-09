/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",

  priority: 0.7,
  generateRobotsTxt: true,

  robotsTxtOptions: {
    policy: [
      { userAgent: "*", allow: "/" },
      {
        userAgent: "*",
        disallow: ["/api", "/api/*", "/profile", "/order/*", "/basket/*"],
      },
    ],
    sitemap: `${
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
    }/sitemap.xml`,
    host: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    lastmod: new Date().toISOString(),
  },
  changefreq: "daily",
};
