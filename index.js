var Router5 = require('router5').Router5;
var historyPlugin = require('router5-history');

var routes = require('./config/route.js');
var loadPageMiddleware = require('./util/loadPageMiddleware.js');
var updateTitleMiddleware = require('./util/updateTitleMiddleware.js');
var contentNode = require('./util/contentNode.js');
var handle404 = require('./util/handle404.js');

require('./util/linkIntercepter.js');

var router = new Router5(routes, {trailingSlash: true});
window.router = router;

// this function will be called when navigation finished (successful or failed).
function navigateCb(err, state) {
  if (err) {
    console.warn(err);
  }
}

if (navigateCb) {
  // make every navigation call navigateCb
  var navigate = router.navigate.bind(router);
  router.navigate = function(routeName, routeParams, opts) {
    navigate(routeName, routeParams, opts, navigateCb);
  }
}

router
  // .usePlugin(Router5.loggerPlugin()) // if you want to get logs from router.
  .useMiddleware(loadPageMiddleware, updateTitleMiddleware(routes))
  .usePlugin(historyPlugin())
  .start(function (err, state) {
    if (err) {
      if (err.code === 'ROUTE_NOT_FOUND') {
        handle404();
      }
    }
  });
