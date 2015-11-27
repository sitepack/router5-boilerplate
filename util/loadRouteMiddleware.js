'use strict';

var routeLoader = require('@sitepack/route-loader');

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
