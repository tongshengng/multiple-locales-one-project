/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en-SG", "en-MY", "en-AE", "en-TH", "th-TH", "en-HK", "zh-HK"],
    defaultLocale: "en-SG",
    domains: [
      {
        domain: "sa-test-sg.vercel.app",
        defaultLocale: "en-US",
        locales: ["en-SG"],
      },
      {
        domain: "sa-test-my.vercel.app",
        defaultLocale: "en-MY",
        locales: ["en-MY"],
      },
      {
        domain: "sa-test-ae.vercel.app",
        defaultLocale: "en-AE",
        locales: ["en-AE"],
      },
      {
        domain: "sa-test-th.vercel.app",
        defaultLocale: "en-TH",
        locales: ["en-TH", "th-TH"],
      },
      {
        domain: "sa-test-hk.vercel.app",
        defaultLocale: "en-HK",
        locales: ["en-HK", "zh-HK"],
      },
    ],
  },
};

module.exports = nextConfig;
