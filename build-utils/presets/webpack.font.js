const webpackMerge = require("webpack-merge");

module.exports = env => {
  return webpackMerge(
    {
      module: {
        rules: [
          {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff"
          },
          {
            test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
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
