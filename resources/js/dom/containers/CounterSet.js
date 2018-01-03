/*import { Component } from 'domr-a';*/
import { Component } from '../Domr2/source/';
import CounterElm from '../components/CounterElm';

function makeCounters(val) {
  const counterElm = new CounterElm(val);

  return `${counterElm.render()}`;
}

export default class extends Component {
  constructor(counterVal = '') {
    super();
    this.counterVal = counterVal;
  }

  dom() {
    return `
        <div class="counter-container">
          ${this.counterVal.map(counter => `${makeCounters(counter)}`).join('')}
        </div>
    `;
  }
}
