/*import { ActiveComponent } from 'domr-a';*/
import { ActiveComponent } from '../Domr2/source/';
import changeColor from '../utils/change-color-based-on-value';

export default class extends ActiveComponent {
  constructor(type = 'inc') {
    super('counter-btn');
    this.type = type;
  }

  dom() {
    return `
      <a class="counter-btn counter-btn--${this.type}"/> ${this.type === 'inc' ? '+' : '-'} </a>
    `;
  }

  events() {
    this.addEvent('click', (e) => {
      e.preventDefault();
      const target = e.target;
      const counter = target.parentElement.querySelector('input');
      const counterValue = Number(counter.value);

      if (target.classList.contains('counter-btn--inc')) {
        counter.value = counterValue + 1;
      } else {
        counter.value = counterValue - 1;
      }
      counter.style.color = changeColor(counter.value);
    });
  }
}
