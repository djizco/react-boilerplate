const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = require('./webpack.config.js');

config.module.rules = config.module.rules.concat([
  {
    test: /\.css$/,
    use: ['css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader'],
  },
  {
    test: /\.scss$/,
    use: ['css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
  },
  {
    test: /\.less$/,
    use: ['css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
  },
]);

config.optimization = {
  splitChunks: {
    chunks: 'all',
  },
};

module.exports = config;
