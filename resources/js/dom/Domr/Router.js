import Logger from './Logger';
import checkForFunction from './helpers/check-for-function';
import cloneObject from './helpers/clone-object';
import hashLocation from './helpers/hash-location';
import hashLocationDynamic from './helpers/hash-location-dynamic';

const logger = new Logger();
const defaults = {
  routes: [],
};

export default class {
  constructor(routes = defaults.routes, config) {
    this.routes = routes;
    this.redirectDefault = config.redirectDefault || false;
    this.cloneObject = cloneObject;
  }

  addView(candidate) {
    checkForFunction(candidate);
  }

  reloadOnHashChange() {
    addEventListener('hashchange', (e) => {
      this.start();
      e.stopImmediatePropagation();
    });
  }

  start() {
    const loc = hashLocationDynamic();
    let toDefault = true;

    this.routes.forEach((route) => {
      let path;
      if (route.path.endsWith('/') && route.path !== '/') {
        path = route.path.slice(0, -1);
      } else {
        path = route.path;
      }

      const routeDataVal = [];
      const routePathMod = `${path.replace(/([:*])(\w+)/g, (full, dots, name) => {
        routeDataVal.push(name);
        return '([^/]+)';
      })}(?:/|$)`;
      const routePathModRegEx = loc.path.match(new RegExp(routePathMod));
      const View = (r) => {
        this.addView(r);
      };

      if (loc.path === '/' && path === '/') {
        View(route);
        toDefault = false;
      } else if (routePathModRegEx && path !== '/') {
        const params = routePathModRegEx
        .slice(1, routePathModRegEx.length)
        .reduce((params, value, index) => {
          if (params === null) params = {};
          params[routeDataVal[index]] = value;
          return params;
        }, null);

        route.metadata = params || '';
        route.query = loc.query;

        View(route);
        toDefault = false;
      }
    });

    if (toDefault) {
      const routeDefault = this.routes.find(o => o.isDefault === true);

      if (this.redirectDefault && routeDefault) {
        location.hash = `#${routeDefault.path}`;
      } else {
        logger.error('Page Not Found');
      }
    }

    this.reloadOnHashChange();
  }
}
