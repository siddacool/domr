/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "public/dist/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utils = exports.Router = exports.DataComponent = exports.Component = undefined;

var _Component = __webpack_require__(16);

var _Component2 = _interopRequireDefault(_Component);

var _DataComponent = __webpack_require__(17);

var _DataComponent2 = _interopRequireDefault(_DataComponent);

var _Router = __webpack_require__(18);

var _Router2 = _interopRequireDefault(_Router);

var _utils = __webpack_require__(23);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Component = _Component2.default;
exports.DataComponent = _DataComponent2.default;
exports.Router = _Router2.default;
exports.utils = _utils2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function setPageTitle(data) {
  document.querySelector('title').text = data.pageTitle || data.name;
}

exports.default = setPageTitle;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hashLocationSet = __webpack_require__(21);

var _hashLocationSet2 = _interopRequireDefault(_hashLocationSet);

var _hashLocationGet = __webpack_require__(22);

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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function createElement(str, domrDataId) {
  var div = document.createElement('div');
  div.innerHTML = str;
  var container = document.createDocumentFragment();
  for (var i = 0; i < div.childNodes.length; i++) {
    var node = div.childNodes[i].cloneNode(true);
    container.appendChild(node);
  }

  if (domrDataId) {
    container.childNodes[1].setAttribute('data-domr-id', domrDataId);
  }
  return container.childNodes[1].outerHTML;
}

exports.default = createElement;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function Lookup(elmId) {
  var targetSelector = document.querySelector("[data-domr-id=\"" + elmId + "\"]");

  if (targetSelector) {
    return targetSelector;
  }
}

exports.default = Lookup;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function randomizer() {
  var stringLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7;

  return Math.random().toString(36).substr(2, stringLength);
}

exports.default = randomizer;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Examples = __webpack_require__(24);

var _Examples2 = _interopRequireDefault(_Examples);

var _CheckList = __webpack_require__(26);

var _CheckList2 = _interopRequireDefault(_CheckList);

var _DynamicRouteName = __webpack_require__(31);

var _DynamicRouteName2 = _interopRequireDefault(_DynamicRouteName);

var _Counter = __webpack_require__(35);

var _Counter2 = _interopRequireDefault(_Counter);

var _TreeView = __webpack_require__(40);

var _TreeView2 = _interopRequireDefault(_TreeView);

var _TvSearchView = __webpack_require__(46);

var _TvSearchView2 = _interopRequireDefault(_TvSearchView);

var _Test = __webpack_require__(56);

var _Test2 = _interopRequireDefault(_Test);

var _Error = __webpack_require__(57);

var _Error2 = _interopRequireDefault(_Error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
  path: '/',
  view: _Examples2.default,
  pageTitle: 'Domr Examples'
}, {
  name: 'list',
  path: '/list/',
  view: _CheckList2.default
}, {
  name: 'Counter',
  path: '/counter/',
  view: _Counter2.default
}, {
  name: 'Say My Name',
  path: '/got/:house/',
  psudoPath: '/got/stark/?name=arya&alias=no_one',
  view: _DynamicRouteName2.default
}, {
  name: 'Dynamic Routes',
  path: '/droute2/',
  psudoPath: '/droute2/?min=50&max=60',
  view: _Test2.default
}, {
  name: 'Tree',
  path: '/tree/',
  view: _TreeView2.default
}, {
  name: 'Tv Shows AJAX Search',
  path: '/tvshows/',
  view: _TvSearchView2.default
}, {
  path: '/404',
  view: _Error2.default,
  isDefault: true
}, {
  name: 'External',
  href: 'https://siddacool.github.io/tv-shows/'
}];

exports.default = routes;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var isChecked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return '\n    <li> \n      <input class="checklist-check" type="checkbox" ' + (isChecked ? 'checked' : '') + '/>\n      <span class="checklist-text ' + (isChecked ? 'checklist-text--strike' : '') + '">' + text + '</span>\n      <a href="#" class="checklist-delete-item">&#10006;</a>\n    </li>\n  ';
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getListArray = __webpack_require__(29);

var _getListArray2 = _interopRequireDefault(_getListArray);

var _saveToLocalStorage = __webpack_require__(9);

var _saveToLocalStorage2 = _interopRequireDefault(_saveToLocalStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function saveListSnapshot() {
  var snapshot = (0, _getListArray2.default)();

  (0, _saveToLocalStorage2.default)(snapshot);
}

exports.default = saveListSnapshot;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function saveToLocalStorage(itmArr) {
  localStorage.setItem('savedList', JSON.stringify(itmArr));
}

exports.default = saveToLocalStorage;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _source = __webpack_require__(0);

var _TreeDelete = __webpack_require__(11);

var _TreeDelete2 = _interopRequireDefault(_TreeDelete);

var _TreeMakeFolder = __webpack_require__(42);

var _TreeMakeFolder2 = _interopRequireDefault(_TreeMakeFolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _source.Component {
  constructor() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    super();
    this.text = text;
    this.name = name;
  }

  dom() {
    var treeMakeFolder = new _TreeMakeFolder2.default();
    var treeDelete = new _TreeDelete2.default();

    return '\n      <li class="tree-item" > <span class="tree-item--title">' + this.text + '</span> ' + treeMakeFolder.render() + ' ' + treeDelete.render() + '</li>\n    ';
  }
}; /*import { Component } from 'domr-a';*/

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _source = __webpack_require__(0);

exports.default = class extends _source.Component {
  constructor() {
    super('tree-delete');
  }

  dom() {
    return '\n      <a href="#" class="tree-delete">[ \n      <svg role="img" class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-trash"></use></svg>\n       ]</a>\n    ';
  }

  events() {
    this.addEvent('click', function (target, e) {
      e.preventDefault();
      var parent = target.parentElement;
      var grandParent = parent.parentElement;

      if (parent.classList.contains('tree-folder')) {
        parent = target.parentElement.parentElement;
        grandParent = parent.parentElement;
      }

      grandParent.removeChild(parent);
    });
  }
}; /*import { Component } from 'domr-a';*/

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _source = __webpack_require__(0);

var _TreeFolderExpand = __webpack_require__(43);

var _TreeFolderExpand2 = _interopRequireDefault(_TreeFolderExpand);

var _TreeDelete = __webpack_require__(11);

var _TreeDelete2 = _interopRequireDefault(_TreeDelete);

var _TreeNewLi = __webpack_require__(44);

var _TreeNewLi2 = _interopRequireDefault(_TreeNewLi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*import { Component } from 'domr-a';*/
exports.default = class extends _source.Component {
  constructor() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var ulContent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var isOpen = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var focusOnFolderMaker = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var level = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

    super();
    this.text = text;
    this.ulContent = ulContent;
    this.isOpen = isOpen;
    this.focusOnFolderMaker = focusOnFolderMaker;
    this.level = level;
  }

  dom() {
    var treeDelete = new _TreeDelete2.default();
    var treeFolderExpand = new _TreeFolderExpand2.default();
    var DeleteBtn = treeDelete.render();
    var FolderExpandBtn = treeFolderExpand.render();
    var treeNewLi = new _TreeNewLi2.default(this.focusOnFolderMaker);

    return '\n      <li data-level="' + this.level + '" class="tree-item--folder ' + (this.level >= 3 ? 'tree-item--folder-overflow' : '') + '">\n        <div class="tree-folder ' + (this.isOpen ? 'expanded' : '') + '">\n          <strong>' + this.text + '</strong> ' + FolderExpandBtn + ' ' + DeleteBtn + '\n        </div>\n        <ul>\n          ' + this.ulContent + '\n          ' + treeNewLi.render() + '\n        </ul>\n      </li>\n    ';
  }
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _source = __webpack_require__(0);

var _TvShowCardImg = __webpack_require__(49);

var _TvShowCardImg2 = _interopRequireDefault(_TvShowCardImg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*import { Component } from 'domr-a';*/
function Network(network) {
  return '\n    ' + (network ? '<span class="tv-show-card--network">' + network.name + '</span>' : '') + '\n  ';
}

function makeGrenre(genreArr) {
  return '\n    ' + genreArr.map(function (genre) {
    return '\n      <span class=\'tv-show-card--genre wee-badge wee-badge--default\'>' + genre + '</span>\n    ';
  }).join('') + '\n  ';
}

function Genres(genre) {
  return '\n    ' + (genre.length ? '\n      <div class="tv-show-card--genres-holder">\n        ' + makeGrenre(genre) + '\n      </div>\n    ' : '') + '\n  ';
}

function Image(img) {
  var image = void 0;

  if (img) {
    image = img.medium;
  }

  var tvShowCardImg = new _TvShowCardImg2.default(image, 'tv-show-card--img');

  return '\n    ' + tvShowCardImg.render() + '\n  ';
}

exports.default = class extends _source.DataComponent {
  constructor(api) {
    super(api, 'tv-show-card');
  }

  dom(element) {
    console.log(element);
    return '\n      <a class="tv-show-card" href="#/tvshows/?id=' + element.show.id + '">\n        <div class="tv-show-card-side tv-show-card-side--a">\n          ' + Image(element.show.image) + '\n        </div>\n        <div class="tv-show-card-side tv-show-card-side--b">\n          <div class="tv-show-card--name">\n            <h3>' + element.show.name + '</h3>\n          </div>\n          ' + Network(element.show.network) + '\n          ' + Genres(element.show.genres) + '\n        </div>\n      </a>\n    ';
  }

  events() {
    this.addEvent([['click', function (target, e) {
      console.log('ff');
    }], ['mouseover', function (target, e) {
      console.log('bla');
    }]]);

    this.addEventOn('.tv-show-card--name', 'mouseover', function (target, e) {
      console.log(target);
    });
  }
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(15);

__webpack_require__(58);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _source = __webpack_require__(0);

var _routes = __webpack_require__(6);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*import { Router } from 'domr-a';*/
var router = new _source.Router(_routes2.default);

router.showRoutes();
router.start();

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createElement = __webpack_require__(3);

var _createElement2 = _interopRequireDefault(_createElement);

var _lookup = __webpack_require__(4);

var _lookup2 = _interopRequireDefault(_lookup);

var _randomizer = __webpack_require__(5);

var _randomizer2 = _interopRequireDefault(_randomizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = {
  parent: document.getElementById('wrapper'),
  dom: '\n    <div>\n      Domr Component\n    </div>\n  '
};

exports.default = class {
  constructor() {
    var _this = this;

    var domrid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'domr-component';

    this.parentDefault = defaults.parent;
    this.domContent = defaults.dom;
    this.createElement = _createElement2.default;
    this.domrid = domrid + '-' + (0, _randomizer2.default)(7);
    this.target = function () {
      return (0, _lookup2.default)(_this.domrid);
    };
    this.handlingParent = this.parentDefault || document.querySelector('body');
  }

  dom() {
    return this.domContent;
  }

  events() {}

  deligateEvents(childen, eventName, eventAction) {
    this.handlingParent.addEventListener(eventName, function (e) {
      if (e.target && e.target.matches(childen)) {
        eventAction(e.target, e);
      }
    });
  }

  addEvent(eventName, eventAction) {
    this.addEventOn('[data-domr-id="' + this.domrid + '"]', eventName, eventAction);
  }

  addEventOn(childen, eventName, eventAction) {
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

  delay() {}

  delayedContent() {
    var _this3 = this;

    setTimeout(function () {
      _this3.delay();
    }, 50);
  }

  optimizedDom() {
    this.events();
    return this.createElement(this.dom(), this.domrid);
  }

  render() {
    this.delayedContent();
    return this.optimizedDom();
  }

  addTo() {
    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.parentDefault;

    parent.insertAdjacentHTML('beforeend', this.optimizedDom());
    this.delayedContent();
  }

  addFromStartTo() {
    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.parentDefault;

    parent.insertAdjacentHTML('afterbegin', this.optimizedDom());
    this.delayedContent();
  }

  addBefore(sibling) {
    if (sibling) {
      sibling.insertAdjacentHTML('beforebegin', this.optimizedDom());
      this.delayedContent();
    } else {
      console.error('sibling not found');
    }
  }

  addAfter(sibling) {
    if (sibling) {
      sibling.insertAdjacentHTML('afterend', this.optimizedDom());
      this.delayedContent();
    } else {
      console.error('sibling not found');
    }
  }

  replaceWith(sibling) {
    if (sibling) {
      var parent = sibling.parentElement;

      if (parent) {
        sibling.insertAdjacentHTML('afterend', this.optimizedDom());
        parent.removeChild(sibling);
        this.delayedContent();
      } else {
        console.warn('sibling has no parentElement');
      }
    } else {
      console.error('sibling not found');
    }
  }

  replaceContentOf() {
    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.parentDefault;

    parent.innerHTML = this.optimizedDom();
    this.delayedContent();
  }
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _randomizer = __webpack_require__(5);

var _randomizer2 = _interopRequireDefault(_randomizer);

var _createElement = __webpack_require__(3);

var _createElement2 = _interopRequireDefault(_createElement);

var _lookup = __webpack_require__(4);

var _lookup2 = _interopRequireDefault(_lookup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class {
  constructor(api) {
    var _this = this;

    var domrid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'data-component';

    this.api = api;
    this.domrid = domrid + '-' + (0, _randomizer2.default)(7);
    this.createElement = _createElement2.default;
    this.target = function () {
      return (0, _lookup2.default)(_this.domrid);
    };
  }

  dom(elm) {}

  loadApi(parent, param) {
    var _this2 = this;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', this.api, true);
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200) {
          var responseText = xmlhttp.responseText.trim();
          var obj = JSON.parse(responseText);
          var makeElement = function makeElement(elm) {
            return _this2.createElement(_this2.dom(elm), _this2.domrid);
          };
          var ajaxContent = '';

          if (responseText.charAt(0) === '[') {
            ajaxContent = '' + obj.map(function (elm) {
              return '' + makeElement(elm);
            }).join('');
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

          _this2.events();
          _this2.delayedContent(obj);
        }
      }
    };
    xmlhttp.send(null);
  }

  delay(obj) {}

  delayedContent(obj) {
    this.delay(obj);
  }

  events() {}

  eventMain(parent, childen, eventName, eventAction) {
    var child = parent.querySelectorAll(childen);

    var _loop = function _loop(i) {
      child[i].addEventListener(eventName, function (e) {
        eventAction(child[i], e);
      });
    };

    for (var i = 0; i < child.length; i++) {
      _loop(i);
    }
  }

  eventGrouping(parent, childen, eventName, eventAction) {
    var _this3 = this;

    if (eventName instanceof Array && !eventAction) {
      var eventList = eventName;

      eventList.forEach(function (eventConfig) {
        _this3.eventMain(parent, childen, eventConfig[0], eventConfig[1]);
      });
    } else {
      this.eventMain(parent, childen, eventName, eventAction);
    }
  }

  addEvent(eventName, eventAction) {
    this.eventGrouping(document, '[data-domr-id="' + this.domrid + '"]', eventName, eventAction);
  }

  addEventOn(childen, eventName, eventAction) {
    var allObj = document.querySelectorAll('[data-domr-id="' + this.domrid + '"]');

    for (var i = 0; i < allObj.length; i++) {
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
      var parent = sibling.parentElement;

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
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _addView = __webpack_require__(19);

var _addView2 = _interopRequireDefault(_addView);

var _hashLocation = __webpack_require__(2);

var _hashLocation2 = _interopRequireDefault(_hashLocation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filterRoutes = function filterRoutes(routes) {
  var arr = [];
  routes.forEach(function (route) {
    if (route.path && route.view) {
      arr.push(route);
    }
  });

  return arr;
};
var defaults = {
  routes: [],
  config: {
    redirectDefault: false,
    refreshPage: false,
    clearLog: false
  }
};

exports.default = class {
  constructor() {
    var routes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaults.routes;
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaults.config;

    this.routes = filterRoutes(routes);
    this.redirectDefault = config.redirectDefault || true;
    this.refreshPage = config.refreshPage || false;
    this.clearLog = config.clearLog || false;
    this.addView = _addView2.default;
  }

  showRoutes() {
    console.log(this.routes);
  }

  reloadOnHashChange() {
    var _this = this;

    addEventListener('hashchange', function (e) {
      if (_this.clearLog) {
        console.API;
        if (typeof console._commandLineAPI !== 'undefined') {
          console.API = console._commandLineAPI;
        } else if (typeof console._inspectorCommandLineAPI !== 'undefined') {
          console.API = console._inspectorCommandLineAPI;
        } else if (typeof console.clear !== 'undefined') {
          console.API = console;
        }

        console.API.clear();
      }

      if (_this.refreshPage) {
        location.reload();
      } else {
        _this.start();
        e.stopImmediatePropagation();
      }
    });
  }

  start() {
    var loc = (0, _hashLocation2.default)();
    var locPath = loc.path;
    var candidate = void 0;

    if (locPath === '') {
      location.hash = '#/';
    }

    this.routes.forEach(function (route) {
      var path = route.path;
      if (path.endsWith('/') && path !== '/') {
        path = path.slice(0, -1);
      }

      var routeDataVal = [];
      var routePathMod = path.replace(/([:*])(\w+)/g, function (full, dots, name) {
        routeDataVal.push(name);
        return '([^/]+)';
      }) + '(?:/|$)';
      var routePathModRegEx = locPath.match(new RegExp(routePathMod));

      if (routePathModRegEx) {
        var params = routePathModRegEx.slice(1, routePathModRegEx.length).reduce(function (params, value, index) {
          if (params === null) params = {};
          params[routeDataVal[index]] = value;
          return params;
        }, null);

        route.metadata = params || '';
        route.query = loc.query;
        candidate = route;
      }
    });

    if (candidate) {
      this.addView(candidate);
    } else {
      var routeDefault = this.routes.find(function (o) {
        return o.isDefault === true;
      });
      if (this.redirectDefault && routeDefault) {
        this.addView(routeDefault);
      } else {
        console.error('Page Not Found');
      }
    }

    this.reloadOnHashChange();
  }
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cloneObject = __webpack_require__(20);

var _cloneObject2 = _interopRequireDefault(_cloneObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addView(candidate) {
  var view = candidate.view;
  var skiplist = ['view'];
  var routeData = (0, _cloneObject2.default)(candidate, skiplist);

  if (candidate && view) {
    if (typeof view === 'function') {
      view(routeData);
    } else {
      view;
    }
  }
}

exports.default = addView;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hashLocation = __webpack_require__(2);

var _hashLocation2 = _interopRequireDefault(_hashLocation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setHash(option) {
  var hash = option;
  if (!hash.startsWith('#')) {
    hash = '#' + hash;
  }

  return hash;
}

function setPath(option) {
  var loc = (0, _hashLocation2.default)();
  var searchQuery = loc.search;
  var path = option;

  if (path.startsWith('#')) {
    path = path.slice(0, -1);
  }

  if (searchQuery) {
    if (!path.endsWith('/')) {
      path = path + '/';
    }

    path = path + '?' + searchQuery;
  }

  path = setHash(path);
  return path;
}

function setSearch(option) {
  var search = option;
  var loc = (0, _hashLocation2.default)();
  var path = loc.path;

  if (path.endsWith('/')) {
    path = path.slice(0, -1);
  }

  if (!search.startsWith('?')) {
    search = '?' + search;
  }

  search = setHash(path + '/' + search);

  return search;
}

function loopSearchQuery(obj) {
  var arr = [];
  for (var key in obj) {
    arr.push(key + '=' + obj[key]);
  }

  return '?' + arr.join('&');
}

function setQuery(obj) {
  var searchQuery = loopSearchQuery(obj);
  var query = setSearch(searchQuery);

  return query;
}

function redirectTo(hash) {
  location.hash = hash;
}

function hashLocationSet(field, opt) {
  var setField = field;
  var option = opt;
  var link = void 0;

  switch (setField) {
    case 'search':
      link = setSearch(option);
      break;
    case 'query':
      link = setQuery(option);
      break;
    case 'path':
      link = setPath(option);
      break;
    case 'hash':
      link = setHash(option);
      break;
  }

  if (link) {
    redirectTo(link);
  } else {
    console.error('incorrect set location params');
  }
}

exports.default = hashLocationSet;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hashLocation = __webpack_require__(2);

var _hashLocation2 = _interopRequireDefault(_hashLocation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hashLocationGet(field) {
  var loc = (0, _hashLocation2.default)();
  var thisField = loc[field];

  if (thisField) {
    return thisField;
  } else {
    console.error('incorrect get location params');
  }
}

exports.default = hashLocationGet;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hashLocation = __webpack_require__(2);

var _hashLocation2 = _interopRequireDefault(_hashLocation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var utils = {
  hashLocation: _hashLocation2.default
};

exports.default = utils;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (data) {
  var examplesList = new _ExamplesList2.default(_routes2.default);
  var wrapper = document.getElementById('wrapper');

  examplesList.replaceContentOf(wrapper);
  (0, _setPageTitle2.default)(data);
};

var _setPageTitle = __webpack_require__(1);

var _setPageTitle2 = _interopRequireDefault(_setPageTitle);

var _ExamplesList = __webpack_require__(25);

var _ExamplesList2 = _interopRequireDefault(_ExamplesList);

var _routes = __webpack_require__(6);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _source = __webpack_require__(0);

function makeList(list) {
  if (!list.isDefault && list.name && list.path) {
    return '\n      <li>\n        <a href="#' + (list.psudoPath ? '' + list.psudoPath : '' + list.path) + '" >' + list.name + '</a>\n      </li>\n    ';
  } else if (!list.path && list.name && list.href) {
    return '\n      <li>\n        <a href="' + list.href + '" >' + list.name + '</a>\n      </li>\n    ';
  }

  return '';
} /*import { Component } from 'domr-a';*/
exports.default = class extends _source.Component {
  constructor() {
    var links = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    super();
    this.links = links;
  }

  dom() {
    return '\n        <div class="examples-list">\n          <h1>Examples</h1>\n          <ul>\n            ' + this.links.map(function (link) {
      return '' + makeList(link);
    }).join('') + '\n          </ul>\n        </div>\n    ';
  }
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (data) {
  var containerCheckbox = new _ContainerCheckbox2.default('container-checkbox-random-list', listItems);
  var wrapper = document.getElementById('wrapper');

  containerCheckbox.replaceContentOf(wrapper);
  (0, _setPageTitle2.default)(data);
};

var _setPageTitle = __webpack_require__(1);

var _setPageTitle2 = _interopRequireDefault(_setPageTitle);

var _ContainerCheckbox = __webpack_require__(27);

var _ContainerCheckbox2 = _interopRequireDefault(_ContainerCheckbox);

var _saveToLocalStorage = __webpack_require__(9);

var _saveToLocalStorage2 = _interopRequireDefault(_saveToLocalStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var listItems = [{
  msg: 'Hello',
  isChecked: false
}, {
  msg: 'Hey There',
  isChecked: false
}, {
  msg: 'What up',
  isChecked: true
}, {
  msg: 'How ya doin?',
  isChecked: false
}];

var savedList = localStorage.getItem('savedList');

if (savedList) {
  listItems = JSON.parse(savedList);
} else {
  (0, _saveToLocalStorage2.default)(listItems);
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _source = __webpack_require__(0);

var _CheckListUl = __webpack_require__(28);

var _CheckListUl2 = _interopRequireDefault(_CheckListUl);

var _AddNewListItem = __webpack_require__(30);

var _AddNewListItem2 = _interopRequireDefault(_AddNewListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _source.Component {
  constructor() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'container-checkbox-1';
    var list = arguments[1];

    super(id);
    this.list = list;
  }

  dom() {
    var checkListUl = new _CheckListUl2.default(this.list);
    var addNewListItem = new _AddNewListItem2.default();

    var Ul = checkListUl.render();
    var InputAddNew = addNewListItem.render();

    return '\n      <div class="container-ul" id="' + this.id + '">\n        ' + InputAddNew + '\n        ' + Ul + '\n      </div>\n    ';
  }
}; /*import { Component } from 'domr-a';*/

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _source = __webpack_require__(0);

var _CheckListLi = __webpack_require__(7);

var _CheckListLi2 = _interopRequireDefault(_CheckListLi);

var _saveListSnapshot = __webpack_require__(8);

var _saveListSnapshot2 = _interopRequireDefault(_saveListSnapshot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeList(itm) {
  var checkListLi = (0, _CheckListLi2.default)(itm.msg, itm.isChecked);
  return checkListLi;
} /*import { Component } from 'domr-a';*/


var clearContentEditable = function clearContentEditable() {
  var checklistText = document.querySelectorAll('.checklist-text');

  for (var i = 0; i < checklistText.length; i++) {
    checklistText[i].setAttribute('contenteditable', 'false');
  }
};

exports.default = class extends _source.Component {
  constructor(list) {
    super();
    this.list = list;
    this.self = '[data-domr-id="' + this.domrid + '"]';
  }

  dom() {
    return '\n      <ul id="checklist-ul">\n        ' + this.list.map(function (itm) {
      return '' + makeList(itm);
    }).join('') + '\n      </ul>\n    ';
  }

  events() {
    this.addEventOn(this.self + ' .checklist-check', 'click', function (target) {
      var checklistText = target.parentElement.querySelector('.checklist-text');

      checklistText.classList.toggle('checklist-text--strike');
      (0, _saveListSnapshot2.default)();
    });

    this.addEventOn(this.self + ' .checklist-text', [['click', function (target, e) {
      if (!target.classList.contains('checklist-text--strike')) {
        clearContentEditable();
        target.setAttribute('contenteditable', 'true');
        target.focus();
      }
    }], ['keypress', function (target, e) {
      if (e.keyCode === 13) {
        e.target.blur();
      }
    }], ['focusout', function () {
      clearContentEditable();
      (0, _saveListSnapshot2.default)();
    }]]);

    this.addEventOn(this.self + ' .checklist-delete-item', 'click', function (target, e) {
      e.preventDefault();
      var parent = target.parentElement;
      var grandParent = parent.parentElement;

      grandParent.removeChild(parent);
      (0, _saveListSnapshot2.default)();
    });
  }
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function getListArray() {
  var checkListUl = document.getElementById('checklist-ul');
  var target = checkListUl.querySelectorAll('li');
  var list = [];

  for (var i = 0; i < target.length; i++) {
    var obj = {};
    var targetDetails = target[i].querySelector('.checklist-text');
    var isChecked = false;
    if (targetDetails.classList.contains('checklist-text--strike')) {
      isChecked = true;
    }
    obj.msg = targetDetails.textContent;
    obj.isChecked = isChecked;

    list.push(obj);
  }

  return list;
}

exports.default = getListArray;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _source = __webpack_require__(0);

var _CheckListLi = __webpack_require__(7);

var _CheckListLi2 = _interopRequireDefault(_CheckListLi);

var _saveListSnapshot = __webpack_require__(8);

var _saveListSnapshot2 = _interopRequireDefault(_saveListSnapshot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _source.Component {
  constructor() {
    super('add-new');
  }

  dom() {
    return '\n      <input type="text" />\n    ';
  }

  events() {
    this.addEvent('keypress', function (target, e) {
      if (e.keyCode === 13) {
        var checkListLi = (0, _CheckListLi2.default)(target.value);
        var checkListUl = document.getElementById('checklist-ul');

        checkListUl.innerHTML += checkListLi;
        target.value = '';
        (0, _saveListSnapshot2.default)();
      }
    });
  }
}; /*import { Component } from 'domr-a';*/

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (data) {
  var house = data.metadata.house;
  var query = data.query;
  var sayMyName = new _SayMyName2.default(house, query.name, query.alias);
  var wrapper = document.getElementById('wrapper');

  sayMyName.replaceContentOf(wrapper);
  (0, _setPageTitle2.default)(data);
};

var _setPageTitle = __webpack_require__(1);

var _setPageTitle2 = _interopRequireDefault(_setPageTitle);

var _SayMyName = __webpack_require__(32);

var _SayMyName2 = _interopRequireDefault(_SayMyName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _source = __webpack_require__(0);

var _SayMyNameText = __webpack_require__(33);

var _SayMyNameText2 = _interopRequireDefault(_SayMyNameText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _source.Component {
  constructor() {
    var house = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'arya stark';
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var alias = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    super('say-my-name');
    this.house = house.replace(/_/g, ' ');
    this.name = name.replace(/_/g, ' ');
    this.alias = alias.replace(/_/g, ' ');
  }

  dom() {
    var Name = new _SayMyNameText2.default('name', this.name);
    var House = new _SayMyNameText2.default('house', this.house);
    var Alias = new _SayMyNameText2.default('alias', this.alias);
    return '\n      <div class="say-my-name">\n        <h2> <em>Your are</em> ' + Name.render() + ' </h2>\n        <h3> <em>Of House</em> ' + House.render() + ' </h3>\n        <h3> <em>Known to the world as</em> ' + Alias.render() + ' </h3>\n      </div>\n    ';
  }
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _source = __webpack_require__(0);

var _SayMyNameSave = __webpack_require__(34);

var _SayMyNameSave2 = _interopRequireDefault(_SayMyNameSave);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*import { Component } from 'domr-a';*/
exports.default = class extends _source.Component {
  constructor() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    super('say-my-name-text');
    this.id = id;
    this.name = name;
  }

  dom() {
    return '\n      <strong class="say-my-name-text say-my-name-text--' + this.id + '">' + this.name + '</strong>\n    ';
  }

  events() {
    this.addEvent('click', function (target) {
      target.setAttribute('contenteditable', true);
      target.focus();
    });

    this.addEvent('focusout', function (target) {
      target.removeAttribute('contenteditable');
    });

    this.addEvent('input', function (target) {
      var save = document.getElementById('say-my-name-save');
      var parent = target.parentElement.parentElement;

      if (!save) {
        var sayMyNameSave = new _SayMyNameSave2.default();

        sayMyNameSave.addTo(parent);
      }
    });

    this.addEvent('keydown', function (target, e) {
      var code = e.keyCode ? e.keyCode : e.which;
      var save = document.getElementById('say-my-name-save');

      if (code === 13 && save) {
        save.click();
      }
    });
  }
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _source = __webpack_require__(0);

var hashLocation = _source.utils.hashLocation; /*import { Component, utils } from 'domr-a';*/
exports.default = class extends _source.Component {
  constructor() {
    super('say-my-name-save');
    this.id = 'say-my-name-save';
  }

  dom() {
    return '\n      <a href="#" class="' + this.id + '" id="' + this.id + '">Save</a>\n    ';
  }

  events() {
    this.addEvent('click', function (target, e) {
      e.preventDefault();
      var name = document.querySelector('.say-my-name-text--name').textContent.replace(/\s+/g, '_') || '_';
      var house = document.querySelector('.say-my-name-text--house').textContent.replace(/\s+/g, '_') || '_';
      var alias = document.querySelector('.say-my-name-text--alias').textContent.replace(/\s+/g, '_') || '_';
      var loc = hashLocation();

      loc.set('hash', '/got/' + house + '/?name=' + name + '&alias=' + alias + '/');
    });
  }
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (data) {
  var counterSet = new _CounterSet2.default(counterVal);
  var wrapper = document.getElementById('wrapper');

  counterSet.replaceContentOf(wrapper);
  (0, _setPageTitle2.default)(data);
};

var _setPageTitle = __webpack_require__(1);

var _setPageTitle2 = _interopRequireDefault(_setPageTitle);

var _CounterSet = __webpack_require__(36);

var _CounterSet2 = _interopRequireDefault(_CounterSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var counterVal = ['1', '5', '-10', '0', '1000', '-999'];

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _source = __webpack_require__(0);

var _CounterElm = __webpack_require__(37);

var _CounterElm2 = _interopRequireDefault(_CounterElm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*import { Component } from 'domr-a';*/
function makeCounters(val) {
  var counterElm = new _CounterElm2.default(val);

  return '' + counterElm.render();
}

exports.default = class extends _source.Component {
  constructor() {
    var counterVal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    super();
    this.counterVal = counterVal;
  }

  dom() {
    return '\n        <div class="counter-container">\n          ' + this.counterVal.map(function (counter) {
      return '' + makeCounters(counter);
    }).join('') + '\n        </div>\n    ';
  }
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _source = __webpack_require__(0);

var _changeColorBasedOnValue = __webpack_require__(38);

var _changeColorBasedOnValue2 = _interopRequireDefault(_changeColorBasedOnValue);

var _CounterBtn = __webpack_require__(39);

var _CounterBtn2 = _interopRequireDefault(_CounterBtn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _source.Component {
  constructor() {
    var startValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1';

    super();
    this.startValue = startValue;
    this.self = '[data-domr-id="' + this.domrid + '"]';
  }

  dom() {
    var counterBtnIncrement = (0, _CounterBtn2.default)('inc');
    var counterBtnDecrement = (0, _CounterBtn2.default)('dec');

    return '\n      <div class="counter-elm"> \n        ' + counterBtnDecrement + '\n        <input type="text" value="' + this.startValue + '" style="color:' + (0, _changeColorBasedOnValue2.default)(this.startValue) + '"/> \n        ' + counterBtnIncrement + '\n      </div>\n    ';
  }

  events() {
    this.addEventOn(this.self + ' .counter-btn', 'click', function (target, e) {
      e.preventDefault();
      var counter = target.parentElement.querySelector('input');
      var counterValue = Number(counter.value);

      if (target.classList.contains('counter-btn--inc')) {
        counter.value = counterValue + 1;
      } else {
        counter.value = counterValue - 1;
      }
      counter.style.color = (0, _changeColorBasedOnValue2.default)(counter.value);
    });

    this.addEventOn(this.self + ' input', 'input', function (target) {
      var value = target.value.replace(/[^\d.-]/g, '');
      target.style.color = (0, _changeColorBasedOnValue2.default)(value);
      target.value = value;
    });
  }
}; /*import { Component } from 'domr-a';*/

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function changeColor(val) {
  var value = val;

  if (value > 0) {
    return 'green';
  } else if (value < 0) {
    return 'red';
  }

  return 'blue';
}

exports.default = changeColor;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'inc';

  return '\n    <a class="counter-btn counter-btn--' + type + '"/> ' + (type === 'inc' ? '+' : '-') + ' </a>\n  ';
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (data) {
  var tree = new _Tree2.default(_treeArr2.default);
  var wrapper = document.getElementById('wrapper');

  tree.replaceContentOf(wrapper);
  (0, _setPageTitle2.default)(data);
};

var _setPageTitle = __webpack_require__(1);

var _setPageTitle2 = _interopRequireDefault(_setPageTitle);

var _Tree = __webpack_require__(41);

var _Tree2 = _interopRequireDefault(_Tree);

var _treeArr = __webpack_require__(45);

var _treeArr2 = _interopRequireDefault(_treeArr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _source = __webpack_require__(0);

var _TreeLi = __webpack_require__(10);

var _TreeLi2 = _interopRequireDefault(_TreeLi);

var _TreeFolder = __webpack_require__(12);

var _TreeFolder2 = _interopRequireDefault(_TreeFolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeList(itm) {
  var treeLi = new _TreeLi2.default(itm.text);

  return '' + treeLi.render();
} /*import { Component } from 'domr-a';*/


function makeFolder(itm, loop, level) {
  var ulContent = '' + itm.folder.map(function (list) {
    return '' + loop(list, level);
  }).join('');
  var focusOnFolderMaker = false;
  var treeFolder = new _TreeFolder2.default(itm.text, ulContent, itm.isOpen, focusOnFolderMaker, level);

  return '' + treeFolder.render();
}

function loopList(itm, level) {
  var thisLevel = level + 1;

  return '\n    ' + (itm.folder ? '' + makeFolder(itm, loopList, thisLevel) : '' + makeList(itm)) + '\n  ';
}

exports.default = class extends _source.Component {
  constructor() {
    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    super();
    this.list = list;
    this.ulContent = '' + this.list.map(function (itm) {
      return '' + loopList(itm, 0);
    }).join('');
  }

  dom() {
    var treeFolder = new _TreeFolder2.default('List', this.ulContent, 'true');

    return '\n      <div class="tree-container">\n        <ul class="tree-top-list-holder">\n          ' + treeFolder.render() + '\n        </ul>\n      </div>\n    ';
  }
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _source = __webpack_require__(0);

var _TreeFolder = __webpack_require__(12);

var _TreeFolder2 = _interopRequireDefault(_TreeFolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*import { Component } from 'domr-a';*/
exports.default = class extends _source.Component {
  constructor() {
    super('tree-make-folder');
  }

  dom() {
    return '\n      <a href="#" class="tree-folder-make">[ \n      <svg role="img" class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-folder"></use></svg>\n       ]</a>\n    ';
  }

  events() {
    this.addEvent('click', function (target, e) {
      e.preventDefault();
      var li = target.parentElement;
      var ul = li.parentElement;
      var text = li.querySelector('.tree-item--title').textContent;
      var folderContent = '';
      var isOpen = true;
      var isFocus = true;
      var dataLevel = Number(ul.parentElement.getAttribute('data-level')) + 1;
      var treeFolder = new _TreeFolder2.default(text, folderContent, isOpen, isFocus, dataLevel);

      treeFolder.addBefore(li);
      ul.removeChild(li);
    });
  }
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _source = __webpack_require__(0);

exports.default = class extends _source.Component {
  constructor() {
    super('tree-folder-expand');
  }

  dom() {
    return '\n      <a href="#" class="tree-folder-expand">[ \n      <svg role="img" class="icon plus"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-plus"></use></svg>\n      <svg role="img" class="icon minus"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-minus"></use></svg>\n       ]</a>\n    ';
  }

  events() {
    this.addEvent('click', function (target, e) {
      e.preventDefault();
      var parent = target.parentElement;

      parent.classList.toggle('expanded');
    });
  }
}; /*import { Component } from 'domr-a';*/

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _source = __webpack_require__(0);

var _TreeLi = __webpack_require__(10);

var _TreeLi2 = _interopRequireDefault(_TreeLi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*import { Component } from 'domr-a';*/
exports.default = class extends _source.Component {
  constructor() {
    var focus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    super('tree-new-li');
    this.focus = focus;
  }

  dom() {
    return '\n      <input type="text" placeholder="New List" class="tree-new-list" ' + (this.focus ? 'autofocus' : '') + '/>\n    ';
  }

  events() {
    this.addEvent('keypress', function (target, e) {
      if (e.keyCode === 13) {
        var val = target.value.trim();
        var treeLi = new _TreeLi2.default(val);

        if (val !== '') {
          treeLi.addBefore(target);
          target.value = '';
        }
      }
    });
  }
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var treeArr = [{
  text: 'john Malc',
  isOpen: true,
  folder: [{
    text: 'boom',
    folder: [{
      text: 'nana',
      folder: [{
        text: 'yo'
      }, {
        text: 'plum'
      }, {
        text: 'dum'
      }]
    }, {
      text: 'papa'
    }]
  }, {
    text: 'doom'
  }]
}, {
  text: 'Gerard',
  folder: [{
    text: 'yo'
  }]
}, {
  text: 'Mew'
}];

exports.default = treeArr;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (data) {
  var search = '';
  var showId = '';
  if (data.query) {
    if (data.query.search) {
      search = data.query.search.replace(/_/g, ' ');
    }

    if (data.query.id) {
      showId = data.query.id;
    }
  }

  var tvShow = new _TvShow2.default(search, showId);
  var wrapper = document.getElementById('wrapper');

  tvShow.replaceContentOf(wrapper);
  (0, _setPageTitle2.default)(data);
};

var _setPageTitle = __webpack_require__(1);

var _setPageTitle2 = _interopRequireDefault(_setPageTitle);

var _TvShow = __webpack_require__(47);

var _TvShow2 = _interopRequireDefault(_TvShow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _source = __webpack_require__(0);

var _SearchTvShow = __webpack_require__(48);

var _SearchTvShow2 = _interopRequireDefault(_SearchTvShow);

var _TvShowCardsHolder = __webpack_require__(50);

var _TvShowCardsHolder2 = _interopRequireDefault(_TvShowCardsHolder);

var _TvShowExtentedHolder = __webpack_require__(51);

var _TvShowExtentedHolder2 = _interopRequireDefault(_TvShowExtentedHolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*import { Component } from 'domr-a';*/
exports.default = class extends _source.Component {
  constructor(defaultShow, id) {
    super('tv-show-container');
    this.show = defaultShow;
    this.id = id;
  }

  dom() {
    var searchTvShow = new _SearchTvShow2.default(this.show);
    var tvShowCardsHolder = new _TvShowCardsHolder2.default(this.show);
    var tvShowExtentedHolder = new _TvShowExtentedHolder2.default(this.id);
    console.log(this.id);
    return '\n      <div class="tv-show-container">\n        <div class="tv-show-search-container">\n          ' + searchTvShow.render() + '\n        </div>\n        ' + tvShowCardsHolder.render() + '\n        ' + (this.id ? '' + tvShowExtentedHolder.render() : '') + '\n      </div>\n    ';
  }
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _source = __webpack_require__(0);

var _TvShowCard = __webpack_require__(13);

var _TvShowCard2 = _interopRequireDefault(_TvShowCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*import { Component, utils } from 'domr-a';*/
var hashLocation = _source.utils.hashLocation;

exports.default = class extends _source.Component {
  constructor() {
    var defaultShow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    super('search-tv-show');
    this.show = defaultShow;
  }

  dom() {
    return '\n      <input type="text" id="search-tv-show" value="' + this.show + '" placeholder="Search a Tv Show"/>\n    ';
  }

  events() {
    var timeInterval = 1000;
    var typeTimer = void 0;

    this.addEvent('input', function (target) {
      clearTimeout(typeTimer);
      typeTimer = setTimeout(function () {
        var cardHolder = document.getElementById('tv-show-card-holder');
        var api = 'https://api.tvmaze.com/search/shows?q=' + target.value;
        var tvShowCard = new _TvShowCard2.default(api);
        tvShowCard.replaceContentOf(cardHolder);
      }, timeInterval);
    });

    this.addEvent('keydown', function (target, e) {
      clearTimeout(typeTimer);
      typeTimer = setTimeout(function () {
        var code = e.keyCode ? e.keyCode : e.which;
        var search = target.value.replace(/ /g, '_');
        var loc = hashLocation();

        if (code === 13) {
          loc.set('query', {
            search: search
          });
        }
      }, timeInterval);
    });
  }
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _source = __webpack_require__(0);

var demoImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAACNCAIAAADOy0hJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAADcSURBVHja7NAxAQAACAMgtej6t7CCjx9EoJMUN6NAlixZsmTJUiBLlixZsmQpkCVLlixZshTIkiVLlixZCmTJkiVLliwFsmTJkiVLlgJZsmTJkiVLgSxZsmTJkqVAlixZsmTJUiBLlixZsmQpkCVLlixZshTIkiVLlixZCmTJkiVLliwFsmTJkiVLlgJZsmTJkiVLgSxZsmTJkqVAlixZsmTJUiBLlixZsmQpkCVLlixZshTIkiVLlixZCmTJkiVLliwFsmTJkiVLlgJZsmTJkiVLgawXCwAA//8DAJQ1AjdpViEZAAAAAElFTkSuQmCC'; /*import { Component } from 'domr-b';*/
exports.default = class extends _source.Component {
  constructor() {
    var img = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : demoImg;

    super('tv-show-card--img');
    this.img = img.replace('http:', 'https:');
  }

  dom() {
    return '\n      <div class="tv-show-card--img" data-src="' + this.img + '">\n        <img src= "' + demoImg + '"/> \n      </div>\n    ';
  }

  delay() {
    var target = this.target();
    var dataSrc = target.getAttribute('data-src');
    var img = target.querySelector('img');

    img.setAttribute('src', dataSrc);
  }

  events() {
    this.addEvent('mouseover', function () {
      console.log('yipee');
    });
  }
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _source = __webpack_require__(0);

var _TvShowCard = __webpack_require__(13);

var _TvShowCard2 = _interopRequireDefault(_TvShowCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*import { Component } from 'domr-a';*/
exports.default = class extends _source.Component {
  constructor() {
    var defaultShow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var id = arguments[1];

    super('tv-show-card-holder');
    this.show = defaultShow;
    this.id = id;
  }

  dom() {
    return '\n      <div class="tv-show-card-holder" id="tv-show-card-holder"></div>\n    ';
  }

  delay() {
    var self = this.target();
    var api = 'https://api.tvmaze.com/search/shows?q=' + this.show;
    var tvShowCard = new _TvShowCard2.default(api);
    tvShowCard.replaceContentOf(self);
  }
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _source = __webpack_require__(0);

var _TvShowExtendedCard = __webpack_require__(52);

var _TvShowExtendedCard2 = _interopRequireDefault(_TvShowExtendedCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*import { Component } from 'domr-a';*/
exports.default = class extends _source.Component {
  constructor(showId) {
    super('tv-show-extended-holder');
    this.showId = showId;
  }

  dom() {
    return '\n      <div class="tv-show-extended-holder" id="tv-show-extended-holder">\n      </div>\n    ';
  }

  delay() {
    var target = this.target();
    var api = 'https://api.tvmaze.com/shows/' + this.showId + '?embed=cast';
    var tvShowExtendedCard = new _TvShowExtendedCard2.default(api);
    tvShowExtendedCard.replaceContentOf(target);
  }
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _source = __webpack_require__(0);

var _TvShowExtendedInfoClose = __webpack_require__(53);

var _TvShowExtendedInfoClose2 = _interopRequireDefault(_TvShowExtendedInfoClose);

var _TvShowBackgroundImg = __webpack_require__(54);

var _TvShowBackgroundImg2 = _interopRequireDefault(_TvShowBackgroundImg);

var _TvShowLatestEpisode = __webpack_require__(55);

var _TvShowLatestEpisode2 = _interopRequireDefault(_TvShowLatestEpisode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*import { Component } from 'domr-a';*/
function Network(network) {
  return '\n    ' + (network ? '<span class="tv-show-card--network">' + network.name + '</span>' : '') + '\n  ';
}

function Status(status) {
  var showStatus = status;
  return '\n    ' + (showStatus === 'Ended' ? '<span class="wee-lozenge wee-lozenge--bold--danger"> <span>' + status + '</span></span>' : '') + '\n  ';
}

function makeGrenre(genreArr) {
  return '\n    ' + genreArr.map(function (genre) {
    return '\n      <span class=\'tv-show-card--genre wee-badge wee-badge--default\'>' + genre + '</span>\n    ';
  }).join('') + '\n  ';
}

function Genres(genre) {
  return '\n    ' + (genre.length !== 0 ? '\n      <div class="tv-show-extended--genres-holder">\n        ' + makeGrenre(genre) + '\n      </div>\n    ' : '') + '\n  ';
}

function Summary(summary) {
  return '\n    ' + (summary !== null ? '\n      <div class="tv-show-card--summary">\n        ' + summary + '\n      </div>\n    ' : '') + '\n  ';
}

function Imdb(imdb) {
  return '\n    <a class="tv-show-card-official-link tv-show-card-official-link--imdb" href="http://www.imdb.com/title/' + imdb + '">\n      Imdb\n    </a>\n  ';
}

function OfficalLinks(show) {
  var externals = show.externals;

  return '\n    <div class="tv-show-official-holder">\n      ' + (externals.imdb ? '' + Imdb(externals.imdb) : '') + '\n    </div>\n  ';
}

function makePersonImg(person, className) {
  var face = '';
  if (person.image) {
    face = person.image.medium;
  }
  var personImg = new _TvShowBackgroundImg2.default(face, className);

  return '' + personImg.render();
}

function Cast(casts) {
  return '\n    ' + casts.map(function (cast) {
    return '\n      <tr>\n        <td>\n          ' + makePersonImg(cast.person, 'tv-show-extended-image') + '\n        </td>\n        <td>\n          ' + cast.person.name + '\n        </td>\n        <td style="color:#bcbcbc;"><em>' + cast.character.name + '<em></td>\n      </tr>\n    ';
  }).join('') + '\n  ';
}

exports.default = class extends _source.DataComponent {
  constructor(api) {
    super(api);
  }

  dom(show) {
    var Close = new _TvShowExtendedInfoClose2.default();
    var image = '';
    if (show.image) {
      image = show.image.original;
    }
    var SideA = new _TvShowBackgroundImg2.default(image, 'tv-show-extended-side tv-show-extended-side--a');
    return '\n      <div class="tv-show-extended-info" id="tv-show-extended-info">\n        ' + SideA.render() + '\n        <div class="tv-show-extended-side tv-show-extended-side--b">\n          ' + Close.render() + '\n          <div class="tv-show-extended--name">\n            <h1>' + show.name + ' ' + Status(show.status) + '</h1>\n            ' + Network(show.network) + '\n          </div>\n          <div class="tv-show-extended--scrollable">\n              ' + Genres(show.genres) + '\n              ' + Summary(show.summary) + '\n              ' + OfficalLinks(show) + '\n              <div class="tv-show-extended--cast">\n                <table>\n                  <p><strong>Cast:</strong></p>\n                  ' + Cast(show._embedded.cast) + '\n                </table>\n              </div>\n          </div>\n        </div>\n      </div>\n    ';
  }

  delay(elm) {
    var target = this.target();
    var genresHolder = target.querySelector('.tv-show-extended--genres-holder');
    var tvShowLatestEpisode = new _TvShowLatestEpisode2.default(elm._links.previousepisode.href);
    tvShowLatestEpisode.addAfter(genresHolder);
  }
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _source = __webpack_require__(0);

exports.default = class extends _source.Component {
  constructor() {
    super('tv-show-extended-delete');
  }

  dom() {
    return '\n      <a href="#" class="tv-show-extended-delete">\n        <svg role="img" class="icon close"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-close"></use></svg>\n      </a>\n    ';
  }

  events() {
    this.addEvent('click', function (target, e) {
      e.preventDefault();
      history.back();
    });
  }
}; /*import { Component } from 'domr-a';*/

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _source = __webpack_require__(0);

exports.default = class extends _source.Component {
  constructor(img) {
    var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    super();
    this.img = img.replace('http:', 'https:');
    this.className = className;
  }

  dom() {
    return '\n      <div class="tv-show-bg-img ' + this.className + '" ' + (this.img ? 'style="background-image:url(' + this.img + ')"' : '') + '>\n      </div>\n    ';
  }
}; /*import { Component } from 'domr-a';*/

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _source = __webpack_require__(0);

function Time(timestamp) {
  var d = new Date(timestamp);
  var localDate = d.toLocaleDateString();

  return '<span class="tv-show-ep-time wee-lozenge wee-lozenge--info">' + localDate + '</span>';
} /*import { Component } from 'domr-a';*/
exports.default = class extends _source.DataComponent {
  constructor(api) {
    super(api);
  }

  dom(element) {
    console.log(element);
    return '\n      <div class="tv-show-latest-episode-holder">\n         <div>\n          <span class="tv-show-ep-season wee-badge wee-badge--primary"> S' + element.season + ' E' + element.number + '</span>\n          ' + Time(element.airstamp) + '\n          <span class="">' + element.name + '</span>\n        </div>\n      </div>\n    ';
  }
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (data) {
  var wrapper = document.getElementById('wrapper');
  wrapper.innerHTML = '<h2>Check browser console</h2>';
  console.log(data);
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (data) {
  var wrapper = document.getElementById('wrapper');
  wrapper.innerHTML = errorDetails();
  (0, _setPageTitle2.default)(data);
};

var _setPageTitle = __webpack_require__(1);

var _setPageTitle2 = _interopRequireDefault(_setPageTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function errorDetails() {
  return '\n    <div>\n      404 Page not found\n    </div>\n  ';
}

/***/ }),
/* 58 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);