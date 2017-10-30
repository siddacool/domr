import setPageTitle from '../utils/set-page-title';
import SayMyName from '../containers/SayMyName';

export default function (data) {
  const house = data.metadata.house;
  const query = data.query;
  const sayMyName = new SayMyName(house, query.name, query.alias);
  const wrapper = document.getElementById('wrapper');

  sayMyName.replaceContentOf(wrapper);
  setPageTitle(data);
}

