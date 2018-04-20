/*import { Component } from 'domr-a';*/
import { Component } from '../Domr2/source/';
import SayMyNameSave from './SayMyNameSave';

export default class extends Component {
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
    this.addEvent('click', (target) => {
      target.setAttribute('contenteditable', true);
      target.focus();
    });

    this.addEvent('focusout', (target) => {
      target.removeAttribute('contenteditable');
    });

    this.addEvent('input', (target) => {
      const save = document.getElementById('say-my-name-save');
      const parent = target.parentElement.parentElement;

      if (!save) {
        const sayMyNameSave = new SayMyNameSave();

        sayMyNameSave.addTo(parent);
      }
    });

    this.addEvent('keydown', (target, e) => {
      const code = (e.keyCode ? e.keyCode : e.which);
      const save = document.getElementById('say-my-name-save');

      if (code === 13 && save) {
        save.click();
      }
    });
  }

  afterRender(elm) {
    const thisElm = this.newEvent(elm);
    thisElm.onEvent('click', (target) => {
      target.setAttribute('contenteditable', true);
      target.focus();
    });

    thisElm.onEvent('focusout', (target) => {
      target.removeAttribute('contenteditable');
    });

    thisElm.onEvent('input', (target) => {
      const save = document.getElementById('say-my-name-save');
      const parent = target.parentElement.parentElement;

      if (!save) {
        const sayMyNameSave = new SayMyNameSave();

        sayMyNameSave.addTo(parent);
      }
    });

    thisElm.onEvent('keydown', (target, e) => {
      const code = (e.keyCode ? e.keyCode : e.which);
      const save = document.getElementById('say-my-name-save');

      if (code === 13 && save) {
        save.click();
      }
    });
  }
}
