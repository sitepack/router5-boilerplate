'use strict';

const defaultTitle = 'MySite';
const routes = require('../config/route.js');
const Router5 = require( 'router5' ).Router5;
const router = new Router5(routes, {trailingSlash: true});

function getTitle(path) {
  if (!path) {
    return defaultTitle;
  }

  const targetRouteState = router.matchPath(path);
  let title;

  if (targetRouteState) {
    routes.forEach((route) => {
      if (route.name === targetRouteState.name) {
        title = route.title;
      }
    });
  }

  return title || defaultTitle;
}

function linkTag(href) {
  return `<link rel="stylesheet" href="${href}">`;
}

function scriptTag(src) {
  return `<script src="${src}"></script>`;
}

function render(path, content, cssHrefs, scriptSrcs) {

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${getTitle(path)}</title>
  ${cssHrefs.map(linkTag).join('')}
</head>
<body>
  <div id="root">${content}</div>
  ${scriptSrcs.map(scriptTag).join('')}
</body>
</html>`;

}

module.exports = render;
