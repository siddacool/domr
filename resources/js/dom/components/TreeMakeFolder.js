import Domr from '../Domr';
import TreeFolder from './TreeFolder';

const ActiveComponent = Domr.ActiveComponent;

export default class extends ActiveComponent {
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
    const target = this.target();
    target.addEventListener('click', (e) => {
      e.preventDefault();
      const li = target.parentElement;
      const ul = li.parentElement;
      const text = li.querySelector('.tree-item--title').textContent;
      const folderContent = '';
      const isOpen = true;
      const isFocus = true;
      const dataLevel = Number(ul.parentElement.getAttribute('data-level')) + 1;
      const treeFolder = new TreeFolder(text, folderContent, isOpen, isFocus, dataLevel);

      console.log(dataLevel);

      treeFolder.addBefore(li);
      ul.removeChild(li);
    });
  }
}
