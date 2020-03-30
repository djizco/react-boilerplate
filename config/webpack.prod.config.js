const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = require('./webpack.config.js');

config.optimization = {
  minimizer: [
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          drop_console: true,
        },
        output: {
          comments: false,
        },
      },
    }),
  ],
};

config.plugins.push(new webpack.LoaderOptionsPlugin({
  minimize: true,
}));

config.plugins.push(new BundleAnalyzerPlugin({
  analyzerMode: 'static',
}));

config.plugins.push(new CleanWebpackPlugin({
  verbose: true,
}));

module.exports = config;
