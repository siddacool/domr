import setPageTitle from '../utils/set-page-title';
import ContainerCheckbox from '../containers/ContainerCheckbox';
import saveToLocalStorage from '../utils/save-to-local-storage';

let listItems = [
  {
    msg: 'Hello',
    isChecked: false,
  },
  {
    msg: 'Hey There',
    isChecked: false,
  },
  {
    msg: 'What up',
    isChecked: true,
  },
  {
    msg: 'How ya doin?',
    isChecked: false,
  },
];

const savedList = localStorage.getItem('savedList');

if (savedList) {
  listItems = JSON.parse(savedList);
} else {
  saveToLocalStorage(listItems);
}

export default function (data) {
  const containerCheckbox = new ContainerCheckbox('container-checkbox-random-list', listItems);
  const wrapper = document.getElementById('wrapper');

  containerCheckbox.addTo(wrapper);
  setPageTitle(data);
}
