import Component from './Component';
import lookup from './helpers/lookup';
import randomizer from './helpers/randomizer';

export default class extends Component {
  constructor(domrid = 'domr-active-component') {
    super();
    this.domrid = `${domrid}-${randomizer(7)}`;
    this.target = () => {
      return lookup(this.domrid);
    };
    this.handlingParent = this.parentDefault || document.querySelector('body');
  }

  addEvent(eventName, eventAction) {
    this.handlingParent.addEventListener(eventName, (e) => {
      if (e.target && e.target.matches(`[data-domr-id="${this.domrid}"]`)) {
        eventAction(e);
      }
    });
  }

  events() {
  }

  renderNodes() {
    this.events();
    return this.createElement(this.dom(), this.domrid);
  }
}
