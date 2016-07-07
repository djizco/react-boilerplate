const webpack = require('webpack');
const config = require('./webpack.config.js');

config.plugins.push(
  new webpack.DefinePlugin({
    "process.env": {
      "NODE_ENV": JSON.stringify("production")
    }
  })
);

config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      drop_console: true,
      warnings: false
    }
  })
);

module.exports = config;
