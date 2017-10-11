import Domr from '../Domr';
import TreeDelete from './TreeDelete';
import TreeMakeFolder from './TreeMakeFolder';

const Component = Domr.Component;

export default class extends Component {
  constructor(text = '') {
    super();
    this.text = text;
    this.name = name;
  }

  dom() {
    const treeMakeFolder = new TreeMakeFolder();
    const treeDelete = new TreeDelete();

    return `
      <li class="tree-item" > <span class="tree-item--title">${this.text}</span> ${treeMakeFolder.render()} ${treeDelete.render()}</li>
    `;
  }
}
