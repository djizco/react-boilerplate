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
      _assets: resolve('client/assets/'),
      _styles: resolve('client/styles/'),
      _utils: resolve('client/utils/'),
      _api: resolve('client/api/'),
      _hooks: resolve('client/hooks/'),
      _atoms: resolve('client/components/atoms/'),
      _molecules: resolve('client/components/molecules/'),
      _organisms: resolve('client/components/organisms/'),
      _pages: resolve('client/components/pages/'),
      _environment: resolve('client/components/environment/'),
      _store: resolve('client/store/'),
      _actions: resolve('client/store/actions/'),
      _reducers: resolve('client/store/reducers/'),
      _thunks: resolve('client/store/thunks/'),
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
        test: /\.css$/,
        use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
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
