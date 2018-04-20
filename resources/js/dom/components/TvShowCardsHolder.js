/*import { Component } from 'domr-a';*/
import { Component } from '../Domr2/source/';
import TvShowCard from './TvShowCard';
import goodOlAjax from '../utils/good-ol-ajax-promise';

export default class extends Component {
  constructor(defaultShow = '', id) {
    super('tv-show-card-holder');
    this.show = defaultShow;
    this.id = id;
  }

  dom() {
    return `
      <div class="tv-show-card-holder" id="tv-show-card-holder"></div>
    `;
  }

  afterRender(elm) {
    const target = elm;
    const api = `https://api.tvmaze.com/search/shows?q=${this.show}`;

    goodOlAjax(api)
    .then((response) => {
      const shows = response;

      target.innerHTML = '';
      shows.forEach((show) => {
        const tvShowCard = TvShowCard(show);
        target.innerHTML += tvShowCard;
      });
    });
  }
}
