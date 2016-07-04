const Path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: Path.join(__dirname, 'client/index.html'),
  filename: 'index.html',
  inject: 'body'
});
const ExtractTextPluginConfig = new ExtractTextPlugin("bundle.css");

module.exports = {
  entry: [
    './client/index.js'
  ],
  output: {
    path: Path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    ExtractTextPluginConfig
  ]
};
