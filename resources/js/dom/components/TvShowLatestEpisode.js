/*import { Component } from 'domr-a';*/
import { DataComponent } from '../Domr2/source/';

function Time(timestamp) {
  const d = new Date(timestamp);
  const localDate = d.toLocaleDateString();

  return `<span class="tv-show-ep-time wee-lozenge wee-lozenge--info">${localDate}</span>`;
}


export default class extends DataComponent {
  constructor(api) {
    super(api);
  }

  dom(element) {
    console.log(element);
    return `
      <div class="tv-show-latest-episode-holder">
         <div>
          <span class="tv-show-ep-season wee-badge wee-badge--primary"> S${element.season} E${element.number}</span>
          ${Time(element.airstamp)}
          <span class="">${element.name}</span>
        </div>
      </div>
    `;
  }
}
