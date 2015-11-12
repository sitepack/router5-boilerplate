'use strict';

var routeModules = require('../routeModules.js');
var RouteLaoder = require('@sitepack/route-loader');
var routeLoader = new RouteLaoder(routeModules);

function loadPageMiddleware(toRouteState, fromRouteState, done) {
  var router = this.router;
  routeLoader.load(toRouteState.name, function(page){
    window.page = page;
    page.render(false);
    if (page.canDeactivate) {
      router.registerComponent(toRouteState.name, page);
    }

    done();
  });
}

module.exports = loadPageMiddleware;
