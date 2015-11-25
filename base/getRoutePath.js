'use strict';

const Router5 = require('router5').Router5;
var routes = require('../config/route.js');
const router = new Router5(routes);

module.exports = (route) => {
  return router.buildUrl(route.name, {});
};
