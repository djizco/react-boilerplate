const Path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: Path.join(__dirname, 'client/index.html'),
  filename: 'index.html',
  inject: 'body',
  favicon: Path.join(__dirname, 'client/assets/icons/favicon.ico')
});
const ExtractTextPluginConfig = new ExtractTextPlugin("bundle.css");

module.exports = {
  devServer: {
    contentBase: "./dist",
    colors: true,
    historyApiFallback: true,
    inline: true
  },
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
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'sass-loader')
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loaders: [
            'file?name=[name].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    ExtractTextPluginConfig
  ]
};
