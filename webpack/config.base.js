'use strict';

var path = require('path');

module.exports = {
  context: path.resolve(__dirname, '..'),
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/assets/',
    path: path.join(__dirname, '../dist/assets')
  },
  progress: true,
  module: {
    loaders: []
  },
  plugins: []
};
