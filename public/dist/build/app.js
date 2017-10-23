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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Component = __webpack_require__(4);

var _Component2 = _interopRequireDefault(_Component);

var _ActiveComponent = __webpack_require__(17);

var _ActiveComponent2 = _interopRequireDefault(_ActiveComponent);

var _Router = __webpack_require__(18);

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Domr = {
  Component: _Component2.default,
  ActiveComponent: _ActiveComponent2.default,
  Router: _Router2.default
};

exports.default = Domr;

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

var _getListArray = __webpack_require__(27);

var _getListArray2 = _interopRequireDefault(_getListArray);

var _saveToLocalStorage = __webpack_require__(7);

var _saveToLocalStorage2 = _interopRequireDefault(_saveToLocalStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function saveListSnapshot() {
  var snapshot = (0, _getListArray2.default)();

  (0, _saveToLocalStorage2.default)(snapshot);
}

exports.default = saveListSnapshot;

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _createElement = __webpack_require__(14);

var _createElement2 = _interopRequireDefault(_createElement);

var _lookup = __webpack_require__(15);

var _lookup2 = _interopRequireDefault(_lookup);

var _randomizer = __webpack_require__(16);

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

    var domrid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'component';
    var random = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, _class);

    this.makeId = function () {
      var thisId = domrid;
      if (random) {
        thisId = domrid + '-' + (0, _randomizer2.default)(7);
      }
      return thisId;
    };
    this.domrid = this.makeId();
    this.parentDefault = defaults.parent;
    this.domContent = defaults.dom;
    this.lookup = function () {
      return (0, _lookup2.default)(_this.domrid);
    };
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
    key: 'fireEventAfterTimeout',
    value: function fireEventAfterTimeout() {
      return '';
    }
  }, {
    key: 'addTo',
    value: function addTo() {
      var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.parentDefault;

      parent.insertAdjacentHTML('beforeend', this.renderNodes());
      this.fireEventAfterTimeout();
    }
  }, {
    key: 'addFromStartTo',
    value: function addFromStartTo() {
      var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.parentDefault;

      parent.insertAdjacentHTML('afterbegin', this.renderNodes());
      this.fireEventAfterTimeout();
    }
  }, {
    key: 'addBefore',
    value: function addBefore(sibling) {
      if (sibling) {
        sibling.insertAdjacentHTML('beforebegin', this.renderNodes());
        this.fireEventAfterTimeout();
      } else {
        console.log('sibling not found');
      }
    }
  }, {
    key: 'addAfter',
    value: function addAfter(sibling) {
      if (sibling) {
        sibling.insertAdjacentHTML('afterend', this.renderNodes());
        this.fireEventAfterTimeout();
      } else {
        console.log('sibling not found');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      this.fireEventAfterTimeout();
      return this.renderNodes();
    }
  }]);

  return _class;
}();

exports.default = _class;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Examples = __webpack_require__(21);

var _Examples2 = _interopRequireDefault(_Examples);

var _CheckList = __webpack_require__(23);

var _CheckList2 = _interopRequireDefault(_CheckList);

var _DynamicRouteName = __webpack_require__(31);

var _DynamicRouteName2 = _interopRequireDefault(_DynamicRouteName);

var _Counter = __webpack_require__(33);

var _Counter2 = _interopRequireDefault(_Counter);

var _TreeView = __webpack_require__(39);

var _TreeView2 = _interopRequireDefault(_TreeView);

var _TvSearchView = __webpack_require__(45);

var _TvSearchView2 = _interopRequireDefault(_TvSearchView);

var _Test = __webpack_require__(59);

var _Test2 = _interopRequireDefault(_Test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
  name: 'index',
  path: '/',
  view: _Examples2.default,
  pageTitle: 'Domr Examples',
  isDefault: true
}, {
  name: 'list',
  path: '/list',
  view: _CheckList2.default
}, {
  name: 'Counter',
  path: '/counter',
  view: _Counter2.default
}, {
  name: 'Dynamic Route',
  path: '/got/:house/*',
  psudoPath: '/got/stark/?name=arya&alias=no_one/',
  view: _DynamicRouteName2.default
}, {
  name: 'Dynamic Route 2',
  path: '/speed/*',
  psudoPath: '/speed/?min=50&max=60',
  view: _Test2.default
}, {
  name: 'Tree',
  path: '/tree',
  view: _TreeView2.default
}, {
  name: 'Tv Shows AJAX Search',
  path: '/tvshows/',
  view: _TvSearchView2.default
}];

exports.default = routes;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Domr = __webpack_require__(0);

var _Domr2 = _interopRequireDefault(_Domr);

var _ChecklistText = __webpack_require__(26);

var _ChecklistText2 = _interopRequireDefault(_ChecklistText);

var _ChecklistCheck = __webpack_require__(28);

var _ChecklistCheck2 = _interopRequireDefault(_ChecklistCheck);

var _ChecklistDeleteItem = __webpack_require__(29);

var _ChecklistDeleteItem2 = _interopRequireDefault(_ChecklistDeleteItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = _Domr2.default.Component;

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var isChecked = arguments[1];

    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

    _this.text = text;
    _this.isChecked = isChecked;
    return _this;
  }

  _createClass(_class, [{
    key: 'dom',
    value: function dom() {
      var checklistCheck = new _ChecklistCheck2.default(this.isChecked);
      var checklistDeleteItem = new _ChecklistDeleteItem2.default();
      var checklistText = new _ChecklistText2.default(this.isChecked, this.text);

      return '\n      <li> ' + checklistCheck.render() + ' ' + checklistText.render() + ' ' + checklistDeleteItem.render() + '</li>\n    ';
    }
  }]);

  return _class;
}(Component);

exports.default = _class;

/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Domr = __webpack_require__(0);

var _Domr2 = _interopRequireDefault(_Domr);

var _TreeDelete = __webpack_require__(9);

var _TreeDelete2 = _interopRequireDefault(_TreeDelete);

var _TreeMakeFolder = __webpack_require__(41);

var _TreeMakeFolder2 = _interopRequireDefault(_TreeMakeFolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = _Domr2.default.Component;

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

    _this.text = text;
    _this.name = name;
    return _this;
  }

  _createClass(_class, [{
    key: 'dom',
    value: function dom() {
      var treeMakeFolder = new _TreeMakeFolder2.default();
      var treeDelete = new _TreeDelete2.default();

      return '\n      <li class="tree-item" > <span class="tree-item--title">' + this.text + '</span> ' + treeMakeFolder.render() + ' ' + treeDelete.render() + '</li>\n    ';
    }
  }]);

  return _class;
}(Component);

exports.default = _class;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Domr = __webpack_require__(0);

var _Domr2 = _interopRequireDefault(_Domr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActiveComponent = _Domr2.default.ActiveComponent;

var _class = function (_ActiveComponent) {
  _inherits(_class, _ActiveComponent);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'tree-delete'));
  }

  _createClass(_class, [{
    key: 'dom',
    value: function dom() {
      return '\n      <a href="#" class="tree-delete">[ \n      <svg role="img" class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-trash"></use></svg>\n       ]</a>\n    ';
    }
  }, {
    key: 'events',
    value: function events() {
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
  }]);

  return _class;
}(ActiveComponent);

exports.default = _class;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Domr = __webpack_require__(0);

var _Domr2 = _interopRequireDefault(_Domr);

var _TreeFolderExpand = __webpack_require__(42);

var _TreeFolderExpand2 = _interopRequireDefault(_TreeFolderExpand);

var _TreeDelete = __webpack_require__(9);

var _TreeDelete2 = _interopRequireDefault(_TreeDelete);

var _TreeNewLi = __webpack_require__(43);

var _TreeNewLi2 = _interopRequireDefault(_TreeNewLi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = _Domr2.default.Component;

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var ulContent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var isOpen = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var focusOnFolderMaker = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var level = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

    _this.text = text;
    _this.ulContent = ulContent;
    _this.isOpen = isOpen;
    _this.focusOnFolderMaker = focusOnFolderMaker;
    _this.level = level;
    return _this;
  }

  _createClass(_class, [{
    key: 'dom',
    value: function dom() {
      var treeDelete = new _TreeDelete2.default();
      var treeFolderExpand = new _TreeFolderExpand2.default();
      var DeleteBtn = treeDelete.render();
      var FolderExpandBtn = treeFolderExpand.render();
      var treeNewLi = new _TreeNewLi2.default(this.focusOnFolderMaker);

      return '\n      <li data-level="' + this.level + '" class="tree-item--folder ' + (this.level >= 3 ? 'tree-item--folder-overflow' : '') + '">\n        <div class="tree-folder ' + (this.isOpen ? 'expanded' : '') + '">\n          <strong>' + this.text + '</strong> ' + FolderExpandBtn + ' ' + DeleteBtn + '\n        </div>\n        <ul>\n          ' + this.ulContent + '\n          ' + treeNewLi.render() + '\n        </ul>\n      </li>\n    ';
    }
  }]);

  return _class;
}(Component);

exports.default = _class;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TvShowCard = __webpack_require__(48);

var _TvShowCard2 = _interopRequireDefault(_TvShowCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function callApi(show, target) {
  var xmlhttp = new XMLHttpRequest();
  var tvShow = encodeURI(show);
  var api = 'https://api.tvmaze.com/search/shows?q=' + tvShow;
  xmlhttp.open('GET', api, true);
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4) {
      if (xmlhttp.status === 200) {
        var obj = JSON.parse(xmlhttp.responseText);
        var tvShowCardsHolder = target;
        tvShowCardsHolder.innerHTML = '';
        obj.forEach(function (element) {
          var tvShowCard = new _TvShowCard2.default(element);
          tvShowCard.addTo(tvShowCardsHolder);
        });
      }
    }
  };
  xmlhttp.send(null);
}

exports.default = callApi;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(13);

__webpack_require__(60);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Domr = __webpack_require__(0);

var _Domr2 = _interopRequireDefault(_Domr);

var _routes = __webpack_require__(5);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = _Domr2.default.Router;

var router = new Router(_routes2.default, {
  routeData: true,
  redirectDefault: true
});

router.set();

/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function Lookup(elmId) {
  var targetDataTag = '[data-domr-id="' + elmId + '"]';
  var targetSelector = document.querySelector(targetDataTag);
  var targetDuplicate = document.querySelectorAll(targetDataTag)[1];

  if (targetSelector) {
    if (targetDuplicate) {
      console.log(targetDataTag + ' Duplicate found');
      console.log('data-domr-id ids should be unique');
    } else {
      return document.querySelector('[data-domr-id="' + elmId + '"]');
    }
  } else {
    console.log(elmId + ' does not exist');
    console.log('Could not find ' + targetDataTag);
  }
}

exports.default = Lookup;

/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(4);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class(domrid) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, domrid, true));

    _this.target = _this.lookup;
    return _this;
  }

  _createClass(_class, [{
    key: 'events',
    value: function events() {
      var _this2 = this;

      var target = this.target();
      target.addEventListener('click', function () {
        console.log('Default Event for ' + _this2.domrid);
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

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _checkForFunction = __webpack_require__(19);

var _checkForFunction2 = _interopRequireDefault(_checkForFunction);

var _cloneObject = __webpack_require__(20);

var _cloneObject2 = _interopRequireDefault(_cloneObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaults = {
  routes: []
};

function reloadOnHashChange() {
  addEventListener('hashchange', function () {
    location.reload();
  });
}

function searchQuery(hash) {
  var hashFilter = hash.split('?');
  var queryString = hashFilter[1];

  if (queryString && queryString !== '') {
    var obj = {};
    var query = queryString.replace(/\//g, '').split('&');

    for (var i = 0; i < query.length; i++) {
      var part = query[i];
      var splitPart = part.split('=');
      var field = splitPart[0];
      var value = splitPart[1];

      obj[field] = value;
    }
    return obj;
  } else {
    return '';
  }
}

function addView(view, data) {
  var query = '';

  if (location.hash.includes('?')) {
    query = searchQuery(location.hash);
  }

  data.query = query;
  (0, _checkForFunction2.default)(view, data);
}

var _class = function () {
  function _class() {
    var routes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaults.routes;
    var config = arguments[1];

    _classCallCheck(this, _class);

    this.routes = routes;
    this.routeData = config.routeData || false;
    this.redirectDefault = config.redirectDefault || false;
    this.hash = location.hash.replace('#', '');
    this.cloneObject = _cloneObject2.default;
    this.addView = addView;
    this.reloadOnHashChange = reloadOnHashChange;
  }

  _createClass(_class, [{
    key: 'set',
    value: function set() {
      var _this = this;

      var toDefault = true;
      this.routes.forEach(function (route) {
        var routeDataVal = [];
        var routePathMod = route.path.replace(/([:*])(\w+)/g, function (full, dots, name) {
          routeDataVal.push(name);
          return '([^/]+)';
        }) + '(?:/|$)';
        var routePathModRegEx = _this.hash.match(new RegExp(routePathMod));
        var View = function View(r) {
          if (_this.routeData) {
            var data = _this.cloneObject(r, ['view']);
            _this.addView(r.view, data);
          } else {
            _this.addView(r.view);
          }
        };

        if (_this.hash === '/' && route.path === '/') {
          View(route);
          toDefault = false;
        } else if (routePathModRegEx && route.path !== '/') {
          var params = routePathModRegEx.slice(1, routePathModRegEx.length).reduce(function (params, value, index) {
            if (params === null) params = {};
            params[routeDataVal[index]] = value;
            return params;
          }, null);

          route.metadata = params || '';

          View(route);
          toDefault = false;
        }
      });

      if (toDefault) {
        var routeDefault = this.routes.find(function (o) {
          return o.isDefault === true;
        });

        if (this.redirectDefault && routeDefault) {
          location.hash = '#' + routeDefault.path;
        } else {
          console.error('Page Not Found');
        }
      }

      this.reloadOnHashChange();
    }
  }]);

  return _class;
}();

exports.default = _class;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function checkForFunction(view) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (typeof view === 'function') {
    view(data);
  } else {
    view;
  }
}

exports.default = checkForFunction;

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

exports.default = function (data) {
  var examplesList = new _ExamplesList2.default(_routes2.default);
  var wrapper = document.getElementById('wrapper');

  examplesList.addTo(wrapper);
  (0, _setPageTitle2.default)(data);
};

var _setPageTitle = __webpack_require__(1);

var _setPageTitle2 = _interopRequireDefault(_setPageTitle);

var _ExamplesList = __webpack_require__(22);

var _ExamplesList2 = _interopRequireDefault(_ExamplesList);

var _routes = __webpack_require__(5);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Domr = __webpack_require__(0);

var _Domr2 = _interopRequireDefault(_Domr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = _Domr2.default.Component;

function makeList(list) {
  if (!list.isDefault) {
    return '\n      <li>\n        <a href="#' + (list.psudoPath ? '' + list.psudoPath : '' + list.path) + '" >' + list.name + '</a>\n      </li>\n    ';
  }

  return '';
}

var _class = function (_Container) {
  _inherits(_class, _Container);

  function _class() {
    var links = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

    _this.links = links;
    return _this;
  }

  _createClass(_class, [{
    key: 'dom',
    value: function dom() {
      return '\n        <div class="examples-list">\n          <h1>Examples</h1>\n          <ul>\n            ' + this.links.map(function (link) {
        return '' + makeList(link);
      }).join('') + '\n          </ul>\n        </div>\n    ';
    }
  }]);

  return _class;
}(Container);

exports.default = _class;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (data) {
  var containerCheckbox = new _ContainerCheckbox2.default('container-checkbox-random-list', listItems);
  var wrapper = document.getElementById('wrapper');

  containerCheckbox.addTo(wrapper);
  (0, _setPageTitle2.default)(data);
};

var _setPageTitle = __webpack_require__(1);

var _setPageTitle2 = _interopRequireDefault(_setPageTitle);

var _ContainerCheckbox = __webpack_require__(24);

var _ContainerCheckbox2 = _interopRequireDefault(_ContainerCheckbox);

var _saveToLocalStorage = __webpack_require__(7);

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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Domr = __webpack_require__(0);

var _Domr2 = _interopRequireDefault(_Domr);

var _CheckListUl = __webpack_require__(25);

var _CheckListUl2 = _interopRequireDefault(_CheckListUl);

var _AddNewListItem = __webpack_require__(30);

var _AddNewListItem2 = _interopRequireDefault(_AddNewListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = _Domr2.default.Component;

var _class = function (_Container) {
  _inherits(_class, _Container);

  function _class() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'container-checkbox-1';
    var list = arguments[1];

    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, id));

    _this.list = list;
    return _this;
  }

  _createClass(_class, [{
    key: 'dom',
    value: function dom() {
      var checkListUl = new _CheckListUl2.default(this.list);
      var addNewListItem = new _AddNewListItem2.default();

      var Ul = checkListUl.render();
      var InputAddNew = addNewListItem.render();

      return '\n      <div class="container-ul" id="' + this.id + '">\n        ' + InputAddNew + '\n        ' + Ul + '\n      </div>\n    ';
    }
  }]);

  return _class;
}(Container);

exports.default = _class;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Domr = __webpack_require__(0);

var _Domr2 = _interopRequireDefault(_Domr);

var _CheckListLi = __webpack_require__(6);

var _CheckListLi2 = _interopRequireDefault(_CheckListLi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = _Domr2.default.Component;

function makeList(itm) {
  var checkListLi = new _CheckListLi2.default(itm.msg, itm.isChecked);
  return checkListLi.render();
}

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class(list) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

    _this.list = list;
    return _this;
  }

  _createClass(_class, [{
    key: 'dom',
    value: function dom() {
      return '\n      <ul id="checklist-ul">\n        ' + this.list.map(function (itm) {
        return '' + makeList(itm);
      }).join('') + '\n      </ul>\n    ';
    }
  }]);

  return _class;
}(Component);

exports.default = _class;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Domr = __webpack_require__(0);

var _Domr2 = _interopRequireDefault(_Domr);

var _saveListSnapshot = __webpack_require__(2);

var _saveListSnapshot2 = _interopRequireDefault(_saveListSnapshot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActiveComponent = _Domr2.default.ActiveComponent;
var clearContentEditable = function clearContentEditable() {
  var checklistText = document.querySelectorAll('.checklist-text');

  for (var i = 0; i < checklistText.length; i++) {
    checklistText[i].setAttribute('contenteditable', 'false');
  }
};

var _class = function (_ActiveComponent) {
  _inherits(_class, _ActiveComponent);

  function _class() {
    var isChecked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'checklist-text'));

    _this.isChecked = isChecked;
    _this.text = text;
    return _this;
  }

  _createClass(_class, [{
    key: 'dom',
    value: function dom() {
      return '\n      <span class="checklist-text ' + (this.isChecked ? 'checklist-text--strike' : '') + '">' + this.text + '</span>\n    ';
    }
  }, {
    key: 'events',
    value: function events() {
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
  }]);

  return _class;
}(ActiveComponent);

exports.default = _class;

/***/ }),
/* 27 */
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Domr = __webpack_require__(0);

var _Domr2 = _interopRequireDefault(_Domr);

var _saveListSnapshot = __webpack_require__(2);

var _saveListSnapshot2 = _interopRequireDefault(_saveListSnapshot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActiveComponent = _Domr2.default.ActiveComponent;

var _class = function (_ActiveComponent) {
  _inherits(_class, _ActiveComponent);

  function _class() {
    var isChecked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'checklist-check'));

    _this.isChecked = isChecked;
    return _this;
  }

  _createClass(_class, [{
    key: 'dom',
    value: function dom() {
      return '\n      <input type="checkbox" ' + (this.isChecked ? 'checked' : '') + '/>\n    ';
    }
  }, {
    key: 'events',
    value: function events() {
      var target = this.target();
      target.addEventListener('click', function () {
        var checklistText = target.parentElement.querySelector('.checklist-text');

        checklistText.classList.toggle('checklist-text--strike');
        (0, _saveListSnapshot2.default)();
      });
    }
  }]);

  return _class;
}(ActiveComponent);

exports.default = _class;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Domr = __webpack_require__(0);

var _Domr2 = _interopRequireDefault(_Domr);

var _saveListSnapshot = __webpack_require__(2);

var _saveListSnapshot2 = _interopRequireDefault(_saveListSnapshot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActiveComponent = _Domr2.default.ActiveComponent;

var _class = function (_ActiveComponent) {
  _inherits(_class, _ActiveComponent);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'checklist-delete-item'));
  }

  _createClass(_class, [{
    key: 'dom',
    value: function dom() {
      return '\n      <a href="#">&#10006;</a>\n    ';
    }
  }, {
    key: 'events',
    value: function events() {
      var target = this.target();
      target.addEventListener('click', function (e) {
        e.preventDefault();
        var parent = target.parentElement;
        var grandParent = parent.parentElement;

        grandParent.removeChild(parent);
        (0, _saveListSnapshot2.default)();
      });
    }
  }]);

  return _class;
}(ActiveComponent);

exports.default = _class;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Domr = __webpack_require__(0);

var _Domr2 = _interopRequireDefault(_Domr);

var _CheckListLi = __webpack_require__(6);

var _CheckListLi2 = _interopRequireDefault(_CheckListLi);

var _saveListSnapshot = __webpack_require__(2);

var _saveListSnapshot2 = _interopRequireDefault(_saveListSnapshot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActiveComponent = _Domr2.default.ActiveComponent;

var _class = function (_ActiveComponent) {
  _inherits(_class, _ActiveComponent);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'add-new'));
  }

  _createClass(_class, [{
    key: 'dom',
    value: function dom() {
      return '\n      <input type="text" />\n    ';
    }
  }, {
    key: 'events',
    value: function events() {
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
  }]);

  return _class;
}(ActiveComponent);

exports.default = _class;

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
  console.log(query);
  sayMyName.addTo(wrapper);
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Domr = __webpack_require__(0);

var _Domr2 = _interopRequireDefault(_Domr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = _Domr2.default.Component;

function personSpliter(person) {
  var splitPerson = person.split('&');
  var obj = {};

  for (var i = 0; i < splitPerson.length; i++) {
    var thisSplit = splitPerson[i];
    if (thisSplit) {
      var splitTerm = thisSplit.split('=');
      var field = splitTerm[0];
      var value = splitTerm[1];

      obj[field] = value.replace(/_/g, ' ');
    }
  }

  return obj;
}

var _class = function (_Container) {
  _inherits(_class, _Container);

  function _class() {
    var house = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'arya stark';
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var alias = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'say-my-name'));

    _this.house = house.replace(/_/g, ' ');
    _this.name = name.replace(/_/g, ' ');
    _this.alias = alias.replace(/_/g, ' ');
    return _this;
  }

  _createClass(_class, [{
    key: 'dom',
    value: function dom() {
      return '\n      <div class="say-my-name">\n        <h2> <em>Your are</em> <strong>' + this.name + '</strong> </h2>\n        <h3> <em>Of House</em> <strong>' + this.house + '</strong> </h3>\n        <h3> <em>Known to the world as</em> <strong>' + this.alias + '</strong> </h3>\n      </div>\n    ';
    }
  }]);

  return _class;
}(Container);

exports.default = _class;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (data) {
  var counterSet = new _CounterSet2.default(counterVal);
  var wrapper = document.getElementById('wrapper');

  counterSet.addTo(wrapper);
  (0, _setPageTitle2.default)(data);
};

var _setPageTitle = __webpack_require__(1);

var _setPageTitle2 = _interopRequireDefault(_setPageTitle);

var _CounterSet = __webpack_require__(34);

var _CounterSet2 = _interopRequireDefault(_CounterSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var counterVal = ['1', '5', '-10', '0', '1000', '-999'];

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Domr = __webpack_require__(0);

var _Domr2 = _interopRequireDefault(_Domr);

var _CounterElm = __webpack_require__(35);

var _CounterElm2 = _interopRequireDefault(_CounterElm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = _Domr2.default.Component;

function makeCounters(val) {
  var counterElm = new _CounterElm2.default(val);

  return '' + counterElm.render();
}

var _class = function (_Container) {
  _inherits(_class, _Container);

  function _class() {
    var counterVal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

    _this.counterVal = counterVal;
    return _this;
  }

  _createClass(_class, [{
    key: 'dom',
    value: function dom() {
      return '\n        <div class="counter-container">\n          ' + this.counterVal.map(function (counter) {
        return '' + makeCounters(counter);
      }).join('') + '\n        </div>\n    ';
    }
  }]);

  return _class;
}(Container);

exports.default = _class;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Domr = __webpack_require__(0);

var _Domr2 = _interopRequireDefault(_Domr);

var _changeColorBasedOnValue = __webpack_require__(3);

var _changeColorBasedOnValue2 = _interopRequireDefault(_changeColorBasedOnValue);

var _CounterBtnIncrement = __webpack_require__(36);

var _CounterBtnIncrement2 = _interopRequireDefault(_CounterBtnIncrement);

var _CounterBtnDecrement = __webpack_require__(37);

var _CounterBtnDecrement2 = _interopRequireDefault(_CounterBtnDecrement);

var _CounterInput = __webpack_require__(38);

var _CounterInput2 = _interopRequireDefault(_CounterInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = _Domr2.default.Component;

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class() {
    var startValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1';

    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

    _this.startValue = startValue;
    return _this;
  }

  _createClass(_class, [{
    key: 'dom',
    value: function dom() {
      var counterBtnIncrement = new _CounterBtnIncrement2.default();
      var counterBtnDecrement = new _CounterBtnDecrement2.default();
      var counterInput = new _CounterInput2.default(this.startValue);

      var BtnIncrement = counterBtnIncrement.render();
      var BtnDecrement = counterBtnDecrement.render();
      var Input = counterInput.render();

      return '\n      <div class="counter-elm"> ' + BtnDecrement + ' ' + Input + ' ' + BtnIncrement + ' </div>\n    ';
    }
  }]);

  return _class;
}(Component);

exports.default = _class;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Domr = __webpack_require__(0);

var _Domr2 = _interopRequireDefault(_Domr);

var _changeColorBasedOnValue = __webpack_require__(3);

var _changeColorBasedOnValue2 = _interopRequireDefault(_changeColorBasedOnValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActiveComponent = _Domr2.default.ActiveComponent;

var _class = function (_ActiveComponent) {
  _inherits(_class, _ActiveComponent);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'btn-inc'));
  }

  _createClass(_class, [{
    key: 'dom',
    value: function dom() {
      return '\n      <a class="counter-btn--inc"/> + </a>\n    ';
    }
  }, {
    key: 'events',
    value: function events() {
      var target = this.target();
      target.addEventListener('click', function (e) {
        e.preventDefault();
        var counter = target.parentElement.querySelector('input');
        var counterValue = Number(counter.value);

        counter.value = counterValue + 1;
        counter.style.color = (0, _changeColorBasedOnValue2.default)(counter.value);
      });
    }
  }]);

  return _class;
}(ActiveComponent);

exports.default = _class;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Domr = __webpack_require__(0);

var _Domr2 = _interopRequireDefault(_Domr);

var _changeColorBasedOnValue = __webpack_require__(3);

var _changeColorBasedOnValue2 = _interopRequireDefault(_changeColorBasedOnValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActiveComponent = _Domr2.default.ActiveComponent;

var _class = function (_ActiveComponent) {
  _inherits(_class, _ActiveComponent);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'btn-dec'));
  }

  _createClass(_class, [{
    key: 'dom',
    value: function dom() {
      return '\n      <a class="counter-btn--dec"/> - </a>\n    ';
    }
  }, {
    key: 'events',
    value: function events() {
      var target = this.target();
      target.addEventListener('click', function (e) {
        e.preventDefault();
        var counter = target.parentElement.querySelector('input');
        var counterValue = Number(counter.value);

        counter.value = counterValue - 1;
        counter.style.color = (0, _changeColorBasedOnValue2.default)(counter.value);
      });
    }
  }]);

  return _class;
}(ActiveComponent);

exports.default = _class;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Domr = __webpack_require__(0);

var _Domr2 = _interopRequireDefault(_Domr);

var _changeColorBasedOnValue = __webpack_require__(3);

var _changeColorBasedOnValue2 = _interopRequireDefault(_changeColorBasedOnValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActiveComponent = _Domr2.default.ActiveComponent;

var _class = function (_ActiveComponent) {
  _inherits(_class, _ActiveComponent);

  function _class(value) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'counter-input'));

    _this.value = value;
    return _this;
  }

  _createClass(_class, [{
    key: 'dom',
    value: function dom() {
      return '\n      <input type="text" value="' + this.value + '" style="color:' + (0, _changeColorBasedOnValue2.default)(this.value) + '"/>\n    ';
    }
  }, {
    key: 'events',
    value: function events() {
      var target = this.target();
      target.addEventListener('input', function () {
        var value = target.value.replace(/[^\d.-]/g, '');
        target.style.color = (0, _changeColorBasedOnValue2.default)(value);
        target.value = value;
      });
    }
  }]);

  return _class;
}(ActiveComponent);

exports.default = _class;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (data) {
  var tree = new _Tree2.default(_treeArr2.default);
  var wrapper = document.getElementById('wrapper');

  tree.addTo(wrapper);
  (0, _setPageTitle2.default)(data);
};

var _setPageTitle = __webpack_require__(1);

var _setPageTitle2 = _interopRequireDefault(_setPageTitle);

var _Tree = __webpack_require__(40);

var _Tree2 = _interopRequireDefault(_Tree);

var _treeArr = __webpack_require__(44);

var _treeArr2 = _interopRequireDefault(_treeArr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Domr = __webpack_require__(0);

var _Domr2 = _interopRequireDefault(_Domr);

var _TreeLi = __webpack_require__(8);

var _TreeLi2 = _interopRequireDefault(_TreeLi);

var _TreeFolder = __webpack_require__(10);

var _TreeFolder2 = _interopRequireDefault(_TreeFolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = _Domr2.default.Component;

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

var _class = function (_Container) {
  _inherits(_class, _Container);

  function _class() {
    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

    _this.list = list;
    _this.ulContent = '' + _this.list.map(function (itm) {
      return '' + loopList(itm, 0);
    }).join('');
    return _this;
  }

  _createClass(_class, [{
    key: 'dom',
    value: function dom() {
      var treeFolder = new _TreeFolder2.default('List', this.ulContent, 'true');

      return '\n      <div class="tree-container">\n        <ul class="tree-top-list-holder">\n          ' + treeFolder.render() + '\n        </ul>\n      </div>\n    ';
    }
  }]);

  return _class;
}(Container);

exports.default = _class;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Domr = __webpack_require__(0);

var _Domr2 = _interopRequireDefault(_Domr);

var _TreeFolder = __webpack_require__(10);

var _TreeFolder2 = _interopRequireDefault(_TreeFolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActiveComponent = _Domr2.default.ActiveComponent;

var _class = function (_ActiveComponent) {
  _inherits(_class, _ActiveComponent);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'tree-make-folder'));
  }

  _createClass(_class, [{
    key: 'dom',
    value: function dom() {
      return '\n      <a href="#" class="tree-folder-make">[ \n      <svg role="img" class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-folder"></use></svg>\n       ]</a>\n    ';
    }
  }, {
    key: 'events',
    value: function events() {
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
  }]);

  return _class;
}(ActiveComponent);

exports.default = _class;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Domr = __webpack_require__(0);

var _Domr2 = _interopRequireDefault(_Domr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActiveComponent = _Domr2.default.ActiveComponent;

var _class = function (_ActiveComponent) {
  _inherits(_class, _ActiveComponent);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'tree-folder-expand'));
  }

  _createClass(_class, [{
    key: 'dom',
    value: function dom() {
      return '\n      <a href="#" class="tree-folder-expand">[ \n      <svg role="img" class="icon plus"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-plus"></use></svg>\n      <svg role="img" class="icon minus"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-minus"></use></svg>\n       ]</a>\n    ';
    }
  }, {
    key: 'events',
    value: function events() {
      var target = this.target();
      target.addEventListener('click', function (e) {
        e.preventDefault();
        var parent = target.parentElement;

        parent.classList.toggle('expanded');
      });
    }
  }]);

  return _class;
}(ActiveComponent);

exports.default = _class;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Domr = __webpack_require__(0);

var _Domr2 = _interopRequireDefault(_Domr);

var _TreeLi = __webpack_require__(8);

var _TreeLi2 = _interopRequireDefault(_TreeLi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActiveComponent = _Domr2.default.ActiveComponent;

var _class = function (_ActiveComponent) {
  _inherits(_class, _ActiveComponent);

  function _class() {
    var focus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'tree-new-li'));

    _this.focus = focus;
    return _this;
  }

  _createClass(_class, [{
    key: 'dom',
    value: function dom() {
      return '\n      <input type="text" placeholder="New List" class="tree-new-list"/>\n    ';
    }
  }, {
    key: 'events',
    value: function events() {
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
  }]);

  return _class;
}(ActiveComponent);

exports.default = _class;

/***/ }),
/* 44 */
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (data) {
  var tvShow = new _TvShow2.default();
  var wrapper = document.getElementById('wrapper');

  tvShow.addTo(wrapper);
  (0, _setPageTitle2.default)(data);
};

var _setPageTitle = __webpack_require__(1);

var _setPageTitle2 = _interopRequireDefault(_setPageTitle);

var _TvShow = __webpack_require__(46);

var _TvShow2 = _interopRequireDefault(_TvShow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Domr = __webpack_require__(0);

var _Domr2 = _interopRequireDefault(_Domr);

var _SearchTvShow = __webpack_require__(47);

var _SearchTvShow2 = _interopRequireDefault(_SearchTvShow);

var _TvShowCardsHolder = __webpack_require__(58);

var _TvShowCardsHolder2 = _interopRequireDefault(_TvShowCardsHolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = _Domr2.default.Component;

var _class = function (_Container) {
  _inherits(_class, _Container);

  function _class(defaultShow) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'tv-show-container'));

    _this.show = defaultShow;
    return _this;
  }

  _createClass(_class, [{
    key: 'dom',
    value: function dom() {
      var searchTvShow = new _SearchTvShow2.default(this.show);
      var tvShowCardsHolder = new _TvShowCardsHolder2.default(this.show);
      return '\n      <div class="tv-show-container">\n        <div class="tv-show-search-container">\n          ' + searchTvShow.render() + '\n        </div>\n        ' + tvShowCardsHolder.render() + '\n      </div>\n    ';
    }
  }]);

  return _class;
}(Container);

exports.default = _class;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Domr = __webpack_require__(0);

var _Domr2 = _interopRequireDefault(_Domr);

var _tvShowsCallApi = __webpack_require__(11);

var _tvShowsCallApi2 = _interopRequireDefault(_tvShowsCallApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActiveComponent = _Domr2.default.ActiveComponent;

var _class = function (_ActiveComponent) {
  _inherits(_class, _ActiveComponent);

  function _class() {
    var defaultShow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'search-tv-show'));

    _this.show = defaultShow;
    return _this;
  }

  _createClass(_class, [{
    key: 'dom',
    value: function dom() {
      return '\n      <input type="text" id="search-tv-show" value="' + this.show + '" placeholder="Search a Tv Show"/>\n    ';
    }
  }, {
    key: 'events',
    value: function events() {
      var target = this.target();
      var cardHolder = document.getElementById('tv-show-card-holder');
      var timeInterval = 1000;
      var typeTimer = void 0;

      target.addEventListener('input', function () {
        clearTimeout(typeTimer);
        typeTimer = setTimeout(function () {
          (0, _tvShowsCallApi2.default)(target.value, cardHolder);
        }, timeInterval);
      });
    }
  }]);

  return _class;
}(ActiveComponent);

exports.default = _class;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Domr = __webpack_require__(0);

var _Domr2 = _interopRequireDefault(_Domr);

var _TvShowCardImg = __webpack_require__(49);

var _TvShowCardImg2 = _interopRequireDefault(_TvShowCardImg);

var _TvShowExtented = __webpack_require__(50);

var _TvShowExtented2 = _interopRequireDefault(_TvShowExtented);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActiveComponent = _Domr2.default.ActiveComponent;

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

var _class = function (_ActiveComponent) {
  _inherits(_class, _ActiveComponent);

  function _class(show) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'tv-show-card'));

    _this.show = show.show;
    _this.tvid = _this.show.id;
    _this.name = _this.show.name;
    _this.network = _this.show.network;
    _this.genres = _this.show.genres;
    _this.image = _this.show.image;
    _this.imdb = _this.show.externals.imdb;
    _this.officialSite = _this.show.officialSite;
    return _this;
  }

  _createClass(_class, [{
    key: 'dom',
    value: function dom() {
      return '\n      <a class="tv-show-card" data-id="' + this.tvid + '">\n        <div class="tv-show-card-side tv-show-card-side--a">\n          ' + Image(this.image) + '\n        </div>\n        <div class="tv-show-card-side tv-show-card-side--b">\n          <div class="tv-show-card--name">\n            <h3>' + this.name + '</h3>\n          </div>\n          ' + Network(this.network) + '\n          ' + Genres(this.genres) + '\n        </div>\n      </a>\n    ';
    }
  }, {
    key: 'events',
    value: function events() {
      var target = this.target();

      target.addEventListener('click', function (e) {
        e.preventDefault();
        var thisId = target.getAttribute('data-id');
        var wrapper = document.getElementById('wrapper');
        var tvShowExtented = new _TvShowExtented2.default(thisId);

        tvShowExtented.addTo(wrapper);
      });
    }
  }]);

  return _class;
}(ActiveComponent);

exports.default = _class;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Domr = __webpack_require__(0);

var _Domr2 = _interopRequireDefault(_Domr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActiveComponent = _Domr2.default.ActiveComponent;

var demoImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAACNCAIAAADOy0hJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAADcSURBVHja7NAxAQAACAMgtej6t7CCjx9EoJMUN6NAlixZsmTJUiBLlixZsmQpkCVLlixZshTIkiVLlixZCmTJkiVLliwFsmTJkiVLlgJZsmTJkiVLgSxZsmTJkqVAlixZsmTJUiBLlixZsmQpkCVLlixZshTIkiVLlixZCmTJkiVLliwFsmTJkiVLlgJZsmTJkiVLgSxZsmTJkqVAlixZsmTJUiBLlixZsmQpkCVLlixZshTIkiVLlixZCmTJkiVLliwFsmTJkiVLlgJZsmTJkiVLgawXCwAA//8DAJQ1AjdpViEZAAAAAElFTkSuQmCC';

var _class = function (_ActiveComponent) {
  _inherits(_class, _ActiveComponent);

  function _class() {
    var img = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : demoImg;
    var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'tv-show-card--img';

    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, className));

    _this.img = img.replace('http:', 'https:');
    _this.className = className;
    return _this;
  }

  _createClass(_class, [{
    key: 'dom',
    value: function dom() {
      return '\n      <div class="' + this.className + '" data-src="' + this.img + '">\n        <img src= "' + demoImg + '"/> \n      </div>\n    ';
    }
  }, {
    key: 'events',
    value: function events() {
      var target = this.target();
      var dataSrc = target.getAttribute('data-src');
      var img = target.querySelector('img');

      img.setAttribute('src', dataSrc);
    }
  }]);

  return _class;
}(ActiveComponent);

exports.default = _class;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Domr = __webpack_require__(0);

var _Domr2 = _interopRequireDefault(_Domr);

var _tvShowCallExtendedApi = __webpack_require__(51);

var _tvShowCallExtendedApi2 = _interopRequireDefault(_tvShowCallExtendedApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActiveComponent = _Domr2.default.ActiveComponent;

var _class = function (_ActiveComponent) {
  _inherits(_class, _ActiveComponent);

  function _class(showId) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

    _this.showId = showId;
    return _this;
  }

  _createClass(_class, [{
    key: 'dom',
    value: function dom() {
      return '\n      <div class="tv-show-extended-holder" id="tv-show-extended-holder">\n      </div>\n    ';
    }
  }, {
    key: 'events',
    value: function events() {
      var target = this.target();

      (0, _tvShowCallExtendedApi2.default)(this.showId, target);
    }
  }]);

  return _class;
}(ActiveComponent);

exports.default = _class;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TvShowExtendedInfo = __webpack_require__(52);

var _TvShowExtendedInfo2 = _interopRequireDefault(_TvShowExtendedInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function callApi(id, target) {
  var xmlhttp = new XMLHttpRequest();
  var tvShowId = encodeURI(id);
  var api = 'https://api.tvmaze.com/shows/' + tvShowId + '?embed=cast';
  xmlhttp.open('GET', api, true);
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4) {
      if (xmlhttp.status === 200) {
        var obj = JSON.parse(xmlhttp.responseText);
        var tvShowExtendedHolder = target;
        tvShowExtendedHolder.innerHTML = '';

        var tvShowCard = new _TvShowExtendedInfo2.default(obj);
        tvShowCard.addTo(tvShowExtendedHolder);
      }
    }
  };
  xmlhttp.send(null);
}

exports.default = callApi;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Domr = __webpack_require__(0);

var _Domr2 = _interopRequireDefault(_Domr);

var _TvShowExtendedInfoClose = __webpack_require__(53);

var _TvShowExtendedInfoClose2 = _interopRequireDefault(_TvShowExtendedInfoClose);

var _TvShowBackgroundImg = __webpack_require__(54);

var _TvShowBackgroundImg2 = _interopRequireDefault(_TvShowBackgroundImg);

var _TvShowLatestEpisode = __webpack_require__(55);

var _TvShowLatestEpisode2 = _interopRequireDefault(_TvShowLatestEpisode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = _Domr2.default.Component;

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

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class(show) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

    _this.show = show;
    _this.img = _this.show.image;
    _this.name = _this.show.name;
    _this.genre = _this.show.genres;
    _this.summary = _this.show.summary;
    _this.network = _this.show.network;
    _this.cast = _this.show._embedded.cast;
    _this.status = _this.show.status;
    _this.previousepisode = _this.show._links.previousepisode;
    return _this;
  }

  _createClass(_class, [{
    key: 'dom',
    value: function dom() {
      var Close = new _TvShowExtendedInfoClose2.default();
      var image = '';
      if (this.img) {
        image = this.img.original;
      }
      var SideA = new _TvShowBackgroundImg2.default(image, 'tv-show-extended-side tv-show-extended-side--a');

      console.log(this.status);
      return '\n      <div class="tv-show-extended-info" id="tv-show-extended-info">\n        ' + SideA.render() + '\n        <div class="tv-show-extended-side tv-show-extended-side--b">\n          ' + Close.render() + '\n          <div class="tv-show-extended--name">\n            <h1>' + this.name + ' ' + Status(this.status) + '</h1>\n            ' + Network(this.network) + '\n          </div>\n          <div class="tv-show-extended--scrollable">\n              ' + Genres(this.genre) + '\n              ' + LastEpisode(this.previousepisode) + '\n              ' + Summary(this.summary) + '\n              ' + OfficalLinks(this.show) + '\n              <div class="tv-show-extended--cast">\n                <table>\n                  <p><strong>Cast:</strong></p>\n                  ' + Cast(this.cast) + '\n                </table>\n              </div>\n          </div>\n        </div>\n      </div>\n    ';
    }
  }]);

  return _class;
}(Component);

exports.default = _class;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Domr = __webpack_require__(0);

var _Domr2 = _interopRequireDefault(_Domr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActiveComponent = _Domr2.default.ActiveComponent;

var _class = function (_ActiveComponent) {
  _inherits(_class, _ActiveComponent);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'tv-show-extended-delete'));
  }

  _createClass(_class, [{
    key: 'dom',
    value: function dom() {
      return '\n      <a href="#" class="tv-show-extended-delete">\n        <svg role="img" class="icon close"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-close"></use></svg>\n      </a>\n    ';
    }
  }, {
    key: 'events',
    value: function events() {
      var target = this.target();
      target.addEventListener('click', function (e) {
        e.preventDefault();
        var parent = target.parentElement.parentElement.parentElement;
        var grandParent = parent.parentElement;

        grandParent.removeChild(parent);
      });
    }
  }]);

  return _class;
}(ActiveComponent);

exports.default = _class;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Domr = __webpack_require__(0);

var _Domr2 = _interopRequireDefault(_Domr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = _Domr2.default.Component;

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class(img) {
    var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

    _this.img = img.replace('http:', 'https:');
    _this.className = className;
    return _this;
  }

  _createClass(_class, [{
    key: 'dom',
    value: function dom() {
      return '\n      <div class="tv-show-bg-img ' + this.className + '" ' + (this.img ? 'style="background-image:url(' + this.img + ')"' : '') + '>\n      </div>\n    ';
    }
  }]);

  return _class;
}(Component);

exports.default = _class;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Domr = __webpack_require__(0);

var _Domr2 = _interopRequireDefault(_Domr);

var _tvShowsCallEpisodeApi = __webpack_require__(56);

var _tvShowsCallEpisodeApi2 = _interopRequireDefault(_tvShowsCallEpisodeApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActiveComponent = _Domr2.default.ActiveComponent;

var _class = function (_ActiveComponent) {
  _inherits(_class, _ActiveComponent);

  function _class(episodeId) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'tv-show-latest-episode'));

    _this.http = episodeId.replace('http:', 'https:');
    _this.episodeId = _this.http;
    return _this;
  }

  _createClass(_class, [{
    key: 'dom',
    value: function dom() {
      return '\n      <div class="tv-show-latest-episode-holder">\n      </div>\n    ';
    }
  }, {
    key: 'events',
    value: function events() {
      var target = this.target();
      (0, _tvShowsCallEpisodeApi2.default)(this.episodeId, target);
    }
  }]);

  return _class;
}(ActiveComponent);

exports.default = _class;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TvShowEpisode = __webpack_require__(57);

var _TvShowEpisode2 = _interopRequireDefault(_TvShowEpisode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function callApi(show, target) {
  var xmlhttp = new XMLHttpRequest();
  var api = '' + show;
  xmlhttp.open('GET', api, true);
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4) {
      if (xmlhttp.status === 200) {
        var obj = JSON.parse(xmlhttp.responseText);
        var tvShowLatestEpisodeHolder = target;
        var tvShowEpisode = new _TvShowEpisode2.default(obj);

        tvShowEpisode.addTo(tvShowLatestEpisodeHolder);
      }
    }
  };
  xmlhttp.send(null);
}

exports.default = callApi;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Domr = __webpack_require__(0);

var _Domr2 = _interopRequireDefault(_Domr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = _Domr2.default.Component;

function Time(timestamp) {
  var d = new Date(timestamp);
  var localDate = d.toLocaleDateString();

  return '<span class="tv-show-ep-time wee-lozenge wee-lozenge--info">' + localDate + '</span>';
}

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class(show) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

    _this.show = show;
    _this.season = _this.show.season;
    _this.episode = _this.show.number;
    _this.name = _this.show.name;
    _this.timestamp = _this.show.airstamp;
    return _this;
  }

  _createClass(_class, [{
    key: 'dom',
    value: function dom() {
      return '\n      <div>\n        <span class="tv-show-ep-season wee-badge wee-badge--primary"> S' + this.season + ' E' + this.episode + '</span>\n        ' + Time(this.timestamp) + '\n        <span class="">' + this.name + '</span>\n      </div>\n    ';
    }
  }]);

  return _class;
}(Component);

exports.default = _class;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Domr = __webpack_require__(0);

var _Domr2 = _interopRequireDefault(_Domr);

var _tvShowsCallApi = __webpack_require__(11);

var _tvShowsCallApi2 = _interopRequireDefault(_tvShowsCallApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActiveComponent = _Domr2.default.ActiveComponent;

var _class = function (_ActiveComponent) {
  _inherits(_class, _ActiveComponent);

  function _class() {
    var defaultShow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, 'tv-show-card-holder'));

    _this.show = defaultShow;
    return _this;
  }

  _createClass(_class, [{
    key: 'dom',
    value: function dom() {
      return '\n      <div class="tv-show-card-holder" id="tv-show-card-holder"></div>\n    ';
    }
  }, {
    key: 'events',
    value: function events() {
      var target = this.target();
      (0, _tvShowsCallApi2.default)(this.show, target);
    }
  }]);

  return _class;
}(ActiveComponent);

exports.default = _class;

/***/ }),
/* 59 */
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
/* 60 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);