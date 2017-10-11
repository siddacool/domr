import Domr from '../Domr';
import changeColor from '../utils/change-color-based-on-value';

const ActiveComponent = Domr.ActiveComponent;

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
    const target = this.target();
    target.addEventListener('input', () => {
      const value = target.value.replace(/[^\d.-]/g, '');
      target.style.color = changeColor(value);
      target.value = value;
    });
  }
}
