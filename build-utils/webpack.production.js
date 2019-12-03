const webpackMerge = require("webpack-merge");

const presetConfig = require("./loadPresets");

module.exports = ({ mode }) =>
  webpackMerge(
    {
      output: {
        filename: "[name].[chunkhash].js",
        publicPath: "/"
      }
    },
    presetConfig({ mode, presets: ["clean", "compress"] })
  );
