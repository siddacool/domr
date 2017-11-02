import Component from './Component';
import Logger from './Logger';

const logger = new Logger();

export default class extends Component {
  constructor(domrid) {
    super(domrid, true);
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
    }, 1);
  }

  renderNodes() {
    return this.createElement(this.dom(), this.domrid);
  }
}
