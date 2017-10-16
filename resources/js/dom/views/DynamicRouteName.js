import setPageTitle from '../utils/set-page-title';
import SayMyName from '../containers/SayMyName';

export default function (data) {
  const sayMyName = new SayMyName(data.metadata.name);
  const wrapper = document.getElementById('wrapper');

  sayMyName.addTo(wrapper);
  setPageTitle(data);
}

