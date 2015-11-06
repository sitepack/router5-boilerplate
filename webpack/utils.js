'use strict';

function getEntries(pagesDir) {
  var routes = require('../config/route.js');

  var entries = {};

  routes.forEach(function(route) {
    entries[route.name] = [pagesDir + route.name];
  });

  if (entries.main) {
    throw 'You cannot use "main" as route name! It is reserved!';
  }

  entries.main = ['./index.js'];

  if (entries.layout) {
    throw 'You cannot use "main" as route name! It is reserved!';
  }

  entries.layout = ['./base/layout.js'];

  return entries;
}

function check(loader) {
  if (loader.indexOf('style-loader') !== -1) {
    throw "Error: Please remove 'style-loader' in style-loader.js: " + loader;
  }
}

function inlineStyle(loaders) {
  return loaders.map(function(loader) {
    check(loader.loader);
    return { test: loader.test, loader: 'style-loader!' + loader.loader };
  });
}

function extractStyle(loaders, ExtractTextPlugin) {
  return loaders.map(function(loader) {
    check(loader.loader);
    return {
      test: loader.test,
      loader: ExtractTextPlugin.extract('style-loader', loader.loader)
    };
  });
}

module.exports = {
  getEntries: getEntries,
  inlineStyle: inlineStyle,
  extractStyle: extractStyle
};