var webpack = require('webpack');
var config = require('./config.base.js');
var styleLoaders = require('./style-loaders.js');
var webpackHelper = require('@sitepack/helper/webpack.js');
var routeModulesHelper = require('@sitepack/helper/routeModules.js');

// generate ./config/routeLoader.js
routeModulesHelper.gen({lazy: true});

config.entry = {
  main: [ './index.js' ]
};

config.devtool = 'source-map';

var plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      screw_ie8: true,
      warnings: false
    }
  })
];

config.plugins = config.plugins.concat(plugins);

var bundleStyleLoaders = webpackHelper.bundleStyle(styleLoaders);
config.module.loaders = (config.module.loaders || []).concat(bundleStyleLoaders);


module.exports = config;
