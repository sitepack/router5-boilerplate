'use strict';

var Layout = require('../components/Layout');

module.exports = function() {
  return function(RouteComponent) {
    return Layout.render(RouteComponent);
  }
};
