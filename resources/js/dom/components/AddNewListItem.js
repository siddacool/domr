import Domr from '../Domr';
import CheckListLi from './CheckListLi';
import saveListSnapshot from '../utils/save-list-snapshot';

const ActiveComponent = Domr.ActiveComponent;

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
    const target = this.target();
    target.addEventListener('keypress', (e) => {
      if (e.keyCode === 13) {
        const checkListLi = new CheckListLi(target.value);
        const checkListUl = document.getElementById('checklist-ul');

        checkListLi.addFromStartTo(checkListUl);
        target.value = '';
        saveListSnapshot();
      }
    });
  }
}
