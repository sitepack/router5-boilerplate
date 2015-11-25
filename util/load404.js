'use strict';

module.exports = function(cb) {
  require.ensure([], function() {
    var component = require('../components/route/404');
    cb(component);
  }, '404');
};
