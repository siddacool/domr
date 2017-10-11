import Domr from '../Domr';
import TreeLi from '../components/TreeLi';
import TreeFolder from '../components/TreeFolder';

const Container = Domr.Component;

function makeList(itm) {
  const treeLi = new TreeLi(itm.text);

  return `${treeLi.render()}`;
}

function makeFolder(itm, loop, level) {
  const ulContent = `${itm.folder.map(list => `${loop(list, level)}`).join('')}`;
  const focusOnFolderMaker = false;
  const treeFolder = new TreeFolder(itm.text, ulContent, itm.isOpen, focusOnFolderMaker, level);

  return `${treeFolder.render()}`;
}

function loopList(itm, level) {
  const thisLevel = level + 1;

  return `
    ${itm.folder ? `${makeFolder(itm, loopList, thisLevel)}` : `${makeList(itm)}`}
  `;
}

export default class extends Container {
  constructor(list = '') {
    super();
    this.list = list;
    this.ulContent = `${this.list.map(itm => `${loopList(itm, 0)}`).join('')}`;
  }

  dom() {
    const treeFolder = new TreeFolder('List', this.ulContent, 'true');

    return `
      <div class="tree-container">
        <ul class="tree-top-list-holder">
          ${treeFolder.render()}
        </ul>
      </div>
    `;
  }
}
