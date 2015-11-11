var webpack = require('webpack');
var config = require('./config.base.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var styleLoaders = require('./style-loaders.js');
var utils = require('./utils.js');

// build ./config/routeLoader.js
require('../script/genRouteLoader.js').genBundle();

config.entry = utils.getEntries();
config.output.libraryTarget = 'commonjs2';
config.plugins = config.plugins.concat([
  new ExtractTextPlugin('[name].css', { allChunks: true })
]);

var extractStyleLoaders = utils.extractStyle(styleLoaders, ExtractTextPlugin);
config.module.loaders = config.module.loaders.concat(extractStyleLoaders);

module.exports = config;
