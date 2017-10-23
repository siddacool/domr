import Domr from '../Domr';
import callApi from './tv-show-call-extended-api';

const ActiveComponent = Domr.ActiveComponent;

export default class extends ActiveComponent {
  constructor(showId) {
    super();
    this.showId = showId;
  }

  dom() {
    return `
      <div class="tv-show-extended-holder" id="tv-show-extended-holder">
      </div>
    `;
  }

  events() {
    const target = this.target();

    callApi(this.showId, target);
  }
}