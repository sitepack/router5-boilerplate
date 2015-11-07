var webpack = require('webpack');
var config = require('./config.base.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var styleLoaders = require('./style-loaders.js');
var utils = require('./utils.js');

// build ./config/pageLoader.js
require('../script/genPageLoader.js').genBundle();

config.output.libraryTarget = 'umd';

var plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new ExtractTextPlugin('[name].css', { allChunks: true })
];

config.plugins = config.plugins.concat(plugins);

var extractStyleLoaders = utils.extractStyle(styleLoaders, ExtractTextPlugin);
config.module.loaders = config.module.loaders.concat(extractStyleLoaders);

module.exports = config;
