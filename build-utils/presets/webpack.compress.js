const CompressionPlugin = require("compression-webpack-plugin");

module.exports = () => ({
  plugins: [
    new CompressionPlugin({
      algorithm: "gzip",
      threshold: 0,
      minRatio: 1
    })
  ]
});
