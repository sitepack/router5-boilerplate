'use strict';

var path = require('path');

// build ./config/pageLoader.js
require('./script/genPageLoader.js');

var routes = require('./config/route.js');

var entry = {};
var pagesDir = './pages/';

routes.forEach(function(route) {
  entry[route.name] = [pagesDir + route.name];
});

if (entry.main) {
  throw 'You cannot use "main" as route name! It is reserved!';
}

entry.main = ['./index.js'];

if (entry.layout) {
  throw 'You cannot use "main" as route name! It is reserved!';
}

entry.layout = ['./base/layout.js'];

console.log('Webpack entry:');
console.log(entry);
console.log('');

module.exports = {
  entry: entry,
  output: {
    filename: '[name].js',
    publicPath: '/assets/',
    path: path.join(__dirname, '/dist/assets/')
  },
  module: {
    loaders: []
  },
  plugins: []
};
