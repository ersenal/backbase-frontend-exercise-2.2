const path = require("path");
const webpackMerge = require("webpack-merge");

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require("./build-utils/loadPresets");

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) =>
  webpackMerge(
    {
      mode,
      output: {
        path: path.resolve(__dirname, `dist/${mode}`)
      }
    },

    presetConfig({
      mode,
      presets: [
        "alias",
        "progress",
        "env",
        "html",
        "css",
        "img",
        "font",
        "babel",
        ...(presets ? presets : [])
      ]
    }),
    modeConfig(mode)
  );
