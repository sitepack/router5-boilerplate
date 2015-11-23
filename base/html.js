'use strict';

const defaultTitle = 'MySite';
const routes = require('../config/route.js');
const Router5 = require( 'router5' ).Router5;
const router = new Router5(routes, {trailingSlash: true});

function linkTag(href) {
  return `<link rel="stylesheet" href="${href}">`;
}

function scriptTag(src) {
  return `<script src="${src}"></script>`;
}

function render(path, content, cssHrefs, scriptSrcs) {
  const targetRouteState = router.matchPath(path);
  let targetRoute;

  if (targetRouteState) {
    routes.forEach((route) => {
      if (route.name === targetRouteState.name) {
        targetRoute = route;
      }
    });
  }

  if (!targetRoute) {
    targetRoute = {};
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${targetRoute.title || defaultTitle}</title>
  ${cssHrefs.map(linkTag).join('')}
</head>
<body>
  ${content}
  ${scriptSrcs.map(scriptTag).join('')}
</body>
</html>`;
}

module.exports = render;
