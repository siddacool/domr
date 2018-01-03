/*import { ActiveComponent } from 'domr-a';*/
import { ActiveComponent } from '../Domr2/source/';

export default class extends ActiveComponent {
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
