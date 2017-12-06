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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Component__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ActiveComponent__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Logger__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return __WEBPACK_IMPORTED_MODULE_0__Component__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__ActiveComponent__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return __WEBPACK_IMPORTED_MODULE_2__Router__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return __WEBPACK_IMPORTED_MODULE_3__Logger__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return __WEBPACK_IMPORTED_MODULE_4__utils__["a"]; });









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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function consoleType(type) {
  const clog = console[type];
  let clogType = console.log;

  if (clog) {
    clogType = clog;
  }

  return clogType;
}

function makeConsole(moduleName, msg, config, style, styleMsg, type) {
  const log = consoleType(type);

  if (config === '') {
    log(
      `%c${moduleName}`,
      style,
    );
    console.log(msg);
    console.log('');
  } else {
    log(
      `%c${moduleName}%c ${msg}`,
      style,
      styleMsg,
    );
  }
}


/* harmony default export */ __webpack_exports__["a"] = (class {
  constructor(moduleName = '') {
    this.moduleName = moduleName !== '' ? `[${moduleName}]` : '';
    this.moduleNameStyles = 'color: #565656; font-weight: bold; font-size: 13.5px;';
  }

  log(msg, config) {
    makeConsole(this.moduleName, msg, config, this.moduleNameStyles, 'color: #333;');
  }

  info(msg, config) {
    makeConsole(this.moduleName,
      msg,
      config,
      `${this.moduleNameStyles} color: #0066ff; background-color: #daeafb;`,
      'color: #0066ff;',
    );
  }

  safe(msg, config) {
    makeConsole(this.moduleName,
      msg,
      config,
      `${this.moduleNameStyles} color: #39a045; background-color: #dafbe4;`,
      'color: #39a045;',
    );
  }

  warn(msg, config) {
    makeConsole(this.moduleName,
      msg,
      config,
      `${this.moduleNameStyles} color: #d28e13;`,
      'color: #d28e13;',
      'warn',
    );
  }

  error(msg, config) {
    makeConsole(this.moduleName,
      msg,
      config,
      `${this.moduleNameStyles} color: red;`,
      'color: red;',
      'error',
    );
  }
});


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = class {
  constructor() {
    var moduleName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    this.moduleName = moduleName !== '' ? '[' + moduleName + ']' : '';
    this.moduleNameStyles = 'color: #565656; font-weight: bold; font-size: 13.5px;';
  }

  log(msg, config) {
    makeConsole(this.moduleName, msg, config, this.moduleNameStyles, 'color: #333;');
  }

  info(msg, config) {
    makeConsole(this.moduleName, msg, config, this.moduleNameStyles + ' color: #0066ff; background-color: #daeafb;', 'color: #0066ff;');
  }

  safe(msg, config) {
    makeConsole(this.moduleName, msg, config, this.moduleNameStyles + ' color: #39a045; background-color: #dafbe4;', 'color: #39a045;');
  }

  warn(msg, config) {
    makeConsole(this.moduleName, msg, config, this.moduleNameStyles + ' color: #d28e13;', 'color: #d28e13;', 'warn');
  }

  error(msg, config) {
    makeConsole(this.moduleName, msg, config, this.moduleNameStyles + ' color: red;', 'color: red;', 'error');
  }
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hash_location_set__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hash_location_get__ = __webpack_require__(28);



function loc() {
  const originalHash = location.hash;
  let path = originalHash;
  let search = '';
  let query = '';

  if (path.includes('?')) {
    const searchQuery = path.split('?');
    path = searchQuery[0];
    search = searchQuery[1].replace(/\//g, '');

    if (search !== '') {
      const obj = {};
      const filterString = search.split('&');

      for (let i = 0; i < filterString.length; i++) {
        const splitString = filterString[i].split('=');
        const field = splitString[0];
        const value = splitString[1];

        obj[field] = value;
      }
      query = obj;
    }
  }

  if (path.endsWith('/') && !path.endsWith('#/')) {
    const pathSlice = path.slice(0, -1);

    path = pathSlice.replace('#', '');
  } else {
    path = path.replace('#', '');
  }

  return {
    hash: originalHash.replace('#', ''),
    path,
    search,
    query,
    set: __WEBPACK_IMPORTED_MODULE_0__hash_location_set__["a" /* default */],
    get: __WEBPACK_IMPORTED_MODULE_1__hash_location_get__["a" /* default */],
  };
}

const hashLocation = loc;

/* harmony default export */ __webpack_exports__["a"] = (hashLocation);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getListArray = __webpack_require__(36);

var _getListArray2 = _interopRequireDefault(_getListArray);

var _saveToLocalStorage = __webpack_require__(12);

var _saveToLocalStorage2 = _interopRequireDefault(_saveToLocalStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function saveListSnapshot() {
  var snapshot = (0, _getListArray2.default)();

  (0, _saveToLocalStorage2.default)(snapshot);
}

exports.default = saveListSnapshot;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function loadApi(api, target, view) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', api, true);
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4) {
      if (xmlhttp.status === 200) {
        var obj = JSON.parse(xmlhttp.responseText);
        view(obj, target);
      }
    }
  };
  xmlhttp.send(null);
}

exports.default = loadApi;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hashLocationSet = __webpack_require__(77);

var _hashLocationSet2 = _interopRequireDefault(_hashLocationSet);

var _hashLocationGet = __webpack_require__(78);

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
/* 8 */
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_create_element__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Logger__ = __webpack_require__(2);



const logger = new __WEBPACK_IMPORTED_MODULE_1__Logger__["a" /* default */]();

const defaults = {
  parent: document.getElementById('wrapper'),
  dom: `
    <div>
      Domr Component
    </div>
  `,
};

/* harmony default export */ __webpack_exports__["a"] = (class {
  constructor() {
    this.parentDefault = defaults.parent;
    this.domContent = defaults.dom;
    this.createElement = __WEBPACK_IMPORTED_MODULE_0__helpers_create_element__["a" /* default */];
  }

  dom() {
    return this.domContent;
  }

  renderNodes() {
    return this.createElement(this.dom());
  }

  fireEventAfterTimeout() {}

  addTo(parent = this.parentDefault) {
    parent.insertAdjacentHTML('beforeend', this.renderNodes());
    this.fireEventAfterTimeout();
  }

  addFromStartTo(parent = this.parentDefault) {
    parent.insertAdjacentHTML('afterbegin', this.renderNodes());
    this.fireEventAfterTimeout();
  }

  addBefore(sibling) {
    if (sibling) {
      sibling.insertAdjacentHTML('beforebegin', this.renderNodes());
      this.fireEventAfterTimeout();
    } else {
      logger.error('sibling not found');
    }
  }

  addAfter(sibling) {
    if (sibling) {
      sibling.insertAdjacentHTML('afterend', this.renderNodes());
      this.fireEventAfterTimeout();
    } else {
      logger.error('sibling not found');
    }
  }

  replaceWith(sibling) {
    if (sibling) {
      const parent = sibling.parentElement;

      if (parent) {
        sibling.insertAdjacentHTML('afterend', this.renderNodes());
        parent.removeChild(sibling);
        this.fireEventAfterTimeout();
      } else {
        logger.warn('sibling has no parentElement');
      }
    } else {
      logger.error('sibling not found');
    }
  }

  replaceContentOf(parent = this.parentDefault) {
    parent.innerHTML = this.renderNodes();
    this.fireEventAfterTimeout();
  }

  render() {
    this.fireEventAfterTimeout();
    return this.renderNodes();
  }
});


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Examples = __webpack_require__(30);

var _Examples2 = _interopRequireDefault(_Examples);

var _CheckList = __webpack_require__(32);

var _CheckList2 = _interopRequireDefault(_CheckList);

var _DynamicRouteName = __webpack_require__(40);

var _DynamicRouteName2 = _interopRequireDefault(_DynamicRouteName);

var _Counter = __webpack_require__(44);

var _Counter2 = _interopRequireDefault(_Counter);

var _TreeView = __webpack_require__(50);

var _TreeView2 = _interopRequireDefault(_TreeView);

var _TvSearchView = __webpack_require__(56);

var _TvSearchView2 = _interopRequireDefault(_TvSearchView);

var _Test = __webpack_require__(68);

var _Test2 = _interopRequireDefault(_Test);

var _Error = __webpack_require__(80);

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

var _ChecklistText = __webpack_require__(35);

var _ChecklistText2 = _interopRequireDefault(_ChecklistText);

var _ChecklistCheck = __webpack_require__(37);

var _ChecklistCheck2 = _interopRequireDefault(_ChecklistCheck);

var _ChecklistDeleteItem = __webpack_require__(38);

var _ChecklistDeleteItem2 = _interopRequireDefault(_ChecklistDeleteItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _domrA.Component {
  constructor() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var isChecked = arguments[1];

    super();
    this.text = text;
    this.isChecked = isChecked;
  }

  dom() {
    var checklistCheck = new _ChecklistCheck2.default(this.isChecked);
    var checklistDeleteItem = new _ChecklistDeleteItem2.default();
    var checklistText = new _ChecklistText2.default(this.isChecked, this.text);

    return '\n      <li> ' + checklistCheck.render() + ' ' + checklistText.render() + ' ' + checklistDeleteItem.render() + '</li>\n    ';
  }
};

/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

var _TreeDelete = __webpack_require__(14);

var _TreeDelete2 = _interopRequireDefault(_TreeDelete);

var _TreeMakeFolder = __webpack_require__(52);

var _TreeMakeFolder2 = _interopRequireDefault(_TreeMakeFolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _domrA.Component {
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
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

exports.default = class extends _domrA.ActiveComponent {
  constructor() {
    super('tree-delete');
  }

  dom() {
    return '\n      <a href="#" class="tree-delete">[ \n      <svg role="img" class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-trash"></use></svg>\n       ]</a>\n    ';
  }

  events() {
    var target = this.target();
    target.addEventListener('click', function (e) {
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
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

var _TreeFolderExpand = __webpack_require__(53);

var _TreeFolderExpand2 = _interopRequireDefault(_TreeFolderExpand);

var _TreeDelete = __webpack_require__(14);

var _TreeDelete2 = _interopRequireDefault(_TreeDelete);

var _TreeNewLi = __webpack_require__(54);

var _TreeNewLi2 = _interopRequireDefault(_TreeNewLi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _domrA.Component {
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TvShowCard = __webpack_require__(59);

var _TvShowCard2 = _interopRequireDefault(_TvShowCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeTvShowCards(obj, target) {
  var tvShowCardsHolder = target;

  tvShowCardsHolder.innerHTML = '';
  obj.forEach(function (element) {
    var tvShowCard = new _TvShowCard2.default(element);
    tvShowCard.addTo(tvShowCardsHolder);
  });
}

exports.default = makeTvShowCards;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createElement = __webpack_require__(70);

var _createElement2 = _interopRequireDefault(_createElement);

var _Logger = __webpack_require__(3);

var _Logger2 = _interopRequireDefault(_Logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = new _Logger2.default();

var defaults = {
  parent: document.getElementById('wrapper'),
  dom: '\n    <div>\n      Domr Component\n    </div>\n  '
};

exports.default = class {
  constructor() {
    this.parentDefault = defaults.parent;
    this.domContent = defaults.dom;
    this.createElement = _createElement2.default;
  }

  dom() {
    return this.domContent;
  }

  renderNodes() {
    return this.createElement(this.dom());
  }

  fireEventAfterTimeout() {}

  addTo() {
    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.parentDefault;

    parent.insertAdjacentHTML('beforeend', this.renderNodes());
    this.fireEventAfterTimeout();
  }

  addFromStartTo() {
    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.parentDefault;

    parent.insertAdjacentHTML('afterbegin', this.renderNodes());
    this.fireEventAfterTimeout();
  }

  addBefore(sibling) {
    if (sibling) {
      sibling.insertAdjacentHTML('beforebegin', this.renderNodes());
      this.fireEventAfterTimeout();
    } else {
      logger.error('sibling not found');
    }
  }

  addAfter(sibling) {
    if (sibling) {
      sibling.insertAdjacentHTML('afterend', this.renderNodes());
      this.fireEventAfterTimeout();
    } else {
      logger.error('sibling not found');
    }
  }

  replaceWith(sibling) {
    if (sibling) {
      var parent = sibling.parentElement;

      if (parent) {
        sibling.insertAdjacentHTML('afterend', this.renderNodes());
        parent.removeChild(sibling);
        this.fireEventAfterTimeout();
      } else {
        logger.warn('sibling has no parentElement');
      }
    } else {
      logger.error('sibling not found');
    }
  }

  replaceContentOf() {
    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.parentDefault;

    parent.innerHTML = this.renderNodes();
    this.fireEventAfterTimeout();
  }

  render() {
    this.fireEventAfterTimeout();
    return this.renderNodes();
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(19);

__webpack_require__(81);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _domrA = __webpack_require__(0);

var _routes = __webpack_require__(10);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _domrA.Router(_routes2.default, {
  redirectDefault: true
});

router.showRoutes();
router.start();

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function createElement(str, domrDataId) {
  const div = document.createElement('div');
  div.innerHTML = str;
  const container = document.createDocumentFragment();
  for (let i = 0; i < div.childNodes.length; i++) {
    const node = div.childNodes[i].cloneNode(true);
    container.appendChild(node);
  }

  if (domrDataId) {
    container.childNodes[1].setAttribute('data-domr-id', domrDataId);
  }
  return container.childNodes[1].outerHTML;
}

/* harmony default export */ __webpack_exports__["a"] = (createElement);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Component__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Logger__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_lookup__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_randomizer__ = __webpack_require__(23);





const logger = new __WEBPACK_IMPORTED_MODULE_1__Logger__["a" /* default */]();

/* harmony default export */ __webpack_exports__["a"] = (class extends __WEBPACK_IMPORTED_MODULE_0__Component__["a" /* default */] {
  constructor(domrid = 'domr-active-component') {
    super();
    this.domrid = `${domrid}-${__WEBPACK_IMPORTED_MODULE_3__helpers_randomizer__["a" /* default */](7)}`;
    this.lookup = () => {
      return __WEBPACK_IMPORTED_MODULE_2__helpers_lookup__["a" /* default */](this.domrid);
    };
    this.target = this.lookup;
  }

  events() {
    const target = this.target();
    target.addEventListener('click', () => {
      logger.log(`Default Event for ${this.domrid}`);
    });
  }

  fireEventAfterTimeout() {
    setTimeout(() => {
      if (this.lookup()) {
        this.events();
      }
    }, 50);
  }

  renderNodes() {
    return this.createElement(this.dom(), this.domrid);
  }
});


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Lookup(elmId) {
  const targetSelector = document.querySelector(`[data-domr-id="${elmId}"]`);

  if (targetSelector) {
    return targetSelector;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Lookup);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function randomizer(stringLength = 7) {
  return Math.random().toString(36).substr(2, stringLength);
}

/* harmony default export */ __webpack_exports__["a"] = (randomizer);


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Logger__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_add_view__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_hash_location__ = __webpack_require__(4);




const logger = new __WEBPACK_IMPORTED_MODULE_0__Logger__["a" /* default */]();
const filterRoutes = (routes) => {
  const arr = [];
  routes.forEach((route) => {
    if (route.path && route.view) {
      arr.push(route);
    }
  });

  return arr;
};
const defaults = {
  routes: [],
  config: {
    redirectDefault: false,
    refreshPage: false,
    clearLog: false,
  },
};

/* harmony default export */ __webpack_exports__["a"] = (class {
  constructor(routes = defaults.routes, config = defaults.config) {
    this.routes = filterRoutes(routes);
    this.redirectDefault = config.redirectDefault || false;
    this.refreshPage = config.refreshPage || false;
    this.clearLog = config.clearLog || false;
    this.addView = __WEBPACK_IMPORTED_MODULE_1__helpers_add_view__["a" /* default */];
  }

  showRoutes() {
    console.log(this.routes);
  }

  reloadOnHashChange() {
    addEventListener('hashchange', (e) => {
      if (this.clearLog) {
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

      if (this.refreshPage) {
        location.reload();
      } else {
        this.start();
        e.stopImmediatePropagation();
      }
    });
  }

  start() {
    const loc = __WEBPACK_IMPORTED_MODULE_2__helpers_hash_location__["a" /* default */]();
    const locPath = loc.path;
    let candidate;

    if (locPath === '') {
      location.hash = '#/';
    }

    this.routes.forEach((route) => {
      let path = route.path;
      if (path.endsWith('/') && path !== '/') {
        path = path.slice(0, -1);
      }

      const routeDataVal = [];
      const routePathMod = `${path.replace(/([:*])(\w+)/g, (full, dots, name) => {
        routeDataVal.push(name);
        return '([^/]+)';
      })}(?:/|$)`;
      const routePathModRegEx = locPath.match(new RegExp(routePathMod));

      if (routePathModRegEx) {
        const params = routePathModRegEx
        .slice(1, routePathModRegEx.length)
        .reduce((params, value, index) => {
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
      const routeDefault = this.routes.find(o => o.isDefault === true);
      if (this.redirectDefault && routeDefault) {
        this.addView(routeDefault);
      } else {
        logger.error('Page Not Found');
      }
    }

    this.reloadOnHashChange();
  }
});


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clone_object__ = __webpack_require__(26);


function addView(candidate) {
  const view = candidate.view;
  const skiplist = [
    'view',
  ];
  const routeData = __WEBPACK_IMPORTED_MODULE_0__clone_object__["a" /* default */](candidate, skiplist);

  if (candidate && view) {
    if (typeof view === 'function') {
      view(routeData);
    } else {
      view;
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (addView);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const defaultSkipList = ['view'];

function findInArr(arr, itm) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === itm) {
      return true;
    }
  }
}

function cloneObject(obj, skipList = defaultSkipList) {
  const newObj = {};

  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    const skip = findInArr(skipList, key);

    if (!skip) {
      newObj[key] = value;
    }
  });

  return newObj;
}

/* harmony default export */ __webpack_exports__["a"] = (cloneObject);


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hash_location__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Logger__ = __webpack_require__(2);



const logger = new __WEBPACK_IMPORTED_MODULE_1__Logger__["a" /* default */]();

function setHash(option) {
  let hash = option;
  if (!hash.startsWith('#')) {
    hash = `#${hash}`;
  }

  return hash;
}

function setPath(option) {
  const loc = __WEBPACK_IMPORTED_MODULE_0__hash_location__["a" /* default */]();
  const searchQuery = loc.search;
  let path = option;

  if (path.startsWith('#')) {
    path = path.slice(0, -1);
  }

  if (searchQuery) {
    if (!path.endsWith('/')) {
      path = `${path}/`;
    }

    path = `${path}?${searchQuery}`;
  }

  path = setHash(path);
  return path;
}

function setSearch(option) {
  let search = option;
  const loc = __WEBPACK_IMPORTED_MODULE_0__hash_location__["a" /* default */]();
  let path = loc.path;

  if (path.endsWith('/')) {
    path = path.slice(0, -1);
  }

  if (!search.startsWith('?')) {
    search = `?${search}`;
  }

  search = setHash(`${path}/${search}`);

  return search;
}

function loopSearchQuery(obj) {
  const arr = [];
  for (let key in obj) {
    arr.push(`${key}=${obj[key]}`);
  }

  return `?${arr.join('&')}`;
}

function setQuery(obj) {
  const searchQuery = loopSearchQuery(obj);
  const query = setSearch(searchQuery);

  return query;
}

function redirectTo(hash) {
  location.hash = hash;
}


function hashLocationSet(field, opt) {
  const setField = field;
  const option = opt;
  let link;

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
    logger.error('incorrect set location params');
  }
}

/* harmony default export */ __webpack_exports__["a"] = (hashLocationSet);


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hash_location__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Logger__ = __webpack_require__(2);



const logger = new __WEBPACK_IMPORTED_MODULE_1__Logger__["a" /* default */]();

function hashLocationGet(field) {
  const loc = __WEBPACK_IMPORTED_MODULE_0__hash_location__["a" /* default */]();
  const thisField = loc[field];

  if (thisField) {
    return thisField;
  } else {
    logger.error('incorrect get location params');
  }
}

/* harmony default export */ __webpack_exports__["a"] = (hashLocationGet);



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_hash_location__ = __webpack_require__(4);


const utils = {
  hashLocation: __WEBPACK_IMPORTED_MODULE_0__helpers_hash_location__["a" /* default */],
};

/* harmony default export */ __webpack_exports__["a"] = (utils);


/***/ }),
/* 30 */
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

var _ExamplesList = __webpack_require__(31);

var _ExamplesList2 = _interopRequireDefault(_ExamplesList);

var _routes = __webpack_require__(10);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

function makeList(list) {
  if (!list.isDefault && list.name && list.path) {
    return '\n      <li>\n        <a href="#' + (list.psudoPath ? '' + list.psudoPath : '' + list.path) + '" >' + list.name + '</a>\n      </li>\n    ';
  } else if (!list.path && list.name && list.href) {
    return '\n      <li>\n        <a href="' + list.href + '" >' + list.name + '</a>\n      </li>\n    ';
  }

  return '';
}

exports.default = class extends _domrA.Component {
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
/* 32 */
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

var _ContainerCheckbox = __webpack_require__(33);

var _ContainerCheckbox2 = _interopRequireDefault(_ContainerCheckbox);

var _saveToLocalStorage = __webpack_require__(12);

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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

var _CheckListUl = __webpack_require__(34);

var _CheckListUl2 = _interopRequireDefault(_CheckListUl);

var _AddNewListItem = __webpack_require__(39);

var _AddNewListItem2 = _interopRequireDefault(_AddNewListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _domrA.Component {
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
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

var _CheckListLi = __webpack_require__(11);

var _CheckListLi2 = _interopRequireDefault(_CheckListLi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeList(itm) {
  var checkListLi = new _CheckListLi2.default(itm.msg, itm.isChecked);
  return checkListLi.render();
}

exports.default = class extends _domrA.Component {
  constructor(list) {
    super();
    this.list = list;
  }

  dom() {
    return '\n      <ul id="checklist-ul">\n        ' + this.list.map(function (itm) {
      return '' + makeList(itm);
    }).join('') + '\n      </ul>\n    ';
  }
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

var _saveListSnapshot = __webpack_require__(5);

var _saveListSnapshot2 = _interopRequireDefault(_saveListSnapshot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clearContentEditable = function clearContentEditable() {
  var checklistText = document.querySelectorAll('.checklist-text');

  for (var i = 0; i < checklistText.length; i++) {
    checklistText[i].setAttribute('contenteditable', 'false');
  }
};

exports.default = class extends _domrA.ActiveComponent {
  constructor() {
    var isChecked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    super('checklist-text');
    this.isChecked = isChecked;
    this.text = text;
  }

  dom() {
    return '\n      <span class="checklist-text ' + (this.isChecked ? 'checklist-text--strike' : '') + '">' + this.text + '</span>\n    ';
  }

  events() {
    var target = this.target();

    target.addEventListener('click', function () {
      if (!target.classList.contains('checklist-text--strike')) {
        clearContentEditable();
        target.setAttribute('contenteditable', 'true');
        target.focus();
      }
    });

    target.addEventListener('keypress', function (e) {
      if (e.keyCode === 13) {
        target.blur();
      }
    });

    target.addEventListener('focusout', function () {
      clearContentEditable();
      (0, _saveListSnapshot2.default)();
    });
  }
};

/***/ }),
/* 36 */
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

var _saveListSnapshot = __webpack_require__(5);

var _saveListSnapshot2 = _interopRequireDefault(_saveListSnapshot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _domrA.ActiveComponent {
  constructor() {
    var isChecked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    super('checklist-check');
    this.isChecked = isChecked;
  }

  dom() {
    return '\n      <input type="checkbox" ' + (this.isChecked ? 'checked' : '') + '/>\n    ';
  }

  events() {
    var target = this.target();
    target.addEventListener('click', function () {
      var checklistText = target.parentElement.querySelector('.checklist-text');

      checklistText.classList.toggle('checklist-text--strike');
      (0, _saveListSnapshot2.default)();
    });
  }
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

var _saveListSnapshot = __webpack_require__(5);

var _saveListSnapshot2 = _interopRequireDefault(_saveListSnapshot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _domrA.ActiveComponent {
  constructor() {
    super('checklist-delete-item');
  }

  dom() {
    return '\n      <a href="#">&#10006;</a>\n    ';
  }

  events() {
    var target = this.target();
    target.addEventListener('click', function (e) {
      e.preventDefault();
      var parent = target.parentElement;
      var grandParent = parent.parentElement;

      grandParent.removeChild(parent);
      (0, _saveListSnapshot2.default)();
    });
  }
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

var _CheckListLi = __webpack_require__(11);

var _CheckListLi2 = _interopRequireDefault(_CheckListLi);

var _saveListSnapshot = __webpack_require__(5);

var _saveListSnapshot2 = _interopRequireDefault(_saveListSnapshot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _domrA.ActiveComponent {
  constructor() {
    super('add-new');
  }

  dom() {
    return '\n      <input type="text" />\n    ';
  }

  events() {
    var target = this.target();
    target.addEventListener('keypress', function (e) {
      if (e.keyCode === 13) {
        var checkListLi = new _CheckListLi2.default(target.value);
        var checkListUl = document.getElementById('checklist-ul');

        checkListLi.addFromStartTo(checkListUl);
        target.value = '';
        (0, _saveListSnapshot2.default)();
      }
    });
  }
};

/***/ }),
/* 40 */
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

var _SayMyName = __webpack_require__(41);

var _SayMyName2 = _interopRequireDefault(_SayMyName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

var _SayMyNameText = __webpack_require__(42);

var _SayMyNameText2 = _interopRequireDefault(_SayMyNameText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _domrA.Component {
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

var _SayMyNameSave = __webpack_require__(43);

var _SayMyNameSave2 = _interopRequireDefault(_SayMyNameSave);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _domrA.ActiveComponent {
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
    var target = this.target();

    target.addEventListener('click', function () {
      target.setAttribute('contenteditable', true);
      target.focus();
    });

    target.addEventListener('focusout', function () {
      target.removeAttribute('contenteditable');
    });

    target.addEventListener('input', function () {
      var save = document.getElementById('say-my-name-save');
      var parent = target.parentElement.parentElement;

      if (!save) {
        var sayMyNameSave = new _SayMyNameSave2.default();

        sayMyNameSave.addTo(parent);
      }
    });

    target.addEventListener('keydown', function (e) {
      var code = e.keyCode ? e.keyCode : e.which;
      var save = document.getElementById('say-my-name-save');

      if (code === 13 && save) {
        save.click();
      }
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

var _domrA = __webpack_require__(0);

var hashLocation = _domrA.utils.hashLocation;

exports.default = class extends _domrA.ActiveComponent {
  constructor() {
    super('say-my-name-save');
    this.id = 'say-my-name-save';
  }

  dom() {
    return '\n      <a href="#" class="' + this.id + '" id="' + this.id + '">Save</a>\n    ';
  }

  events() {
    var target = this.target();

    target.addEventListener('click', function (e) {
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
/* 44 */
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

var _CounterSet = __webpack_require__(45);

var _CounterSet2 = _interopRequireDefault(_CounterSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var counterVal = ['1', '5', '-10', '0', '1000', '-999'];

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

var _CounterElm = __webpack_require__(46);

var _CounterElm2 = _interopRequireDefault(_CounterElm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeCounters(val) {
  var counterElm = new _CounterElm2.default(val);

  return '' + counterElm.render();
}

exports.default = class extends _domrA.Component {
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

var _CounterBtnIncrement = __webpack_require__(47);

var _CounterBtnIncrement2 = _interopRequireDefault(_CounterBtnIncrement);

var _CounterBtnDecrement = __webpack_require__(48);

var _CounterBtnDecrement2 = _interopRequireDefault(_CounterBtnDecrement);

var _CounterInput = __webpack_require__(49);

var _CounterInput2 = _interopRequireDefault(_CounterInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _domrA.Component {
  constructor() {
    var startValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1';

    super();
    this.startValue = startValue;
  }

  dom() {
    var counterBtnIncrement = new _CounterBtnIncrement2.default();
    var counterBtnDecrement = new _CounterBtnDecrement2.default();
    var counterInput = new _CounterInput2.default(this.startValue);

    var BtnIncrement = counterBtnIncrement.render();
    var BtnDecrement = counterBtnDecrement.render();
    var Input = counterInput.render();

    return '\n      <div class="counter-elm"> ' + BtnDecrement + ' ' + Input + ' ' + BtnIncrement + ' </div>\n    ';
  }
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

var _changeColorBasedOnValue = __webpack_require__(8);

var _changeColorBasedOnValue2 = _interopRequireDefault(_changeColorBasedOnValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _domrA.ActiveComponent {
  constructor() {
    super('btn-inc');
  }

  dom() {
    return '\n      <a class="counter-btn--inc"/> + </a>\n    ';
  }

  events() {
    var target = this.target();
    target.addEventListener('click', function (e) {
      e.preventDefault();
      var counter = target.parentElement.querySelector('input');
      var counterValue = Number(counter.value);

      counter.value = counterValue + 1;
      counter.style.color = (0, _changeColorBasedOnValue2.default)(counter.value);
    });
  }
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

var _changeColorBasedOnValue = __webpack_require__(8);

var _changeColorBasedOnValue2 = _interopRequireDefault(_changeColorBasedOnValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _domrA.ActiveComponent {
  constructor() {
    super('btn-dec');
  }

  dom() {
    return '\n      <a class="counter-btn--dec"/> - </a>\n    ';
  }

  events() {
    var target = this.target();
    target.addEventListener('click', function (e) {
      e.preventDefault();
      var counter = target.parentElement.querySelector('input');
      var counterValue = Number(counter.value);

      counter.value = counterValue - 1;
      counter.style.color = (0, _changeColorBasedOnValue2.default)(counter.value);
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

var _domrA = __webpack_require__(0);

var _changeColorBasedOnValue = __webpack_require__(8);

var _changeColorBasedOnValue2 = _interopRequireDefault(_changeColorBasedOnValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _domrA.ActiveComponent {
  constructor(value) {
    super('counter-input');
    this.value = value;
  }

  dom() {
    return '\n      <input type="text" value="' + this.value + '" style="color:' + (0, _changeColorBasedOnValue2.default)(this.value) + '"/>\n    ';
  }

  events() {
    var target = this.target();
    target.addEventListener('input', function () {
      var value = target.value.replace(/[^\d.-]/g, '');
      target.style.color = (0, _changeColorBasedOnValue2.default)(value);
      target.value = value;
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

exports.default = function (data) {
  var tree = new _Tree2.default(_treeArr2.default);
  var wrapper = document.getElementById('wrapper');

  tree.replaceContentOf(wrapper);
  (0, _setPageTitle2.default)(data);
};

var _setPageTitle = __webpack_require__(1);

var _setPageTitle2 = _interopRequireDefault(_setPageTitle);

var _Tree = __webpack_require__(51);

var _Tree2 = _interopRequireDefault(_Tree);

var _treeArr = __webpack_require__(55);

var _treeArr2 = _interopRequireDefault(_treeArr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

var _TreeLi = __webpack_require__(13);

var _TreeLi2 = _interopRequireDefault(_TreeLi);

var _TreeFolder = __webpack_require__(15);

var _TreeFolder2 = _interopRequireDefault(_TreeFolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeList(itm) {
  var treeLi = new _TreeLi2.default(itm.text);

  return '' + treeLi.render();
}

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

exports.default = class extends _domrA.Component {
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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

var _TreeFolder = __webpack_require__(15);

var _TreeFolder2 = _interopRequireDefault(_TreeFolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _domrA.ActiveComponent {
  constructor() {
    super('tree-make-folder');
  }

  dom() {
    return '\n      <a href="#" class="tree-folder-make">[ \n      <svg role="img" class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-folder"></use></svg>\n       ]</a>\n    ';
  }

  events() {
    var target = this.target();
    target.addEventListener('click', function (e) {
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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

exports.default = class extends _domrA.ActiveComponent {
  constructor() {
    super('tree-folder-expand');
  }

  dom() {
    return '\n      <a href="#" class="tree-folder-expand">[ \n      <svg role="img" class="icon plus"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-plus"></use></svg>\n      <svg role="img" class="icon minus"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-minus"></use></svg>\n       ]</a>\n    ';
  }

  events() {
    var target = this.target();
    target.addEventListener('click', function (e) {
      e.preventDefault();
      var parent = target.parentElement;

      parent.classList.toggle('expanded');
    });
  }
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

var _TreeLi = __webpack_require__(13);

var _TreeLi2 = _interopRequireDefault(_TreeLi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _domrA.ActiveComponent {
  constructor() {
    var focus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    super('tree-new-li');
    this.focus = focus;
  }

  dom() {
    return '\n      <input type="text" placeholder="New List" class="tree-new-list"/>\n    ';
  }

  events() {
    var target = this.target();
    if (this.focus) {
      target.focus();
    }

    target.addEventListener('keypress', function (e) {
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
/* 55 */
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
/* 56 */
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

var _TvShow = __webpack_require__(57);

var _TvShow2 = _interopRequireDefault(_TvShow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

var _SearchTvShow = __webpack_require__(58);

var _SearchTvShow2 = _interopRequireDefault(_SearchTvShow);

var _TvShowCardsHolder = __webpack_require__(61);

var _TvShowCardsHolder2 = _interopRequireDefault(_TvShowCardsHolder);

var _TvShowExtented = __webpack_require__(62);

var _TvShowExtented2 = _interopRequireDefault(_TvShowExtented);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _domrA.Component {
  constructor(defaultShow, id) {
    super('tv-show-container');
    this.show = defaultShow;
    this.id = id;
  }

  dom() {
    var searchTvShow = new _SearchTvShow2.default(this.show);
    var tvShowCardsHolder = new _TvShowCardsHolder2.default(this.show);
    var tvShowExtented = new _TvShowExtented2.default(this.id);
    return '\n      <div class="tv-show-container">\n        <div class="tv-show-search-container">\n          ' + searchTvShow.render() + '\n        </div>\n        ' + tvShowCardsHolder.render() + '\n        ' + (this.id ? '' + tvShowExtented.render() : '') + '\n      </div>\n    ';
  }
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

var _makeTvShowCards = __webpack_require__(16);

var _makeTvShowCards2 = _interopRequireDefault(_makeTvShowCards);

var _loadApi = __webpack_require__(6);

var _loadApi2 = _interopRequireDefault(_loadApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hashLocation = _domrA.utils.hashLocation;

exports.default = class extends _domrA.ActiveComponent {
  constructor() {
    var defaultShow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    super('search-tv-show');
    this.show = defaultShow;
  }

  dom() {
    return '\n      <input type="text" id="search-tv-show" value="' + this.show + '" placeholder="Search a Tv Show"/>\n    ';
  }

  events() {
    var target = this.target();
    var cardHolder = document.getElementById('tv-show-card-holder');
    var timeInterval = 1000;
    var typeTimer = void 0;

    target.addEventListener('input', function () {
      clearTimeout(typeTimer);
      typeTimer = setTimeout(function () {
        var api = 'https://api.tvmaze.com/search/shows?q=' + target.value;
        (0, _loadApi2.default)(api, cardHolder, _makeTvShowCards2.default);
      }, timeInterval);
    });

    target.addEventListener('keydown', function (e) {
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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

var _TvShowCardImg = __webpack_require__(60);

var _TvShowCardImg2 = _interopRequireDefault(_TvShowCardImg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hashLocation = _domrA.utils.hashLocation;

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

exports.default = class extends _domrA.ActiveComponent {
  constructor(show) {
    super('tv-show-card');
    this.show = show.show;
    this.tvid = this.show.id;
    this.name = this.show.name;
    this.network = this.show.network;
    this.genres = this.show.genres;
    this.image = this.show.image;
    this.imdb = this.show.externals.imdb;
    this.officialSite = this.show.officialSite;
  }

  dom() {
    return '\n      <a class="tv-show-card" data-id="' + this.tvid + '">\n        <div class="tv-show-card-side tv-show-card-side--a">\n          ' + Image(this.image) + '\n        </div>\n        <div class="tv-show-card-side tv-show-card-side--b">\n          <div class="tv-show-card--name">\n            <h3>' + this.name + '</h3>\n          </div>\n          ' + Network(this.network) + '\n          ' + Genres(this.genres) + '\n        </div>\n      </a>\n    ';
  }

  events() {
    var target = this.target();

    target.addEventListener('click', function (e) {
      e.preventDefault();
      var thisId = target.getAttribute('data-id');
      var loc = hashLocation();

      loc.set('query', {
        id: thisId
      });
    });
  }
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

var demoImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAACNCAIAAADOy0hJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAADcSURBVHja7NAxAQAACAMgtej6t7CCjx9EoJMUN6NAlixZsmTJUiBLlixZsmQpkCVLlixZshTIkiVLlixZCmTJkiVLliwFsmTJkiVLlgJZsmTJkiVLgSxZsmTJkqVAlixZsmTJUiBLlixZsmQpkCVLlixZshTIkiVLlixZCmTJkiVLliwFsmTJkiVLlgJZsmTJkiVLgSxZsmTJkqVAlixZsmTJUiBLlixZsmQpkCVLlixZshTIkiVLlixZCmTJkiVLliwFsmTJkiVLlgJZsmTJkiVLgawXCwAA//8DAJQ1AjdpViEZAAAAAElFTkSuQmCC';

exports.default = class extends _domrA.ActiveComponent {
  constructor() {
    var img = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : demoImg;
    var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'tv-show-card--img';

    super(className);
    this.img = img.replace('http:', 'https:');
    this.className = className;
  }

  dom() {
    return '\n      <div class="' + this.className + '" data-src="' + this.img + '">\n        <img src= "' + demoImg + '"/> \n      </div>\n    ';
  }

  events() {
    var target = this.target();
    var dataSrc = target.getAttribute('data-src');
    var img = target.querySelector('img');

    img.setAttribute('src', dataSrc);
  }
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

var _makeTvShowCards = __webpack_require__(16);

var _makeTvShowCards2 = _interopRequireDefault(_makeTvShowCards);

var _loadApi = __webpack_require__(6);

var _loadApi2 = _interopRequireDefault(_loadApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _domrA.ActiveComponent {
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

  events() {
    var target = this.target();
    var api = 'https://api.tvmaze.com/search/shows?q=' + this.show;
    (0, _loadApi2.default)(api, target, _makeTvShowCards2.default);
  }
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

var _TvShowExtendedInfo = __webpack_require__(63);

var _TvShowExtendedInfo2 = _interopRequireDefault(_TvShowExtendedInfo);

var _loadApi = __webpack_require__(6);

var _loadApi2 = _interopRequireDefault(_loadApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeExtendedCard(obj, target) {
  var tvShowExtendedHolder = target;

  var tvShowCard = new _TvShowExtendedInfo2.default(obj);
  tvShowCard.replaceContentOf(tvShowExtendedHolder);
}

exports.default = class extends _domrA.ActiveComponent {
  constructor(showId) {
    super();
    this.showId = showId;
  }

  dom() {
    return '\n      <div class="tv-show-extended-holder" id="tv-show-extended-holder">\n      </div>\n    ';
  }

  events() {
    var target = this.target();
    var api = 'https://api.tvmaze.com/shows/' + this.showId + '?embed=cast';
    (0, _loadApi2.default)(api, target, makeExtendedCard);
  }
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

var _TvShowExtendedInfoClose = __webpack_require__(64);

var _TvShowExtendedInfoClose2 = _interopRequireDefault(_TvShowExtendedInfoClose);

var _TvShowBackgroundImg = __webpack_require__(65);

var _TvShowBackgroundImg2 = _interopRequireDefault(_TvShowBackgroundImg);

var _TvShowLatestEpisode = __webpack_require__(66);

var _TvShowLatestEpisode2 = _interopRequireDefault(_TvShowLatestEpisode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Network(network) {
  return '\n    ' + (network ? '<span class="tv-show-card--network">' + network.name + '</span>' : '') + '\n  ';
}

function Status(status) {
  var showStatus = status;
  return '\n    ' + (showStatus === 'Ended' ? '<span class="wee-lozenge wee-lozenge--bold--danger"> <span>' + status + '</span></span>' : '') + '\n  ';
}

function makeEpisode(episodeId) {
  var tvShowLatestEpisode = new _TvShowLatestEpisode2.default(episodeId);

  return '\n    ' + (episodeId ? '' + tvShowLatestEpisode.render() : '') + '\n  ';
}

function LastEpisode(previousepisode) {
  var epId = void 0;

  if (previousepisode) {
    epId = previousepisode.href;
  }

  return '\n    <div class="tv-show-card--status-holder">\n      ' + makeEpisode(epId) + '\n    </div>\n  ';
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

exports.default = class extends _domrA.Component {
  constructor(show) {
    super();
    this.show = show;
    this.img = this.show.image;
    this.name = this.show.name;
    this.genre = this.show.genres;
    this.summary = this.show.summary;
    this.network = this.show.network;
    this.cast = this.show._embedded.cast;
    this.status = this.show.status;
    this.previousepisode = this.show._links.previousepisode;
  }

  dom() {
    var Close = new _TvShowExtendedInfoClose2.default();
    var image = '';
    if (this.img) {
      image = this.img.original;
    }
    var SideA = new _TvShowBackgroundImg2.default(image, 'tv-show-extended-side tv-show-extended-side--a');

    return '\n      <div class="tv-show-extended-info" id="tv-show-extended-info">\n        ' + SideA.render() + '\n        <div class="tv-show-extended-side tv-show-extended-side--b">\n          ' + Close.render() + '\n          <div class="tv-show-extended--name">\n            <h1>' + this.name + ' ' + Status(this.status) + '</h1>\n            ' + Network(this.network) + '\n          </div>\n          <div class="tv-show-extended--scrollable">\n              ' + Genres(this.genre) + '\n              ' + LastEpisode(this.previousepisode) + '\n              ' + Summary(this.summary) + '\n              ' + OfficalLinks(this.show) + '\n              <div class="tv-show-extended--cast">\n                <table>\n                  <p><strong>Cast:</strong></p>\n                  ' + Cast(this.cast) + '\n                </table>\n              </div>\n          </div>\n        </div>\n      </div>\n    ';
  }
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

exports.default = class extends _domrA.ActiveComponent {
  constructor() {
    super('tv-show-extended-delete');
  }

  dom() {
    return '\n      <a href="#" class="tv-show-extended-delete">\n        <svg role="img" class="icon close"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-close"></use></svg>\n      </a>\n    ';
  }

  events() {
    var target = this.target();
    target.addEventListener('click', function (e) {
      e.preventDefault();
      history.back();
    });
  }
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

exports.default = class extends _domrA.Component {
  constructor(img) {
    var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    super();
    this.img = img.replace('http:', 'https:');
    this.className = className;
  }

  dom() {
    return '\n      <div class="tv-show-bg-img ' + this.className + '" ' + (this.img ? 'style="background-image:url(' + this.img + ')"' : '') + '>\n      </div>\n    ';
  }
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

var _TvShowEpisode = __webpack_require__(67);

var _TvShowEpisode2 = _interopRequireDefault(_TvShowEpisode);

var _loadApi = __webpack_require__(6);

var _loadApi2 = _interopRequireDefault(_loadApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getLatestEpisode(obj, target) {
  var tvShowLatestEpisodeHolder = target;
  var tvShowEpisode = new _TvShowEpisode2.default(obj);

  tvShowEpisode.addTo(tvShowLatestEpisodeHolder);
}

exports.default = class extends _domrA.ActiveComponent {
  constructor(episodeId) {
    super('tv-show-latest-episode');
    this.http = episodeId.replace('http:', 'https:');
    this.api = this.http;
  }

  dom() {
    return '\n      <div class="tv-show-latest-episode-holder">\n      </div>\n    ';
  }

  events() {
    var target = this.target();
    (0, _loadApi2.default)(this.api, target, getLatestEpisode);
  }
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _domrA = __webpack_require__(0);

function Time(timestamp) {
  var d = new Date(timestamp);
  var localDate = d.toLocaleDateString();

  return '<span class="tv-show-ep-time wee-lozenge wee-lozenge--info">' + localDate + '</span>';
}

exports.default = class extends _domrA.Component {
  constructor(show) {
    super();
    this.show = show;
    this.season = this.show.season;
    this.episode = this.show.number;
    this.name = this.show.name;
    this.timestamp = this.show.airstamp;
  }

  dom() {
    return '\n      <div>\n        <span class="tv-show-ep-season wee-badge wee-badge--primary"> S' + this.season + ' E' + this.episode + '</span>\n        ' + Time(this.timestamp) + '\n        <span class="">' + this.name + '</span>\n      </div>\n    ';
  }

};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (data) {
  var wrapper = document.getElementById('wrapper');
  wrapper.innerHTML = '<h2>Check browser console</h2>';
  logger.info(data, '');
};

var _Domr = __webpack_require__(69);

var logger = new _Domr.Logger('Dynamic Routes 2');

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utils = exports.Logger = exports.Router = exports.ActiveComponent = exports.Component = undefined;

var _Component = __webpack_require__(17);

var _Component2 = _interopRequireDefault(_Component);

var _ActiveComponent = __webpack_require__(71);

var _ActiveComponent2 = _interopRequireDefault(_ActiveComponent);

var _Router = __webpack_require__(74);

var _Router2 = _interopRequireDefault(_Router);

var _Logger = __webpack_require__(3);

var _Logger2 = _interopRequireDefault(_Logger);

var _utils = __webpack_require__(79);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Component = _Component2.default;
exports.ActiveComponent = _ActiveComponent2.default;
exports.Router = _Router2.default;
exports.Logger = _Logger2.default;
exports.utils = _utils2.default;

/***/ }),
/* 70 */
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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Component = __webpack_require__(17);

var _Component2 = _interopRequireDefault(_Component);

var _Logger = __webpack_require__(3);

var _Logger2 = _interopRequireDefault(_Logger);

var _lookup = __webpack_require__(72);

var _lookup2 = _interopRequireDefault(_lookup);

var _randomizer = __webpack_require__(73);

var _randomizer2 = _interopRequireDefault(_randomizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = new _Logger2.default();

exports.default = class extends _Component2.default {
  constructor() {
    var _this;

    var domrid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'domr-active-component';

    _this = super();
    this.domrid = domrid + '-' + (0, _randomizer2.default)(7);
    this.lookup = function () {
      return (0, _lookup2.default)(_this.domrid);
    };
    this.target = this.lookup;
  }

  events() {
    var _this2 = this;

    var target = this.target();
    target.addEventListener('click', function () {
      logger.log('Default Event for ' + _this2.domrid);
    });
  }

  fireEventAfterTimeout() {
    var _this3 = this;

    setTimeout(function () {
      if (_this3.lookup()) {
        _this3.events();
      }
    }, 50);
  }

  renderNodes() {
    return this.createElement(this.dom(), this.domrid);
  }
};

/***/ }),
/* 72 */
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
/* 73 */
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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Logger = __webpack_require__(3);

var _Logger2 = _interopRequireDefault(_Logger);

var _addView = __webpack_require__(75);

var _addView2 = _interopRequireDefault(_addView);

var _hashLocation = __webpack_require__(7);

var _hashLocation2 = _interopRequireDefault(_hashLocation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = new _Logger2.default();
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
    this.redirectDefault = config.redirectDefault || false;
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
        logger.error('Page Not Found');
      }
    }

    this.reloadOnHashChange();
  }
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cloneObject = __webpack_require__(76);

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
/* 76 */
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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hashLocation = __webpack_require__(7);

var _hashLocation2 = _interopRequireDefault(_hashLocation);

var _Logger = __webpack_require__(3);

var _Logger2 = _interopRequireDefault(_Logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = new _Logger2.default();

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
    logger.error('incorrect set location params');
  }
}

exports.default = hashLocationSet;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hashLocation = __webpack_require__(7);

var _hashLocation2 = _interopRequireDefault(_hashLocation);

var _Logger = __webpack_require__(3);

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

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hashLocation = __webpack_require__(7);

var _hashLocation2 = _interopRequireDefault(_hashLocation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var utils = {
  hashLocation: _hashLocation2.default
};

exports.default = utils;

/***/ }),
/* 80 */
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
/* 81 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);