(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_mpxjs_webpack_plugin_lib_loader_js_ref_9_1_index_mpx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(348);
/* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_5750d4a6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_mpxjs_webpack_plugin_lib_loader_js_ref_9_1_index_mpx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(356);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(336);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(346)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_mpxjs_webpack_plugin_lib_loader_js_ref_9_1_index_mpx__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_5750d4a6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_mpxjs_webpack_plugin_lib_loader_js_ref_9_1_index_mpx__WEBPACK_IMPORTED_MODULE_1__[/* render */ "a"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_5750d4a6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_mpxjs_webpack_plugin_lib_loader_js_ref_9_1_index_mpx__WEBPACK_IMPORTED_MODULE_1__[/* staticRenderFns */ "b"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index.mpx"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(347);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(15).default
var update = add("2085dfdc", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "\n.test-container {\n  margin-bottom: 20px;\n  width: 100%;\n  height: 1000px;\n  background-color: #f00;\n}\n.tabbar {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  background: #00f;\n  color: #fff;\n}\n.box {\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, mpx) {/* harmony import */ var _node_modules_mpxjs_webpack_plugin_lib_runtime_optionProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _mpxjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

global.currentSrcMode = "wx";
global.currentResource = "/Users/didi/Desktop/github/test-mpx-web/src/pages/index.mpx";


console.log('index app: ', getApp());
console.log('apiProxy: ', _mpxjs_core__WEBPACK_IMPORTED_MODULE_1__["default"].request);
Object(_mpxjs_core__WEBPACK_IMPORTED_MODULE_1__["createPage"])({
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
      /* mpx replace */ mpx.navigateTo({
        url: '/pages/list',
        success: function success(res) {
          console.log('res: ', res);
        }
      }/* mpx inject */ , "__mpx_src_mode_wx__");
    },
    toPackageACat: function toPackageACat() {
      /* mpx replace */ mpx.navigateTo({
        url: '/packageA/cat'
      }/* mpx inject */ , "__mpx_src_mode_wx__");
    },
    toPackageBDog: function toPackageBDog() {
      /* mpx replace */ mpx.navigateTo({
        url: '/packageB/dog'
      }/* mpx inject */ , "__mpx_src_mode_wx__");
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
      /* mpx replace */ mpx.pageScrollTo({
        // scrollTop: 0,
        selector: '#selector',
        duration: 3000,
        success: function success(params) {
          console.log('success: ', params);
        },
        complete: function complete(params) {
          console.log('complete: ', params);
        }
      }/* mpx inject */ , "__mpx_src_mode_wx__");
    },
    startPullDown: function startPullDown() {
      /* mpx replace */ mpx.startPullDownRefresh(/* mpx inject */ "__mpx_src_mode_wx__");
    },
    stopPullDown: function stopPullDown() {
      /* mpx replace */ mpx.stopPullDownRefresh(/* mpx inject */ "__mpx_src_mode_wx__");
    }
  }
});

/* harmony default export */ __webpack_exports__["a"] = (Object(_node_modules_mpxjs_webpack_plugin_lib_runtime_optionProcessor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(global.currentOption, "page", "", undefined, { "navigationBarTitleText": "首页123", "navigationBarBackgroundColor": "#ccc", "navigationBarTextStyle": "white", "backgroundTextStyle": "dark", "enablePullDownRefresh": true, "disableScroll": false }, {}, { 'mpx-view': Object(_node_modules_mpxjs_webpack_plugin_lib_runtime_optionProcessor__WEBPACK_IMPORTED_MODULE_0__[/* getComponent */ "b"])(__webpack_require__(350), true), 'mpx-button': Object(_node_modules_mpxjs_webpack_plugin_lib_runtime_optionProcessor__WEBPACK_IMPORTED_MODULE_0__[/* getComponent */ "b"])(__webpack_require__(352), true) }, undefined));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(18), __webpack_require__(349)))

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_vue_loader_lib_selector_type_script_index_0_built_in_loader_js_mpx_view_vue_component_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(351);
/* harmony import */ var _vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(336);
var disposed = false
/* script */


/* template */
var __vue_render__, __vue_static_render_fns__
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(
  _babel_loader_vue_loader_lib_selector_type_script_index_0_built_in_loader_js_mpx_view_vue_component_true__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
  __vue_render__,
  __vue_static_render_fns__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/@mpxjs/webpack-plugin/lib/runtime/components/web/mpx-view.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_vue_loader_lib_selector_type_script_index_0_built_in_loader_js_mpx_button_vue_component_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(353);
/* harmony import */ var _vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(336);
var disposed = false
/* script */


/* template */
var __vue_render__, __vue_static_render_fns__
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(
  _babel_loader_vue_loader_lib_selector_type_script_index_0_built_in_loader_js_mpx_button_vue_component_true__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
  __vue_render__,
  __vue_static_render_fns__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/@mpxjs/webpack-plugin/lib/runtime/components/web/mpx-button.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(59);
            var content = __webpack_require__(355);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c(
      "div",
      { staticClass: "box" },
      [
        _c(
          "mpx-view",
          { class: "{active: isActive}", on: { tap: _vm.switchActiveStatus } },
          [_vm._v("this is index.mpx!!!!!!!!")]
        ),
        _vm._v(" "),
        _c(
          "div",
          [
            _c("mpx-button", { on: { tap: _vm.toListPage } }, [
              _vm._v("去列表页")
            ]),
            _vm._v(" "),
            _c("mpx-button", { on: { tap: _vm.toPackageACat } }, [
              _vm._v("去A分包Cat页")
            ]),
            _vm._v(" "),
            _c("mpx-button", { on: { tap: _vm.toPackageBDog } }, [
              _vm._v("去B分包Dog页")
            ]),
            _vm._v(" "),
            _c("mpx-button", { on: { tap: _vm.scrollToSelector } }, [
              _vm._v("ease scroll to #selector")
            ]),
            _vm._v(" "),
            _c("mpx-button", { on: { tap: _vm.startPullDown } }, [
              _vm._v("开始下拉刷新")
            ]),
            _vm._v(" "),
            _c("mpx-button", { on: { tap: _vm.stopPullDown } }, [
              _vm._v("停止下拉刷新")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "test-container" }, [
          _c("div", [_vm._v(_vm._s(_vm.dialogShow))]),
          _vm._v(" "),
          _c("div", [_vm._v(_vm._s(_vm.showOneButtonDialog))]),
          _vm._v(" "),
          _vm.isActive ? _c("div", [_vm._v(_vm._s(_vm.list))]) : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "test-container", attrs: { id: "selector" } })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {}

/***/ })

}]);