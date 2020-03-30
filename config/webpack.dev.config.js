const config = require('./webpack.config.js');

config.optimization = {
  splitChunks: {
    chunks: 'all',
  },
};

module.exports = config;
