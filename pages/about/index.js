var isSameRoute = require('sitepack').isSameRoute;

var html = '<h1>About</h1>'
+ '<div><a href="https://www.google.com" target="_blank">Google</a></div>'
+ '<a href="/">Home</a>';

var page = {
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
  }
};

module.exports = page;
