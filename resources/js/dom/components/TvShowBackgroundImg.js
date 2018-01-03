/*import { Component } from 'domr-a';*/
import { Component } from '../Domr2/source/';

export default class extends Component {
  constructor(img, className = '') {
    super();
    this.img = img.replace('http:', 'https:');
    this.className = className;
  }

  dom() {
    return `
      <div class="tv-show-bg-img ${this.className}" ${this.img ? `style="background-image:url(${this.img})"` : ''}>
      </div>
    `;
  }
}
