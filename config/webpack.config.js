const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const resolve = dir => path.join(__dirname, '../', dir);

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: resolve('client/index.html'),
  filename: 'index.html',
  inject: 'body',
});

const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
  filename: '[name].[hash].css',
  chunkFilename: '[id].[hash].css',
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

const CleanWebpackPluginConfig =  new CleanWebpackPlugin(['dist'], {
  root: resolve('.'),
});

module.exports = {
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    inline: true,
  },
  entry: [
    './client/styles/index.scss',
    './client/assets/index.js',
    './client/index.js',
  ],
  output: {
    filename: '[name].[hash].js',
    path: resolve('dist'),
    publicPath: '/',
  },
  resolve: {
    alias: {
      _atoms: resolve('client/components/atoms/'),
      _molecules: resolve('client/components/molecules/'),
      _organisms: resolve('client/components/organisms/'),
      _templates: resolve('client/components/templates/'),
      _pages: resolve('client/components/pages/'),
      _environment: resolve('client/components/environment/'),
      _store: resolve('client/store/'),
      _actions: resolve('client/store/actions/'),
      _thunks: resolve('client/store/thunks/'),
      _reducers: resolve('client/store/reducers/'),
      _assets: resolve('client/assets/'),
      _styles: resolve('client/styles/'),
      _utils: resolve('client/utils/'),
      _api: resolve('client/api/'),
      // remove below here
      _elements: resolve('client/components/elements/'),
      _components: resolve('client/components/components/'),
      _structures: resolve('client/components/structures/'),
      _sections: resolve('client/components/sections/'),
      _layouts: resolve('client/components/layouts/'),
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
            query: {
              optipng: { optimizationLevel: 7 },
              mozjpeg: { progressive: true },
              gifsicle: { interlaced: false },
              pngquant: { quality: '75-90', speed: 3 },
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
    HtmlWebpackPluginConfig,
    MiniCssExtractPluginConfig,
    FaviconsWebpackPluginConfig,
    CleanWebpackPluginConfig,
  ],
  performance: {
    hints: false,
  },
};
