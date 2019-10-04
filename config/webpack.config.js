const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const resolve = dir => path.join(__dirname, '../', dir);

const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development';

const CreateHtmlWebpackPluginConfig = (filename) => new HtmlWebpackPlugin({
  template: resolve('client/index.html'),
  inject: 'body',
  filename,
});

const WebpackDefinePluginConfig = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(env),
  },
});

const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
  filename: isDev ? '[name].css' : '[name].[hash].css',
  chunkFilename: isDev ? '[id].css' : '[id].[hash].css',
});

const FaviconsWebpackPluginConfig = new FaviconsWebpackPlugin({
  logo: resolve('client/assets/icons/favicon.ico'),
  prefix: 'icons/',
  emitStats: false,
  statsFilename: 'faviconstats.json',
  persistentCache: false,
  inject: true,
  icons: {
    android: false,
    appleIcon: false,
    appleStartup: false,
    coast: false,
    favicons: true,
    firefox: false,
    opengraph: false,
    twitter: false,
    yandex: false,
    windows: false,
  },
});

const CleanWebpackPluginConfig = new CleanWebpackPlugin({
  verbose: true,
});

module.exports = {
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    inline: true,
    port: 8080,
  },
  entry: [
    './client/styles/index.scss',
    './client/assets/index.js',
    './node_modules/react-hot-loader/patch.js',
    './client/index.js',
  ],
  output: {
    filename: isDev ? '[name].js' : '[name].[hash].js',
    path: resolve('dist'),
    publicPath: '/',
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
      _client: resolve('client'),
      _assets: resolve('client/assets/'),
      _styles: resolve('client/styles/'),
      _utils: resolve('client/utils/'),
      _api: resolve('client/api/'),
      _hooks: resolve('client/hooks/'),
      _atoms: resolve('client/components/atoms/'),
      _molecules: resolve('client/components/molecules/'),
      _organisms: resolve('client/components/organisms/'),
      _templates: resolve('client/components/templates/'),
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
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              optipng: { optimizationLevel: 7 },
              pngquant: { quality: [0.75, 0.90], speed: 3 },
              mozjpeg: { progressive: true },
              gifsicle: { interlaced: false },
            },
          },
        ],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {
          name: 'fonts/[name].[ext]',
          limit: 8192,
          mimetype: 'application/font-woff',
        },
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        options: { name: 'fonts/[name].[ext]' },
      },
      {
        test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        options: { name: 'icons/[name].[ext]' },
      },
    ],
  },
  plugins: [
    CreateHtmlWebpackPluginConfig('index.html'),
    CreateHtmlWebpackPluginConfig('200.html'),
    CreateHtmlWebpackPluginConfig('404.html'),
    WebpackDefinePluginConfig,
    MiniCssExtractPluginConfig,
    FaviconsWebpackPluginConfig,
    CleanWebpackPluginConfig,
  ],
  performance: {
    hints: false,
  },
};
