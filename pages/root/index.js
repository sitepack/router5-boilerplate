require('./style.css');
var contentNode = require('../../util/contentNode.js');

var html = '<h1 class="h1">Home</h1>';

var page = {
  render: function(isSameRoute) {
    if (__PRERENDER__) {
      return html;
    }

    if (!isSameRoute) {
      contentNode.replace(html);
    } else {
      // same route, maybe scroll page to the top?
    }
  }
};

module.exports = page;
