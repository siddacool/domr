import createElement from './helpers/create-element';
import lookup from './helpers/lookup';
import randomizer from './helpers/randomizer';
import Event from './Event';

export default class {
  constructor(domrid = 'domr-component') {
    this.createElement = createElement;
    this.domrid = `${domrid}-${randomizer(7)}`;
    this.target = () => {
      return lookup(this.domrid);
    };
    this.handlingParent = document.querySelector('body');
  }

  dom() {
    return '';
  }

  events() {
  }

  deligateEvents(childen, eventName, eventAction) {
    this.handlingParent.addEventListener(eventName, (e) => {
      if (e.target && e.target.matches(childen)) {
        eventAction(e.target, e);
      }
    });
  }

  addEvent(eventName, eventAction) {
    this.addEventOn(`[data-domr-id="${this.domrid}"]`, eventName, eventAction);
  }

  addEventOn(childen, eventName, eventAction) {
    if (eventName instanceof Array && !eventAction) {
      const eventList = eventName;

      eventList.forEach((eventConfig) => {
        this.deligateEvents(childen, eventConfig[0], eventConfig[1]);
      });
    } else {
      this.deligateEvents(childen, eventName, eventAction);
    }
  }

  delay() {
  }

  debug(err) {
  }

  newEvent(elm) {
    const newEvent = new Event(elm);

    return newEvent;
  }

  afterRender(elm) {
  }

  delayedContent() {
    setTimeout(() => {
      if (this.target()) {
        this.afterRender(this.target());
        this.delay();
      } else {
        this.debug('delayedContent: target not found');
      }
    }, 50);
  }

  optimizedDom() {
    this.events();
    return this.createElement(this.dom(), this.domrid);
  }

  render() {
    this.delayedContent();
    return this.optimizedDom();
  }

  addTo(parent) {
    if (parent) {
      parent.insertAdjacentHTML('beforeend', this.optimizedDom());
      this.delayedContent();
    } else {
      this.debug('addTo: parent not found');
    }
  }

  addFromStartTo(parent) {
    if (parent) {
      parent.insertAdjacentHTML('afterbegin', this.optimizedDom());
      this.delayedContent();
    } else {
      this.debug('addFromStartTo: parent not found');
    }
  }

  addBefore(sibling) {
    if (sibling) {
      sibling.insertAdjacentHTML('beforebegin', this.optimizedDom());
      this.delayedContent();
    } else {
      this.debug('addBefore: sibling not found');
    }
  }

  addAfter(sibling) {
    if (sibling) {
      sibling.insertAdjacentHTML('afterend', this.optimizedDom());
      this.delayedContent();
    } else {
      this.debug('addAfter: sibling not found');
    }
  }

  replaceWith(sibling) {
    if (sibling) {
      if (sibling.parentElement) {
        const parent = sibling.parentElement;
        sibling.insertAdjacentHTML('afterend', this.optimizedDom());
        parent.removeChild(sibling);
        this.delayedContent();
      } else {
        this.debug('replaceWith: sibling has no parentElement');
      }
    } else {
      this.debug('replaceWith: sibling not found');
    }
  }

  replaceContentOf(parent) {
    if (parent) {
      const thisParent = parent;
      thisParent.innerHTML = this.optimizedDom();
      this.delayedContent();
    } else {
      this.debug('replaceContentOf: parent not found');
    }
  }
}
