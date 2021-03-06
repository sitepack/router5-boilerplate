var path = require('path');
var webpack = require('webpack');
var config = require('./config.base.js');
var styleLoaders = require('./style-loaders.js');
var webpackHelper = require('@sitepack/helper/webpack.js');
var CopyWebpackPlugin = require('copy-webpack-plugin');

config.entry = {
  main: [ './index.js' ]
};

config.devtool = 'source-map';

config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    '__DEV__': false,
    '__PRODUCTION__': true,
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      screw_ie8: true
    }
  }),
  new CopyWebpackPlugin([
    { from: './public', to: '..' }
  ], {
    ignore: [
      '.gitkeep'
    ]
  })
]);

var bundleStyleLoaders = webpackHelper.bundleStyle(styleLoaders);
config.module.loaders = (config.module.loaders || []).concat(bundleStyleLoaders);

config.resolve = config.resolve || {};
config.resolve.alias = config.resolve.alias || {};
config.resolve.alias.render = './dist/assets/render.js';

module.exports = config;
