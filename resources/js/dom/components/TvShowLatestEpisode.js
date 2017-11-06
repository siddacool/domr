import { ActiveComponent } from 'domr-a';
import TvShowEpisode from './TvShowEpisode';
import loadApi from '../utils/load-api';

function getLatestEpisode(obj, target) {
  const tvShowLatestEpisodeHolder = target;
  const tvShowEpisode = new TvShowEpisode(obj);

  tvShowEpisode.addTo(tvShowLatestEpisodeHolder);
}

export default class extends ActiveComponent {
  constructor(episodeId) {
    super('tv-show-latest-episode');
    this.http = episodeId.replace('http:', 'https:');
    this.api = this.http;
  }

  dom() {
    return `
      <div class="tv-show-latest-episode-holder">
      </div>
    `;
  }

  events() {
    const target = this.target();
    loadApi(this.api, target, getLatestEpisode);
  }
}
