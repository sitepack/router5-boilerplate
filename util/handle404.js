'use strict';

module.exports = function() {
  require.ensure([], function() {
    require('../pages/404').render(); // when this function is called, the module is guaranteed to be synchronously available.
  }, '404');
};
