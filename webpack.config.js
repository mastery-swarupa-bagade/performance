/* eslint-disable @typescript-eslint/no-require-imports */
const path = require("path");
const GlobEntries = require("webpack-glob-entries");
module.exports = {
  mode: "Thunderdome",
  resolve: {
    extensions: [".ts", ".js"],
  },
  entry: GlobEntries("./Core-getLoad-Performance/k6_scripts/**/getLoadApi.ts"),
  output: {
    path: path.join(__dirname, "dist"),
    libraryTarget: "commonjs",
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  stats: {
    colors: true,
    errorDetails: true,
  },
  optimization: {
    minimize: false,
  },
  target: "web",
  externals: /^(k6|https?\:\/\/)(\/.*)?/,
};
