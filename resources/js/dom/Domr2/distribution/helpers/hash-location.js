'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hashLocationSet = require('./hash-location-set');

var _hashLocationSet2 = _interopRequireDefault(_hashLocationSet);

var _hashLocationGet = require('./hash-location-get');

var _hashLocationGet2 = _interopRequireDefault(_hashLocationGet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loc() {
  var originalHash = location.hash;
  var path = originalHash;
  var search = '';
  var query = '';

  if (path.includes('?')) {
    var searchQuery = path.split('?');
    path = searchQuery[0];
    search = searchQuery[1].replace(/\//g, '');

    if (search !== '') {
      var obj = {};
      var filterString = search.split('&');

      for (var i = 0; i < filterString.length; i++) {
        var splitString = filterString[i].split('=');
        var field = splitString[0];
        var value = splitString[1];

        obj[field] = value;
      }
      query = obj;
    }
  }

  if (path.endsWith('/') && !path.endsWith('#/')) {
    var pathSlice = path.slice(0, -1);

    path = pathSlice.replace('#', '');
  } else {
    path = path.replace('#', '');
  }

  return {
    hash: originalHash.replace('#', ''),
    path: path,
    search: search,
    query: query,
    set: _hashLocationSet2.default,
    get: _hashLocationGet2.default
  };
}

var hashLocation = loc;

exports.default = hashLocation;