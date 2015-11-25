'use strict';

function init(routes) {
  return {
    name: 'UPDATE_TITLE_PLUGIN',
    onTransitionSuccess: function(toRouteState) {
      routes.forEach(function(route) {
        if (route.name === toRouteState.name) {
          document.title = route.title;
        }
      });
    }
  };
}

module.exports = init;
