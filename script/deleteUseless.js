var path = require('path');
var fs = require('fs');

var assetsPath = path.join(process.cwd(), 'dist', 'assets');

var routes = require('../config/route.js');

function unlink(fileName) {
  fs.unlink(fileName, function (err) {
    if (err) throw err;
    console.log(`[Delete] ${fileName}`);
  });
}

routes.forEach(function(route) {
  unlink(path.join(assetsPath, `${route.name}.js`));
  unlink(path.join(assetsPath, `${route.name}.js.map`));
});
