import Domr from './Domr';

const Router = Domr.Router;

export default class extends Router {
  constructor() {
    super();
  }

  extend(route) {
    document.querySelector('title').textContent = route.pageTitle || route.name;
  }
}
