/*import { Component } from 'domr-a';*/
import { Component } from '../Domr2/source/';
import TvShowExtendedInfo from './TvShowExtendedInfo';
import loadApi from '../utils/load-api';

function makeExtendedCard(obj, target) {
  const tvShowExtendedHolder = target;

  const tvShowCard = new TvShowExtendedInfo(obj);
  tvShowCard.replaceContentOf(tvShowExtendedHolder);
}

export default class extends Component {
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

  delay() {
    const target = this.target();
    console.log(target);
    const api = `https://api.tvmaze.com/shows/${this.showId}?embed=cast`;
    loadApi(api, target, makeExtendedCard);
  }
}
