'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultSkipList = ['view'];

function findInArr(arr, itm) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === itm) {
      return true;
    }
  }
}

function cloneObject(obj) {
  var skipList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSkipList;

  var newObj = {};

  Object.keys(obj).forEach(function (key) {
    var value = obj[key];
    var skip = findInArr(skipList, key);

    if (!skip) {
      newObj[key] = value;
    }
  });

  return newObj;
}

exports.default = cloneObject;