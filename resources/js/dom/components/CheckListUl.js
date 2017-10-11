import Domr from '../Domr';
import CheckListLi from './CheckListLi';

const Component = Domr.Component;

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
