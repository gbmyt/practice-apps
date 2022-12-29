require("dotenv").config();
const path = require("path");

const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "/client/src/index.jsx"),
  output: {
    path: path.join(__dirname, "/client/dist"),
    filename: "bundle.js",
  },
  devtool: "source-map",
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.join(__dirname, 'client/src/index.html'), to: path.join(__dirname, 'client/dist') },
        { from: path.join(__dirname, 'client/src/styles.css'), to: path.join(__dirname, 'client/dist') },
      ]
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
