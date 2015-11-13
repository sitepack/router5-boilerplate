'use strict';

module.exports = [
  {
    test: /\.css$/,
    loader: process.env.NODE_ENV === 'production'? 'css-loader?minimize': 'css-loader'
  }
];
