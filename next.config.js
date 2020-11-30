/* eslint-disable @typescript-eslint/no-var-requires */
const withOptimizedImages = require("next-optimized-images");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(
  withOptimizedImages({
    // removes larger image being bundled currently
    images: {
      limit: 1000,
    },
    webpack: function (config) {
      config.module.rules.push({
        test: [/\.md$/, /\.yml$/],
        use: "raw-loader",
      });
      config.node = {
        fs: "empty",
      };
      return config;
    },
  })
);
