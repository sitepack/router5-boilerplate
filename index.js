var renderRoute = require('render');
var routes = require('./config/route.js');
var Router5 = require('router5').Router5;
var historyPlugin = require('router5-history');
var loadRouteMiddleware = require('./util/loadRouteMiddleware.js');
var removeStyleMiddleware = require('./util/removeStyleMiddleware.js');
var renderMiddleware = require('./util/renderMiddleware.js');
var updateTitleMiddleware = require('./util/updateTitleMiddleware.js');
var load404 = require('./util/load404.js');
var linkInterceptor = require('router5-link-interceptor');


var router = new Router5(routes)
  //.usePlugin(Router5.loggerPlugin()) // if you want to get logs from router.
  .useMiddleware(
    loadRouteMiddleware(),
    removeStyleMiddleware,
    updateTitleMiddleware(routes),
    renderMiddleware(renderRoute)
  )
  .usePlugin(historyPlugin())
  .start(function (err) {
    if (err) {
      if (err.code === 'ROUTE_NOT_FOUND') {
        load404(renderRoute);
      } else {
        console.error(err);
      }
    }
  });

linkInterceptor(router, function(err) {
  if (err) {
    if (err.code === 'SAME_STATES') {
      // same route, maybe scroll page to the top?
    } else {
      console.error(err);
    }
  }
});

window.router = router;
