/*import { Component } from 'domr-a';*/
import { Component } from '../Domr2/source/';

export default class extends Component {
  constructor() {
    super('tv-show-extended-delete');
  }

  dom() {
    return `
      <a href="#" class="tv-show-extended-delete">
        <svg role="img" class="icon close"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-close"></use></svg>
      </a>
    `;
  }

  afterRender(elm) {
    const thisElm = elm;

    thisElm.addEventListener('click', (e) => {
      e.preventDefault();
      history.back();
    });
  }
}
