import { Component } from 'domr-a';
import CheckListUl from '../components/CheckListUl';
import AddNewListItem from '../components/AddNewListItem';

export default class extends Component {
  constructor(id = 'container-checkbox-1', list) {
    super(id);
    this.list = list;
  }

  dom() {
    const checkListUl = new CheckListUl(this.list);
    const addNewListItem = new AddNewListItem();

    const Ul = checkListUl.render();
    const InputAddNew = addNewListItem.render();

    return `
      <div class="container-ul" id="${this.id}">
        ${InputAddNew}
        ${Ul}
      </div>
    `;
  }
}
