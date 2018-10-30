const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        compress: { drop_console: true },
      },
      sourceMap: true,
    }),
  ],
};

config.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
  },
}));


module.exports = config;
