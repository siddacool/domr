/*import { Component } from 'domr-a';*/
import { Component } from '../Domr2/source/';
import CheckListLi from './CheckListLi';

function makeList(itm) {
  const checkListLi = new CheckListLi(itm.msg, itm.isChecked);
  return checkListLi.render();
}

export default class extends Component {
  constructor(list) {
    super();
    this.list = list;
  }

  dom() {
    return `
      <ul id="checklist-ul">
        ${this.list.map(itm => `${makeList(itm)}`).join('')}
      </ul>
    `;
  }
}
