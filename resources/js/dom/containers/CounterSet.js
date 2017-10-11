import Domr from '../Domr';
import CounterElm from '../components/CounterElm';

const Container = Domr.Component;

function makeCounters(val) {
  const counterElm = new CounterElm(val);

  return `${counterElm.render()}`;
}

export default class extends Container {
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
