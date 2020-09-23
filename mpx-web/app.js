
var window = window || {};

window["webpackJsonp"] = require("./bundle.js");
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* mpx inject */ global.currentModuleId = "m73bcc3a1"
global.currentResource = "/Users/didi/Desktop/github/test-mpx-web/src/app.mpx"
global.currentCtor = App
global.currentCtorType = "app"
global.currentSrcMode = "wx"
/* harmony import */ var _babel_loader_node_modules_mpxjs_webpack_plugin_lib_selector_type_script_index_0_app_mpx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* empty/unused harmony star reexport */global.currentModuleId
/* script */


/* styles */
__webpack_require__(224)

/* json */
__webpack_require__(225)

/* template */

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mpxjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _mpxjs_api_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(216);




// app.js
Object(_mpxjs_core__WEBPACK_IMPORTED_MODULE_0__["createApp"])({
  onLaunch: function onLaunch() {}
});

var app = getApp();
_mpxjs_core__WEBPACK_IMPORTED_MODULE_0__["default"].use(_mpxjs_api_proxy__WEBPACK_IMPORTED_MODULE_1__["default"], { usePromise: true, network: app.networkTimeout });
// console.log('app end: ', app)

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return install; });
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mini_transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(217);
/* harmony import */ var _mini_promisify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(223);





function install(target) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$usePromise = options.usePromise,
      usePromise = _options$usePromise === undefined ? false : _options$usePromise,
      _options$whiteList = options.whiteList,
      whiteList = _options$whiteList === undefined ? [] : _options$whiteList,
      _options$blackList = options.blackList,
      blackList = _options$blackList === undefined ? [] : _options$blackList,
      _options$platform = options.platform,
      platform = _options$platform === undefined ? {} : _options$platform,
      _options$exclude = options.exclude,
      exclude = _options$exclude === undefined ? ['shareImageMessage'] : _options$exclude,
      _options$custom = options.custom,
      custom = _options$custom === undefined ? {} : _options$custom,
      _options$fallbackMap = options.fallbackMap,
      fallbackMap = _options$fallbackMap === undefined ? {} : _options$fallbackMap,
      _options$optimize = options.optimize,
      optimize = _options$optimize === undefined ? false : _options$optimize;
  var _platform$from = platform.from,
      from = _platform$from === undefined ? '' : _platform$from,
      _platform$to = platform.to,
      to = _platform$to === undefined ? '' : _platform$to;
  /* eslint-disable camelcase, no-undef */

  if (true) {
    from = '__mpx_src_mode_' + "wx" + '__';
  }
  if (true) {
    to = "wx";
  }
  /* eslint-enable */

  var transedApi = Object(_mini_transform__WEBPACK_IMPORTED_MODULE_2__["default"])({
    exclude: exclude,
    from: from,
    to: to,
    custom: custom,
    optimize: optimize
  });

  var promisedApi = usePromise ? Object(_mini_promisify__WEBPACK_IMPORTED_MODULE_3__["default"])(transedApi, whiteList, blackList) : {};
  var allApi = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, transedApi, promisedApi);

  babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(allApi).forEach(function (api) {
    try {
      if (typeof allApi[api] !== 'function') {
        target[api] = allApi[api];
        return;
      }

      target[api] = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return allApi[api].apply(target, args);
      };
    } catch (e) {} // 支付宝不支持重写 call 方法
  });

  // Fallback Map option
  babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(fallbackMap).forEach(function (k) {
    if (!target[k]) {
      target[k] = fallbackMap[k];
    }
  });
}

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(153);
/* harmony import */ var babel_runtime_core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(218);
/* harmony import */ var _platform_wxToAli__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(222);





var fromMap = Object(_common_js__WEBPACK_IMPORTED_MODULE_2__["genFromMap"])();

function joinName() {
  var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return fromMap[from] + '_' + to;
}

function transformApi(options) {
  var _this = this;

  var envObj = Object(_common_js__WEBPACK_IMPORTED_MODULE_2__["getEnvObj"])();
  var wxToAliApi = Object(_platform_wxToAli__WEBPACK_IMPORTED_MODULE_3__["default"])({ optimize: options.optimize });
  var platformMap = {
    'wx_ali': wxToAliApi,
    'qq_ali': wxToAliApi,
    'swan_ali': wxToAliApi,
    'tt_ali': wxToAliApi
  };
  var needProxy = {};
  var excludeMap = Object(_common_js__WEBPACK_IMPORTED_MODULE_2__["makeMap"])(options.exclude);
  // 后续不一定只转换ali，需要基于目标平台决定合并的自定义api集，例如输出快应用时需要定义并合并wxToQaApi
  babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(envObj).concat(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(wxToAliApi)).forEach(function (key) {
    if (!excludeMap[key]) {
      needProxy[key] = envObj[key] || wxToAliApi[key];
    }
  });
  var transedApi = babel_runtime_core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(null);
  babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(needProxy).forEach(function (api) {
    // 非函数不做转换
    if (typeof needProxy[api] !== 'function') {
      transedApi[api] = needProxy[api];
      return;
    }

    transedApi[api] = function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var to = options.to;
      var from = options.from;

      if (args.length > 0) {
        from = args.pop();
        if (typeof from !== 'string' || !fromMap[from]) {
          args.push(from);
          from = options.from;
        }
      }

      var fromTo = joinName(from, to);
      if (options.custom[fromTo] && options.custom[fromTo][api]) {
        return options.custom[fromTo][api].apply(_this, args);
      } else if (platformMap[fromTo] && platformMap[fromTo][api]) {
        return platformMap[fromTo][api].apply(_this, args);
      } else if (envObj[api]) {
        return envObj[api].apply(_this, args);
      } else {
        Object(_common_js__WEBPACK_IMPORTED_MODULE_2__["error"])('\u5F53\u524D\u73AF\u5883\u4E0D\u5B58\u5728 ' + api + ' \u65B9\u6CD5');
      }
    };
  });

  return transedApi;
}

/* harmony default export */ __webpack_exports__["default"] = (transformApi);

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ToPromise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(219);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToPromise", function() { return _ToPromise__WEBPACK_IMPORTED_MODULE_0__["ToPromise"]; });

/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(220);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webHandleSuccess", function() { return _web__WEBPACK_IMPORTED_MODULE_1__["webHandleSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webHandleFail", function() { return _web__WEBPACK_IMPORTED_MODULE_1__["webHandleFail"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(221);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "changeOpts", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["changeOpts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleSuccess", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["handleSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "genFromMap", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["genFromMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEnvObj", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["getEnvObj"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "error", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["error"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["warn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["noop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeMap", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["makeMap"]; });





/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToPromise", function() { return ToPromise; });
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(125);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(144);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(145);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);




var ToPromise = function () {
  function ToPromise() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ToPromise);

    this._resolve = null;
    this._reject = null;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ToPromise, [{
    key: "toPromiseInitPromise",
    value: function toPromiseInitPromise() {
      var _this = this;

      return new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
        _this._resolve = resolve;
        _this._reject = reject;
      });
    }
  }, {
    key: "toPromiseResolve",
    value: function toPromiseResolve(res) {
      this._resolve(res);
    }
  }, {
    key: "toPromiseReject",
    value: function toPromiseReject(err) {
      this._reject(err);
    }
  }]);

  return ToPromise;
}();



/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webHandleSuccess", function() { return webHandleSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webHandleFail", function() { return webHandleFail; });
function webHandleSuccess(result, success, complete) {
  typeof success === 'function' && success(result);
  typeof complete === 'function' && complete(result);
}

function webHandleFail(result, fail, complete) {
  typeof fail === 'function' && fail(result);
  typeof complete === 'function' && complete(result);
}



/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeOpts", function() { return changeOpts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleSuccess", function() { return handleSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genFromMap", function() { return genFromMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnvObj", function() { return getEnvObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return warn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeMap", function() { return makeMap; });
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
/* harmony import */ var babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);



var _this2 = undefined;

/**
 *
 * @param {Object} options 原参数
 * @param {Object} updateOrRemoveOpt 要修改或者删除的参数
 * @param {Object} extraOpt 额外增加的参数
 * @returns {Object} 返回参数
 * @example
 * changeOpts({ a: 1, b: 2 }, {
 *  a: 'c', // a 变为 c
 *  b: '' // 删除 b
 * }, {
 *  d: 4 // 增加 d
 * })
 */

function changeOpts(options) {
  var updateOrRemoveOpt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var extraOpt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var opts = {};

  babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(options).forEach(function (key) {
    var myKey = updateOrRemoveOpt.hasOwnProperty(key) ? updateOrRemoveOpt[key] : key;
    if (myKey !== '') {
      opts[myKey] = options[key];
    }
  });

  opts = babel_runtime_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, opts, extraOpt);

  return opts;
}

/**
 * @param {Object} opts 原参数
 * @param {Function} getOptions 获取 success 回调修改后的参数
 */
var handleSuccess = function handleSuccess(opts) {
  var getOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
  var thisObj = arguments[2];

  if (!opts.success) {
    return;
  }
  var _this = thisObj || _this2;
  var cacheSuc = opts.success;
  opts.success = function (res) {
    var changedRes = getOptions(res) || res;
    cacheSuc.call(_this, changedRes);
  };
};

function genFromMap() {
  var result = {};
  var platforms = ['wx', 'ali', 'swan', 'qq', 'tt', 'web'];
  platforms.forEach(function (platform) {
    result['__mpx_src_mode_' + platform + '__'] = platform;
  });
  return result;
}

function getEnvObj() {
  if (typeof wx !== 'undefined' && typeof wx.getSystemInfo === 'function') {
    return wx;
  } else if (typeof my !== 'undefined' && typeof my.getSystemInfo === 'function') {
    return my;
  } else if (typeof swan !== 'undefined' && typeof swan.getSystemInfo === 'function') {
    return swan;
  } else if (typeof qq !== 'undefined' && typeof qq.getSystemInfo === 'function') {
    return qq;
  } else if (typeof tt !== 'undefined' && typeof tt.getSystemInfo === 'function') {
    return tt;
  }
}

function warn(msg) {
  console.warn && console.warn('[@mpxjs/api-proxy warn]:\n ' + msg);
}

function error(msg) {
  console.error && console.error('[@mpxjs/api-proxy error]:\n ' + msg);
}

function noop() {}

function makeMap(arr) {
  return arr.reduce(function (obj, item) {
    obj[item] = true;
    return obj;
  }, {});
}



/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(108);
/* harmony import */ var babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(218);



var ALI_OBJ = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["getEnvObj"])();
var TIPS_NAME = '支付宝环境 mpx';

// canvas api 用
var CANVAS_MAP = {};

// optimize case avoid call api multi times with getSystemInfoSync
var systemInfo = void 0;

var getWxToAliApi = function getWxToAliApi(_ref) {
  var _ref$optimize = _ref.optimize,
      optimize = _ref$optimize === undefined ? false : _ref$optimize;

  return {
    /**
     * 基础
     */

    getSystemInfo: function getSystemInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(options);

      Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["handleSuccess"])(opts, function (res) {
        res.system = res.platform + ' ' + res.system;
        res.SDKVersion = ALI_OBJ.SDKVersion;

        // 支付宝 windowHeight 可能为 0
        if (!res.windowHeight) {
          res.windowHeight = Math.floor(res.screenHeight * res.windowWidth / res.screenWidth) - 50;
        }

        return res;
      });

      ALI_OBJ.getSystemInfo(opts);
    },
    getSystemInfoSync: function getSystemInfoSync() {
      if (optimize) {
        if (systemInfo) return systemInfo;
      }

      var res = ALI_OBJ.getSystemInfoSync() || {};

      res.system = res.platform + ' ' + res.system;
      res.SDKVersion = ALI_OBJ.SDKVersion;

      // 支付宝 windowHeight 可能为 0
      if (!res.windowHeight) {
        res.windowHeight = Math.floor(res.screenHeight * res.windowWidth / res.screenWidth) - 50;
      }

      if (optimize) systemInfo = res;

      return res;
    },
    nextTick: function nextTick(fn) {
      setTimeout(fn);
    },


    /**
     * 界面
     */

    showToast: function showToast() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(options, {
        title: 'content',
        icon: 'type'
      });
      ALI_OBJ.showToast(opts);
    },
    hideToast: function hideToast() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (options.success || options.fail || options.complete) {
        Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["warn"])(TIPS_NAME + '.hideToast \u4E0D\u652F\u6301 success/fail/complete \u53C2\u6570');
      }
      ALI_OBJ.hideToast(options);
    },
    showModal: function showModal() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var opts = void 0;

      if (options.showCancel === undefined || options.showCancel) {
        opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(options, {
          confirmText: 'confirmButtonText',
          cancelText: 'cancelButtonText'
        });

        Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["handleSuccess"])(opts, function (res) {
          return Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(res, undefined, { 'cancel': !res.confirm });
        });

        ALI_OBJ.confirm(opts);
      } else {
        opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(options, {
          confirmText: 'buttonText'
        });

        ALI_OBJ.alert(opts);
      }
    },
    showLoading: function showLoading() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(options, {
        title: 'content'
      });
      ALI_OBJ.showLoading(opts);
    },
    hideLoading: function hideLoading() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (options.success || options.fail || options.complete) {
        Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["warn"])(TIPS_NAME + '.hideLoading \u4E0D\u652F\u6301 success/fail/complete \u53C2\u6570');
      }
      ALI_OBJ.hideLoading(options);
    },
    showActionSheet: function showActionSheet() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(options, {
        itemList: 'items'
      });

      var cacheSuc = opts.success || _common_js__WEBPACK_IMPORTED_MODULE_1__["noop"];
      var cacheFail = opts.fail || _common_js__WEBPACK_IMPORTED_MODULE_1__["noop"];

      opts.success = function (res) {
        var sucRes = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(res, {
          index: 'tapIndex'
        });
        if (sucRes.tapIndex === -1) {
          cacheFail.call(this, {
            errMsg: 'showActionSheet:fail cancel'
          });
        } else {
          cacheSuc.call(this, sucRes);
        }
      };

      ALI_OBJ.showActionSheet(opts);
    },
    showNavigationBarLoading: function showNavigationBarLoading() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (options.success || options.fail || options.complete) {
        Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["warn"])(TIPS_NAME + '.showNavigationBarLoading \u4E0D\u652F\u6301 success/fail/complete \u53C2\u6570');
      }
      ALI_OBJ.showNavigationBarLoading(options);
    },
    hideNavigationBarLoading: function hideNavigationBarLoading() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (options.success || options.fail || options.complete) {
        Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["warn"])(TIPS_NAME + '.hideNavigationBarLoading \u4E0D\u652F\u6301 success/fail/complete \u53C2\u6570');
      }
      ALI_OBJ.hideNavigationBarLoading(options);
    },
    setNavigationBarTitle: function setNavigationBarTitle() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      ALI_OBJ.setNavigationBar(options);
    },
    setNavigationBarColor: function setNavigationBarColor() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      ALI_OBJ.setNavigationBar(options);
    },


    /**
     * 网络
     */

    request: function request() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(options, {
        header: 'headers'
      });

      Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["handleSuccess"])(opts, function (res) {
        return Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(res, {
          headers: 'header',
          status: 'statusCode'
        });
      });

      // request 在 1.11.0 以上版本才支持
      // httpRequest 即将被废弃，钉钉端仍需要使用
      if (ALI_OBJ.canIUse('request')) {
        return ALI_OBJ.request(opts);
      } else {
        return ALI_OBJ.httpRequest(opts);
      }
    },
    downloadFile: function downloadFile() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(options);

      Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["handleSuccess"])(opts, function (res) {
        return Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(res, { apFilePath: 'tempFilePath' });
      });

      return ALI_OBJ.downloadFile(opts);
    },
    uploadFile: function uploadFile() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(options, { name: 'fileName' });

      return ALI_OBJ.uploadFile(opts);
    },


    /**
     * 数据缓存
     */

    setStorageSync: function setStorageSync(key, data) {
      ALI_OBJ.setStorageSync({
        key: key,
        data: data
      });
    },
    removeStorageSync: function removeStorageSync(key) {
      ALI_OBJ.removeStorageSync({
        key: key
      });
    },
    getStorageSync: function getStorageSync(key) {
      return ALI_OBJ.getStorageSync({
        key: key
      }).data;
    },


    /**
     * 媒体
     */

    saveImageToPhotosAlbum: function saveImageToPhotosAlbum(key) {
      Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["warn"])('\u5982\u679C\u60F3\u8981\u4FDD\u5B58\u5728\u7EBF\u56FE\u7247\u94FE\u63A5\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 ' + TIPS_NAME + '.saveImage');
    },
    previewImage: function previewImage() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(options);

      if (opts.current) {
        var idx = options.urls.indexOf(opts.current);
        opts.current = idx !== -1 ? idx : 0;
      }

      ALI_OBJ.previewImage(opts);
    },
    compressImage: function compressImage() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(options, {
        quality: ''
      }, {
        compressLevel: Math.round(options.quality / 100 * 4), // 支付宝图片压缩质量为 0 ~ 4，微信是 0 ~ 100
        apFilePaths: [options.src]
      });

      Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["handleSuccess"])(opts, function (res) {
        return Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(res, { apFilePaths: '' }, { tempFilePath: res.apFilePaths[0] });
      });

      ALI_OBJ.compressImage(opts);
    },
    chooseImage: function chooseImage() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(options);

      Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["handleSuccess"])(opts, function (res) {
        return Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(res, { apFilePaths: 'tempFilePaths' });
      });

      ALI_OBJ.chooseImage(opts);
    },


    /**
     * 位置
     */

    getLocation: function getLocation() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (options.aliType === undefined && options.type) {
        Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["warn"])('\u5982\u679C\u8981\u9488\u5BF9\u652F\u4ED8\u5B9D\u8BBE\u7F6E ' + TIPS_NAME + '.getLocation \u4E2D\u7684 type \u53C2\u6570\uFF0C\u8BF7\u4F7F\u7528 aliType, \u53D6\u503C\u4E3A 0~3');
        options.aliType = 0;
      }
      if (options.altitude) {
        Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["error"])('\u652F\u4ED8\u5B9D ' + TIPS_NAME + '.getLocation \u4E0D\u652F\u6301\u83B7\u53D6\u9AD8\u5EA6\u4FE1\u606F');
      }

      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(options, {
        type: '',
        aliType: 'type'
      });

      ALI_OBJ.getLocation(opts);
    },


    /**
     * 文件
     */

    saveFile: function saveFile() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(options, {
        tempFilePath: 'apFilePath'
      });

      Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["handleSuccess"])(opts, function (res) {
        return Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(res, { apFilePath: 'savedFilePath' });
      });

      ALI_OBJ.saveFile(opts);
    },
    removeSavedFile: function removeSavedFile() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(options, {
        filePath: 'apFilePath'
      });

      Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["handleSuccess"])(opts, function (res) {
        return Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(res, { apFilePath: 'savedFilePath' });
      });

      ALI_OBJ.removeSavedFile(opts);
    },
    getSavedFileList: function getSavedFileList() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(options, {
        filePath: 'apFilePath'
      });

      Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["handleSuccess"])(opts, function (res) {
        if (res.fileList) {
          res.fileList.forEach(function (file) {
            var resFile = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(file, {
              apFilePath: 'filePath'
            });
            file = resFile;
          });
        }
        return res;
      });

      ALI_OBJ.getSavedFileList(opts);
    },
    getSavedFileInfo: function getSavedFileInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(options, {
        filePath: 'apFilePath'
      });

      ALI_OBJ.getSavedFileInfo(opts);
    },
    getFileInfo: function getFileInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(options, {
        filePath: 'apFilePath'
      });

      ALI_OBJ.getFileInfo(opts);
    },


    /**
     * 设备
     */

    addPhoneContact: function addPhoneContact() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(options, {
        weChatNumber: 'alipayAccount'
      });

      ALI_OBJ.addPhoneContact(opts);
    },
    setClipboardData: function setClipboardData() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(options, {
        data: 'text'
      });

      ALI_OBJ.setClipboard(opts);
    },
    getClipboardData: function getClipboardData() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(options);

      Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["handleSuccess"])(opts, function (res) {
        return Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(res, { text: 'data' });
      });

      ALI_OBJ.getClipboard(opts);
    },
    setScreenBrightness: function setScreenBrightness() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(options, {
        value: 'brightness'
      });

      ALI_OBJ.setScreenBrightness(opts);
    },
    getScreenBrightness: function getScreenBrightness() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(options);

      Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["handleSuccess"])(opts, function (res) {
        return Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(res, { brightness: 'value' });
      });

      ALI_OBJ.getScreenBrightness(opts);
    },
    makePhoneCall: function makePhoneCall() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(options, {
        phoneNumber: 'number'
      });

      ALI_OBJ.makePhoneCall(opts);
    },
    stopAccelerometer: function stopAccelerometer() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      ALI_OBJ.offAccelerometerChange(options);
    },
    startAccelerometer: function startAccelerometer() {
      Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["warn"])('\u652F\u4ED8\u5B9D\u52A0\u901F\u8BA1\u4E0D\u9700\u8981\u4F7F\u7528 ' + TIPS_NAME + '.startAccelerometer \u5F00\u59CB\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728 ' + TIPS_NAME + '.onAccelerometerChange \u4E2D\u76D1\u542C');
    },
    stopCompass: function stopCompass() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      ALI_OBJ.offCompassChange(options);
    },
    startCompass: function startCompass() {
      Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["warn"])('\u652F\u4ED8\u5B9D\u7F57\u76D8\u4E0D\u9700\u8981\u4F7F\u7528 ' + TIPS_NAME + '.startCompass \u5F00\u59CB\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728 ' + TIPS_NAME + '.onCompassChange \u4E2D\u76D1\u542C');
    },
    stopGyroscope: function stopGyroscope() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      ALI_OBJ.offGyroscopeChange(options);
    },
    startGyroscope: function startGyroscope() {
      Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["warn"])('\u652F\u4ED8\u5B9D\u9640\u87BA\u4EEA\u4E0D\u9700\u8981\u4F7F\u7528 ' + TIPS_NAME + '.startGyroscope \u5F00\u59CB\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728 ' + TIPS_NAME + '.onGyroscopeChange \u4E2D\u76D1\u542C');
    },
    scanCode: function scanCode() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(options, {
        onlyFromCamera: 'hideAlbum',
        scanType: 'type'
      });

      if (opts.type) {
        switch (opts.type) {
          case 'barCode':
            opts.type = 'bar';
            break;
          case 'qrCode':
            opts.type = 'qr';
            break;
          default:
            Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["error"])(TIPS_NAME + '.scanCode \u53EA\u652F\u6301\u626B\u63CF\u6761\u5F62\u7801\u548C\u4E8C\u7EF4\u7801\uFF0C\u8BF7\u5C06 type \u8BBE\u7F6E\u4E3A barCode/qrCode');
            opts.type = 'qr';
            break;
        }
      }

      Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["handleSuccess"])(opts, function (res) {
        return Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(res, { code: 'result' });
      });

      ALI_OBJ.scan(opts);
    },


    /**
     * 开放接口
     */

    login: function login() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(options);

      Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["handleSuccess"])(opts, function (res) {
        return Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(res, { authCode: 'code' });
      });

      ALI_OBJ.getAuthCode(opts);
    },
    checkSession: function checkSession() {
      Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["warn"])('\u652F\u4ED8\u5B9D\u4E0D\u652F\u6301 ' + TIPS_NAME + '.checkSession \u68C0\u67E5\u767B\u5F55\u8FC7\u671F');
    },
    getUserInfo: function getUserInfo() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (options.withCredentials === true) {
        Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["warn"])('\u652F\u4ED8\u5B9D\u4E0D\u652F\u6301\u5728 ' + TIPS_NAME + '.getUserInfo \u4F7F\u7528 withCredentials \u53C2\u6570\u4E2D\u83B7\u53D6\u7B49\u654F\u611F\u4FE1\u606F');
      }
      if (options.lang) {
        Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["warn"])('\u652F\u4ED8\u5B9D\u4E0D\u652F\u6301\u5728 ' + TIPS_NAME + '.getUserInfo \u4E2D\u4F7F\u7528 lang \u53C2\u6570');
      }

      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(options);

      Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["handleSuccess"])(opts, function (res) {
        var userInfo = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(res, { avatar: 'avatarUrl' }, { gender: 0 });
        var params = ['country', 'province', 'city', 'language'];

        params.forEach(function (key) {
          babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(userInfo, key, {
            get: function get() {
              Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["warn"])('\u652F\u4ED8\u5B9D ' + TIPS_NAME + '.getUserInfo \u4E0D\u80FD\u83B7\u53D6 ' + key);
              return '';
            }
          });
        });

        return {
          userInfo: userInfo
        };
      });

      ALI_OBJ.getAuthUserInfo(opts);
    },
    requestPayment: function requestPayment() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!options.tradeNO) {
        Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["error"])('\u8BF7\u5728\u652F\u4ED8\u51FD\u6570 ' + TIPS_NAME + '.requestPayment \u4E2D\u6DFB\u52A0 tradeNO \u53C2\u6570\u7528\u4E8E\u652F\u4ED8\u5B9D\u652F\u4ED8');
      }

      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(options, {
        timeStamp: '',
        nonceStr: '',
        package: '',
        signType: '',
        paySign: ''
      });

      var cacheSuc = opts.success || _common_js__WEBPACK_IMPORTED_MODULE_1__["noop"];
      var cacheFail = opts.fail || _common_js__WEBPACK_IMPORTED_MODULE_1__["noop"];

      // 抹平用微信的 complete
      if (typeof opts.complete === 'function') {
        var cacheComplete = opts.complete;
        opts.complete = function (res) {
          if (+res.resultCode === 9000) {
            res.errMsg = 'requestPayment:ok';
            cacheComplete.call(this, res);
          }
        };
      }

      opts.success = function (res) {
        if (+res.resultCode === 9000) {
          cacheSuc.call(this, res);
        } else {
          cacheFail.call(this, res);
        }
      };

      ALI_OBJ.tradePay(opts);
    },


    /**
     * 画布
     */

    createCanvasContext: function createCanvasContext() {
      var canvasId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var ctx = ALI_OBJ.createCanvasContext(canvasId);

      CANVAS_MAP[canvasId] = ctx;

      return ctx;
    },
    canvasToTempFilePath: function canvasToTempFilePath() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!CANVAS_MAP[options.canvasId]) {
        Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["error"])('\u652F\u4ED8\u5B9D\u8C03\u7528 ' + TIPS_NAME + '.toTempFilePath \u65B9\u6CD5\u4E4B\u524D\u9700\u8981\u5148\u8C03\u7528 ' + TIPS_NAME + '.createCanvasContext \u521B\u5EFA context');
        return;
      }

      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(options, { canvasId: '' });
      var ctx = CANVAS_MAP[options.canvasId];

      Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["handleSuccess"])(opts, function (res) {
        return Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(res, { apFilePath: 'tempFilePath' }, { errMsg: 'canvasToTempFilePath:ok' });
      });

      ctx.toTempFilePath(opts);
    },
    canvasPutImageData: function canvasPutImageData() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!CANVAS_MAP[options.canvasId]) {
        Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["error"])('\u652F\u4ED8\u5B9D\u8C03\u7528 ' + TIPS_NAME + '.putImageData \u65B9\u6CD5\u4E4B\u524D\u9700\u8981\u5148\u8C03\u7528 ' + TIPS_NAME + '.createCanvasContext \u521B\u5EFA context');
        return;
      }

      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(options, { canvasId: '' });
      var ctx = CANVAS_MAP[options.canvasId];

      // success 里面的 this 指向参数 options
      Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["handleSuccess"])(opts, function (res) {
        return Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(res, undefined, { errMsg: 'canvasPutImageData:ok' });
      }, options);

      ctx.putImageData(opts);
    },
    canvasGetImageData: function canvasGetImageData() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!CANVAS_MAP[options.canvasId]) {
        Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["error"])('\u652F\u4ED8\u5B9D\u8C03\u7528 ' + TIPS_NAME + '.getImageData \u65B9\u6CD5\u4E4B\u524D\u9700\u8981\u5148\u8C03\u7528 ' + TIPS_NAME + '.createCanvasContext \u521B\u5EFA context');
        return;
      }

      var opts = Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["changeOpts"])(options, { canvasId: '' });
      var ctx = CANVAS_MAP[options.canvasId];

      // success 里面的 this 指向参数 options
      Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["handleSuccess"])(opts, undefined, options);

      ctx.getImageData(opts);
    },


    /**
     * WXML
     */

    createSelectorQuery: function createSelectorQuery() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var selectorQuery = ALI_OBJ.createSelectorQuery(options);
      var proxyMethods = ['boundingClientRect', 'scrollOffset'];
      var cbs = [];
      proxyMethods.forEach(function (name) {
        var originalMethod = selectorQuery[name];
        selectorQuery[name] = function () {
          var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _common_js__WEBPACK_IMPORTED_MODULE_1__["noop"];

          cbs.push(cb);
          return originalMethod.call(this);
        };
      });

      var originalExec = selectorQuery.exec;
      selectorQuery.exec = function () {
        var originalCb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _common_js__WEBPACK_IMPORTED_MODULE_1__["noop"];

        var cb = function cb(results) {
          results.forEach(function (item, index) {
            cbs[index](item);
          });
          originalCb(results);
        };
        return originalExec.call(this, cb);
      };

      selectorQuery.in = function () {
        return this;
      };

      return selectorQuery;
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (getWxToAliApi);

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(125);
/* harmony import */ var babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(218);




var envObj = Object(_common_js__WEBPACK_IMPORTED_MODULE_2__["getEnvObj"])();

// 特别指定的不进行Promise封装的方法
var blackList = ['clearStorage', 'hideToast', 'hideLoading', 'drawCanvas', 'canIUse', 'stopRecord', 'pauseVoice', 'stopVoice', 'pauseBackgroundAudio', 'stopBackgroundAudio', 'showNavigationBarLoading', 'hideNavigationBarLoading', 'createAnimation', 'createSelectorQuery', 'hideKeyboard', 'stopPullDownRefresh', 'createWorker', 'pageScrollTo', 'reportAnalytics', 'getMenuButtonBoundingClientRect'];

function getMapFromList(list) {
  if (list && list.length) {
    var map = {};
    list.forEach(function (item) {
      map[item] = true;
    });
    return map;
  }
}

function promisify(listObj, whiteList, customBlackList) {
  var result = {};
  var whiteListMap = getMapFromList(whiteList);
  var blackListMap = getMapFromList(blackList.concat(customBlackList));
  var fromMap = Object(_common_js__WEBPACK_IMPORTED_MODULE_2__["genFromMap"])();

  function promisifyFilter(key) {
    if (whiteListMap && whiteListMap[key] !== undefined) {
      return !!whiteListMap[key];
    } else {
      return !(blackListMap[key] || // 特别指定的方法
      /^get\w*Manager$/.test(key) || // 获取manager的api
      /^create\w*Context$/.test(key) || // 创建上下文相关api
      /^(on|off)/.test(key) || // 以 on* 或 off开头的方法
      /\w+Sync$/.test(key) // 以Sync结尾的方法
      );
    }
  }

  babel_runtime_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(listObj).forEach(function (key) {
    if (typeof listObj[key] !== 'function') {
      return;
    }

    result[key] = function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (promisifyFilter(key)) {
        if (!args[0] || fromMap[args[0]]) {
          args.unshift({ success: _common_js__WEBPACK_IMPORTED_MODULE_2__["noop"], fail: _common_js__WEBPACK_IMPORTED_MODULE_2__["noop"] });
        }
        var obj = args[0];
        var returned = void 0;
        var promise = new babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
          var originSuccess = obj.success;
          var originFail = obj.fail;
          obj.success = function (res) {
            originSuccess && originSuccess.call(this, res);
            resolve(res);
          };
          obj.fail = function (e) {
            originFail && originFail.call(this, e);
            reject(e);
          };
          returned = listObj[key].apply(envObj, args);
        });
        promise.__returned = returned;
        return promise;
      } else {
        return listObj[key].apply(envObj, args);
      }
    };
  });

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (promisify);

/***/ }),

/***/ 224:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

// removed by extractor

/***/ })

},[[0,1]]]);