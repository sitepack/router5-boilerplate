var webpack = require('webpack');
var config = require('./config.base.js');
var styleLoaders = require('./style-loaders.js');
var webpackHelper = require('@sitepack/helper/webpack.js');

config.entry = {
  main: [ './index.js' ]
};

config.devtool = 'inline-source-map';

config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    '__DEV__': true,
    '__PRODUCTION__': false,
    'process.env.NODE_ENV': JSON.stringify('development')
  })
]);

var bundleStyleLoaders = webpackHelper.bundleStyle(styleLoaders);
config.module.loaders = (config.module.loaders || []).concat(bundleStyleLoaders);

config.resolve = config.resolve || {};
config.resolve.alias = config.resolve.alias || {};
config.resolve.alias.render = './base/render.js';

module.exports = config;
