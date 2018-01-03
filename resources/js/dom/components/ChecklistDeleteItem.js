/*import { ActiveComponent } from 'domr-a';*/
import { ActiveComponent } from '../Domr2/source/';
import saveListSnapshot from '../utils/save-list-snapshot';

export default class extends ActiveComponent {
  constructor() {
    super('checklist-delete-item');
  }

  dom() {
    return `
      <a href="#">&#10006;</a>
    `;
  }

  events() {
    this.addEvent('click', (e) => {
      e.preventDefault();
      const target = e.target;
      const parent = target.parentElement;
      const grandParent = parent.parentElement;

      grandParent.removeChild(parent);
      saveListSnapshot();
    });
  }
}
