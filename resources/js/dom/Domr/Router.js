import Logger from './Logger';
import checkForFunction from './helpers/check-for-function';
import cloneObject from './helpers/clone-object';
import hashLocation from './helpers/hash-location';

const logger = new Logger();
const defaults = {
  routes: [],
};

export default class {
  constructor(routes = defaults.routes, config) {
    this.routes = routes;
    this.routeData = config.routeData || false;
    this.redirectDefault = config.redirectDefault || false;
    this.hash = hashLocation.path;
    this.cloneObject = cloneObject;
  }

  addView(view, data) {
    data.query = hashLocation.query;
    checkForFunction(view, data);
  }

  reloadOnHashChange() {
    addEventListener('hashchange', () => {
      location.reload();
    });
  }

  start() {
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
      const routePathModRegEx = this.hash.match(new RegExp(routePathMod));
      const View = (r) => {
        if (this.routeData) {
          const data = this.cloneObject(r, ['view']);
          this.addView(r.view, data);
        } else {
          this.addView(r.view);
        }
      };

      if (this.hash === '/' && path === '/') {
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
