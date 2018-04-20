/*import { Component } from 'domr-b';*/
import { Component } from '../Domr2/source/';

const demoImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAACNCAIAAADOy0hJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAADcSURBVHja7NAxAQAACAMgtej6t7CCjx9EoJMUN6NAlixZsmTJUiBLlixZsmQpkCVLlixZshTIkiVLlixZCmTJkiVLliwFsmTJkiVLlgJZsmTJkiVLgSxZsmTJkqVAlixZsmTJUiBLlixZsmQpkCVLlixZshTIkiVLlixZCmTJkiVLliwFsmTJkiVLlgJZsmTJkiVLgSxZsmTJkqVAlixZsmTJUiBLlixZsmQpkCVLlixZshTIkiVLlixZCmTJkiVLliwFsmTJkiVLlgJZsmTJkiVLgawXCwAA//8DAJQ1AjdpViEZAAAAAElFTkSuQmCC';

export default class extends Component {
  constructor(img = demoImg) {
    super('tv-show-card--img');
    this.img = img.replace('http:', 'https:');
  }

  dom() {
    return `
      <div class="tv-show-card--img" data-src="${this.img}">
        <img src= "${demoImg}"/> 
      </div>
    `;
  }

  debug(err) {
    console.log(`tv-show-card--img ${err}`);
  }

  afterRender(elm) {
    const target = elm;
    const thisSelf = this.newEvent(elm);
    const dataSrc = target.getAttribute('data-src');
    const img = target.querySelector('img');

    img.setAttribute('src', dataSrc);

    thisSelf.onEvent('mouseover', (self, e) => {
      console.log(self);
    });
  }
}
