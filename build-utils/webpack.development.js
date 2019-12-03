module.exports = () => ({
  devtool: "cheap-module-source-map",

  devServer: {
    contentBase: "./dist/dev",
    publicPath: "/",
    historyApiFallback: true,
    port: 8080
  },

  output: {
    filename: "dev.js",
    publicPath: "/"
  }
});
