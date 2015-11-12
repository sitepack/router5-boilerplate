'use strict';

var contentNode = require('../../util/contentNode.js');

var html = '<h1>About</h1>'
+ '<div><a href="https://www.google.com" target="_blank">Google</a></div>'
+ '<div><a href="/">Home</a></div>'
+ '<div><a href="/typo">Broken link</a></div>'
+ '<button id="hello-btn" type="button">Say hello</button>';

function sayHello() {
  alert('Hello!');
}

var page = {
  render: function(isSameRoute) {
    if (__PRERENDER__) {
      return html;
    }

    if (!isSameRoute) {
      var el = document.createElement('div');
      el.innerHTML = html;
      el.querySelector('#hello-btn')
        .addEventListener('click', sayHello);

      contentNode.replace(el);
    } else {
      // same route, maybe scroll page to the top?
    }
  },
  canDeactivate: function() {
    contentNode.get()
      .querySelector('#hello-btn')
      .removeEventListener('click', sayHello);

    return true;
  }
};

module.exports = page;
