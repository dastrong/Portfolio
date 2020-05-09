module.exports = {
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
};
