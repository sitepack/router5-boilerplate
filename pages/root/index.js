require('./style.css');

var isSameRoute = require('sitepack').isSameRoute;

var html = '<h1 class="h1">Home</h1>';

var page = {
  render: function(toRouteState, fromRouteState) {
    if (!isSameRoute(toRouteState, fromRouteState)) {
      return html;
    } else {
      // same route, maybe scroll page to the top?
    }
  }
};

module.exports = page;
