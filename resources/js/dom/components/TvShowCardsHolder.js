import Domr from '../Domr';
import callApi from './tv-shows-call-api';

const ActiveComponent = Domr.ActiveComponent;

export default class extends ActiveComponent {
  constructor(defaultShow = '') {
    super('tv-show-card-holder');
    this.show = defaultShow;
  }

  dom() {
    return `
      <div class="tv-show-card-holder" id="tv-show-card-holder"></div>
    `;
  }

  events() {
    const target = this.target();
    callApi(this.show, target);
  }
}
