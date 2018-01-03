/*import { Component } from 'domr-a';*/
import { Component } from '../Domr2/source/';

function makeList(list) {
  if (!list.isDefault && list.name && list.path) {
    return `
      <li>
        <a href="#${list.psudoPath ? `${list.psudoPath}` : `${list.path}`}" >${list.name}</a>
      </li>
    `;
  } else if (!list.path && list.name && list.href) {
    return `
      <li>
        <a href="${list.href}" >${list.name}</a>
      </li>
    `;
  }

  return '';
}

export default class extends Component {
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
