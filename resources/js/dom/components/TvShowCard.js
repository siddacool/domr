import { ActiveComponent, utils } from 'domr-a';
import TvShowCardImg from './TvShowCardImg';

const hashLocation = utils.hashLocation;

function Network(network) {
  return `
    ${network ? `<span class="tv-show-card--network">${network.name}</span>` : ''}
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
    ${genre.length ? `
      <div class="tv-show-card--genres-holder">
        ${makeGrenre(genre)}
      </div>
    ` : ''}
  `;
}

function Image(img) {
  let image;

  if (img) {
    image = img.medium;
  }

  const tvShowCardImg = new TvShowCardImg(image, 'tv-show-card--img');

  return `
    ${tvShowCardImg.render()}
  `;
}

export default class extends ActiveComponent {
  constructor(show) {
    super('tv-show-card');
    this.show = show.show;
    this.tvid = this.show.id;
    this.name = this.show.name;
    this.network = this.show.network;
    this.genres = this.show.genres;
    this.image = this.show.image;
    this.imdb = this.show.externals.imdb;
    this.officialSite = this.show.officialSite;
  }

  dom() {
    return `
      <a class="tv-show-card" data-id="${this.tvid}">
        <div class="tv-show-card-side tv-show-card-side--a">
          ${Image(this.image)}
        </div>
        <div class="tv-show-card-side tv-show-card-side--b">
          <div class="tv-show-card--name">
            <h3>${this.name}</h3>
          </div>
          ${Network(this.network)}
          ${Genres(this.genres)}
        </div>
      </a>
    `;
  }

  events() {
    const target = this.target();

    target.addEventListener('click', (e) => {
      e.preventDefault();
      const thisId = target.getAttribute('data-id');
      const loc = hashLocation();

      loc.set('query', {
        id: thisId,
      });
    });
  }
}
