var path = require('path');
var fs = require('fs');

var routes = require(path.join(process.cwd(), 'config', 'route.js'));

function write(loaders) {
  var result = `'use strict';
module.exports =  {
${loaders.join(',\n')}
};`;

  var fileName = path.join(process.cwd(), 'routeLoader.js');
  fs.writeFileSync(fileName, result);
  console.log(`[Done] ${fileName}`);
}

function genLazy() {
  var loaders = routes.map(function(route) {
    return `${route.name}: require('bundle?lazy&name=${route.name}!${route.module}')`;
  });

  write(loaders);
}

function genBundle() {
  var loaders = routes.map(function(route) {
    return `${route.name}: require('${route.module}')`;
  });

  write(loaders);
}

module.exports = {
  genLazy: genLazy,
  genBundle: genBundle
};
