function isString(elmQuerySelector) {
  let target = elmQuerySelector;

  if (typeof target === 'string') {
    if (document.querySelectorAll(elmQuerySelector).length &&
      document.querySelectorAll(elmQuerySelector).length > 1) {
      target = document.querySelectorAll(elmQuerySelector);
    } else {
      target = document.querySelector(elmQuerySelector);
    }
  }

  return target;
}

export default class {
  constructor(elmQuerySelector) {
    this.elmQuerySelector = isString(elmQuerySelector);
  }

  debug(err) {

  }

  eventListener(self, eventName, eventAction) {
    self.addEventListener(eventName, (e) => {
      eventAction(self, e);
    });
  }

  createEvent(self, eventName, eventAction) {
    if (eventName instanceof Array && !eventAction) {
      const eventList = eventName;

      eventList.forEach((eventConfig) => {
        this.eventListener(self, eventConfig[0], eventConfig[1]);
      });
    } else {
      this.eventListener(self, eventName, eventAction);
    }
  }

  onEvent(eventName, eventAction) {
    if (this.elmQuerySelector) {
      const self = this.elmQuerySelector;
      if (self[1]) {
        for (let i = 0; i < self.length; i++) {
          this.createEvent(self[i], eventName, eventAction);
        }
      } else {
        this.createEvent(self, eventName, eventAction);
      }
    } else {
      this.debug('onEvent: Target not Found');
    }
  }
}
