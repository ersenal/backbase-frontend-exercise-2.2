const path = require("path");
const webpackMerge = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");

const babelConfig = (plugins = []) => ({
  test: /\.tsx?$/,
  exclude: /node_modules/,
  include: path.resolve(__dirname, "../../", "src"),
  use: [
    {
      loader: "babel-loader",
      options: {
        cacheDirectory: true,
        presets: [
          [
            "@babel/preset-env",
            {
              targets: {
                browsers: ["last 2 versions"]
              },
              modules: false
            }
          ],
          "@babel/preset-react",
          [
            "@babel/preset-typescript",
            {
              isTsx: true
            }
          ]
        ],
        plugins: [
          "@babel/plugin-syntax-dynamic-import",
          "@babel/plugin-proposal-class-properties",
          ...plugins
        ]
      }
    }
  ]
});

module.exports = env => {
  return webpackMerge(
    {
      entry: ["babel-polyfill", "./src/index.ts"],
      resolve: {
        extensions: [".ts", ".tsx", ".js"]
      }
    },
    {
      production: {
        module: {
          rules: [babelConfig()]
        },
        optimization: {
          minimizer: [
            new TerserPlugin({
              cache: true,
              parallel: true,
              sourceMap: false,
              terserOptions: {
                output: {
                  comments: false
                }
              }
            })
          ]
        }
      },
      development: {
        module: {
          rules: [babelConfig(["react-hot-loader/babel"])]
        }
      }
    }[env.mode]
  );
};
