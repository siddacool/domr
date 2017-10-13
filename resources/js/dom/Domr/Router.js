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
    this.cloneObject = cloneObject;
    this.addView = addView;
    this.reloadOnHashChange = reloadOnHashChange;
  }

  set() {
    const routes = this.routes;
    const route = routes.find(o => o.path === this.hash);
    const routeDefault = routes.find(o => o.isDefault === true);

    if (route) {
      if (this.routeData) {
        const data = this.cloneObject(route, ['view']);
        this.addView(route.view, data);
      } else {
        this.addView(route.view);
      }
    } else {
      if (routeDefault) {
        location.hash = `#${routeDefault.path}`;
      } else {
        console.error('Page Not Found');
      }
    }

    this.reloadOnHashChange();
  }
}
