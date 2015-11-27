'use strict';

/*
  After route module loaded, it will inject it's style into <head>,
  which is a duplicate of pre-rendered .css file,
  so we remove pre-rendered .css from document.
 */

var removeLink = require('@sitepack/remove-link-element');

function removeStyleMiddleware(toRouteState, fromRouteState, done) {
  var firstRoute = !fromRouteState;

  if (firstRoute) {
    removeLink('/assets/' + toRouteState.name + '.css');
  }

  done();
}

module.exports = removeStyleMiddleware;
