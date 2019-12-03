const webpackMerge = require("webpack-merge");

module.exports = env => {
  return webpackMerge(
    {
      module: {
        rules: [
          {
            test: /\.(svg|png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
          }
        ]
      }
    },
    {
      production: {},
      development: {}
    }[env.mode]
  );
};
