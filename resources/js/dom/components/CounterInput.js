/*import { ActiveComponent } from 'domr-a';*/
import { ActiveComponent } from '../Domr2/source/';
import changeColor from '../utils/change-color-based-on-value';

export default class extends ActiveComponent {
  constructor(value) {
    super('counter-input');
    this.value = value;
  }

  dom() {
    return `
      <input type="text" value="${this.value}" style="color:${changeColor(this.value)}"/>
    `;
  }

  events() {
    this.addEvent('input', (e) => {
      const target = e.target;
      const value = target.value.replace(/[^\d.-]/g, '');
      target.style.color = changeColor(value);
      target.value = value;
    });
  }
}
