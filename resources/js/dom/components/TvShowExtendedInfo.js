/*import { Component } from 'domr-a';*/
import { Component } from '../Domr2/source/';
import TvShowExtendedInfoClose from './TvShowExtendedInfoClose';
import TvShowBackgroundImg from './TvShowBackgroundImg';
import TvShowLatestEpisode from './TvShowLatestEpisode';

function Network(network) {
  return `
    ${network ? `<span class="tv-show-card--network">${network.name}</span>` : ''}
  `;
}

function Status(status) {
  const showStatus = status;
  return `
    ${showStatus === 'Ended' ? `<span class="wee-lozenge wee-lozenge--bold--danger"> <span>${status}</span></span>` : ''}
  `;
}

function makeEpisode(episodeId) {
  const tvShowLatestEpisode = new TvShowLatestEpisode(episodeId);

  return `
    ${episodeId ? `${tvShowLatestEpisode.render()}` : ''}
  `;
}

function LastEpisode(previousepisode) {
  let epId;

  if (previousepisode) {
    epId = previousepisode.href;
  }

  return `
    <div class="tv-show-card--status-holder">
      ${makeEpisode(epId)}
    </div>
  `;
}

function makeGrenre(genreArr) {
  return `
    ${genreArr.map(genre => `
      <span class='tv-show-card--genre wee-badge wee-badge--default'>${genre}</span>
    `).join('')}
  `;
}

function Genres(genre) {
  return `
    ${genre.length !== 0 ? `
      <div class="tv-show-extended--genres-holder">
        ${makeGrenre(genre)}
      </div>
    ` : ''}
  `;
}

function Summary(summary) {
  return `
    ${summary !== null ? `
      <div class="tv-show-card--summary">
        ${summary}
      </div>
    ` : ''}
  `;
}

function Imdb(imdb) {
  return `
    <a class="tv-show-card-official-link tv-show-card-official-link--imdb" href="http://www.imdb.com/title/${imdb}">
      Imdb
    </a>
  `;
}

function OfficalLinks(show) {
  const externals = show.externals;

  return `
    <div class="tv-show-official-holder">
      ${externals.imdb ? `${Imdb(externals.imdb)}` : ''}
    </div>
  `;
}

function makePersonImg(person, className) {
  let face = '';
  if (person.image) {
    face = person.image.medium;
  }
  const personImg = new TvShowBackgroundImg(face, className);

  return `${personImg.render()}`;
}

function Cast(casts) {
  return `
    ${casts.map(cast => `
      <tr>
        <td>
          ${makePersonImg(cast.person, 'tv-show-extended-image')}
        </td>
        <td>
          ${cast.person.name}
        </td>
        <td style="color:#bcbcbc;"><em>${cast.character.name}<em></td>
      </tr>
    `).join('')}
  `;
}

export default class extends Component {
  constructor(show) {
    super();
    this.show = show;
    this.img = this.show.image;
    this.name = this.show.name;
    this.genre = this.show.genres;
    this.summary = this.show.summary;
    this.network = this.show.network;
    this.cast = this.show._embedded.cast;
    this.status = this.show.status;
    this.previousepisode = this.show._links.previousepisode;
  }

  dom() {
    const Close = new TvShowExtendedInfoClose();
    let image = '';
    if (this.img) {
      image = this.img.original;
    }
    const SideA = new TvShowBackgroundImg(image, 'tv-show-extended-side tv-show-extended-side--a');

    return `
      <div class="tv-show-extended-info" id="tv-show-extended-info">
        ${SideA.render()}
        <div class="tv-show-extended-side tv-show-extended-side--b">
          ${Close.render()}
          <div class="tv-show-extended--name">
            <h1>${this.name} ${Status(this.status)}</h1>
            ${Network(this.network)}
          </div>
          <div class="tv-show-extended--scrollable">
              ${Genres(this.genre)}
              ${LastEpisode(this.previousepisode)}
              ${Summary(this.summary)}
              ${OfficalLinks(this.show)}
              <div class="tv-show-extended--cast">
                <table>
                  <p><strong>Cast:</strong></p>
                  ${Cast(this.cast)}
                </table>
              </div>
          </div>
        </div>
      </div>
    `;
  }
}
