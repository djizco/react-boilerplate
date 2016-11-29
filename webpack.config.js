const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'client/index.html'),
  filename: 'index.html',
  inject: 'body',
  favicon: path.join(__dirname, 'client/assets/icons/favicon.ico'),
});

const ExtractTextPluginConfig = new ExtractTextPlugin('bundle.css');

module.exports = {
  devServer: {
    contentBase: './dist',
    colors: true,
    historyApiFallback: true,
    inline: true,
  },
  entry: [
    './client/index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css'),
      },
      {
        test: /\.scss$/i,
        loader: ExtractTextPlugin.extract(['css', 'sass']),
      },
      {
        test: /\.less$/i,
        loader: ExtractTextPlugin.extract(['css', 'less']),
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loaders: [
          'file?name=[name].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    ExtractTextPluginConfig,
  ],
};
