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
  constructor(domrid = 'domr-component') {
    this.parentDefault = defaults.parent;
    this.domContent = defaults.dom;
    this.createElement = createElement;
    this.domrid = `${domrid}-${randomizer(7)}`;
    this.target = () => {
      return lookup(this.domrid);
    };
    this.handlingParent = this.parentDefault || document.querySelector('body');
  }

  dom() {
    return this.domContent;
  }

  delay() {
  }

  delayedContent() {
    setTimeout(() => {
      this.delay();
    }, 50);
  }

  addEvent(eventName, eventAction) {
    this.addEventOn(`[data-domr-id="${this.domrid}"]`, eventName, eventAction);
  }

  addEventOn(childen, eventName, eventAction) {
    this.handlingParent.addEventListener(eventName, (e) => {
      if (e.target && e.target.matches(childen)) {
        eventAction(e);
      }
    });
  }

  events() {
  }

  addTo(parent = this.parentDefault) {
    parent.insertAdjacentHTML('beforeend', this.render());
    this.delayedContent();
  }

  addFromStartTo(parent = this.parentDefault) {
    parent.insertAdjacentHTML('afterbegin', this.render());
    this.delayedContent();
  }

  addBefore(sibling) {
    if (sibling) {
      sibling.insertAdjacentHTML('beforebegin', this.render());
      this.delayedContent();
    } else {
      console.error('sibling not found');
    }
  }

  addAfter(sibling) {
    if (sibling) {
      sibling.insertAdjacentHTML('afterend', this.render());
      this.delayedContent();
    } else {
      console.error('sibling not found');
    }
  }

  replaceWith(sibling) {
    if (sibling) {
      const parent = sibling.parentElement;

      if (parent) {
        sibling.insertAdjacentHTML('afterend', this.render());
        parent.removeChild(sibling);
        this.delayedContent();
      } else {
        console.warn('sibling has no parentElement');
      }
    } else {
      console.error('sibling not found');
    }
  }

  replaceContentOf(parent = this.parentDefault) {
    parent.innerHTML = this.render();
    this.delayedContent();
  }

  render() {
    this.delayedContent();
    this.events();
    return this.createElement(this.dom(), this.domrid);
  }
}
