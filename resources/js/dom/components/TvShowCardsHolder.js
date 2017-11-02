import { ActiveComponent } from 'domr-a';
import callApi from './tv-shows-call-api';

export default class extends ActiveComponent {
  constructor(defaultShow = '', id) {
    super('tv-show-card-holder');
    this.show = defaultShow;
    this.id = id;
  }

  dom() {
    return `
      <div class="tv-show-card-holder" id="tv-show-card-holder"></div>
    `;
  }

  events() {
    const target = this.target();
    callApi(this.show, target, this.id);
  }
}
