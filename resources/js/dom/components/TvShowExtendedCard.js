/*import { Component } from 'domr-a';*/
import { AjaxGetter } from '../Domr2/source/';
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

export default class extends AjaxGetter {
  constructor(api) {
    super(api);
  }

  dom(show) {
    const Close = new TvShowExtendedInfoClose();
    let image = '';
    if (show.image) {
      image = show.image.original;
    }
    const SideA = new TvShowBackgroundImg(image, 'tv-show-extended-side tv-show-extended-side--a');
    return `
      <div class="tv-show-extended-info" id="tv-show-extended-info">
        ${SideA.render()}
        <div class="tv-show-extended-side tv-show-extended-side--b">
          ${Close.render()}
          <div class="tv-show-extended--name">
            <h1>${show.name} ${Status(show.status)}</h1>
            ${Network(show.network)}
          </div>
          <div class="tv-show-extended--scrollable">
              ${Genres(show.genres)}
              ${Summary(show.summary)}
              ${OfficalLinks(show)}
              <div class="tv-show-extended--cast">
                <table>
                  <p><strong>Cast:</strong></p>
                  ${Cast(show._embedded.cast)}
                </table>
              </div>
          </div>
        </div>
      </div>
    `;
  }

  delay(elm) {
    const target = this.target();
    const genresHolder = target.querySelector('.tv-show-extended--genres-holder');
    const tvShowLatestEpisode = new TvShowLatestEpisode(elm._links.previousepisode.href);
    tvShowLatestEpisode.addAfter(genresHolder);
  }
}
