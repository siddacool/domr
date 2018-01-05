/*import { Component } from 'domr-a';*/
import { Component } from '../Domr2/source/';

export default class extends Component {
  constructor() {
    super('tree-folder-expand');
  }

  dom() {
    return `
      <a href="#" class="tree-folder-expand">[ 
      <svg role="img" class="icon plus"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-plus"></use></svg>
      <svg role="img" class="icon minus"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-minus"></use></svg>
       ]</a>
    `;
  }

  events() {
    this.addEvent('click', (e) => {
      e.preventDefault();
      const parent = e.target.parentElement;

      parent.classList.toggle('expanded');
    });
  }
}
