exports.ids = [2];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{background:#282c34;color:#abb2bf}.hljs-comment,.hljs-quote{color:#5c6370;font-style:italic}.hljs-doctag,.hljs-formula,.hljs-keyword{color:#c678dd}.hljs-deletion,.hljs-name,.hljs-section,.hljs-selector-tag,.hljs-subst{color:#e06c75}.hljs-literal{color:#56b6c2}.hljs-addition,.hljs-attribute,.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#98c379}.hljs-attr,.hljs-number,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-pseudo,.hljs-template-variable,.hljs-type,.hljs-variable{color:#d19a66}.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-symbol,.hljs-title{color:#61aeee}.hljs-built_in,.hljs-class .hljs-title,.hljs-title.class_{color:#e6c07b}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-link{-webkit-text-decoration:underline;text-decoration:underline}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_articleDetail_vue_vue_type_style_index_0_id_90209318_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_articleDetail_vue_vue_type_style_index_0_id_90209318_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_articleDetail_vue_vue_type_style_index_0_id_90209318_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_articleDetail_vue_vue_type_style_index_0_id_90209318_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_articleDetail_vue_vue_type_style_index_0_id_90209318_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".item{margin-right:40px;margin-top:10px}pre code img{height:auto;margin:0;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/articleDetail.vue?vue&type=template&id=90209318&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticStyle: {
      "width": "800px",
      "margin": "50px auto"
    }
  }, [_vm._ssrNode("<div style=\"width: 100%\">", "</div>", [_c('el-badge', {
    staticClass: "item"
  }, [_c('el-button', {
    attrs: {
      "size": "small"
    },
    on: {
      "click": function ($event) {
        return _vm.getTypeArticleList('all');
      }
    }
  }, [_vm._v("全部")])], 1), _vm._ssrNode(" "), _vm._l(_vm.typeList, function (type, index) {
    return _c('el-badge', {
      key: index,
      staticClass: "item",
      attrs: {
        "value": type
      }
    }, [_c('el-button', {
      attrs: {
        "size": "small"
      },
      on: {
        "click": function ($event) {
          return _vm.getTypeArticleList(index);
        }
      }
    }, [_vm._v(_vm._s(index))])], 1);
  })], 2), _vm._ssrNode(" <div style=\"margin-top: 30px;\"><h1 style=\"text-align: center;font-size:20px;font-weight: bold\">" + _vm._ssrEscape(_vm._s(_vm.article.title)) + "</h1> <p style=\"text-align: right\"><span style=\"font-weight: bold;color: rgb(251, 124, 161);margin-right: 5px\">" + _vm._ssrEscape(_vm._s(_vm.article.author)) + "</span>发表于<span style=\"color: rgb(138,136,136);margin-left: 5px\">" + _vm._ssrEscape(_vm._s(_vm.article.gmtCreate)) + "</span></p></div> <div style=\"border: 2px solid silver;padding: 20px\">" + _vm._s(_vm.article.content) + "</div> "), _c('el-backtop')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/articleDetail.vue?vue&type=template&id=90209318&

// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(80);

// EXTERNAL MODULE: external "marked"
var external_marked_ = __webpack_require__(77);

// EXTERNAL MODULE: external "highlight.js"
var external_highlight_js_ = __webpack_require__(78);

// EXTERNAL MODULE: ./node_modules/highlight.js/styles/atom-one-dark.css
var atom_one_dark = __webpack_require__(99);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/articleDetail.vue?vue&type=script&lang=js&





// const highlightCode = () => {
//   const block = document.querySelectorAll('pre code')
//   hljs.configure({useBR: true});
//   block.forEach((el) => {
//     hljs.highlightBlock(el)
//   })
// }
/* harmony default export */ var articleDetailvue_type_script_lang_js_ = ({
  layout: "article",
  data() {
    return {
      typeList: {},
      article: {
        title: "",
        content: ""
      }
    };
  },
  mounted() {
    // highlightCode()
  },
  updated() {
    // highlightCode()
  },
  created() {
    this.findCategory();
    this.getContent();
  },
  methods: {
    getContent() {
      var id = this.$route.query.id;
      article["a" /* default */].getContent(id).then(res => {
        this.article = res.data.data.article;
        console.log(this.article.content, "content");
        // this.article.content = marked(res.data.data.article.content)
      });
    },

    getTypeArticleList(type) {
      console.log(type, "type");
      this.$router.push({
        path: "/article",
        query: {
          type: type
        }
      });
    },
    findCategory() {
      article["a" /* default */].findCategory().then(res => {
        this.typeList = res.data.data;
        // console.log(res,"666")
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/articleDetail.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articleDetailvue_type_script_lang_js_ = (articleDetailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/articleDetail.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(101)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_articleDetailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "632bc933"
  
)

/* harmony default export */ var articleDetail = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

/* harmony default export */ __webpack_exports__["a"] = ({
  //查询所有文章分类
  findCategory() {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: `/eduservice/article/findCategory`,
      method: 'get'
    });
  },
  //根据分类分页查询文章
  findArticlePage(current, limit, category) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: `/eduservice/article/findAll/${current}/${limit}/${category}`,
      method: 'get'
    });
  },
  getContent(id) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: `/eduservice/article/getContent/${id}`,
      method: 'get'
    });
  }
});

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(102);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("2851bede", content, true, context)
};

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(100);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("29de35de", content, true)

/***/ })

};;
//# sourceMappingURL=articleDetail.js.map