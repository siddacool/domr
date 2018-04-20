'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _createElement = require('./helpers/create-element');

var _createElement2 = _interopRequireDefault(_createElement);

var _lookup = require('./helpers/lookup');

var _lookup2 = _interopRequireDefault(_lookup);

var _randomizer = require('./helpers/randomizer');

var _randomizer2 = _interopRequireDefault(_randomizer);

var _Event = require('./Event');

var _Event2 = _interopRequireDefault(_Event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class() {
    var _this = this;

    var domrid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'domr-component';

    _classCallCheck(this, _class);

    this.createElement = _createElement2.default;
    this.domrid = domrid + '-' + (0, _randomizer2.default)(7);
    this.target = function () {
      return (0, _lookup2.default)(_this.domrid);
    };
    this.handlingParent = document.querySelector('body');
  }

  _createClass(_class, [{
    key: 'dom',
    value: function dom() {
      return '';
    }
  }, {
    key: 'events',
    value: function events() {}
  }, {
    key: 'deligateEvents',
    value: function deligateEvents(childen, eventName, eventAction) {
      this.handlingParent.addEventListener(eventName, function (e) {
        if (e.target && e.target.matches(childen)) {
          eventAction(e.target, e);
        }
      });
    }
  }, {
    key: 'addEvent',
    value: function addEvent(eventName, eventAction) {
      this.addEventOn('[data-domr-id="' + this.domrid + '"]', eventName, eventAction);
    }
  }, {
    key: 'addEventOn',
    value: function addEventOn(childen, eventName, eventAction) {
      var _this2 = this;

      if (eventName instanceof Array && !eventAction) {
        var eventList = eventName;

        eventList.forEach(function (eventConfig) {
          _this2.deligateEvents(childen, eventConfig[0], eventConfig[1]);
        });
      } else {
        this.deligateEvents(childen, eventName, eventAction);
      }
    }
  }, {
    key: 'delay',
    value: function delay() {}
  }, {
    key: 'debug',
    value: function debug(err) {}
  }, {
    key: 'newEvent',
    value: function newEvent(elm) {
      var newEvent = new _Event2.default(elm);

      return newEvent;
    }
  }, {
    key: 'afterRender',
    value: function afterRender(elm) {}
  }, {
    key: 'delayedContent',
    value: function delayedContent() {
      var _this3 = this;

      setTimeout(function () {
        if (_this3.target()) {
          _this3.afterRender(_this3.target());
          _this3.delay();
        } else {
          _this3.debug('delayedContent: target not found');
        }
      }, 50);
    }
  }, {
    key: 'optimizedDom',
    value: function optimizedDom() {
      this.events();
      return this.createElement(this.dom(), this.domrid);
    }
  }, {
    key: 'render',
    value: function render() {
      this.delayedContent();
      return this.optimizedDom();
    }
  }, {
    key: 'addTo',
    value: function addTo(parent) {
      if (parent) {
        parent.insertAdjacentHTML('beforeend', this.optimizedDom());
        this.delayedContent();
      } else {
        this.debug('addTo: parent not found');
      }
    }
  }, {
    key: 'addFromStartTo',
    value: function addFromStartTo(parent) {
      if (parent) {
        parent.insertAdjacentHTML('afterbegin', this.optimizedDom());
        this.delayedContent();
      } else {
        this.debug('addFromStartTo: parent not found');
      }
    }
  }, {
    key: 'addBefore',
    value: function addBefore(sibling) {
      if (sibling) {
        sibling.insertAdjacentHTML('beforebegin', this.optimizedDom());
        this.delayedContent();
      } else {
        this.debug('addBefore: sibling not found');
      }
    }
  }, {
    key: 'addAfter',
    value: function addAfter(sibling) {
      if (sibling) {
        sibling.insertAdjacentHTML('afterend', this.optimizedDom());
        this.delayedContent();
      } else {
        this.debug('addAfter: sibling not found');
      }
    }
  }, {
    key: 'replaceWith',
    value: function replaceWith(sibling) {
      if (sibling) {
        if (sibling.parentElement) {
          var parent = sibling.parentElement;
          sibling.insertAdjacentHTML('afterend', this.optimizedDom());
          parent.removeChild(sibling);
          this.delayedContent();
        } else {
          this.debug('replaceWith: sibling has no parentElement');
        }
      } else {
        this.debug('replaceWith: sibling not found');
      }
    }
  }, {
    key: 'replaceContentOf',
    value: function replaceContentOf(parent) {
      if (parent) {
        var thisParent = parent;
        thisParent.innerHTML = this.optimizedDom();
        this.delayedContent();
      } else {
        this.debug('replaceContentOf: parent not found');
      }
    }
  }]);

  return _class;
}();

exports.default = _class;