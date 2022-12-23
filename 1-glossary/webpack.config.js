require("dotenv").config();
const path = require("path");

const ROOT_DIR = __dirname;
const SRC_DIR = path.join(__dirname, 'client/src');
const DIST_DIR = path.join(__dirname, 'client/dist');
/*
  What should go here?  Great question!

  Before you go to documentation, verify which version of webpack
  you are using.
  ==========================================
                    TODO:
  ==========================================
  Use this config to copy production versions of your
  index.html and styles.css to dist folder upon build
*/

module.exports = {
  mode: 'development',
  entry: path.join(DIST_DIR, 'index.js'), // should this be my app file instead? path.join(DIST_DIR, 'index.js');
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
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['css-loader', 'style-loader']
      }
    ]
  }
};
