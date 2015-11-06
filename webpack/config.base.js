'use strict';

var path = require('path');
var utils = require('./utils.js');

var entries = utils.getEntries('./pages/')

console.log('\nWebpack entry:');
console.log(entries);
console.log('');

module.exports = {
  context: path.resolve(__dirname, '..'),
  entry: entries,
  output: {
    filename: '[name].js',
    publicPath: '/assets/',
    path: path.join(__dirname, '../dist/assets')
  },
  progress: true,
  module: {
    loaders: []
  },
  plugins: []
};
