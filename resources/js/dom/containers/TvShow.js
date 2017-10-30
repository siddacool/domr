import { Component } from '../Domr';
import SearchTvShow from '../components/SearchTvShow';
import TvShowCardsHolder from '../components/TvShowCardsHolder';
import TvShowExtented from '../components/TvShowExtented';

export default class extends Component {
  constructor(defaultShow, id) {
    super('tv-show-container');
    this.show = defaultShow;
    this.id = id;
  }

  dom() {
    const searchTvShow = new SearchTvShow(this.show);
    const tvShowCardsHolder = new TvShowCardsHolder(this.show);
    const tvShowExtented = new TvShowExtented(this.id);
    return `
      <div class="tv-show-container">
        <div class="tv-show-search-container">
          ${searchTvShow.render()}
        </div>
        ${tvShowCardsHolder.render()}
        ${this.id ? `${tvShowExtented.render()}` : ''}
      </div>
    `;
  }
}
