import { ActiveComponent } from 'domr-b';
/*import { ActiveComponent } from '../Domr2/source/';*/
import saveListSnapshot from '../utils/save-list-snapshot';

export default class extends ActiveComponent {
  constructor(isChecked = false) {
    super('checklist-check');
    this.isChecked = isChecked;
  }

  dom() {
    return `
      <input type="checkbox" ${this.isChecked ? 'checked' : ''}/>
    `;
  }

  events() {
    this.addEvent('click', (e) => {
      const target = e.target;
      const checklistText = target.parentElement.querySelector('.checklist-text');

      checklistText.classList.toggle('checklist-text--strike');
      saveListSnapshot();
    });
  }
}
