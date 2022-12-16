/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en-SG", "en-MY", "en-AE", "en-TH", "th-TH", "en-HK", "zh-HK"],
    defaultLocale: "en-SG",
    localeDetection: false,
    domains: [
      {
        domain: "stashsg.vercel.app",
        defaultLocale: "en-SG",
        locales: ["en-SG"],
      },
      {
        domain: "stashmy.vercel.app",
        defaultLocale: "en-MY",
        locales: ["en-MY"],
      },
      {
        domain: "stashae.vercel.app",
        defaultLocale: "en-AE",
        locales: ["en-AE"],
      },
      {
        domain: "stashth.vercel.app",
        defaultLocale: "en-TH",
        locales: ["en-TH", "th-TH"],
      },
      {
        domain: "stashhk.vercel.app",
        defaultLocale: "en-HK",
        locales: ["en-HK", "zh-HK"],
      },
    ],
  },
};
