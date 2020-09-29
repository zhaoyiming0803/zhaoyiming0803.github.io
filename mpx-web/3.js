(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_vue_loader_lib_selector_type_script_index_0_built_in_loader_js_mpx_image_vue_component_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358);
/* harmony import */ var _vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(339);
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
  _babel_loader_vue_loader_lib_selector_type_script_index_0_built_in_loader_js_mpx_image_vue_component_true__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
  __vue_render__,
  __vue_static_render_fns__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/@mpxjs/webpack-plugin/lib/runtime/components/web/mpx-image.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var builtInComponent_styl_selector_type_styles_index_0_mpx_image_vue_component_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(359);
/* harmony import */ var builtInComponent_styl_selector_type_styles_index_0_mpx_image_vue_component_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(builtInComponent_styl_selector_type_styles_index_0_mpx_image_vue_component_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getInnerListeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(338);




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'mpx-image',
  props: {
    src: {
      type: String
    },
    mode: {
      type: String,
      default: 'scaleToFill'
    },
    lazyLoad: {
      type: Boolean,
      default: false
    },
    showMenuByLongpress: {
      type: Boolean,
      default: false
    }
  },
  beforeCreate: function beforeCreate() {
    var _this = this;

    this.image = new Image();
    this.image.onload = function (e) {
      _this.$emit('load', e);
    };
    this.image.onerror = function (e) {
      _this.$emit('error', e);
    };
  },

  watch: {
    src: {
      handler: function handler(src) {
        this.image.src = src;
      },

      immediate: true
    }
  },
  render: function render(createElement) {
    if (this.mode === 'widthFix') {
      return createElement('img', {
        domProps: {
          src: this.src
        },
        style: {
          height: 'auto'
        },
        class: ['mpx-image'],
        on: Object(_getInnerListeners__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, { ignoredListeners: ['load', 'error'] })
      });
    }

    var style = {
      backgroundImage: 'url(' + this.src + ')'
    };
    switch (this.mode) {
      case 'scaleToFill':
        style.backgroundSize = '100% 100%';
        break;
      case 'aspectFit':
        style.backgroundSize = 'contain';
        style.backgroundPosition = 'center';
        style.backgroundRepeat = 'no-repeat';
        break;
      case 'aspectFill':
        style.backgroundSize = 'cover';
        style.backgroundPosition = 'center';
        break;
      case 'top':
      case 'bottom':
      case 'center':
      case 'left':
      case 'right':
      case 'top left':
      case 'top right':
      case 'bottom left':
      case 'bottom right':
        style.backgroundPosition = this.mode;
        break;
    }

    return createElement('div', {
      style: style,
      class: ['mpx-image'],
      on: Object(_getInnerListeners__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, { ignoredListeners: ['load', 'error'] })
    });
  }
});

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(59);
            var content = __webpack_require__(360);

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

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".mpx-image {\n  width: 300px;\n  height: 225px;\n  display: inline-block;\n}\n", ""]);

// exports


/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_mpxjs_webpack_plugin_lib_loader_js_ref_9_1_dog_mpx_page_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(363);
/* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_8405aa1e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_mpxjs_webpack_plugin_lib_loader_js_ref_9_1_dog_mpx_page_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(365);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(339);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_mpxjs_webpack_plugin_lib_loader_js_ref_9_1_dog_mpx_page_true__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_8405aa1e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_mpxjs_webpack_plugin_lib_loader_js_ref_9_1_dog_mpx_page_true__WEBPACK_IMPORTED_MODULE_1__[/* render */ "a"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_8405aa1e_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_mpxjs_webpack_plugin_lib_loader_js_ref_9_1_dog_mpx_page_true__WEBPACK_IMPORTED_MODULE_1__[/* staticRenderFns */ "b"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/packageB/dog.mpx"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _node_modules_mpxjs_webpack_plugin_lib_runtime_optionProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _mpxjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69);
/* harmony import */ var static_images_dog_jpg_packageName_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(364);
/* harmony import */ var static_images_dog_jpg_packageName_main__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(static_images_dog_jpg_packageName_main__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//

global.currentSrcMode = "wx";
global.currentResource = "/Users/didi/Desktop/github/test-mpx-web/src/packageB/dog.mpx";




Object(_mpxjs_core__WEBPACK_IMPORTED_MODULE_1__["createPage"])({
  data: {
    dogAvatar: static_images_dog_jpg_packageName_main__WEBPACK_IMPORTED_MODULE_2___default.a,
    pageName: 'packageB/dog'
  },
  onLoad: function onLoad() {},
  onPageScroll: function onPageScroll(e) {
    console.log('onPageScroll: ', e);
  }
});

/* harmony default export */ __webpack_exports__["a"] = (Object(_node_modules_mpxjs_webpack_plugin_lib_runtime_optionProcessor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(global.currentOption, "page", "", undefined, { "enablePullDownRefresh": false, "disableScroll": false }, {}, { 'mpx-image': Object(_node_modules_mpxjs_webpack_plugin_lib_runtime_optionProcessor__WEBPACK_IMPORTED_MODULE_0__[/* getComponent */ "b"])(__webpack_require__(357), true) }, undefined));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(18)))

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dog6711ed1a87a7423d586868f996ad4587.jpg";

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { height: "1000px" } }, [
      _c("div", [_vm._v("hello packageB dog.mpx")])
    ])
  }
]
render._withStripped = true

if (false) {}

/***/ })

}]);