var webpack = require('webpack');
var config = require('./config.base.js');
var styleLoaders = require('./style-loaders.js');
var utils = require('./utils.js');

// build ./config/pageLoader.js
require('../script/genPageLoader.js').genLazy();

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

var extractStyleLoaders = utils.inlineStyle(styleLoaders);
config.module.loaders = config.module.loaders.concat(extractStyleLoaders);


module.exports = config;
