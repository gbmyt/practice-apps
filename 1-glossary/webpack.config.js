/*
  Use this config to copy production versions of your
  index.html and styles.css to dist folder upon build
*/

require("dotenv").config();
const path = require("path");

const CopyPlugin = require("copy-webpack-plugin");
const webpack = require('webpack'); //to access built-in plugins

const ROOT_DIR = __dirname;
const SRC_DIR = path.join(__dirname, 'client/src');
const DIST_DIR = path.join(__dirname, 'client/dist');

module.exports = {
  mode: 'development',
  entry: path.join(DIST_DIR, 'index.js'),
  target: 'web',
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CopyPlugin({
      patterns: [
        { from: path.join(SRC_DIR, 'styles.css'), to: DIST_DIR },
        { from: path.join(SRC_DIR, 'index.html'), to: DIST_DIR },
      ],
    }),
  ],
};
