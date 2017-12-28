import Component from './Component';
import Logger from './Logger';
import lookup from './helpers/lookup';
import randomizer from './helpers/randomizer';

const logger = new Logger();

export default class extends Component {
  constructor(domrid = 'domr-active-component') {
    super();
    this.domrid = `${domrid}-${randomizer(7)}`;
    this.lookup = () => {
      return lookup(this.domrid);
    };
    this.target = this.lookup;
  }

  events() {
    const target = this.target();
    target.addEventListener('click', () => {
      logger.log(`Default Event for ${this.domrid}`);
    });
  }

  fireEventAfterTimeout() {
    setTimeout(() => {
      if (this.lookup()) {
        this.events();
      }
    }, 50);
  }

  renderNodes() {
    return this.createElement(this.dom(), this.domrid);
  }
}
