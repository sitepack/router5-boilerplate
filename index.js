var Router5 = require('router5').Router5;
var historyPlugin = require('router5-history');

var routes = require('./config/route.js');
var linkIntercepter = require('./util/linkIntercepter.js');
var loadPageMiddleware = require('./util/loadPageMiddleware.js');
var updateTitleMiddleware = require('./util/updateTitleMiddleware.js');
var injectNavigateCb = require('./util/injectNavigateCb.js');
var handle404 = require('./util/handle404.js');


var router = new Router5(routes, {trailingSlash: true});

linkIntercepter(router, function handleSameRoute(){
  // same route, just re-render this page.
  window.page.render(true);
});

// this function will be called when navigation finished (successful or failed).
function navigateCb(err, state) {
  if (err) {
    console.error(err);
  }
}

injectNavigateCb(router, navigateCb);

router
  // .usePlugin(Router5.loggerPlugin()) // if you want to get logs from router.
  .useMiddleware(loadPageMiddleware, updateTitleMiddleware(routes))
  .usePlugin(historyPlugin())
  .start(function (err, state) {
    if (err) {
      if (err.code === 'ROUTE_NOT_FOUND') {
        handle404();
      } else {
        console.error(err);
      }
    }
  });
