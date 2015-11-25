'use strict';

var Layout = require('../components/Layout');
var isFirstTime = true;
var rootNode = document.getElementById('root');
var contentNode = document.getElementById('main');

function render(RouteComponent) {
  if (!contentNode) {
    rootNode.innerHTML = Layout.render(RouteComponent);
    contentNode = document.getElementById('main');
  } else {
    contentNode.innerHTML = RouteComponent.render();
  }

  if (isFirstTime && Layout.componentDidMount) {
    Layout.componentDidMount(rootNode);
  }

  if (RouteComponent.componentDidMount) {
    RouteComponent.componentDidMount(contentNode);
  }

  isFirstTime = false;
}

module.exports = render;
