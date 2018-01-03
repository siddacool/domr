/*import { ActiveComponent } from 'domr-a';*/
import { ActiveComponent } from '../Domr2/source/';
import makeTvShowCards from './makeTvShowCards';
import loadApi from '../utils/load-api';

export default class extends ActiveComponent {
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
    const target = this.target();
    const api = `https://api.tvmaze.com/search/shows?q=${this.show}`;
    loadApi(api, target, makeTvShowCards);
  }
}
