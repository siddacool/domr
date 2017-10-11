import ExamplesList from '../containers/ExamplesList';
import routesList from '../routes';

export default function () {
  const examplesList = new ExamplesList(routesList);
  const wrapper = document.getElementById('wrapper');

  examplesList.addTo(wrapper);
}

