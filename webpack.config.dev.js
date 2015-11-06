var config = require('./webpack.config.js');

config.entry.main.push('webpack-dev-server/client?http://localhost:8081');
config.output.publicPath = 'http://localhost:8081/assets/'
config.module.loaders.push({
  test: /\.css$/,
  loader: 'style-loader!css-loader'
});


module.exports = config;
