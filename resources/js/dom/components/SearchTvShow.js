import { ActiveComponent, utils } from 'domr-a';
import makeTvShowCards from './makeTvShowCards';
import loadApi from '../utils/load-api';

const hashLocation = utils.hashLocation;

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
        const api = `https://api.tvmaze.com/search/shows?q=${target.value}`;
        loadApi(api, cardHolder, makeTvShowCards);
      }, timeInterval);
    });

    target.addEventListener('keydown', (e) => {
      clearTimeout(typeTimer);
      typeTimer = setTimeout(() => {
        const code = (e.keyCode ? e.keyCode : e.which);
        const search = target.value.replace(/ /g, '_');
        const loc = hashLocation();

        if (code === 13) {
          loc.set('query', {
            search,
          });
        }
      }, timeInterval);
    });
  }
}
