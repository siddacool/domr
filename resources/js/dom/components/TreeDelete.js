/*import { Component } from 'domr-a';*/
import { Component } from '../Domr2/source/';

export default class extends Component {
  constructor() {
    super('tree-delete');
  }

  dom() {
    return `
      <a href="#" class="tree-delete">[ 
      <svg role="img" class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-trash"></use></svg>
       ]</a>
    `;
  }

  events() {
    this.addEvent('click', (target, e) => {
      e.preventDefault();
      let parent = target.parentElement;
      let grandParent = parent.parentElement;

      if (parent.classList.contains('tree-folder')) {
        parent = target.parentElement.parentElement;
        grandParent = parent.parentElement;
      }

      grandParent.removeChild(parent);
    });
  }
}
