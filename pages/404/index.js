var contentNode = require('../../util/contentNode.js');

var html = '<h1>Oops!!!!!!</h1>';

var page = {
  render: function() {
    contentNode.replace(html);
  }
};

module.exports = page;
