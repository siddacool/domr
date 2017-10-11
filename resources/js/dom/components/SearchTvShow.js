import Domr from '../Domr';
import callApi from './tv-shows-call-api';

const ActiveComponent = Domr.ActiveComponent;

export default class extends ActiveComponent {
  constructor(defaultShow = '') {
    super('search-tv-show');
    this.show = defaultShow;
  }

  dom() {
    return `
      <input type="text" id="search-tv-show" value="${this.show}" placeholder="Search a Tv Show"/>
    `;
  }

  events() {
    const target = this.target();
    const cardHolder = document.getElementById('tv-show-card-holder');
    target.addEventListener('input', () => {
      callApi(target.value, cardHolder);
    });
  }
}
