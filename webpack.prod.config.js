const webpack = require('webpack');
const config = require('./webpack.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ExtractTextPluginConfig = new ExtractTextPlugin('bundle.css');

config.module.rules = config.module.rules.concat([
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract(['style-loader', 'css-loader']),
  },
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
  },
  {
    test: /\.less$/,
    loader: ExtractTextPlugin.extract(['css-loader', 'less-loader']),
  },
]);

config.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
}));

config.plugins.push(new webpack.optimize.UglifyJsPlugin({
  compress: {
    drop_console: true,
  },
  sourceMap: true,
}));

config.plugins.push(new webpack.LoaderOptionsPlugin({
  minimize: true,
}));

config.plugins.push(ExtractTextPluginConfig);

module.exports = config;
