'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

var _Logger = require('./Logger');

var _Logger2 = _interopRequireDefault(_Logger);

var _lookup = require('./helpers/lookup');

var _lookup2 = _interopRequireDefault(_lookup);

var _randomizer = require('./helpers/randomizer');

var _randomizer2 = _interopRequireDefault(_randomizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var logger = new _Logger2.default();

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class() {
    var domrid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'domr-active-component';

    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

    _this.domrid = domrid + '-' + (0, _randomizer2.default)(7);
    _this.lookup = function () {
      return (0, _lookup2.default)(_this.domrid);
    };
    _this.target = _this.lookup;
    return _this;
  }

  _createClass(_class, [{
    key: 'events',
    value: function events() {
      var _this2 = this;

      var target = this.target();
      target.addEventListener('click', function () {
        logger.log('Default Event for ' + _this2.domrid);
      });
    }
  }, {
    key: 'fireEventAfterTimeout',
    value: function fireEventAfterTimeout() {
      var _this3 = this;

      setTimeout(function () {
        if (_this3.lookup()) {
          _this3.events();
        }
      }, 50);
    }
  }, {
    key: 'renderNodes',
    value: function renderNodes() {
      return this.createElement(this.dom(), this.domrid);
    }
  }]);

  return _class;
}(_Component3.default);

exports.default = _class;