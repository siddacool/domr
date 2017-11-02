import { ActiveComponent } from 'domr-a';
import SayMyNameSave from './SayMyNameSave';

export default class extends ActiveComponent {
  constructor(id = '', name = '') {
    super('say-my-name-text');
    this.id = id;
    this.name = name;
  }

  dom() {
    return `
      <strong class="say-my-name-text say-my-name-text--${this.id}">${this.name}</strong>
    `;
  }

  events() {
    const target = this.target();

    target.addEventListener('click', () => {
      target.setAttribute('contenteditable', true);
      target.focus();
    });

    target.addEventListener('focusout', () => {
      target.removeAttribute('contenteditable');
    });

    target.addEventListener('input', () => {
      const save = document.getElementById('say-my-name-save');
      const parent = target.parentElement.parentElement;

      if (!save) {
        const sayMyNameSave = new SayMyNameSave();

        sayMyNameSave.addTo(parent);
      }
    });

    target.addEventListener('keydown', (e) => {
      const code = (e.keyCode ? e.keyCode : e.which);
      const save = document.getElementById('say-my-name-save');

      if (code === 13 && save) {
        save.click();
      }
    });
  }
}
