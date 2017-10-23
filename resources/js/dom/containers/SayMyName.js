import Domr from '../Domr';

const Container = Domr.Component;

function personSpliter(person) {
  const splitPerson = person.split('&');
  const obj = {};

  for (let i = 0; i < splitPerson.length; i++) {
    const thisSplit = splitPerson[i];
    if (thisSplit) {
      const splitTerm = thisSplit.split('=');
      const field = splitTerm[0];
      const value = splitTerm[1];

      obj[field] = value.replace(/_/g, ' ');
    }
  }

  return obj;
}

export default class extends Container {
  constructor(house = 'arya stark', person) {
    super('say-my-name');
    this.house = house.replace(/_/g, ' ');
    this.person = person.replace(/\//g, '');
    this.personSplit = personSpliter(this.person);
    this.name = this.personSplit.name || '';
    this.alias = this.personSplit.alias || '';
  }

  dom() {
    return `
      <div class="say-my-name">
        <h2> <em>Your are</em> <strong>${this.name}</strong> </h2>
        <h3> <em>Of House</em> <strong>${this.house}</strong> </h3>
        <h3> <em>Known to the world as</em> <strong>${this.alias}</strong> </h3>
      </div>
    `;
  }
}
