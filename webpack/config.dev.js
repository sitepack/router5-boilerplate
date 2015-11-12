var webpack = require('webpack');
var config = require('./config.base.js');
var styleLoaders = require('./style-loaders.js');
var webpackHelper = require('@sitepack/helper/webpack.js');
var routeModulesHelper = require('@sitepack/helper/routeModules.js');

// generate ./routeLoader.js
routeModulesHelper.gen();

config.entry = {
  main: [ './index.js' ],
  layout: [ './base/layout.js' ]
};

config.devtool = 'inline-source-map';

config.entry.main.push('webpack-dev-server/client?http://localhost:8081');
config.output.publicPath = 'http://localhost:8081/assets/';

config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    '__PRODUCTION__': false,
    '__PRERENDER__': false
  })
]);

var bundleStyleLoaders = webpackHelper.bundleStyle(styleLoaders);
config.module.loaders = (config.module.loaders || []).concat(bundleStyleLoaders);

module.exports = config;
