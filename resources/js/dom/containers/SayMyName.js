import Domr from '../Domr';

const Container = Domr.Component;

export default class extends Container {
  constructor(name = 'arya stark') {
    super('say-my-name');
    this.name = name.replace(/_/g, ' ');
  }

  dom() {
    return `
      <div class="say-my-name">
        <h2> <em>Your are known as</em> <strong>${this.name}</strong> </h2>
      </div>
    `;
  }
}
