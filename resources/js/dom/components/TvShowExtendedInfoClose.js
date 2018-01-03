/*import { ActiveComponent } from 'domr-a';*/
import { ActiveComponent } from '../Domr2/source/';

export default class extends ActiveComponent {
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

  events() {
    this.addEvent('click', (e) => {
      e.preventDefault();
      history.back();
    });
  }
}
