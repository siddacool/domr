import createElement from './helpers/create-element';
import lookup from './helpers/lookup';
import randomizer from './helpers/randomizer';

const defaults = {
  parent: document.getElementById('wrapper'),
  dom: `
    <div>
      Domr Component
    </div>
  `,
};

export default class {
  constructor(domrid = 'component', random = false) {
    this.makeId = () => {
      let thisId = domrid;
      if (random) {
        thisId = `${domrid}-${randomizer(7)}`;
      }
      return thisId;
    };
    this.domrid = this.makeId();
    this.parentDefault = defaults.parent;
    this.domContent = defaults.dom;
    this.lookup = () => {
      return lookup(this.domrid);
    };
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
      console.log('sibling not found');
    }
  }

  addAfter(sibling) {
    if (sibling) {
      sibling.insertAdjacentHTML('afterend', this.renderNodes());
      this.fireEventAfterTimeout();
    } else {
      console.log('sibling not found');
    }
  }

  render() {
    this.fireEventAfterTimeout();
    return this.renderNodes();
  }
}
