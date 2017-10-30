import { ActiveComponent, utils } from '../Domr';

const hashLocation = utils.hashLocation;

export default class extends ActiveComponent {
  constructor() {
    super('say-my-name-save');
    this.id = 'say-my-name-save';
  }

  dom() {
    return `
      <a href="#" class="${this.id}" id="${this.id}">Save</a>
    `;
  }

  events() {
    const target = this.target();

    target.addEventListener('click', (e) => {
      e.preventDefault();
      const name = document.querySelector('.say-my-name-text--name').textContent.replace(/\s+/g, '_') || '_';
      const house = document.querySelector('.say-my-name-text--house').textContent.replace(/\s+/g, '_') || '_';
      const alias = document.querySelector('.say-my-name-text--alias').textContent.replace(/\s+/g, '_') || '_';
      const loc = hashLocation();

      loc.set('hash', `/got/${house}/?name=${name}&alias=${alias}/`);
    });
  }
}
