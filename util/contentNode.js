'use strict';

var id = 'main';

function get() {
  return document.getElementById(id);
};

function create() {
  var node = document.createElement('div');
  node.id = id;
  return node;
}

function replace(htmlOrElement) {
  const contentNode = get();
  const el = create();

  if (typeof htmlOrElement === 'string') {
    el.innerHTML = htmlOrElement;
  } else {
    el.appendChild(htmlOrElement);
  }

  contentNode.parentNode.replaceChild(el, contentNode);
}

module.exports = {
  get: get,
  replace: replace
};
