/*import { Component } from 'domr-a';*/
import { Component } from '../Domr2/source/';
import makeTvShowCards from './makeTvShowCards';
import loadApi from '../utils/load-api';

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

  delay() {
    const self = this.target();
    const api = `https://api.tvmaze.com/search/shows?q=${this.show}`;
    loadApi(api, self, makeTvShowCards);
  }
}
