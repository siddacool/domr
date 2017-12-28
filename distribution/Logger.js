'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function consoleType(type) {
  var clog = console[type];
  var clogType = console.log;

  if (clog) {
    clogType = clog;
  }

  return clogType;
}

function makeConsole(moduleName, msg, config, style, styleMsg, type) {
  var log = consoleType(type);

  if (config === '') {
    log('%c' + moduleName, style);
    console.log(msg);
    console.log('');
  } else {
    log('%c' + moduleName + '%c ' + msg, style, styleMsg);
  }
}

var _class = function () {
  function _class() {
    var moduleName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck(this, _class);

    this.moduleName = moduleName !== '' ? '[' + moduleName + ']' : '';
    this.moduleNameStyles = 'color: #565656; font-weight: bold; font-size: 13.5px;';
  }

  _createClass(_class, [{
    key: 'log',
    value: function log(msg, config) {
      makeConsole(this.moduleName, msg, config, this.moduleNameStyles, 'color: #333;');
    }
  }, {
    key: 'info',
    value: function info(msg, config) {
      makeConsole(this.moduleName, msg, config, this.moduleNameStyles + ' color: #0066ff; background-color: #daeafb;', 'color: #0066ff;');
    }
  }, {
    key: 'safe',
    value: function safe(msg, config) {
      makeConsole(this.moduleName, msg, config, this.moduleNameStyles + ' color: #39a045; background-color: #dafbe4;', 'color: #39a045;');
    }
  }, {
    key: 'warn',
    value: function warn(msg, config) {
      makeConsole(this.moduleName, msg, config, this.moduleNameStyles + ' color: #d28e13;', 'color: #d28e13;', 'warn');
    }
  }, {
    key: 'error',
    value: function error(msg, config) {
      makeConsole(this.moduleName, msg, config, this.moduleNameStyles + ' color: red;', 'color: red;', 'error');
    }
  }]);

  return _class;
}();

exports.default = _class;