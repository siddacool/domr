import createElement from './helpers/create-element';
import Logger from './Logger';

const logger = new Logger();

const defaults = {
  parent: document.getElementById('wrapper'),
  dom: `
    <div>
      Domr Component
    </div>
  `,
};

export default class {
  constructor() {
    this.parentDefault = defaults.parent;
    this.domContent = defaults.dom;
    this.createElement = createElement;
  }

  dom() {
    return this.domContent;
  }

  renderNodes() {
    return this.createElement(this.dom());
  }

  fireEventAfterTimeout() {
    return '';
  }

  addTo(parent = this.parentDefault) {
    parent.insertAdjacentHTML('beforeend', this.renderNodes());
    this.fireEventAfterTimeout();
  }

  addFromStartTo(parent = this.parentDefault) {
    parent.insertAdjacentHTML('afterbegin', this.renderNodes());
    this.fireEventAfterTimeout();
  }

  addBefore(sibling) {
    if (sibling) {
      sibling.insertAdjacentHTML('beforebegin', this.renderNodes());
      this.fireEventAfterTimeout();
    } else {
      logger.error('sibling not found');
    }
  }

  addAfter(sibling) {
    if (sibling) {
      sibling.insertAdjacentHTML('afterend', this.renderNodes());
      this.fireEventAfterTimeout();
    } else {
      logger.error('sibling not found');
    }
  }

  replaceWith(sibling) {
    if (sibling) {
      const parent = sibling.parentElement;

      if (parent) {
        sibling.insertAdjacentHTML('afterend', this.renderNodes());
        parent.removeChild(sibling);
        this.fireEventAfterTimeout();
      } else {
        logger.warn('sibling has no parentElement');
      }
    } else {
      logger.error('sibling not found');
    }
  }

  replaceContentOf(parent = this.parentDefault) {
    parent.innerHTML = this.renderNodes();
    this.fireEventAfterTimeout();
  }

  render() {
    this.fireEventAfterTimeout();
    return this.renderNodes();
  }
}
