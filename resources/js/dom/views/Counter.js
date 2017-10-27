import setPageTitle from '../utils/set-page-title';
import CounterSet from '../containers/CounterSet';

const counterVal = ['1', '5', '-10', '0', '1000', '-999'];

export default function (data) {
  const counterSet = new CounterSet(counterVal);
  const wrapper = document.getElementById('wrapper');

  counterSet.replaceContentOf(wrapper);
  setPageTitle(data);
}

