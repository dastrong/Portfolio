// eslint-disable-next-line @typescript-eslint/no-var-requires
const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
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
});
