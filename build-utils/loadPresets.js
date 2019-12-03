const webpackMerge = require("webpack-merge");

const applyPresets = (env = { presets: [] }) => {
  const presets = env.presets || [];
  const mergedPresets = [].concat(...[presets]);
  const mergedConfigs = mergedPresets.map(p => require(`./presets/webpack.${p}`)(env));
  return webpackMerge({}, ...mergedConfigs);
};

module.exports = applyPresets;
