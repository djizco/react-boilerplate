const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const config = require('./webpack.config.js');

config.module.rules = config.module.rules.concat([
  {
    test: /\.css$/,
    use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader'],
  },
  {
    test: /\.scss$/i,
    use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
  },
  {
    test: /\.less$/i,
    use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
  },
]);

config.optimization = {
  minimizer: [
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          drop_console: true,
          warnings: false,
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

config.plugins.push(new BundleAnalyzerPlugin());

module.exports = config;
