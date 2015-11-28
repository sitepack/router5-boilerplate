'use strict';

function init(routes) {
  return function(toRouteState, fromRouteState, done) {
    routes.forEach(function(route) {
      if (route.name === toRouteState.name) {
        document.title = route.title;
      }
    });

    done();
  }
}

module.exports = init;
