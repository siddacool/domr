import { ActiveComponent } from '../Domr';

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
    const target = this.target();
    target.addEventListener('click', (e) => {
      e.preventDefault();
      history.back();
    });
  }
}
