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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaults = {
  parent: document.getElementById('wrapper'),
  dom: '\n    <div>\n      Domr Component\n    </div>\n  '
};

var _class = function () {
  function _class() {
    var _this = this;

    var domrid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'domr-component';

    _classCallCheck(this, _class);

    this.parentDefault = defaults.parent;
    this.domContent = defaults.dom;
    this.createElement = _createElement2.default;
    this.domrid = domrid + '-' + (0, _randomizer2.default)(7);
    this.target = function () {
      return (0, _lookup2.default)(_this.domrid);
    };
    this.handlingParent = this.parentDefault || document.querySelector('body');
  }

  _createClass(_class, [{
    key: 'dom',
    value: function dom() {
      return this.domContent;
    }
  }, {
    key: 'events',
    value: function events() {}
  }, {
    key: 'deligateEvents',
    value: function deligateEvents(childen, eventName, eventAction) {
      this.handlingParent.addEventListener(eventName, function (e) {
        if (e.target && e.target.matches(childen)) {
          eventAction(e);
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
    key: 'delayedContent',
    value: function delayedContent() {
      var _this3 = this;

      setTimeout(function () {
        _this3.delay();
      }, 50);
    }
  }, {
    key: 'render',
    value: function render() {
      this.delayedContent();
      this.events();
      return this.createElement(this.dom(), this.domrid);
    }
  }, {
    key: 'addTo',
    value: function addTo() {
      var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.parentDefault;

      parent.insertAdjacentHTML('beforeend', this.render());
      this.delayedContent();
    }
  }, {
    key: 'addFromStartTo',
    value: function addFromStartTo() {
      var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.parentDefault;

      parent.insertAdjacentHTML('afterbegin', this.render());
      this.delayedContent();
    }
  }, {
    key: 'addBefore',
    value: function addBefore(sibling) {
      if (sibling) {
        sibling.insertAdjacentHTML('beforebegin', this.render());
        this.delayedContent();
      } else {
        console.error('sibling not found');
      }
    }
  }, {
    key: 'addAfter',
    value: function addAfter(sibling) {
      if (sibling) {
        sibling.insertAdjacentHTML('afterend', this.render());
        this.delayedContent();
      } else {
        console.error('sibling not found');
      }
    }
  }, {
    key: 'replaceWith',
    value: function replaceWith(sibling) {
      if (sibling) {
        var parent = sibling.parentElement;

        if (parent) {
          sibling.insertAdjacentHTML('afterend', this.render());
          parent.removeChild(sibling);
          this.delayedContent();
        } else {
          console.warn('sibling has no parentElement');
        }
      } else {
        console.error('sibling not found');
      }
    }
  }, {
    key: 'replaceContentOf',
    value: function replaceContentOf() {
      var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.parentDefault;

      parent.innerHTML = this.render();
      this.delayedContent();
    }
  }]);

  return _class;
}();

exports.default = _class;