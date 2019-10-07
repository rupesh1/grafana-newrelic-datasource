define(["app/plugins/sdk","lodash"], function(__WEBPACK_EXTERNAL_MODULE_grafana_app_plugins_sdk__, __WEBPACK_EXTERNAL_MODULE_lodash__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./ctrl/config_ctrl.ts":
/*!*****************************!*\
  !*** ./ctrl/config_ctrl.ts ***!
  \*****************************/
/*! exports provided: NewRelicConfigCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRelicConfigCtrl", function() { return NewRelicConfigCtrl; });
var NewRelicConfigCtrl =
/** @class */
function () {
  /** @ngInject */
  function NewRelicConfigCtrl() {
    if (this.current.id) {
      this.current.url = '/api/datasources/proxy/' + this.current.id;
    }
  }

  NewRelicConfigCtrl.templateUrl = 'partials/config.html';
  return NewRelicConfigCtrl;
}();



/***/ }),

/***/ "./ctrl/query_ctrl.ts":
/*!****************************!*\
  !*** ./ctrl/query_ctrl.ts ***!
  \****************************/
/*! exports provided: NewRelicQueryCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRelicQueryCtrl", function() { return NewRelicQueryCtrl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grafana/app/plugins/sdk */ "grafana/app/plugins/sdk");
/* harmony import */ var grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_2__);


 // @ts-ignore

var NewRelicQueryCtrl =
/** @class */
function (_super) {
  NewRelicQueryCtrl.$inject = ["$scope", "$injector"];

  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NewRelicQueryCtrl, _super);
  /** @ngInject */


  function NewRelicQueryCtrl($scope, $injector) {
    var _this = _super.call(this, $scope, $injector) || this;

    _this.supportedServices = [{
      text: 'Insights API',
      value: 'insights'
    }];
    _this.supportedFormats = {
      insights: [{
        text: 'Time Series',
        value: 'timeseries'
      }, {
        text: 'Table',
        value: 'table'
      }]
    };
    _this.defaults = {
      queryType: 'insights',
      insights: {
        nrql: '',
        resultFormat: 'timeseries'
      }
    };
    Object(lodash__WEBPACK_IMPORTED_MODULE_1__["defaultsDeep"])(_this.target, _this.defaults);
    return _this;
  }

  NewRelicQueryCtrl.templateUrl = 'partials/query.editor.html';
  return NewRelicQueryCtrl;
}(grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_2__["QueryCtrl"]);



/***/ }),

/***/ "./datasource.ts":
/*!***********************!*\
  !*** ./datasource.ts ***!
  \***********************/
/*! exports provided: Datasource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Datasource", function() { return Datasource; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _datasources_insights_InsightsDataSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datasources/insights/InsightsDataSource */ "./datasources/insights/InsightsDataSource.ts");



var Datasource =
/** @class */
function () {
  Datasource.$inject = ["instanceSettings", "backendSrv", "$q"];

  /** @ngInject */
  function Datasource(instanceSettings, backendSrv, $q) {
    this.instanceSettings = instanceSettings;
    this.backendSrv = backendSrv;
    this.$q = $q;
    this.insightsDataSource = new _datasources_insights_InsightsDataSource__WEBPACK_IMPORTED_MODULE_1__["NewrelicInsightsDataSource"](this.instanceSettings, this.backendSrv, this.$q);
  }

  Datasource.prototype.query = function (options) {
    var promises = [];
    var insightsOptions = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(options);
    insightsOptions.targets = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(insightsOptions.targets, ['queryType', 'insights']);

    if (insightsOptions.targets.length > 0) {
      var insightsPromise = this.insightsDataSource.query(insightsOptions);

      if (insightsPromise) {
        promises.push(insightsPromise);
      }
    }

    return Promise.all(promises).then(function (results) {
      return {
        data: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"])(results)
      };
    });
  };

  Datasource.prototype.testDatasource = function () {
    var _this = this;

    return new Promise(function (resolve, reject) {
      try {
        _this.insightsDataSource.query({
          range: {
            from: '',
            to: ''
          },
          targets: [{
            insights: {
              nrql: "SELECT 1 FROM Mobile SINCE TODAY",
              resultFormat: "table"
            }
          }]
        }).then(function (result) {
          if (result) {
            resolve({
              message: 'Successfully Queried from Newrelic',
              status: 'success'
            });
          } else {
            reject({
              message: 'Failed to Connect',
              status: 'error'
            });
          }
        })["catch"](function (ex) {
          console.log(ex);
          reject({
            message: 'Failed to Connect',
            status: 'error'
          });
        });
      } catch (error) {
        console.log(error);
        reject({
          message: 'Failed to Connect',
          status: 'error'
        });
      }
    });
  };

  Datasource.prototype.metricFindQuery = function (query) {
    if (!query) {
      return Promise.resolve([]);
    }

    return Promise.resolve([]);
  };

  return Datasource;
}();



/***/ }),

/***/ "./datasources/insights/InsightsDataSource.ts":
/*!****************************************************!*\
  !*** ./datasources/insights/InsightsDataSource.ts ***!
  \****************************************************/
/*! exports provided: NewrelicInsightsDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewrelicInsightsDataSource", function() { return NewrelicInsightsDataSource; });
/* harmony import */ var _InsightsResultsParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InsightsResultsParser */ "./datasources/insights/InsightsResultsParser.ts");

/** @ngInject */

var NewrelicInsightsDataSource =
/** @class */
function () {
  NewrelicInsightsDataSource.$inject = ["instanceSettings", "backendSrv", "$q"];

  /** @ngInject */
  function NewrelicInsightsDataSource(instanceSettings, backendSrv, $q) {
    this.instanceSettings = instanceSettings;
    this.backendSrv = backendSrv;
    this.$q = $q;
    this.url = this.instanceSettings.url + '/insights';
    this.insightsAccountID = this.instanceSettings.jsonData.insightsAccountID;
  }

  NewrelicInsightsDataSource.prototype.doInsightsRequest = function (options, maxRetries) {
    var _this = this;

    if (maxRetries === void 0) {
      maxRetries = 1;
    }

    var queryParams = Object.keys(options).filter(function (k) {
      return ['nrql'].indexOf(k) > -1;
    }).map(function (k) {
      return k + "=" + encodeURI(options[k]);
    }).join('&');
    return this.backendSrv.datasourceRequest({
      method: 'GET',
      url: this.url + ("/" + this.insightsAccountID + "/query?" + queryParams)
    })["catch"](function (error) {
      if (maxRetries > 0) {
        return _this.doInsightsRequest(options, maxRetries - 1);
      }

      throw error;
    });
  };

  NewrelicInsightsDataSource.prototype.doQueries = function (queries) {
    var _this = this;

    return queries.map(function (query) {
      return _this.doInsightsRequest(query).then(function (result) {
        return {
          result: result,
          query: query
        };
      })["catch"](function (error) {
        throw {
          error: error,
          query: query
        };
      });
    });
  };

  NewrelicInsightsDataSource.prototype.query = function (options) {
    var queries = options.targets.filter(function (item) {
      return item.hide !== true && item.insights && item.insights.nrql;
    }).map(function (target) {
      var item = target.insights;
      var rangeConfig = " SINCE " + options.range.from + " UNTIL " + options.range.to + " ";

      if (!item.nrql.toLowerCase().includes(' since ') && !item.nrql.toLowerCase().includes(' until ')) {
        item.nrql += ' ' + rangeConfig;
      }

      if (item.resultFormat !== 'table') {
        if (!item.nrql.toLowerCase().endsWith('timeseries') && !item.nrql.toLowerCase().includes(' timeseries ')) {
          item.nrql += ' timeseries auto ';
        }
      }

      return item;
    });

    if (!queries || queries.length === 0) {
      return;
    }

    var promises = this.doQueries(queries);
    return this.$q.all(promises).then(function (results) {
      var responseParser = new _InsightsResultsParser__WEBPACK_IMPORTED_MODULE_0__["InsightsResultsParser"](results);
      return responseParser.output;
    });
  };

  return NewrelicInsightsDataSource;
}();



/***/ }),

/***/ "./datasources/insights/InsightsResultsParser.ts":
/*!*******************************************************!*\
  !*** ./datasources/insights/InsightsResultsParser.ts ***!
  \*******************************************************/
/*! exports provided: InsightsResultsParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsightsResultsParser", function() { return InsightsResultsParser; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



var InsightsResultsParser =
/** @class */
function () {
  function InsightsResultsParser(results) {
    var _this = this;

    this.output = {
      columns: [],
      rows: [],
      type: 'table'
    };

    try {
      results.forEach(function (res) {
        var response = res.result;

        if (response && response.data && response.data.metadata) {
          if (response.data.timeSeries || response.data.current && response.data.current.timeSeries) {
            console.log("Received results in timeseries format");

            if (response.data.timeSeries) {
              _this.handleTimeseriesResult(response.data.metadata, response.data.timeSeries, '', 0);
            } else {
              if (response.data.current) {
                _this.handleTimeseriesResult(response.data.metadata, response.data.current.timeSeries, '', 0);
              }

              if (response.data.previous) {
                _this.handleTimeseriesResult(response.data.metadata, response.data.previous.timeSeries, response.data.metadata.rawCompareWith || 'Previous', response.data.metadata.compareWith || 0);
              }
            }
          } else if (response.data.facets && response.data.facets[0] && response.data.facets[0].timeSeries) {
            console.log("Received results in table with timeseries format");

            if (_this.output.columns && _this.output.rows) {
              _this.output = [];
            }

            var metadata_1 = response.data.metadata;
            Object(lodash__WEBPACK_IMPORTED_MODULE_0__["each"])(response.data.facets, function (facet, index) {
              if (metadata_1.contents.timeSeries.contents.length === 0) {
                var key_1 = metadata_1.contents.timeSeries.contents[0].contents["function"] || 'count';
                key_1 = key_1 === 'uniquecount' ? 'uniqueCount' : key_1;
                var t = facet.name || index;
                var d = facet.timeSeries.map(function (item) {
                  return [item.results[0][key_1], item.beginTimeSeconds * 1000];
                });

                _this.pushTimeSeriesResult(t, d);
              } else {
                Object(lodash__WEBPACK_IMPORTED_MODULE_0__["each"])(metadata_1.contents.timeSeries.contents, function (c, cindex) {
                  console.log(c.simple, c["function"]);
                  var key = c.simple ? c["function"] : c.contents["function"] || 'count';
                  key = key === 'uniquecount' ? 'uniqueCount' : key;
                  var t = (facet.name || index) + ' ' + (c.alias || key);
                  var d = facet.timeSeries.map(function (item) {
                    return [item.results[cindex][key], item.beginTimeSeconds * 1000];
                  });

                  _this.pushTimeSeriesResult(t, d);
                });
              }
            });
          } else if (response.data.facets) {
            var totalResults_1 = [];
            console.log("Received results in table format");
            var facets = res.result.data.facets;
            var metadata_2 = res.result.data.metadata;
            var title_1 = metadata_2.facet;
            Object(lodash__WEBPACK_IMPORTED_MODULE_0__["each"])(facets, function (facet) {
              var output = {};
              output[title_1] = facet.name;
              Object(lodash__WEBPACK_IMPORTED_MODULE_0__["each"])(metadata_2.contents.contents, function (content, index) {
                var key = content.simple ? content["function"] : content.contents["function"];
                key = key === 'uniquecount' ? 'uniqueCount' : key;
                output[content.alias || content["function"]] = facet.results[index][key];
              });
              totalResults_1.push(output);
            });

            if (_this.output.columns.length === 0) {
              Object(lodash__WEBPACK_IMPORTED_MODULE_0__["each"])(totalResults_1[0], function (v, k) {
                _this.output.columns.push({
                  text: k,
                  type: _typeof(v)
                });
              });
            }

            Object(lodash__WEBPACK_IMPORTED_MODULE_0__["each"])(totalResults_1, function (tempRes) {
              var row = [];
              Object(lodash__WEBPACK_IMPORTED_MODULE_0__["each"])(tempRes, function (v, k) {
                row.push(v);

                if (!k) {
                  if (false) {}
                }
              });

              _this.output.rows.push(row);
            });
          } else if (response.data.results) {
            if (response.data.metadata.contents && response.data.metadata.contents[0] && response.data.metadata.contents[0]["function"] === 'funnel') {
              console.log('funnel Type');

              _this.output.columns.push({
                text: response.data.metadata.contents[0].attribute,
                type: 'string'
              }, {
                text: 'value',
                type: _typeof(response.data.results[0].steps[0])
              });

              Object(lodash__WEBPACK_IMPORTED_MODULE_0__["each"])(response.data.metadata.contents[0].steps, function (step, stepIndex) {
                _this.output.rows.push([step, response.data.results[0].steps[stepIndex]]);
              });
            } else if (response.data.metadata.contents && response.data.metadata.contents[0] && response.data.metadata.contents[0]["function"] === 'events') {
              console.log('events Type');
              _this.output = {
                columns: [],
                rows: [],
                type: 'table'
              };
              var rows_1 = [];
              var cols_1 = [];
              Object(lodash__WEBPACK_IMPORTED_MODULE_0__["each"])(response.data.results[0].events, function (event) {
                cols_1 = [];
                var currRow = [];
                Object(lodash__WEBPACK_IMPORTED_MODULE_0__["each"])(event, function (v, k) {
                  if (k === 'timestamp') {
                    cols_1.push({
                      text: k,
                      type: _typeof(v)
                    });
                    currRow.push(v);
                  }
                });
                Object(lodash__WEBPACK_IMPORTED_MODULE_0__["each"])(event, function (v, k) {
                  if (k !== 'timestamp') {
                    cols_1.push({
                      text: k,
                      type: k === 'appId' ? 'string' : _typeof(v)
                    });
                    currRow.push(v);
                  }
                });
                rows_1.push(currRow);
              });
              _this.output.columns = cols_1;
              _this.output.rows = rows_1;
            } else {
              console.log('Results Type');
              _this.output = {
                columns: [],
                rows: [],
                type: 'table'
              };
              Object(lodash__WEBPACK_IMPORTED_MODULE_0__["each"])(response.data.metadata.contents, function (content) {
                _this.output.columns = [];

                if (content.columns) {
                  Object(lodash__WEBPACK_IMPORTED_MODULE_0__["each"])(content.columns, function (col) {
                    _this.output.columns.push({
                      text: col,
                      type: _typeof(response.data.results[0].events[0][col])
                    });
                  });
                } else if (content.constant) {
                  _this.output.columns.push({
                    text: content.alias || 'constant'
                  });
                }
              });
              Object(lodash__WEBPACK_IMPORTED_MODULE_0__["each"])(response.data.results[0].events, function (row) {
                var o = [];
                Object(lodash__WEBPACK_IMPORTED_MODULE_0__["each"])(response.data.metadata.contents[0].columns, function (col) {
                  o.push(row[col]);
                });

                _this.output.rows.push(o);
              });
            }
          }
        }
      });
    } catch (ex) {
      console.log('Error while parsing the results', ex);
    }
  }

  InsightsResultsParser.prototype.pushTimeSeriesResult = function (target, datapoints) {
    if (this.output.columns && this.output.rows) {
      this.output = [];
    }

    var o = {
      target: target,
      datapoints: datapoints
    };
    this.output.push(o);
  };

  InsightsResultsParser.prototype.handleTimeseriesResult = function (metadata, timeseriesData, suffix, timeshift) {
    var _this = this;

    var timeseriesMetadata = metadata.timeSeries || metadata.contents.timeSeries;

    try {
      timeseriesMetadata.contents.forEach(function (content, index) {
        {
          if (content && content["function"] === 'percentage' && content.simple) {
            console.log('percentage results');
            var t = (content["function"] || '') + ' (' + content.of["function"] + (" of " + content.filter + ")");
            var d = timeseriesData.map(function (item) {
              return [item.results[0].result, item.beginTimeSeconds * 1000 + timeshift];
            });

            _this.pushTimeSeriesResult(t, d);
          } else if (content && content["function"] === 'percentile') {
            console.log('percentile results');
            content.thresholds.forEach(function (threshold) {
              var t = (content.attribute || '') + ' (' + threshold + ' %)';
              var d = timeseriesData.map(function (item) {
                return [item.results[index].percentiles[threshold.toString()], item.beginTimeSeconds * 1000 + timeshift];
              });

              _this.pushTimeSeriesResult(t, d);
            });
          } else if (content && content["function"] === 'histogram') {
            console.log('Received Timeseries histogram');
            Object(lodash__WEBPACK_IMPORTED_MODULE_0__["each"])(timeseriesData[0].results[0].histogram, function (v, k) {
              var t = k.toString();
              var d = timeseriesData.map(function (item) {
                return [item.results[index].histogram[k.toString()], item.beginTimeSeconds * 1000 + timeshift];
              });

              _this.pushTimeSeriesResult(t, d);
            });
          } else if (content.steps) {
            console.log('Step results');
            content.steps.forEach(function (step, stepIndex) {
              var t = step;
              var d = timeseriesData.map(function (item) {
                return [item.results[index].steps[stepIndex], item.beginTimeSeconds * 1000 + timeshift];
              });

              _this.pushTimeSeriesResult(t, d);
            });
          } else {
            console.log('Regular Timeseries');
            var title = ((content.alias || (content.contents ? content.contents.alias || content.contents["function"] : content["function"])) + (suffix ? " ( " + suffix.toLowerCase() + " )" : '')).trim();
            var key_2 = content.contents ? content.contents.contents ? content.contents.contents["function"] : content.contents["function"] : content.alias || content["function"];
            var t = title;
            var d = timeseriesData.map(function (item) {
              return [item.results[index][key_2] || item.results[index].result, item.beginTimeSeconds * 1000 + timeshift];
            });

            _this.pushTimeSeriesResult(t, d);
          }
        }
      });
    } catch (ex) {
      console.log('Error while parsing timeseries results');
    }
  };

  return InsightsResultsParser;
}();



/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: Datasource, QueryCtrl, ConfigCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datasource */ "./datasource.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Datasource", function() { return _datasource__WEBPACK_IMPORTED_MODULE_0__["Datasource"]; });

/* harmony import */ var _ctrl_query_ctrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ctrl/query_ctrl */ "./ctrl/query_ctrl.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryCtrl", function() { return _ctrl_query_ctrl__WEBPACK_IMPORTED_MODULE_1__["NewRelicQueryCtrl"]; });

/* harmony import */ var _ctrl_config_ctrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ctrl/config_ctrl */ "./ctrl/config_ctrl.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfigCtrl", function() { return _ctrl_config_ctrl__WEBPACK_IMPORTED_MODULE_2__["NewRelicConfigCtrl"]; });






/***/ }),

/***/ "grafana/app/plugins/sdk":
/*!**********************************!*\
  !*** external "app/plugins/sdk" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_grafana_app_plugins_sdk__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map