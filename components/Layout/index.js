'use strict';

require('./layout.css');

var component = {
  render: function(RouteComponent) {
    var content = RouteComponent? RouteComponent.render(): '';

    return (
        '<header>'
      + '<span class="logo">My Website</span>'
      + '<nav>'
      + '<ul>'
      + '<li><a href="/">Home</a></li>'
      + '<li><a href="/about/">About</a></li>'
      + '</ul>'
      + '</nav>'
      + '</header>'
      + '<main id="main">' + content + '</main>'
      + '<footer>&copy; 2016</footer>'
    );
  }
};

module.exports = component;
