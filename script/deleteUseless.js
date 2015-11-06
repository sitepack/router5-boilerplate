var path = require('path');
var fs = require('fs');

var assetsPath = path.join(process.cwd(), 'dist', 'assets');

var routes = require('../config/route.js');

routes.forEach(function(route) {
  var fileName = path.join(assetsPath, `${route.name}.js`);
  fs.unlink(fileName, function (err) {
    if (err) throw err;
    console.log(`[Delete] ${fileName}`);
  })
});
