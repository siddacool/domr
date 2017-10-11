import Domr from '../Domr';
import TreeLi from './TreeLi';

const ActiveComponent = Domr.ActiveComponent;

export default class extends ActiveComponent {
  constructor(focus = false) {
    super('tree-new-li');
    this.focus = focus;
  }

  dom() {
    return `
      <input type="text" placeholder="New List" class="tree-new-list"/>
    `;
  }

  events() {
    const target = this.target();
    if (this.focus) {
      target.focus();
    }

    target.addEventListener('keypress', (e) => {
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
