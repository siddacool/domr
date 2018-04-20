/*import { Component, utils } from 'domr-a';*/
import { Component, utils } from '../Domr2/source/';
import goodOlAjax from '../utils/good-ol-ajax-promise';
import TvShowCard from './TvShowCard';

const hashLocation = utils.hashLocation;

export default class extends Component {
  constructor(defaultShow = '') {
    super('search-tv-show');
    this.show = defaultShow;
  }

  dom() {
    return `
      <input type="text" id="search-tv-show" value="${this.show}" placeholder="Search a Tv Show"/>
    `;
  }

  afterRender(elm) {
    const thisElm = this.newEvent(elm);
    const timeInterval = 1000;
    let typeTimer;

    thisElm.onEvent('input', (self, e) => {
      clearTimeout(typeTimer);
      typeTimer = setTimeout(() => {
        const cardHolder = document.getElementById('tv-show-card-holder');

        if (self.value) {
          const api = `https://api.tvmaze.com/search/shows?q=${self.value}`;
          goodOlAjax(api)
          .then((response) => {
            const shows = response;

            cardHolder.innerHTML = '';
            shows.forEach((show) => {
              const tvShowCard = TvShowCard(show);

              cardHolder.innerHTML += tvShowCard;
            });
          });
        }
      }, timeInterval);
    });

    thisElm.onEvent('keydown', (self, e) => {
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

  debug(err) {
    console.log(`search-tv-show ${err}`);
  }
}
