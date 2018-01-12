/*import { Component } from 'domr-a';*/
import { Component } from '../Domr2/source/';
import CheckListLi from './CheckListLi';
import saveListSnapshot from '../utils/save-list-snapshot';

function makeList(itm) {
  const checkListLi = CheckListLi(itm.msg, itm.isChecked);
  return checkListLi;
}

const clearContentEditable = () => {
  const checklistText = document.querySelectorAll('.checklist-text');

  for (let i = 0; i < checklistText.length; i++) {
    checklistText[i].setAttribute('contenteditable', 'false');
  }
};

export default class extends Component {
  constructor(list) {
    super();
    this.list = list;
    this.self = `[data-domr-id="${this.domrid}"]`;
  }

  dom() {
    return `
      <ul id="checklist-ul">
        ${this.list.map(itm => `${makeList(itm)}`).join('')}
      </ul>
    `;
  }

  events() {
    this.addEventOn(`${this.self} .checklist-check`, 'click', (target) => {
      const checklistText = target.parentElement.querySelector('.checklist-text');

      checklistText.classList.toggle('checklist-text--strike');
      saveListSnapshot();
    });

    this.addEventOn(`${this.self} .checklist-text`, [
      [
        'click', (target,e) => {
          if (!target.classList.contains('checklist-text--strike')) {
            clearContentEditable();
            target.setAttribute('contenteditable', 'true');
            target.focus();
          }
        },
      ],
      [
        'keypress', (target, e) => {
          if (e.keyCode === 13) {
            e.target.blur();
          }
        },
      ],
      [
        'focusout', () => {
          clearContentEditable();
          saveListSnapshot();
        },
      ],
    ]);

    this.addEventOn(`${this.self} .checklist-delete-item`, 'click', (target, e) => {
      e.preventDefault();
      const parent = target.parentElement;
      const grandParent = parent.parentElement;

      grandParent.removeChild(parent);
      saveListSnapshot();
    });
  }
}
