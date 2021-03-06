/*import { Component } from 'domr-a';*/
import { Component } from '../Domr2/source/';
import TreeLi from './TreeLi';

export default class extends Component {
  constructor(focus = false) {
    super('tree-new-li');
    this.focus = focus;
  }

  dom() {
    return `
      <input type="text" placeholder="New List" class="tree-new-list" ${this.focus ? 'autofocus' : ''}/>
    `;
  }

  afterRender(elm) {
    const thisElm = this.newEvent(elm);
    thisElm.onEvent('keypress', (target, e) => {
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
