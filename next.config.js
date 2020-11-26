/* eslint-disable @typescript-eslint/no-var-requires */
const withOptimizedImages = require("next-optimized-images");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(
  withOptimizedImages({
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
