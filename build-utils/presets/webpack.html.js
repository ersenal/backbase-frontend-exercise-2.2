const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => ({
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../../", "assets", "index.html"),
      favicon: path.join(__dirname, "../../", "assets", "favicon.png"),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    })
  ]
});
