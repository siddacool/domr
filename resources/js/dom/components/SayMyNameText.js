/*import { ActiveComponent } from 'domr-a';*/
import { ActiveComponent } from '../Domr2/source/';
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
    this.addEvent('click', (e) => {
      const target = e.target;
      target.setAttribute('contenteditable', true);
      target.focus();
    });

    this.addEvent('focusout', (e) => {
      e.target.removeAttribute('contenteditable');
    });

    this.addEvent('input', (e) => {
      const save = document.getElementById('say-my-name-save');
      const parent = e.target.parentElement.parentElement;

      if (!save) {
        const sayMyNameSave = new SayMyNameSave();

        sayMyNameSave.addTo(parent);
      }
    });

    this.addEvent('keydown', (e) => {
      const code = (e.keyCode ? e.keyCode : e.which);
      const save = document.getElementById('say-my-name-save');

      if (code === 13 && save) {
        save.click();
      }
    });
  }
}
