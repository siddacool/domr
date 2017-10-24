import Logger from './Logger';
import checkForFunction from './helpers/check-for-function';
import cloneObject from './helpers/clone-object';

const logger = new Logger();
const defaults = {
  routes: [],
};

function getLocation(hash) {
  let originHash = hash;

  if (originHash.includes('?')) {
    const split = originHash.split('?');

    originHash = split[0];
  }

  if (originHash.endsWith('/') && !originHash.endsWith('#/')) {
    originHash = originHash.slice(0, -1);
  }

  return originHash.replace('#', '');
}

function reloadOnHashChange() {
  addEventListener('hashchange', () => {
    location.reload();
  });
}

function searchQuery(hash) {
  const hashFilter = hash.split('?');
  const queryString = hashFilter[1];

  if (queryString && queryString !== '') {
    const obj = {};
    const query = queryString.replace(/\//g, '').split('&');

    for (let i = 0; i < query.length; i++) {
      const part = query[i];
      const splitPart = part.split('=');
      const field = splitPart[0];
      const value = splitPart[1];

      obj[field] = value;
    }
    return obj;
  } else {
    return '';
  }
}

function addView(view, data) {
  let query = '';

  if (location.hash.includes('?')) {
    query = searchQuery(location.hash);
  }

  data.query = query;
  checkForFunction(view, data);
}

export default class {
  constructor(routes = defaults.routes, config) {
    this.routes = routes;
    this.routeData = config.routeData || false;
    this.redirectDefault = config.redirectDefault || false;
    this.hash = getLocation(location.hash);
    this.cloneObject = cloneObject;
    this.addView = addView;
    this.reloadOnHashChange = reloadOnHashChange;
  }

  set() {
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
