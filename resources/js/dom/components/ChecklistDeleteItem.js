import Domr from '../Domr';
import saveListSnapshot from '../utils/save-list-snapshot';

const ActiveComponent = Domr.ActiveComponent;

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
    const target = this.target();
    target.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = target.parentElement;
      const grandParent = parent.parentElement;

      grandParent.removeChild(parent);
      saveListSnapshot();
    });
  }
}
