/*import { Component } from 'domr-a';*/
import { Component } from '../Domr2/source/';
import TreeFolder from './TreeFolder';

export default class extends Component {
  constructor() {
    super('tree-make-folder');
  }

  dom() {
    return `
      <a href="#" class="tree-folder-make">[ 
      <svg role="img" class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-folder"></use></svg>
       ]</a>
    `;
  }

  events() {
    this.addEvent('click', (e) => {
      e.preventDefault();
      const li = e.target.parentElement;
      const ul = li.parentElement;
      const text = li.querySelector('.tree-item--title').textContent;
      const folderContent = '';
      const isOpen = true;
      const isFocus = true;
      const dataLevel = Number(ul.parentElement.getAttribute('data-level')) + 1;
      const treeFolder = new TreeFolder(text, folderContent, isOpen, isFocus, dataLevel);

      treeFolder.addBefore(li);
      ul.removeChild(li);
    });
  }
}
