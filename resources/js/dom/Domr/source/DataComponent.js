import randomizer from './helpers/randomizer';
import createElement from './helpers/create-element';
import lookup from './helpers/lookup';

export default class {
  constructor(api, domrid = 'data-component') {
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
          if (responseText.length) {
            if (responseText.charAt(0) === '[' || responseText.charAt(0) === '{') {
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

              this.events();
              this.delayedContent(obj);
            } else {
              console.warn('not a suitable API');
            }
          } else {
            console.warn('Empty API');
          }
        }
      }
    };
    xmlhttp.send(null);
  }

  delay(obj) {
  }

  delayedContent(obj) {
    this.delay(obj);
  }

  events() {

  }

  eventMain(parent, childen, eventName, eventAction) {
    const child = parent.querySelectorAll(childen);

    for (let i = 0; i < child.length; i++) {
      child[i].addEventListener(eventName, (e) => {
        eventAction(child[i], e);
      });
    }
  }

  eventGrouping(parent, childen, eventName, eventAction) {
    if (eventName instanceof Array && !eventAction) {
      const eventList = eventName;

      eventList.forEach((eventConfig) => {
        this.eventMain(parent, childen, eventConfig[0], eventConfig[1]);
      });
    } else {
      this.eventMain(parent, childen, eventName, eventAction);
    }
  }

  addEvent(eventName, eventAction) {
    this.eventGrouping(document, `[data-domr-id="${this.domrid}"]`, eventName, eventAction);
  }

  addEventOn(childen, eventName, eventAction) {
    const allObj = document.querySelectorAll(`[data-domr-id="${this.domrid}"]`);

    for (let i = 0; i < allObj.length; i++) {
      this.eventGrouping(allObj[i], childen, eventName, eventAction);
    }
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

  replaceWith(sibling) {
    if (sibling) {
      const parent = sibling.parentElement;

      if (parent) {
        this.addAfter(sibling);
        parent.removeChild(sibling);
      } else {
        console.warn('sibling has no parentElement');
      }
    } else {
      console.error('sibling not found');
    }
  }
}
