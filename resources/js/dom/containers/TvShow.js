import Domr from '../Domr';
import SearchTvShow from '../components/SearchTvShow';
import TvShowCardsHolder from '../components/TvShowCardsHolder';

const Container = Domr.Component;

export default class extends Container {
  constructor(defaultShow) {
    super('tv-show-container');
    this.show = defaultShow;
  }

  dom() {
    const searchTvShow = new SearchTvShow(this.show);
    const tvShowCardsHolder = new TvShowCardsHolder(this.show);
    return `
      <div class="tv-show-container">
        <div class="tv-show-search-container">
          ${searchTvShow.render()}
        </div>
        ${tvShowCardsHolder.render()}
      </div>
    `;
  }
}
