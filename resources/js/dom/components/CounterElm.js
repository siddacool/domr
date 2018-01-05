/*import { Component } from 'domr-a';*/
import { Component } from '../Domr2/source/';
import changeColor from '../utils/change-color-based-on-value';
import CounterBtn from './CounterBtn';

export default class extends Component {
  constructor(startValue = '1') {
    super();
    this.startValue = startValue;
    this.self = `[data-domr-id="${this.domrid}"]`;
  }

  dom() {
    const counterBtnIncrement = CounterBtn('inc');
    const counterBtnDecrement = CounterBtn('dec');

    return `
      <div class="counter-elm"> 
        ${counterBtnDecrement}
        <input type="text" value="${this.startValue}" style="color:${changeColor(this.startValue)}"/> 
        ${counterBtnIncrement}
      </div>
    `;
  }

  events() {
    this.addEventOn(`${this.self} .counter-btn`, 'click', (e) => {
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

    this.addEventOn(`${this.self} input`, 'input', (e) => {
      const target = e.target;
      const value = target.value.replace(/[^\d.-]/g, '');
      target.style.color = changeColor(value);
      target.value = value;
    });
  }
}
