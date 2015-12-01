'use strict';

function init(renderRoute) {
  return function renderMiddleware(toRouteState, fromRouteState, done) {
    // unmount current route component.
    var curRouteState = this.router.getState();
    if (curRouteState) {
      var curRouteComponent = window.routeComponents[curRouteState.name];

      if (curRouteComponent) {
        if (curRouteComponent.componentWillUnmount) {
          curRouteComponent.componentWillUnmount();
        }

        if (curRouteComponent.canDeactivate) {
          this.router.deregisterComponent(curRouteState.name);
        }
      }


    }

    // mount new route component.
    var component = window.routeComponents[toRouteState.name];
    renderRoute(component);

    if (component.canDeactivate) {
      this.router.registerComponent(toRouteState.name, component);
    }

    done();
  }
}

module.exports = init;
