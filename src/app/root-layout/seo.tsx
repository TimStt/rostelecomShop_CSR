import { NextSeo } from "next-seo";

export const Seo = () => {
  return (
    <NextSeo
      title="Rostelecom Shop - магазин одежды и аксессуаров"
      description="Rostelecom Shop предлагает широкий ассортимент одежды, аксессуаров и концелярских товаров высокого качества"
      additionalLinkTags={[
        {
          rel: "icon",
          sizes: "192x192",
          type: "image/ico",
          href: "/icons/favicon.ico",
        },
        {
          rel: "icon",
          sizes: "192x192",
          type: "image/png",
          href: "/icons/android-icon-192x192.png",
        },
        {
          rel: "icon",
          sizes: "32x32",
          type: "image/png",
          href: "/icons/favicon-32x32.png",
        },
        {
          rel: "icon",
          sizes: "96x96",
          type: "image/png",
          href: "/icons/favicon-96x96.png",
        },
        {
          rel: "icon",
          sizes: "16x16",
          type: "image/png",
          href: "/icons/favicon-16x16.png",
        },
        {
          rel: "manifest",
          href: "/manifest.json",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/icons/apple-icon-180x180.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "167x167",
          href: "/icons/apple-icon-167x167.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "152x152",
          href: "/icons/apple-icon-152x152.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "120x120",
          href: "/icons/apple-icon-120x120.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "76x76",
          href: "/icons/apple-icon-76x76.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "60x60",
          href: "/icons/apple-icon-60x60.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "57x57",
          href: "/icons/apple-icon-57x57.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "48x48",
          href: "/icons/apple-icon-48x48.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "114x114",
          href: "/icons/apple-icon-114x114.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "72x72",
          href: "/icons/apple-icon-72x72.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "144x144",
          href: "/icons/apple-icon-144x144.png",
        },
      ]}
      additionalMetaTags={[
        {
          name: "keywords",
          content:
            "магазин одежды купить одежду размеры одежды одежда 2024 магазин концелярии rostelecom аксессуары магазин официальной одежды интернет магазин одежды с доставкой",
        },
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1",
        },
        {
          name: "apple-mobile-web-app-capable",
          content: "yes",
        },
        {
          name: "msapplication-TileColor",
          content: "#ffffff",
        },
        {
          name: "msapplication-config",
          content: "/icons/browserconfig.xml",
        },
        {
          name: "msapplication-TileImage",
          content: "/icons/ms-icon-144x144.png",
        },
      ]}
      openGraph={{
        title: "Rostelecom Shop - магазин одежды, аксессуаров и концелярии",
        description:
          "Rostelecom Shop - магазин одежды, аксессуаров и концелярии",
      }}
      themeColor="#1d2533"
    />
  );
};
