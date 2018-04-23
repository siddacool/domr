import createElement from './helpers/create-element';
import lookup from './helpers/lookup';
import randomizer from './helpers/randomizer';

export default class {
  constructor(domrid = 'domr-component') {
    this.createElement = createElement;
    this.domrid = `${domrid}-${randomizer(7)}`;
    this.target = () => {
      return lookup(this.domrid);
    };
    this.GetThisComponent = this.target;
    this.GetDomrID = this.domrid;
    this.handlingParent = document.querySelector('body');
  }

  // debug
  errorHandler(field, error) {
    const err = `_ ${field}: ${error}`;
    this.ErrorLog(err);
  }
  // OnError
  ErrorLog(err) {

  }

  // Markup
  Markup() {
    // HTML DOM/Markup goes here
    return '';
  }

  // Events
  deligateEvents(childen, eventName, eventAction) {
    this.handlingParent.addEventListener(eventName, (e) => {
      if (e.target && e.target.matches(childen)) {
        eventAction(e.target, e);
      }
    });
  }

  On(eventName, eventAction) {
    this.deligateEvents(`[data-domr-id="${this.domrid}"]`, eventName, eventAction);
  }

  Click(eventAction) {
    this.On('click', eventAction);
  }

  Mouseover(eventAction) {
    this.On('mouseover', eventAction);
  }

  Mouseout(eventAction) {
    this.On('mouseout', eventAction);
  }

  Input(eventAction) {
    this.On('input', eventAction);
  }

  Blur(eventAction) {
    this.On('blur', eventAction);
  }

  Keydown(eventAction) {
    this.On('keydown', eventAction);
  }

  Keypress(eventAction) {
    this.On('keypress', eventAction);
  }

  Keyup(eventAction) {
    this.On('keyup', eventAction);
  }

  Events() {
    // This one will house the events
  }

  // AfterRender
  AfterRenderDone() {

  }

  delayedContent() {
    setTimeout(() => {
      if (this.target()) {
        this.AfterRenderDone();
      }
    }, 50);
  }

  optimizedDom() {
    this.events();
    return this.createElement(this.dom(), this.domrid);
  }

  // Add Events
  // Render
  Render() {
    this.delayedContent();
    return this.optimizedDom();
  }

  AddTo(parent) {
    if (parent) {
      parent.insertAdjacentHTML('beforeend', this.optimizedDom());
      this.delayedContent();
    } else {
      this.errorHandler('AddTo', 'parent not found');
    }
  }

  AddFromStartTo(parent) {
    if (parent) {
      parent.insertAdjacentHTML('afterbegin', this.optimizedDom());
      this.delayedContent();
    } else {
      this.errorHandler('AddFromStartTo', 'parent not found');
    }
  }

  Before(sibling) {
    if (sibling) {
      sibling.insertAdjacentHTML('beforebegin', this.optimizedDom());
      this.delayedContent();
    } else {
      this.errorHandler('Before', 'sibling not found');
    }
  }

  After(sibling) {
    if (sibling) {
      sibling.insertAdjacentHTML('afterend', this.optimizedDom());
      this.delayedContent();
    } else {
      this.errorHandler('After', 'sibling not found');
    }
  }

  Replace(sibling) {
    if (sibling) {
      const parent = sibling.parentElement;

      if (parent) {
        sibling.insertAdjacentHTML('afterend', this.optimizedDom());
        parent.removeChild(sibling);
        this.delayedContent();
      } else {
        this.errorHandler('Replace', 'sibling has no parentElement');
      }
    } else {
      this.errorHandler('Replace', 'sibling not found');
    }
  }
}
