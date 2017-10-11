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

function addView(view) {
  checkForFunction(view);
}

export default class {
  constructor() {
    this.hash = location.hash.replace('#', '');
    this.cloneObject = cloneObject;
    this.addView = addView;
    this.reloadOnHashChange = reloadOnHashChange;
  }

  extend(route) {
    return '';
  }

  set(routes = defaults.routes) {
    const route = routes.find(o => o.path === this.hash);
    const routeDefault = routes.find(o => o.isDefault === true);

    if (route) {
      const data = this.cloneObject(route, ['view']);
      this.addView(route.view);
      this.extend(data);
    } else {
      if (routeDefault) {
        location.hash = `#${routeDefault.path}`;
      }
    }

    this.reloadOnHashChange();
  }
}
