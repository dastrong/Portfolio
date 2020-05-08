module.exports = {
  webpack: function (config) {
    config.module.rules.push({
      test: [/\.md$/, /\.yml$/],
      use: "raw-loader",
    });
    return config;
  },
};
