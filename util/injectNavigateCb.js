'use strict';

module.exports = function(router, cb) {
  var navigate = router.navigate.bind(router);
  router.navigate = function(routeName, routeParams, opts) {
    navigate(routeName, routeParams, opts, cb);
  }
};
