/*import { Component } from 'domr-a';*/
import { Component } from '../Domr2/source/';

function Time(timestamp) {
  const d = new Date(timestamp);
  const localDate = d.toLocaleDateString();

  return `<span class="tv-show-ep-time wee-lozenge wee-lozenge--info">${localDate}</span>`;
}


export default class extends Component {
  constructor(showApi) {
    super();
    this.show = showApi;
  }

  dom() {
    return `
      <div class="tv-show-latest-episode-holder">
         <div>
          <span class="tv-show-ep-season wee-badge wee-badge--primary"> S${this.show.season} E${this.show.number}</span>
          ${Time(this.show.airstamp)}
          <span class="">${this.show.name}</span>
        </div>
      </div>
    `;
  }
}
