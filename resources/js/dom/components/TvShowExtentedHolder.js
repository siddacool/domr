/*import { Component } from 'domr-a';*/
import { Component } from '../Domr2/source/';
import goodOlAjax from '../utils/good-ol-ajax-promise';
import TvShowExtendedCard from './TvShowExtendedCard';

export default class extends Component {
  constructor(showId) {
    super('tv-show-extended-holder');
    this.showId = showId;
  }

  dom() {
    return `
      <div class="tv-show-extended-holder" id="tv-show-extended-holder">
      </div>
    `;
  }

  afterRender(elm) {
    const target = elm;
    const api = `https://api.tvmaze.com/shows/${this.showId}?embed=cast`;

    goodOlAjax(api)
    .then((response) => {
      const tvShowExtendedCard = new TvShowExtendedCard(response);

      target.innerHTML = '';
      tvShowExtendedCard.addTo(target);
    });
  }
}
