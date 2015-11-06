var path = require('path');
var express = require('express');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var proxy = require('proxy-middleware');
var url = require('url');
var config = require(path.join(process.cwd(), 'webpack', 'config.dev.js'));
var routes = require(path.join(process.cwd(), 'config', 'route.js'));
var renderHtml = require(path.join(process.cwd(), 'base', 'html.js'));

var assets = 'assets';
var port = 8080;
var app = express();

app.use(`/${assets}`, proxy(url.parse('http://localhost:8081/assets')));

app.get('/favicon.ico', function response(req, res) {
  res.status(404).end();
});

app.get('/*', function response(req, res, next) {
  if (req.accepts('html')) {
    var title;

    routes.forEach(function(route) {
      if (route.path === req.originalUrl) {
        title = route.title;
      }
    });

    var html = renderHtml(
      title,
      `<script src="/${assets}/layout.js"></script>
      <script src="/${assets}/main.js"></script>`
    );

    res.send(html);
  } else {
    next();
  }
});

var webpackDevServer = new WebpackDevServer(webpack(config), {
    hot: false,
    quiet: false,
    noInfo: false,
    publicPath: `/${assets}`,
    stats: { colors: true }
});

webpackDevServer.listen(8081, "localhost", function() {});
app.listen(port);
