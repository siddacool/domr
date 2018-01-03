/*import { ActiveComponent, utils } from 'domr-a';*/
import { ActiveComponent, utils } from '../Domr2/source/';
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
    const timeInterval = 1000;
    let typeTimer;

    this.addEvent('input', (e) => {
      clearTimeout(typeTimer);
      typeTimer = setTimeout(() => {
        const cardHolder = document.getElementById('tv-show-card-holder');
        const api = `https://api.tvmaze.com/search/shows?q=${e.target.value}`;
        loadApi(api, cardHolder, makeTvShowCards);
      }, timeInterval);
    });

    this.addEvent('keydown', (e) => {
      clearTimeout(typeTimer);
      typeTimer = setTimeout(() => {
        const code = (e.keyCode ? e.keyCode : e.which);
        const search = e.target.value.replace(/ /g, '_');
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
