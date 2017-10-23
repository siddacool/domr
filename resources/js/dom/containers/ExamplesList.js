import Domr from '../Domr';

const Container = Domr.Component;

function makeList(list) {
  if (!list.isDefault) {
    return `
      <li>
        <a href="#${list.psudoPath ? `${list.psudoPath}` : `${list.path}`}" >${list.name}</a>
      </li>
    `;
  }

  return '';
}

export default class extends Container {
  constructor(links = '') {
    super();
    this.links = links;
  }

  dom() {
    return `
        <div class="examples-list">
          <h1>Examples</h1>
          <ul>
            ${this.links.map(link => `${makeList(link)}`).join('')}
          </ul>
        </div>
    `;
  }
}
