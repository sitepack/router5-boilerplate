var path = require('path');
var fs = require('fs');

function fileExist(file) {
  var exist = true;
  try {
    fs.statSync(file);
  } catch(e) {
    if (e.errno === -2) {
      exist = false;
    }
  }

  return exist;
}

var assetsPath = path.join(process.cwd(), 'dist', 'assets');

var routes = require(path.join(process.cwd(), 'config','route.js'));

function unlink(fileName) {
  fs.unlink(fileName, function (err) {
    if (err) throw err;
    console.log(`[Delete] ${fileName}`);
  });
}

unlink(path.join(assetsPath, 'layout.js'));
unlink('./routeLoader.js');

var mainCss = path.join(assetsPath, 'main.css');
if (fileExist(mainCss)) {
  unlink(mainCss);
}

routes.forEach(function(route) {
  unlink(path.join(assetsPath, `${route.name}.js`));
});
