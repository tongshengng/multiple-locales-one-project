/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en-SG", "en-MY", "en-AE", "en-TH", "th-TH", "en-HK", "zh-HK"],
    defaultLocale: "en-SG",
    domains: [
      {
        domain: "stashaway-sg.vercel.app",
        defaultLocale: "en-SG",
        locales: ["en-SG"],
      },
      {
        domain: "stashaway-my.vercel.app",
        defaultLocale: "en-MY",
        locales: ["en-MY"],
      },
      {
        domain: "stashaway-ae.vercel.app",
        defaultLocale: "en-AE",
        locales: ["en-AE"],
      },
      {
        domain: "stashaway-co-th.vercel.app",
        defaultLocale: "en-TH",
        locales: ["en-TH", "th-TH"],
      },
      {
        domain: "stashaway-hk.vercel.app",
        defaultLocale: "en-HK",
        locales: ["en-HK", "zh-HK"],
      },
    ],
  },
};

module.exports = nextConfig;
