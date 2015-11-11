var Router5 = require('router5').Router5;
var historyPlugin = require('router5-history');

var routes = require('./config/route.js');
var routeLaoder = require('./routeLoader.js');
var bootstrap = require('sitepack').bootstrap;
var changeTitle = require('sitepack').changeTitle;

var router = new Router5(routes, {trailingSlash: true});

// change title when user click backward button on browsers.
window.addEventListener('popstate', function(e) {
  changeTitle(e.state, routes);
});

// this function will be called when navigation finished (success or failed).
function navigateCb(err, state) {
  if (!err) {
    // change title after navigation.
    changeTitle(state, routes);
  }
}

// get content node from layout.
function getContentNode() {
  return document.getElementById('main');
}

// sitepack bootstrap
var sitepack = bootstrap(router, routeLaoder, getContentNode, navigateCb);
var linkIntercepter = sitepack.linkIntercepter;
var loadPageMiddleware = sitepack.loadPageMiddleware;

// intercept links on layout
linkIntercepter.interceptAll(document);

router
  // .usePlugin(Router5.loggerPlugin()) // if you want to get logs from router.
  .useMiddleware(loadPageMiddleware)
  .usePlugin(historyPlugin())
  .start(function (err, state) {
    if (err) {
      if (err.code === 'ROUTE_NOT_FOUND') {
        getContentNode().innerHTML = '<h1>Oops! Page not found!</h1>';
      }
    }
  });
