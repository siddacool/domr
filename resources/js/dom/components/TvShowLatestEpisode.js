/*import { Component } from 'domr-a';*/
import { AjaxGetter } from '../Domr2/source/';

function Time(timestamp) {
  const d = new Date(timestamp);
  const localDate = d.toLocaleDateString();

  return `<span class="tv-show-ep-time wee-lozenge wee-lozenge--info">${localDate}</span>`;
}


export default class extends AjaxGetter {
  constructor(api) {
    super(api);
  }

  dom(element) {
    return `
      <div class="tv-show-latest-episode-holder">
         <div>
          <span class="tv-show-ep-season wee-badge wee-badge--primary"> S${element.season} E${element.episode}</span>
          ${Time(element.timestamp)}
          <span class="">${element.name}</span>
        </div>
      </div>
    `;
  }
}
