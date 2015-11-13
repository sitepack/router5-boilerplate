'use strict';

var minimize = process.env.NODE_ENV === 'production';

module.exports = [
  { test: /\.css$/, loader: `css-loader?{minimize:${minimize}}` }
];
