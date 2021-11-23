/* eslint-disable @typescript-eslint/no-var-requires */
const { withPlaiceholder } = require("@plaiceholder/next");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withPlaiceholder(
  withBundleAnalyzer({
    experimental: {
      // Enables the styled-components SWC transform
      styledComponents: true,
    },
    redirects: async () => [
      {
        source: "/admin",
        destination: "https://app.forestry.io/login",
        permanent: false,
      },
    ],
    images: {
      loader: "cloudinary",
      path: process.env.NEXT_PUBLIC_CLOUD_URL,
      domains: ["res.cloudinary.com"],
      deviceSizes: [320, 475, 640, 750, 828, 1080, 1200, 1920],
      imageSizes: [16, 32, 48, 64, 96, 128, 256],
    },
    webpack: function (config) {
      config.module.rules.push({
        test: [/\.md$/, /\.yml$/],
        use: "raw-loader",
      });
      return config;
    },
  })
);
