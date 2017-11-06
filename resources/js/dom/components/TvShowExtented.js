import { ActiveComponent } from 'domr-a';
import TvShowExtendedInfo from './TvShowExtendedInfo';
import loadApi from '../utils/load-api';

function makeExtendedCard(obj, target) {
  const tvShowExtendedHolder = target;

  const tvShowCard = new TvShowExtendedInfo(obj);
  tvShowCard.replaceContentOf(tvShowExtendedHolder);
}

export default class extends ActiveComponent {
  constructor(showId) {
    super();
    this.showId = showId;
  }

  dom() {
    return `
      <div class="tv-show-extended-holder" id="tv-show-extended-holder">
      </div>
    `;
  }

  events() {
    const target = this.target();
    const api = `https://api.tvmaze.com/shows/${this.showId}?embed=cast`;
    loadApi(api, target, makeExtendedCard);
  }
}
