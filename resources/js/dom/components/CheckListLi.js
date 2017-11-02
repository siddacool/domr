import { Component } from 'domr-a';
import ChecklistText from './ChecklistText';
import ChecklistCheck from './ChecklistCheck';
import ChecklistDeleteItem from './ChecklistDeleteItem';

export default class extends Component {
  constructor(text = '', isChecked) {
    super();
    this.text = text;
    this.isChecked = isChecked;
  }

  dom() {
    const checklistCheck = new ChecklistCheck(this.isChecked);
    const checklistDeleteItem = new ChecklistDeleteItem();
    const checklistText = new ChecklistText(this.isChecked, this.text);

    return `
      <li> ${checklistCheck.render()} ${checklistText.render()} ${checklistDeleteItem.render()}</li>
    `;
  }
}
