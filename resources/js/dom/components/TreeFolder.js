/*import { Component } from 'domr-a';*/
import { Component } from '../Domr2/source/';
import TreeFolderExpand from './TreeFolderExpand';
import TreeDelete from './TreeDelete';
import TreeNewLi from './TreeNewLi';

export default class extends Component {
  constructor(text = '', ulContent = '', isOpen = false, focusOnFolderMaker = false, level = 0) {
    super();
    this.text = text;
    this.ulContent = ulContent;
    this.isOpen = isOpen;
    this.focusOnFolderMaker = focusOnFolderMaker;
    this.level = level;
  }

  dom() {
    const treeDelete = new TreeDelete();
    const treeFolderExpand = new TreeFolderExpand();
    const DeleteBtn = treeDelete.render();
    const FolderExpandBtn = treeFolderExpand.render();
    const treeNewLi = new TreeNewLi(this.focusOnFolderMaker);

    return `
      <li data-level="${this.level}" class="tree-item--folder ${this.level >= 3 ? 'tree-item--folder-overflow' : ''}">
        <div class="tree-folder ${this.isOpen ? 'expanded' : ''}">
          <strong>${this.text}</strong> ${FolderExpandBtn} ${DeleteBtn}
        </div>
        <ul>
          ${this.ulContent}
          ${treeNewLi.render()}
        </ul>
      </li>
    `;
  }
}

