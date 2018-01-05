/*import { Component } from 'domr-a';*/
import { Component } from '../Domr2/source/';
import TvShowEpisode from './TvShowEpisode';
import loadApi from '../utils/load-api';

function getLatestEpisode(obj, target) {
  const tvShowLatestEpisodeHolder = target;
  const tvShowEpisode = new TvShowEpisode(obj);

  tvShowEpisode.addTo(tvShowLatestEpisodeHolder);
}

export default class extends Component {
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

  delay() {
    const target = this.target();
    loadApi(this.api, target, getLatestEpisode);
  }
}
