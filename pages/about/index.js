var isSameRoute = require('sitepack').isSameRoute;

var html = '<h1>About</h1>'
+ '<div><a href="https://www.google.com" target="_blank">Google</a></div>'
+ '<a href="/">Home</a>';

var page = {
  canActivate: function(toRouteState, fromRouteState, done) {
    // http://router5.github.io/docs/preventing-navigation.html
    return true;
  },
  render: function(toRouteState, fromRouteState, linkIntercepter) {
    // pre-render, just return html string.
    if (typeof document === 'undefined') {
      return html;
    }

    // This page contains a link to another page,
    // so we have to intercept this link,
    // otherwise browsers will load full page.

    // If you want to add event listeners to elements,
    // do it here.

    if (!isSameRoute(toRouteState, fromRouteState)) {
      var dom = document.createElement('div');
      dom.innerHTML = html;
      linkIntercepter.interceptAll(dom);
      return dom;
    }
  },
  canDeactivate: function(toRoute, fromRoute, done) {
    // http://router5.github.io/docs/preventing-navigation.html
    return true;
  }
};

module.exports = page;
