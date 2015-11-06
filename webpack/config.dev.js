var config = require('./config.base.js');
var styleLoaders = require('./style-loaders.js');
var utils = require('./utils.js');

// build ./config/pageLoader.js
require('../script/genPageLoader.js').genLazy();

config.devtool = 'inline-source-map';

config.entry.main.push('webpack-dev-server/client?http://localhost:8081');
config.output.publicPath = 'http://localhost:8081/assets/';

var inlineStyleLoaders = utils.inlineStyle(styleLoaders);
config.module.loaders = config.module.loaders || [];
config.module.loaders = config.module.loaders.concat(inlineStyleLoaders);

module.exports = config;
