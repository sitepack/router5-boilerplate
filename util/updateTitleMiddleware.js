'use strict';

function init(routes) {
  return function(toRouteState, fromRouteState, done) {
    var found = false;
    routes.forEach(function(route) {
      if (route.name === toRouteState.name) {
        document.title = route.title;
        found = true;
      }
    });

    done();
  }
}

module.exports = init;
