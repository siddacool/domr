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
    this.redirectDefault = config.redirectDefault || false;
    this.refreshPage = config.refreshPage || false;
    this.clearLog = config.clearLog || false;
    this.cloneObject = cloneObject;
  }

  addView(candidate) {
    checkForFunction(candidate);
  }

  reloadOnHashChange() {
    addEventListener('hashchange', (e) => {
      if (this.clearLog) {
        console.API;
        if (typeof console._commandLineAPI !== 'undefined') {
            console.API = console._commandLineAPI;
        } else if (typeof console._inspectorCommandLineAPI !== 'undefined') {
            console.API = console._inspectorCommandLineAPI;
        } else if (typeof console.clear !== 'undefined') {
            console.API = console;
        }

        console.API.clear();
      }

      if (this.refreshPage) {
        location.reload();
      } else {
        this.start();
        e.stopImmediatePropagation();
      }
    });
  }

  start() {
    const loc = hashLocation();
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

      if (loc.path === '') {
        location.hash = '#/';
      } else {
        if (this.redirectDefault && routeDefault) {
          location.hash = `#${routeDefault.path}`;
        } else {
          logger.error('Page Not Found');
        }
      }
    }

    this.reloadOnHashChange();
  }
}
