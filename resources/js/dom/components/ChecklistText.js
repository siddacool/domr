import { ActiveComponent } from '../Domr';
import saveListSnapshot from '../utils/save-list-snapshot';

const clearContentEditable = () => {
  const checklistText = document.querySelectorAll('.checklist-text');

  for (let i = 0; i < checklistText.length; i++) {
    checklistText[i].setAttribute('contenteditable', 'false');
  }
};

export default class extends ActiveComponent {
  constructor(isChecked = false, text = '') {
    super('checklist-text');
    this.isChecked = isChecked;
    this.text = text;
  }

  dom() {
    return `
      <span class="checklist-text ${this.isChecked ? 'checklist-text--strike' : ''}">${this.text}</span>
    `;
  }

  events() {
    const target = this.target();

    target.addEventListener('click', () => {
      if (!target.classList.contains('checklist-text--strike')) {
        clearContentEditable();
        target.setAttribute('contenteditable', 'true');
        target.focus();
      }
    });

    target.addEventListener('keypress', (e) => {
      if (e.keyCode === 13) {
        target.blur();
      }
    });

    target.addEventListener('focusout', () => {
      clearContentEditable();
      saveListSnapshot();
    });
  }
}
