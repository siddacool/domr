import { ActiveComponent } from '../Domr';
import changeColor from '../utils/change-color-based-on-value';

export default class extends ActiveComponent {
  constructor() {
    super('btn-dec');
  }

  dom() {
    return `
      <a class="counter-btn--dec"/> - </a>
    `;
  }

  events() {
    const target = this.target();
    target.addEventListener('click', (e) => {
      e.preventDefault();
      const counter = target.parentElement.querySelector('input');
      const counterValue = Number(counter.value);

      counter.value = counterValue - 1;
      counter.style.color = changeColor(counter.value);
    });
  }
}
