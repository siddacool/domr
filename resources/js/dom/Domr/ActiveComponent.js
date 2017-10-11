import Component from './Component';

export default class extends Component {
  constructor(id) {
    super(id, true);
    this.target = this.lookup;
  }

  events() {
    const target = this.target();
    target.addEventListener('click', () => {
      console.log(`Default Event for ${this.id}`);
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
    return this.createElement(this.dom(), this.id);
  }
}
