import { Component } from '../Domr2/source/';
import SayMyNameText from '../components/SayMyNameText';

export default class extends Component {
  constructor(house = 'arya stark', name = '', alias = '') {
    super('say-my-name');
    this.house = house.replace(/_/g, ' ');
    this.name = name.replace(/_/g, ' ');
    this.alias = alias.replace(/_/g, ' ');
  }

  dom() {
    const Name = new SayMyNameText('name', this.name);
    const House = new SayMyNameText('house', this.house);
    const Alias = new SayMyNameText('alias', this.alias);
    return `
      <div class="say-my-name">
        <h2> <em>Your are</em> ${Name.render()} </h2>
        <h3> <em>Of House</em> ${House.render()} </h3>
        <h3> <em>Known to the world as</em> ${Alias.render()} </h3>
      </div>
    `;
  }
}
