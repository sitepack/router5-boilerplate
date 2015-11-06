var path = require('path');
var fs = require('fs');

var configPath = path.join(process.cwd(), 'config');
var routes = require(path.join(configPath, 'route.js'));

var loaders = routes.map(function(route) {
  return `  ${route.name}: require('bundle?lazy!../pages/${route.name}')`;
});

var result = `'use strict';

var pageLoader = {
${loaders.join(',\n')}
}

module.exports = pageLoader;
`;

var fileName = path.join(configPath, 'pageLoader.js');
fs.writeFileSync(fileName, result);
console.log(`[Done] ${fileName}`);
