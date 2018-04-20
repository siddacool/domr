import TvShowCardImg from './TvShowCardImg';

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

export default function (show) {
  return `
    <a class="tv-show-card" href="#/tvshows/?id=${show.show.id}">
      <div class="tv-show-card-side tv-show-card-side--a">
        ${Image(show.show.image)}
      </div>
      <div class="tv-show-card-side tv-show-card-side--b">
        <div class="tv-show-card--name">
          <h3>${show.show.name}</h3>
        </div>
        ${Network(show.show.network)}
        ${Genres(show.show.genres)}
      </div>
    </a>
  `;
}
