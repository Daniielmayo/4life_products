// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         remotePatterns: [
//             {
//                 protocol: 'https',
//                 hostname: 'brandfetch.com'
//             },
//             {
//                 protocol: 'https',
//                 hostname: 'asset.brandfetch.io'
//             },
//         ]
//     }
// }

// module.exports = nextConfig
const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "brandfetch.com",
      },
      {
        protocol: "https",
        hostname: "asset.brandfetch.io",
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
