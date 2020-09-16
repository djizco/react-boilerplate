const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = require('./webpack.config.js');

config.optimization = {
  minimizer: [
    new TerserPlugin({
      terserOptions: {
        compress: {
          drop_console: true,
        },
        output: {
          comments: false,
        },
      },
      sourceMap: true,
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
