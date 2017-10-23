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
    const timeInterval = 1000;
    let typeTimer;

    target.addEventListener('input', () => {
      clearTimeout(typeTimer);
      typeTimer = setTimeout(() => {
        callApi(target.value, cardHolder);
      }, timeInterval);
    });
  }
}