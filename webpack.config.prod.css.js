var config = require('./webpack.config.prod.js');

config.module.loaders.pop();

config.module.loaders.push({
  test: /\.css$/,
  loader: 'style-loader!css-loader'
});

module.exports = config;
