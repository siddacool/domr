'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hashLocation = require('./hash-location');

var _hashLocation2 = _interopRequireDefault(_hashLocation);

var _Logger = require('../Logger');

var _Logger2 = _interopRequireDefault(_Logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = new _Logger2.default();

function hashLocationGet(field) {
  var loc = (0, _hashLocation2.default)();
  var thisField = loc[field];

  if (thisField) {
    return thisField;
  } else {
    logger.error('incorrect get location params');
  }
}

exports.default = hashLocationGet;