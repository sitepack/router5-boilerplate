'use strict';

var RouteLoader = require('@sitepack/route-loader');
var routeLoader = new RouteLoader();

function init() {
  window.routeComponents = [];

  return function loadPageMiddleware(toRouteState, fromRouteState, done) {
    routeLoader.load(toRouteState.name, function(component) {
      window.routeComponents[toRouteState.name] = component;

      done();
    });
  }
}

module.exports = init;
