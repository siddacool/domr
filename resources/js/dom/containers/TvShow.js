/*import { Component } from 'domr-a';*/
import { Component } from '../Domr2/source/';
import SearchTvShow from '../components/SearchTvShow';
import TvShowCardsHolder from '../components/TvShowCardsHolder';
import TvShowExtentedHolder from '../components/TvShowExtentedHolder';

export default class extends Component {
  constructor(defaultShow, id) {
    super('tv-show-container');
    this.show = defaultShow;
    this.id = id;
  }

  dom() {
    const searchTvShow = new SearchTvShow(this.show);
    const tvShowCardsHolder = new TvShowCardsHolder(this.show);
    const tvShowExtentedHolder = new TvShowExtentedHolder(this.id);
    console.log(this.id);
    return `
      <div class="tv-show-container">
        <div class="tv-show-search-container">
          ${searchTvShow.render()}
        </div>
        ${tvShowCardsHolder.render()}
        ${this.id ? `${tvShowExtentedHolder.render()}` : ''}
      </div>
    `;
  }
}
