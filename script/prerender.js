var path = require('path');
var fs = require('fs');

var dist = 'dist';
var assets = 'assets';
var distPath = path.join(process.cwd(), dist);
var assetsPath = path.join(distPath, assets);

var routes = require(path.join(process.cwd(), 'config', 'route.js'));
var renderHtml = require(path.join(process.cwd(), 'base', 'html.js'));
var renderLayout = require(path.join(assetsPath, 'layout.js'));

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

var mainScript = `<script src="/${assets}/main.js"></script>`;
var layoutCssExist = fileExist(path.join(assetsPath, 'layout.css'));
var layoutCssTag = `<link rel="stylesheet" href="/${assets}/layout.css">`;

function render(route) {
  var page = require(path.join(assetsPath, `${route.name}.js`));
  var pageHtml = page.render(route);

  if (!pageHtml) {
    return null;
  }

  var latout = renderLayout(pageHtml);
  var html = renderHtml(route.title, latout + mainScript);

  var cssTags = '';
  if (layoutCssExist) {
    cssTags += layoutCssTag;
  }

  if (fileExist(path.join(assetsPath, `${route.name}.css`))) {
    cssTags += `<link rel="stylesheet" href="/${assets}/${route.name}.css">`;
  }

  html = html.replace('</head>', `${cssTags}</head>`);

  return html;
}

function render404() {
  var latout = renderLayout('');
  var html = renderHtml(null, latout + mainScript);

  if (layoutCssExist) {
    html = html.replace('</head>', `${layoutCssTag}</head>`);
  }

  return html;
}

routes.forEach(function(route) {
  var html = render(route);
  if (html) {
    var filePath = path.join(distPath, route.path);
    if (!fileExist(filePath)) {
      fs.mkdirSync(filePath);
    }

    var fileName = path.join(filePath, 'index.html');
    fs.writeFile(fileName, html, function (err) {
      if (err) throw err;
      console.log(`[Done] ${fileName}`);
    });
  } else {
    console.log(`[Skip] ${route.name}`);
  }

});

var html = render404();
var fileName = path.join(distPath, '404.html');
fs.writeFile(fileName, html, function (err) {
  if (err) throw err;
  console.log(`[Done] ${fileName}`);
});
