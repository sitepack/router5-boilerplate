/**
 * Code based on page.js
 */

'use strict';

var clickEvent = document.ontouchstart ? 'touchstart' : 'click';

function which(e) {
  e = e || window.event;
  return null === e.which ? e.button : e.which;
}

function onclick(e) {
  if (1 !== which(e)) return;

  if (e.metaKey || e.ctrlKey || e.shiftKey) return;
  if (e.defaultPrevented) return;


  // ensure link
  var el = e.target;
  while (el && 'A' !== el.nodeName) el = el.parentNode;
  if (!el || 'A' !== el.nodeName) return;


  // Ignore if tag has
  // 1. "download" attribute
  // 2. rel="external" attribute
  if (el.hasAttribute('download') || el.getAttribute('rel') === 'external') return;


  // ensure non-hash for the same path
  var link = el.getAttribute('href');
  if (el.pathname === window.location.pathname && (el.hash || '#' === link)) return;

  // Check for mailto: in the href
  if (link && link.indexOf('mailto:') > -1) return;

  // check target
  if (el.target) return;


  var toRouteState = window.router.matchUrl(el.href);
  if (!toRouteState) {
    if (!__PRODUCTION__) {
      // filter out links like 'download.doc' or 'cat.jpg'
      var location = window.location.toString();
      var lastPart = location.substring(location.lastIndexOf('/') + 1);
      if (lastPart.indexOf('.') === -1) {
        console.warn('Warning: Link not match any route', link);
      }
    }
  } else {
    e.preventDefault();
    var name = toRouteState.name;
    var state = window.router.getState();
    if (state && name === state.name) {
      // same route, just re-render this page.
      window.page.render(true);
    } else {
      window.router.navigate(name, {}, {});
    }

  }
}

document.addEventListener(clickEvent, onclick, false);
