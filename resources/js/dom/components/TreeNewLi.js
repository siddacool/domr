/*import { ActiveComponent } from 'domr-a';*/
import { ActiveComponent } from '../Domr2/source/';
import TreeLi from './TreeLi';

export default class extends ActiveComponent {
  constructor(focus = false) {
    super('tree-new-li');
    this.focus = focus;
  }

  dom() {
    return `
      <input type="text" placeholder="New List" class="tree-new-list" ${this.focus ? 'autofocus' : ''}/>
    `;
  }

  events() {
    this.addEvent('keypress', (e) => {
      const target = e.target;
      if (e.keyCode === 13) {
        const val = target.value.trim();
        const treeLi = new TreeLi(val);

        if (val !== '') {
          treeLi.addBefore(target);
          target.value = '';
        }
      }
    });
  }
}
