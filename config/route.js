'use strict';

var path = require('path');

var routes = [
  {
    name: 'root',
    path: '/',
    title: 'Home',
    module: path.join(__dirname, '..', 'pages', 'root')
  },
  {
    name: 'about',
    path: '/about',
    title: 'About',
    module: path.join(__dirname, '..', 'pages', 'about')
  }
];

module.exports = routes;
