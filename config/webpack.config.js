const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const resolve = dir => path.join(__dirname, '../', dir);

const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development';

const WebpackDefinePluginConfig = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(env),
  },
});

const CreateHtmlWebpackPluginConfig = ({ filename }) => new HtmlWebpackPlugin({
  template: resolve('client/index.html'),
  favicon: resolve('client/assets/icons/favicon.ico'),
  inject: 'body',
  filename,
});

module.exports = {
  devServer: {
    static: {
      directory: resolve('dist'),
    },
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 8080,
  },
  devtool: 'source-map',
  entry: [
    resolve('client/styles/scss/index.scss'),
    resolve('client/assets/index.js'),
    resolve('client/index.js'),
  ],
  output: {
    filename: isDev ? '[name].js' : '[name].[fullhash].js',
    path: resolve('dist'),
    publicPath: '/',
    clean: true,
  },
  resolve: {
    alias: {
      _client: resolve('client'),
      _components: resolve('client/components/'),
      _store: resolve('client/store/'),
      _utils: resolve('client/utils/'),
      _hooks: resolve('client/hooks/'),
      _api: resolve('client/api/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [resolve('client')],
      },
      {
        test: /\.module.css$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[folder]-[local]--[hash:base64:5]',
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.scss$/,
        use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.less$/,
        use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'icons/[name][ext]',
        },
      },
      {
        test: /\.(woff(2)|ttf|eot|otf)?(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    CreateHtmlWebpackPluginConfig({ filename: 'index.html' }),
    CreateHtmlWebpackPluginConfig({ filename: '200.html' }),
    CreateHtmlWebpackPluginConfig({ filename: '404.html' }),
    WebpackDefinePluginConfig,
  ],
  performance: {
    hints: false,
  },
};
