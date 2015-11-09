var path = require('path');
var fs = require('fs');
var configPath = path.join(process.cwd(), 'config');
var routes = require(path.join(configPath, 'route.js'));

function write(loaders) {
  var result = `'use strict';

var pageLoader = {
${loaders.join(',\n')}
}

module.exports = pageLoader;`;

  var fileName = path.join(configPath, 'pageLoader.js');
  fs.writeFileSync(fileName, result);
  console.log(`[Done] ${fileName}`);
}

function genLazy() {
  var loaders = routes.map(function(route) {
    return `  ${route.name}: require('bundle?lazy&name=${route.name}-chunk!../pages/${route.name}')`;
  });

  write(loaders);
}

function genBundle() {
  var loaders = routes.map(function(route) {
    return `  ${route.name}: require('../pages/${route.name}')`;
  });

  write(loaders);
}

module.exports = {
  genLazy: genLazy,
  genBundle: genBundle
};
