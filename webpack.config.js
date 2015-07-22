const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

module.exports = {
  context: __dirname + "/src",
  entry: {
    javascript: "./App.js",
    html: "./index.html",
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      { 
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
            'css?sourceMap!' +
            'sass?sourceMap'
        )
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ],
  },

  plugins: [
      new ExtractTextPlugin("styles.css")
  ],

  output: {
    filename: "build.js",
    path: __dirname + "/dist",
  },
}
