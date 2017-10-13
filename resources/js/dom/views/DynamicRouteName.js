import setPageTitle from '../utils/set-page-title';
import dynamicRouteLoc from '../utils/dynamic-route-loc';
import SayMyName from '../containers/SayMyName';

const myNameIs = dynamicRouteLoc('name');

export default function (data) {
  const sayMyName = new SayMyName(myNameIs);
  const wrapper = document.getElementById('wrapper');

  sayMyName.addTo(wrapper);
  setPageTitle(data);
}

