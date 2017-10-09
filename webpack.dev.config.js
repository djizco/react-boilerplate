const webpack = require('webpack');
const config = require('./webpack.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ExtractTextPluginConfig = new ExtractTextPlugin('bundle.css');

config.module.rules = config.module.rules.concat([
  {
    test: /\.css$/,
    use: ['css-hot-loader'].concat(ExtractTextPluginConfig.extract({
      fallback: 'style-loader',
      use: 'css-loader',
    })),
  },

  {
    test: /\.scss$/,
    use: ['css-hot-loader'].concat(ExtractTextPluginConfig.extract({
      fallback: 'style-loader',
      use: ['css-loader', 'sass-loader'],
    })),
  },
  {
    test: /\.less$/,
    use: ['css-hot-loader'].concat(ExtractTextPluginConfig.extract({
      fallback: 'style-loader',
      use: ['css-loader', 'less-loader'],
    }))
  },
]);

config.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('development')
  }
}));

config.plugins.push(new webpack.LoaderOptionsPlugin({
  debug: true,
}));

config.plugins.push(ExtractTextPluginConfig);
config.plugins.push(new webpack.NamedModulesPlugin());

module.exports = config;
