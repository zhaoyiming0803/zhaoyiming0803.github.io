(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

var mpx = __webpack_require__(69);

module.exports = mpx.default;

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _getInnerListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(341);



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'mpx-view',
  data: function data() {
    return {
      hover: false
    };
  },

  props: {
    hoverClass: {
      type: String,
      default: 'none'
    },
    hoverStopPropagation: {
      type: Boolean,
      default: false
    },
    hoverStartTime: {
      type: Number,
      default: 50
    },
    hoverStayTime: {
      type: Number,
      default: 400
    }
  },
  render: function render(createElement) {
    var mergeAfter = void 0;
    if (this.hoverClass && this.hoverClass !== 'none') {
      mergeAfter = {
        listeners: {
          touchstart: this.handleTouchstart,
          touchend: this.handleTouchend
        },
        force: true
      };
    }
    var data = {
      class: ['mpx-view', this.className],
      on: Object(_getInnerListeners__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, { mergeAfter: mergeAfter })
    };
    return createElement('div', data, this.$slots.default);
  },

  computed: {
    className: function className() {
      if (this.hoverClass && this.hoverClass !== 'none' && this.hover) {
        return this.hoverClass;
      }
      return '';
    }
  },
  methods: {
    handleTouchstart: function handleTouchstart(e) {
      var _this = this;

      if (e.__hoverStopPropagation) {
        return;
      }
      e.__hoverStopPropagation = this.hoverStopPropagation;
      clearTimeout(this.startTimer);
      this.startTimer = setTimeout(function () {
        _this.hover = true;
      }, this.hoverStartTime);
    },
    handleTouchend: function handleTouchend() {
      var _this2 = this;

      clearTimeout(this.endTimer);
      this.endTimer = setTimeout(function () {
        _this2.hover = false;
      }, this.hoverStayTime);
    }
  }
});

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(173);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var builtInComponent_styl_selector_type_styles_index_0_mpx_button_vue_component_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(354);
/* harmony import */ var builtInComponent_styl_selector_type_styles_index_0_mpx_button_vue_component_true__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(builtInComponent_styl_selector_type_styles_index_0_mpx_button_vue_component_true__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _getInnerListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(341);




// 获取当前小程序样式版本配置
var styleVersion = window.__style || '';
var sizeClassMap = {
  'default': '',
  'mini': 'mpx-button-size-mini'
};
var typeClassMap = {
  'primary': 'mpx-button-type-primary',
  'warn': 'mpx-button-type-warn'
};
var plainClassMap = {
  'false': '',
  'true': 'mpx-button-plain'
};
var disabledClassMap = {
  'false': '',
  'true': 'mpx-button-disabled'
};
var clickDisabledClassMap = {
  'false': '',
  'true': 'mpx-button-click-disabled'
};
var loadingClassMap = {
  'false': '',
  'true': 'mpx-button-loading'
};
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'mpx-button',
  data: function data() {
    return {
      hover: false
    };
  },

  props: {
    name: String,
    size: {
      type: String,
      default: 'default'
    },
    type: {
      type: String,
      default: 'default'
    },
    plain: Boolean,
    disabled: Boolean,
    loading: Boolean,
    formType: String,
    hoverClass: {
      type: String,
      default: 'button-hover'
    },
    hoverStopPropagation: {
      type: Boolean,
      default: false
    },
    hoverStartTime: {
      type: Number,
      default: 20
    },
    hoverStayTime: {
      type: Number,
      default: 70
    }
  },
  computed: {
    className: function className() {
      if (this.hoverClass && this.hoverClass !== 'none' && this.hover) {
        return this.hoverClass;
      }
      return '';
    },
    classNameList: function classNameList() {
      var classArr = [];
      if (this.hoverClass && this.hoverClass !== 'none' && this.hover) {
        classArr.push(this.hoverClass);
      }
      if (styleVersion === 'v2') {
        classArr.push('' + sizeClassMap[this.size] + styleVersion);
        classArr.push('' + typeClassMap[this.type] + styleVersion);
        classArr.push('mpx-button-version' + styleVersion);
      } else {
        classArr.push(sizeClassMap[this.size]);
        classArr.push(typeClassMap[this.type]);
        classArr.push('mpx-button-version');
      }
      classArr.push(plainClassMap[this.plain]);
      classArr.push(disabledClassMap['' + !!this.disabled]);
      // 禁用click
      classArr.push(clickDisabledClassMap['' + !!this.disabled]);
      classArr.push(loadingClassMap['' + !!this.loading]);
      return classArr;
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (this.formType) {
      this.$on('tap', function () {
        if (_this.form && _this.form[_this.formType]) {
          _this.form[_this.formType]();
        }
      });
    }
  },
  render: function render(createElement) {
    var mergeAfter = void 0;
    if (this.hoverClass && this.hoverClass !== 'none') {
      mergeAfter = {
        listeners: {
          touchstart: this.handleTouchstart,
          touchend: this.handleTouchend
        },
        force: true
      };
    }
    var domProps = {
      name: this.name,
      disabled: this.disabled,
      loading: this.loading,
      plain: this.plain,
      type: this.type
    };
    var data = {
      class: ['mpx-button'].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this.classNameList)),
      domProps: domProps,
      on: Object(_getInnerListeners__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, {
        mergeAfter: mergeAfter,
        // 由于当前机制下tap事件只有存在tap监听才会触发，为了确保该组件能够触发tap，传递一个包含tap的defaultListeners用于模拟存在tap监听
        defaultListeners: ['tap']
      })
    };
    return createElement('button', data, this.$slots.default);
  },

  methods: {
    handleTouchstart: function handleTouchstart(e) {
      var _this2 = this;

      if (e.__hoverStopPropagation) {
        return;
      }
      e.__hoverStopPropagation = this.hoverStopPropagation;
      clearTimeout(this.startTimer);
      this.startTimer = setTimeout(function () {
        _this2.hover = true;
      }, this.hoverStartTime);
    },
    handleTouchend: function handleTouchend() {
      var _this3 = this;

      clearTimeout(this.endTimer);
      this.endTimer = setTimeout(function () {
        _this3.hover = false;
      }, this.hoverStayTime);
    }
  }
});

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".mpx-button-versionv2 {\n  width: 184px;\n  line-height: 1.41176471;\n  font-weight: 700;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n.mpx-button-version {\n  width: 100%;\n  line-height: 2.55555556;\n  cursor: pointer;\n}\n.mpx-button-version:after {\n  border: 1px solid rgba(0,0,0,0.2);\n}\n.mpx-button {\n  padding-left: 14px;\n  padding-right: 14px;\n  border: none;\n  outline: none;\n  position: relative;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 10px;\n  box-sizing: border-box;\n  font-size: 18px;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 5px;\n  -webkit-tap-highlight-color: transparent;\n  overflow: hidden;\n  color: #000;\n  background-color: #f8f8f8;\n/* 默认版本 size=mini style */\n/* v2 size=mini style */\n/* 默认版本 type=primary style */\n/* v2 type=primary style */\n/* 默认版本 type=warn style */\n/* v2 type=warn style */\n}\n.mpx-button:after {\n  content: \" \";\n  width: 200%;\n  height: 200%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n  box-sizing: border-box;\n  border-radius: 10px;\n}\n.mpx-button.button-hover {\n  background-color: #dedede;\n}\n.mpx-button.mpx-button-size-mini {\n  display: inline-block;\n  line-height: 2.3;\n  font-size: 13px;\n  padding: 0 1.34em;\n  width: auto;\n}\n.mpx-button.mpx-button-size-miniv2 {\n  width: auto;\n  padding: 0 0.75em;\n  line-height: 2;\n  font-size: 16px;\n  display: inline-block;\n}\n.mpx-button.mpx-button-plain {\n  color: #353535;\n  border: 1px solid #353535;\n  background-color: transparent;\n}\n.mpx-button.mpx-button-plain.mpx-button-plain.button-hover {\n  background-color: rgba(0,0,0,0);\n  color: #828282;\n  border: 1px solid #828282;\n}\n.mpx-button.mpx-button-type-primary {\n  background-color: #1aad19;\n  color: #fff;\n}\n.mpx-button.mpx-button-type-primary.mpx-button-type-primary.mpx-button-plain {\n  color: #1aad19;\n  border-color: #1aad19;\n  background-color: #fff;\n}\n.mpx-button.mpx-button-type-primaryv2 {\n  background-color: #07c160;\n  color: #fff;\n}\n.mpx-button.mpx-button-type-primaryv2.mpx-button-type-primaryv2.button-hover {\n  color: #fff;\n  background-color: #06ad56;\n}\n.mpx-button.mpx-button-type-primaryv2.mpx-button-type-primaryv2.mpx-button-plain {\n  color: #06ae56;\n  border-color: #179c16;\n  background-color: #fff;\n}\n.mpx-button.mpx-button-type-primaryv2.mpx-button-type-primaryv2.button-hover.mpx-button-plain {\n  color: #06ae56;\n  background-color: rgba(0,0,0,0.1);\n}\n.mpx-button.mpx-button-type-warn {\n  color: #fff;\n  background-color: #e64340;\n}\n.mpx-button.mpx-button-type-warn.mpx-button-type-warn.mpx-button-plain {\n  color: #e64340;\n  background-color: transparent;\n  border: 1px solid #e64340;\n}\n.mpx-button.mpx-button-type-warnv2 {\n  color: #fa5151;\n  background-color: #f2f2f2;\n}\n.mpx-button.mpx-button-type-warnv2.mpx-button-type-warnv2.button-hover {\n  background-color: #d9d9d9;\n}\n.mpx-button.mpx-button-type-warnv2.mpx-button-type-warnv2.mpx-button-plain {\n  color: #fa5151;\n  background-color: #fff;\n  border: 1px solid #e64340;\n}\n.mpx-button.mpx-button-type-warnv2.mpx-button-type-warnv2.button-hover.mpx-button-plain {\n  color: #f58c8d;\n  border: 1px solid #f58a8b;\n  background-color: #fff;\n}\n.mpx-button.mpx-button-disabled {\n  color: rgba(0,0,0,0.18) !important;\n  background-color: #fafafa !important;\n  border: 1px solid rgba(0,0,0,0.2) !important;\n}\n.mpx-button.mpx-button-click-disabled {\n  pointer-events: none;\n}\n.mpx-button.mpx-button-loading.mpx-button-type-warn {\n  color: rgba(255,255,255,0.6);\n  background-color: #ce3c39;\n}\n.mpx-button.mpx-button-loading.mpx-button-type-warnv2 {\n  background-color: #d9d9d9;\n  color: #fa5151;\n}\n.mpx-button.mpx-button-loading.mpx-button-type-primary {\n  color: rgba(255,255,255,0.6);\n  background-color: #179b16;\n}\n.mpx-button.mpx-button-loading:before {\n  content: \" \";\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  vertical-align: middle;\n  -webkit-animation: mpxButton 1s steps(12, end) infinite;\n  animation: mpxButton 1s steps(12, end) infinite;\n  background: transparent url(\"data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iciIgd2lkdGg9JzEyMHB4JyBoZWlnaHQ9JzEyMHB4JyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD4KICAgIDxyZWN0IHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjRTlFOUU5JwogICAgICAgICAgdHJhbnNmb3JtPSdyb3RhdGUoMCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+CiAgICA8L3JlY3Q+CiAgICA8cmVjdCB4PSc0Ni41JyB5PSc0MCcgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHJ4PSc1JyByeT0nNScgZmlsbD0nIzk4OTY5NycKICAgICAgICAgIHRyYW5zZm9ybT0ncm90YXRlKDMwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4KICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyM5Qjk5OUEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSg2MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+CiAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz4KICAgIDwvcmVjdD4KICAgIDxyZWN0IHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjQTNBMUEyJwogICAgICAgICAgdHJhbnNmb3JtPSdyb3RhdGUoOTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNBQkE5QUEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgxMjAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNCMkIyQjInCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgxNTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNCQUI4QjknCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgxODAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNDMkMwQzEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgyMTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNDQkNCQ0InCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgyNDAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNEMkQyRDInCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgyNzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNEQURBREEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgzMDAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNFMkUyRTInCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgzMzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0Pgo8L3N2Zz4=\") no-repeat;\n  background-size: 100%;\n  margin: -0.2em 0.34em 0 0;\n}\n@-moz-keyframes mpxButton {\n  0% {\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n  100% {\n    transform: rotate3d(0, 0, 1, 360deg);\n  }\n}\n@-webkit-keyframes mpxButton {\n  0% {\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n  100% {\n    transform: rotate3d(0, 0, 1, 360deg);\n  }\n}\n@-o-keyframes mpxButton {\n  0% {\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n  100% {\n    transform: rotate3d(0, 0, 1, 360deg);\n  }\n}\n@keyframes mpxButton {\n  0% {\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n  100% {\n    transform: rotate3d(0, 0, 1, 360deg);\n  }\n}\n", ""]);

// exports


/***/ })

}]);