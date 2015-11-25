'use strict';

var html = '<h1>About</h1>'
+ '<div><a href="https://www.google.com" target="_blank">Google</a></div>'
+ '<div><a href="/">Home</a></div>'
+ '<div><a href="/typo">Broken link</a></div>'
+ '<button id="hello-btn" type="button">Say hello</button>';

function sayHello() {
  alert('Hello!');
}

var component = {
  render: function() {
    return html;
  },
  componentDidMount: function(mountNode) {
    mountNode
      .querySelector('#hello-btn')
      .addEventListener('click', sayHello);
  },
  componentWillUnmount: function() {
    console.log('componentWillUnmount');
  },
  canDeactivate: function() {
    console.log('canDeactivate');
    return true;
  }
};

module.exports = component;
