/*import { ActiveComponent } from 'domr-a';*/
import { ActiveComponent } from '../Domr2/source/';
import CheckListLi from './CheckListLi';
import saveListSnapshot from '../utils/save-list-snapshot';

export default class extends ActiveComponent {
  constructor() {
    super('add-new');
  }

  dom() {
    return `
      <input type="text" />
    `;
  }

  events() {
    this.addEvent('keypress', (e) => {
      if (e.keyCode === 13) {
        const target = e.target;
        const checkListLi = new CheckListLi(target.value);
        const checkListUl = document.getElementById('checklist-ul');

        checkListLi.addFromStartTo(checkListUl);
        target.value = '';
        saveListSnapshot();
      }
    });
  }
}
