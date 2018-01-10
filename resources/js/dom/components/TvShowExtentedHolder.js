/*import { Component } from 'domr-a';*/
import { Component } from '../Domr2/source/';
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

  delay() {
    const target = this.target();
    const api = `https://api.tvmaze.com/shows/${this.showId}?embed=cast`;
    const tvShowExtendedCard = new TvShowExtendedCard(api);
    tvShowExtendedCard.replaceContentOf(target);
  }
}
