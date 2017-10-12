import Component from './Component';

export default class extends Component {
  constructor(domrid) {
    super(domrid, true);
    this.target = this.lookup;
  }

  events() {
    const target = this.target();
    target.addEventListener('click', () => {
      console.log(`Default Event for ${this.domrid}`);
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
