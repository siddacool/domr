import checkForFunction from './helpers/check-for-function';
import cloneObject from './helpers/clone-object';

const defaults = {
  routes: [],
};

function reloadOnHashChange() {
  addEventListener('hashchange', () => {
    location.reload();
  });
}

function addView(view, data) {
  checkForFunction(view, data);
}

export default class {
  constructor(routes = defaults.routes, config) {
    this.routes = routes;
    this.routeData = config.routeData || false;
    this.hash = location.hash.replace('#', '');
    this.href = location.href;
    this.loc = `${location.origin}${location.pathname}`;
    this.cloneObject = cloneObject;
    this.addView = addView;
    this.reloadOnHashChange = reloadOnHashChange;
  }

  set() {
    let toDefault = true;
    this.routes.forEach((route) => {
      const variableNames = [];
      const routePathMod = `${route.path.replace(/([:*])(\w+)/g, (full, dots, name) => {
        variableNames.push(name);
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

      if (this.hash === '/' && route.path === '/') {
        View(route);
        toDefault = false;
      } else if (routePathModRegEx && route.path !== '/') {
        const params = routePathModRegEx
        .slice(1, routePathModRegEx.length)
        .reduce((params, value, index) => {
          if (params === null) params = {};
          params[variableNames[index]] = value;
          return params;
        }, null);

        route.metadata = params || '';

        View(route);
        toDefault = false;
      }
    });

    if (toDefault) {
      const routeDefault = this.routes.find(o => o.isDefault === true);

      if (routeDefault) {
        location.hash = `#${routeDefault.path}`;
      } else {
        console.error('Page Not Found');
      }
    }

    this.reloadOnHashChange();
  }
}
