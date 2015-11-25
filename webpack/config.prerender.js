var webpack = require('webpack');
var config = require('./config.base.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var styleLoaders = require('./style-loaders.js');
var webpackHelper = require('@sitepack/helper/webpack.js');

config.entry = webpackHelper.getAllModuleEntries();

config.output.libraryTarget = 'commonjs2';

config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    '__DEV__': false,
    '__PRODUCTION__': true,
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new ExtractTextPlugin('[name].css', { allChunks: true })
]);

var extractStyleLoaders = webpackHelper.extractStyle(styleLoaders, ExtractTextPlugin);
config.module.loaders = (config.module.loaders || []).concat(extractStyleLoaders);

module.exports = config;
