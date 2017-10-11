import Domr from '../Domr';
import changeColor from '../utils/change-color-based-on-value';
import CounterBtnIncrement from './CounterBtnIncrement';
import CounterBtnDecrement from './CounterBtnDecrement';
import CounterInput from './CounterInput';

const Component = Domr.Component;

export default class extends Component {
  constructor(startValue = '1') {
    super();
    this.startValue = startValue;
  }

  dom() {
    const counterBtnIncrement = new CounterBtnIncrement();
    const counterBtnDecrement = new CounterBtnDecrement();
    const counterInput = new CounterInput(this.startValue);

    const BtnIncrement = counterBtnIncrement.render();
    const BtnDecrement = counterBtnDecrement.render();
    const Input = counterInput.render();

    return `
      <div class="counter-elm"> ${BtnDecrement} ${Input} ${BtnIncrement} </div>
    `;
  }
}
