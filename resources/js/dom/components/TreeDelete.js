import { ActiveComponent } from 'domr-a';

export default class extends ActiveComponent {
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
    const target = this.target();
    target.addEventListener('click', (e) => {
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
