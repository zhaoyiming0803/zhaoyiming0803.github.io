
var window = window || {};

window["webpackJsonp"] = require("../bundle.js");
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, __stringify__) {/* mpx inject */ global.currentModuleId = "m4634343d"
global.currentResource = "/Users/didi/Desktop/github/test-mpx-web/src/pages/index.mpx"
global.currentCtor = Component
global.currentCtorType = "component"
global.currentSrcMode = "wx"
/* mpx inject */ global.currentInject = {
  moduleId: "m4634343d",
  render: function () {
    __stringify__.stringifyClass("", "{active: isActive}");
    25;
    this._c("dialogShow", this.dialogShow);
    this._c("buttons", this.buttons);
    this._c("dialogShow", this.dialogShow);
    this._c("showOneButtonDialog", this.showOneButtonDialog);
    this._c("list", this.list);
    this._r();
  }
};
/* harmony import */ var _babel_loader_node_modules_mpxjs_webpack_plugin_lib_selector_type_script_index_0_index_mpx_isFirst_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(228);
/* empty/unused harmony star reexport */global.currentModuleId
/* script */


/* styles */
__webpack_require__(229)

/* json */
__webpack_require__(230)

/* template */
__webpack_require__(231)


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1), __webpack_require__(227)))

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

function objectKeys(obj) {
  if (true) {
    return Object.keys(obj);
  } else { var item, i, shift, stack, inKey, key, objStr, shiftMap, stackMap, keys; }
}

function genRegExp(str, flags) {
  if (true) {
    return new RegExp(str, flags);
  } else {}
}

function extend(target, from) {
  var fromKeys = objectKeys(from);
  for (var i = 0; i < fromKeys.length; i++) {
    var key = fromKeys[i];
    target[key] = from[key];
  }
  return target;
}

function concat(a, b) {
  return a ? b ? a + ' ' + b : a : b || '';
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

function likeArray(arr) {
  if (true) {
    return Array.isArray(arr);
  } else {}
}

function isDef(v) {
  return v !== undefined && v !== null;
}

function stringifyClass(value) {
  if (!value) return '';
  if (likeArray(value)) {
    return stringifyArray(value);
  }
  if (isObject(value)) {
    return stringifyObject(value);
  }
  if (typeof value === 'string') {
    return value;
  }
  return '';
}

function stringifyArray(value) {
  var res = '';
  var stringified;
  for (var i = 0; i < value.length; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) res += ' ';
      res += stringified;
    }
  }
  return res;
}

var mpxDashReg = genRegExp('(.+)MpxDash$');

function stringifyObject(value) {
  var res = '';
  var objKeys = objectKeys(value);
  for (var i = 0; i < objKeys.length; i++) {
    var key = objKeys[i];
    if (value[key]) {
      if (res) res += ' ';
      if (mpxDashReg.test(key)) {
        key = hump2dash(mpxDashReg.exec(key)[1]);
      }
      res += key;
    }
  }
  return res;
}

function hump2dash(value) {
  var reg = genRegExp('[A-Z]', 'g');
  return value.replace(reg, function (match) {
    return '-' + match.toLowerCase();
  });
}

function dash2hump(value) {
  var reg = genRegExp('-([a-z])', 'g');
  return value.replace(reg, function (match, p1) {
    return p1.toUpperCase();
  });
}

function parseStyleText(cssText) {
  var res = {};
  var listDelimiter = genRegExp(';(?![^(]*[)])', 'g');
  var propertyDelimiter = genRegExp(':(.+)');
  var arr = cssText.split(listDelimiter);
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[dash2hump(tmp[0].trim())] = tmp[1].trim());
    }
  }
  return res;
}

function genStyleText(styleObj) {
  var res = '';
  var objKeys = objectKeys(styleObj);

  for (var i = 0; i < objKeys.length; i++) {
    var key = objKeys[i];
    var item = styleObj[key];
    res += hump2dash(key) + ':' + item + ';';
  }
  return res;
}

function mergeObjectArray(arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
}

function normalizeDynamicStyle(value) {
  if (!value) return {};
  if (likeArray(value)) {
    return mergeObjectArray(value);
  }
  if (typeof value === 'string') {
    return parseStyleText(value);
  }
  return value;
}

module.exports = {
  stringifyClass: function (staticClass, dynamicClass) {
    if (typeof staticClass !== 'string') {
      return console.log('Template attr class must be a string!');
    }
    return concat(staticClass, stringifyClass(dynamicClass));
  },
  stringifyStyle: function (staticStyle, dynamicStyle) {
    var normalizedDynamicStyle = normalizeDynamicStyle(dynamicStyle);
    var parsedStaticStyle = typeof staticStyle === 'string' ? parseStyleText(staticStyle) : {};
    return genStyleText(extend(parsedStaticStyle, normalizedDynamicStyle));
  }
};

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mpxjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);



console.log('index app: ', getApp());
console.log('apiProxy: ', _mpxjs_core__WEBPACK_IMPORTED_MODULE_0__["default"].request);
Object(_mpxjs_core__WEBPACK_IMPORTED_MODULE_0__["createPage"])({
  options: {
    aaa: 123
  },
  data: {
    pageName: 'index',
    dialogShow: false,
    showOneButtonDialog: false,
    buttons: [{ text: '取消' }, { text: '确定' }],
    isActive: true,
    list: '12345'
  },
  created: function created() {
    // console.log('this.$options: ', this.$options)
    // console.log('this.options: ', this.$options.options) 
  },
  onPageScroll: function onPageScroll(e) {
    console.log('onPageScroll: ', e);
  },

  onPullDownRefresh: function onPullDownRefresh() {
    console.log('onPullDownRefresh');
  },
  onReachBottom: function onReachBottom() {
    console.log('onReachBottom: ', this.buttons);
  },
  methods: {
    toListPage: function toListPage() {
      wx.navigateTo({
        url: '/pages/list',
        success: function success(res) {
          console.log('res: ', res);
        }
      });
    },
    toPackageACat: function toPackageACat() {
      wx.navigateTo({
        url: '/packageA/cat'
      });
    },
    toPackageBDog: function toPackageBDog() {
      wx.navigateTo({
        url: '/packageB/dog'
      });
    },
    tapDialogButton: function tapDialogButton() {
      this.dialogShow = false;
      this.showOneButtonDialog = false;
    },
    showDialog: function showDialog() {
      this.dialogShow = true;
    },
    switchActiveStatus: function switchActiveStatus() {
      this.isActive = !this.isActive;
    },
    clickButton: function clickButton() {},
    scrollToSelector: function scrollToSelector() {
      wx.pageScrollTo({
        // scrollTop: 0,
        selector: '#selector',
        duration: 4000,
        success: function success(params) {
          console.log('success: ', params);
        },
        complete: function complete(params) {
          console.log('complete: ', params);
        }
      });
    },
    startPullDown: function startPullDown() {
      wx.startPullDownRefresh();
    },
    stopPullDown: function stopPullDown() {
      wx.stopPullDownRefresh();
    }
  }
});

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

// removed by extractor

/***/ })

},[[226,1]]]);