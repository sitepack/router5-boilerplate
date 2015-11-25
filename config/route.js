'use strict';

var path = require('path');
var routeComponentPath = path.join(__dirname, '..', 'components', 'route');
var routes = [
  {
    name: 'root',
    path: '/',
    title: 'Home',
    module: path.join(routeComponentPath, 'Root')
  },
  {
    name: 'about',
    path: '/about/',
    title: 'About',
    module: path.join(routeComponentPath, 'About')
  }
];

module.exports = routes;
