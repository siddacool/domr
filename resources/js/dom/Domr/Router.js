import Logger from './Logger';
import addView from './helpers/add-view';
import hashLocation from './helpers/hash-location';

const logger = new Logger();
const defaults = {
  routes: [],
};

export default class {
  constructor(routes = defaults.routes, config) {
    this.routes = routes;
    this.addView = addView;
    this.redirectDefault = config.redirectDefault || false;
    this.refreshPage = config.refreshPage || false;
    this.clearLog = config.clearLog || false;
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
    const locPath = loc.path;
    let candidate;

    if (locPath === '') {
      location.hash = '#/';
    }

    this.routes.forEach((route) => {
      let path = route.path;
      if (path.endsWith('/') && path !== '/') {
        path = path.slice(0, -1);
      }

      const routeDataVal = [];
      const routePathMod = `${path.replace(/([:*])(\w+)/g, (full, dots, name) => {
        routeDataVal.push(name);
        return '([^/]+)';
      })}(?:/|$)`;
      const routePathModRegEx = locPath.match(new RegExp(routePathMod));

      if (routePathModRegEx) {
        const params = routePathModRegEx
        .slice(1, routePathModRegEx.length)
        .reduce((params, value, index) => {
          if (params === null) params = {};
          params[routeDataVal[index]] = value;
          return params;
        }, null);

        route.metadata = params || '';
        route.query = loc.query;
        candidate = route;
      }
    });

    if (candidate) {
      this.addView(candidate);
    } else {
      const routeDefault = this.routes.find(o => o.isDefault === true);
      if (this.redirectDefault && routeDefault) {
        this.addView(routeDefault);
      } else {
        logger.error('Page Not Found');
      }
    }

    this.reloadOnHashChange();
  }
}
