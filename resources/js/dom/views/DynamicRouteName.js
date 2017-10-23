import setPageTitle from '../utils/set-page-title';
import SayMyName from '../containers/SayMyName';

export default function (data) {
  const house = data.metadata.house;
  const serachHash = location.hash.split('?');
  const person = serachHash[1];
  const sayMyName = new SayMyName(house, person);
  const wrapper = document.getElementById('wrapper');
  console.log(data.metadata);
  sayMyName.addTo(wrapper);
  setPageTitle(data);
}

