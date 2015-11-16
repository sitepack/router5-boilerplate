var webpack = require('webpack');
var config = require('./config.base.js');
var styleLoaders = require('./style-loaders.js');
var webpackHelper = require('@sitepack/helper/webpack.js');

config.entry = {
  main: [ './index.js' ],
  layout: [ './base/layout.js' ]
};

config.devtool = 'inline-source-map';

config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    '__PRODUCTION__': false,
    '__PRERENDER__': false
  })
]);

var bundleStyleLoaders = webpackHelper.bundleStyle(styleLoaders);
config.module.loaders = (config.module.loaders || []).concat(bundleStyleLoaders);

module.exports = config;
