/*import { Component } from 'domr-a';*/
import { Component } from '../Domr2/source/';
import CounterBtn from './CounterBtn';
import CounterInput from './CounterInput';

export default class extends Component {
  constructor(startValue = '1') {
    super();
    this.startValue = startValue;
  }

  dom() {
    const counterBtnIncrement = new CounterBtn('inc');
    const counterBtnDecrement = new CounterBtn('dec');
    const counterInput = new CounterInput(this.startValue);

    const BtnIncrement = counterBtnIncrement.render();
    const BtnDecrement = counterBtnDecrement.render();
    const Input = counterInput.render();

    return `
      <div class="counter-elm"> ${BtnDecrement} ${Input} ${BtnIncrement} </div>
    `;
  }
}
