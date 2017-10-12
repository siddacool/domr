import Domr from '../Domr';

const Component = Domr.Component;

function Time(timestamp) {
  const d = new Date(timestamp);
  const localDate = d.toLocaleDateString();

  return `<span class="tv-show-ep-time wee-lozenge wee-lozenge--info">${localDate}</span>`;
}

export default class extends Component {
  constructor(show) {
    super();
    this.show = show;
    this.season = this.show.season;
    this.episode = this.show.number;
    this.name = this.show.name;
    this.timestamp = this.show.airstamp;
  }

  dom() {
    return `
      <div>
        <span class="tv-show-ep-season wee-badge wee-badge--primary"> S${this.season} E${this.episode}</span>
        ${Time(this.timestamp)}
        <span class="">${this.name}</span>
      </div>
    `;
  }

}
