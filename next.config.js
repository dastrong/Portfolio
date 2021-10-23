// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  webpack: function (config) {
    config.module.rules.push({
      test: [/\.md$/, /\.yml$/],
      use: "raw-loader",
    });
    return config;
  },
});
