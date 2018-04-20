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

  afterRender(elm) {
    const thisElm = elm;
    const counterBtn = this.newEvent(thisElm.querySelectorAll('.counter-btn'));
    const input = this.newEvent(thisElm.querySelector('input'));

    counterBtn.onEvent('click', (target, e) => {
      e.preventDefault();
      const counter = target.parentElement.querySelector('input');
      const counterValue = Number(counter.value);

      console.log('called');

      if (target.classList.contains('counter-btn--inc')) {
        counter.value = counterValue + 1;
      } else {
        counter.value = counterValue - 1;
      }
      counter.style.color = changeColor(counter.value);
    });

    input.onEvent('input', (target) => {
      const value = target.value.replace(/[^\d.-]/g, '');
      target.style.color = changeColor(value);
      target.value = value;
    });
  }
}
