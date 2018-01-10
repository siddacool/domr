import randomizer from './helpers/randomizer';
import createElement from './helpers/create-element';
import lookup from './helpers/lookup';

export default class {
  constructor(api, domrid = 'ajax-component') {
    this.api = api;
    this.domrid = `${domrid}-${randomizer(7)}`;
    this.createElement = createElement;
    this.target = () => {
      return lookup(this.domrid);
    };
  }

  dom(elm) {

  }

  loadApi(parent, param) {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', this.api, true);
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200) {
          const responseText = xmlhttp.responseText.trim();
          const obj = JSON.parse(responseText);
          const makeElement = (elm) => {
            return this.createElement(this.dom(elm), this.domrid);
          };
          let ajaxContent = '';

          if (responseText.charAt(0) === '[') {
            ajaxContent = `${obj.map(elm => `${makeElement(elm)}`).join('')}`;
          } else if (responseText.charAt(0) === '{') {
            ajaxContent = makeElement(obj);
          }

          if (param === 'replaceContentOf') {
            parent.innerHTML = ajaxContent;
          } else if (param === 'addTo') {
            parent.insertAdjacentHTML('beforeend', ajaxContent);
          } else if (param === 'addFromStartTo') {
            parent.insertAdjacentHTML('afterbegin', ajaxContent);
          } else if (param === 'addBefore') {
            parent.insertAdjacentHTML('beforebegin', ajaxContent);
          } else if (param === 'addAfter') {
            parent.insertAdjacentHTML('afterend', ajaxContent);
          } else {
            console.log(obj);
          }

          this.delayedContent(obj);
        }
      }
    };
    xmlhttp.send(null);
  }

  delay(obj) {
  }

  delayedContent(obj) {
    setTimeout(() => {
      this.delay(obj);
    }, 50);
  }

  logData() {
    this.loadApi();
  }

  replaceContentOf(parent) {
    this.loadApi(parent, 'replaceContentOf');
  }

  addTo(parent) {
    this.loadApi(parent, 'addTo');
  }

  addFromStartTo(parent) {
    this.loadApi(parent, 'addFromStartTo');
  }

  addBefore(sibling) {
    if (sibling) {
      this.loadApi(sibling, 'addBefore');
    } else {
      console.error('sibling not found');
    }
  }

  addAfter(sibling) {
    if (sibling) {
      this.loadApi(sibling, 'addAfter');
    } else {
      console.error('sibling not found');
    }
  }
}
