import { ActiveComponent } from '../Domr';
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
    const target = this.target();
    target.addEventListener('click', () => {
      const checklistText = target.parentElement.querySelector('.checklist-text');

      checklistText.classList.toggle('checklist-text--strike');
      saveListSnapshot();
    });
  }
}
