import Domr from '../Domr';
import callApi from './tv-shows-call-episode-api';

const ActiveComponent = Domr.ActiveComponent;

export default class extends ActiveComponent {
  constructor(episodeId) {
    super('tv-show-latest-episode');
    this.http = episodeId.replace('http:', 'https:');
    this.episodeId = this.http;
  }

  dom() {
    return `
      <div class="tv-show-latest-episode-holder">
      </div>
    `;
  }

  events() {
    const target = this.target();
    callApi(this.episodeId, target);
  }
}
