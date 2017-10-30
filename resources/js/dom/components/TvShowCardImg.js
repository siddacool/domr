import { ActiveComponent } from '../Domr';

const demoImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAACNCAIAAADOy0hJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAADcSURBVHja7NAxAQAACAMgtej6t7CCjx9EoJMUN6NAlixZsmTJUiBLlixZsmQpkCVLlixZshTIkiVLlixZCmTJkiVLliwFsmTJkiVLlgJZsmTJkiVLgSxZsmTJkqVAlixZsmTJUiBLlixZsmQpkCVLlixZshTIkiVLlixZCmTJkiVLliwFsmTJkiVLlgJZsmTJkiVLgSxZsmTJkqVAlixZsmTJUiBLlixZsmQpkCVLlixZshTIkiVLlixZCmTJkiVLliwFsmTJkiVLlgJZsmTJkiVLgawXCwAA//8DAJQ1AjdpViEZAAAAAElFTkSuQmCC';

export default class extends ActiveComponent {
  constructor(img = demoImg, className = 'tv-show-card--img') {
    super(className);
    this.img = img.replace('http:', 'https:');
    this.className = className;
  }

  dom() {
    return `
      <div class="${this.className}" data-src="${this.img}">
        <img src= "${demoImg}"/> 
      </div>
    `;
  }

  events() {
    const target = this.target();
    const dataSrc = target.getAttribute('data-src');
    const img = target.querySelector('img');

    img.setAttribute('src', dataSrc);
  }
}
