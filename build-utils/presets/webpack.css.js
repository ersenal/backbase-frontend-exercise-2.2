const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = env =>
  ({
    production: {
      module: {
        rules: [
          {
            test: /\.s?css$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: "css-loader",
                options: {
                  sourceMap: false
                }
              },
              "sass-loader"
            ]
          }
        ]
      },

      plugins: [
        new MiniCssExtractPlugin({
          filename: "[name].[contenthash].css"
        })
      ],

      optimization: {
        minimizer: [new OptimizeCssAssetsPlugin({})]
      }
    },
    development: {
      module: {
        rules: [
          {
            test: /\.s?css$/,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: {
                  sourceMap: true
                }
              },
              "sass-loader"
            ]
          }
        ]
      }
    }
  }[env.mode]);
