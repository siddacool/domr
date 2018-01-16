/*import { Component } from 'domr-a';*/
import { DataComponent } from '../Domr2/source/';
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

export default class extends DataComponent {
  constructor(api) {
    super(api, 'tv-show-card');
  }

  dom(element) {
    console.log(element);
    return `
      <a class="tv-show-card" href="#/tvshows/?id=${element.show.id}">
        <div class="tv-show-card-side tv-show-card-side--a">
          ${Image(element.show.image)}
        </div>
        <div class="tv-show-card-side tv-show-card-side--b">
          <div class="tv-show-card--name">
            <h3>${element.show.name}</h3>
          </div>
          ${Network(element.show.network)}
          ${Genres(element.show.genres)}
        </div>
      </a>
    `;
  }

  events() {
    this.addEvent([
      [
        'click',
        (target, e) => {
          console.log('ff');
        },
      ],
      [
        'mouseover',
        (target, e) => {
          console.log('bla');
        },
      ],
    ]);

    this.addEventOn('.tv-show-card--name', 'mouseover', (target, e) => {
      console.log(target);
    });
  }
}
