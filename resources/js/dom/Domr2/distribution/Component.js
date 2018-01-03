'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _createElement = require('./helpers/create-element');

var _createElement2 = _interopRequireDefault(_createElement);

var _Logger = require('./Logger');

var _Logger2 = _interopRequireDefault(_Logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = new _Logger2.default();

var defaults = {
  parent: document.getElementById('wrapper'),
  dom: '\n    <div>\n      Domr Component\n    </div>\n  '
};

var _class = function () {
  function _class() {
    _classCallCheck(this, _class);

    this.parentDefault = defaults.parent;
    this.domContent = defaults.dom;
    this.createElement = _createElement2.default;
  }

  _createClass(_class, [{
    key: 'dom',
    value: function dom() {
      return this.domContent;
    }
  }, {
    key: 'renderNodes',
    value: function renderNodes() {
      return this.createElement(this.dom());
    }
  }, {
<<<<<<< HEAD
    key: 'delay',
    value: function delay() {}
  }, {
    key: 'delayedContent',
    value: function delayedContent() {
      var _this = this;

      setTimeout(function () {
        _this.delay();
      }, 50);
    }
=======
    key: 'fireEventAfterTimeout',
    value: function fireEventAfterTimeout() {}
>>>>>>> 25e4891ed47db42f374299b88f73faf78db2d082
  }, {
    key: 'addTo',
    value: function addTo() {
      var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.parentDefault;

      parent.insertAdjacentHTML('beforeend', this.renderNodes());
<<<<<<< HEAD
      this.delayedContent();
=======
      this.fireEventAfterTimeout();
>>>>>>> 25e4891ed47db42f374299b88f73faf78db2d082
    }
  }, {
    key: 'addFromStartTo',
    value: function addFromStartTo() {
      var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.parentDefault;

      parent.insertAdjacentHTML('afterbegin', this.renderNodes());
<<<<<<< HEAD
      this.delayedContent();
=======
      this.fireEventAfterTimeout();
>>>>>>> 25e4891ed47db42f374299b88f73faf78db2d082
    }
  }, {
    key: 'addBefore',
    value: function addBefore(sibling) {
      if (sibling) {
        sibling.insertAdjacentHTML('beforebegin', this.renderNodes());
<<<<<<< HEAD
        this.delayedContent();
=======
        this.fireEventAfterTimeout();
>>>>>>> 25e4891ed47db42f374299b88f73faf78db2d082
      } else {
        logger.error('sibling not found');
      }
    }
  }, {
    key: 'addAfter',
    value: function addAfter(sibling) {
      if (sibling) {
        sibling.insertAdjacentHTML('afterend', this.renderNodes());
<<<<<<< HEAD
        this.delayedContent();
=======
        this.fireEventAfterTimeout();
>>>>>>> 25e4891ed47db42f374299b88f73faf78db2d082
      } else {
        logger.error('sibling not found');
      }
    }
  }, {
    key: 'replaceWith',
    value: function replaceWith(sibling) {
      if (sibling) {
        var parent = sibling.parentElement;

        if (parent) {
          sibling.insertAdjacentHTML('afterend', this.renderNodes());
          parent.removeChild(sibling);
<<<<<<< HEAD
          this.delayedContent();
=======
          this.fireEventAfterTimeout();
>>>>>>> 25e4891ed47db42f374299b88f73faf78db2d082
        } else {
          logger.warn('sibling has no parentElement');
        }
      } else {
        logger.error('sibling not found');
      }
    }
  }, {
    key: 'replaceContentOf',
    value: function replaceContentOf() {
      var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.parentDefault;

      parent.innerHTML = this.renderNodes();
<<<<<<< HEAD
      this.delayedContent();
=======
      this.fireEventAfterTimeout();
>>>>>>> 25e4891ed47db42f374299b88f73faf78db2d082
    }
  }, {
    key: 'render',
    value: function render() {
<<<<<<< HEAD
      this.delayedContent();
=======
      this.fireEventAfterTimeout();
>>>>>>> 25e4891ed47db42f374299b88f73faf78db2d082
      return this.renderNodes();
    }
  }]);

  return _class;
}();

exports.default = _class;