/*import { Component } from 'domr-a';*/
import { Component } from '../Domr2/source/';
import CheckListLi from './CheckListLi';
import saveListSnapshot from '../utils/save-list-snapshot';

export default class extends Component {
  constructor() {
    super('add-new');
  }

  dom() {
    return `
      <input type="text" />
    `;
  }

  events() {
    this.addEvent('keypress', (target, e) => {
      if (e.keyCode === 13) {
        const checkListLi = CheckListLi(target.value);
        const checkListUl = document.getElementById('checklist-ul');

        checkListUl.innerHTML += checkListLi;
        target.value = '';
        saveListSnapshot();
      }
    });
  }
}
