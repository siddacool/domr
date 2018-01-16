'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _addView = require('./helpers/add-view');

var _addView2 = _interopRequireDefault(_addView);

var _hashLocation = require('./helpers/hash-location');

var _hashLocation2 = _interopRequireDefault(_hashLocation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var _class = function () {
  function _class() {
    var routes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaults.routes;
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaults.config;

    _classCallCheck(this, _class);

    this.routes = filterRoutes(routes);
    this.redirectDefault = config.redirectDefault || true;
    this.refreshPage = config.refreshPage || false;
    this.clearLog = config.clearLog || false;
    this.addView = _addView2.default;
  }

  _createClass(_class, [{
    key: 'showRoutes',
    value: function showRoutes() {
      console.log(this.routes);
    }
  }, {
    key: 'reloadOnHashChange',
    value: function reloadOnHashChange() {
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
  }, {
    key: 'start',
    value: function start() {
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
  }]);

  return _class;
}();

exports.default = _class;