exports.ids = [1];
exports.modules = {

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/article.vue?vue&type=template&id=28fe57c6&
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
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<div style=\"margin-top: 20px\">", "</div>", [_vm._l(_vm.articleList, function (article) {
    return _c('el-card', {
      key: article.id,
      staticClass: "box-card",
      staticStyle: {
        "margin-bottom": "10px",
        "cursor": "pointer"
      },
      attrs: {
        "shadow": "hover"
      }
    }, [_c('div', {
      staticStyle: {
        "display": "inline-block",
        "height": "80px"
      },
      on: {
        "click": function ($event) {
          return _vm.toThisArticle(article.id);
        }
      }
    }, [_c('img', {
      staticStyle: {
        "width": "100px",
        "vertical-align": "top"
      },
      attrs: {
        "src": article.cover
      }
    })]), _vm._v(" "), _c('span', {
      staticClass: "wrap",
      staticStyle: {
        "display": "inline-block",
        "height": "100px",
        "vertical-align": "top",
        "width": "calc(100% - 120px)"
      },
      on: {
        "click": function ($event) {
          return _vm.toThisArticle(article.id);
        }
      }
    }, [_c('p', {
      staticStyle: {
        "color": "#ea562e"
      }
    }, [_vm._v(_vm._s(article.title))]), _vm._v(" "), _c('p', {
      staticClass: "wrap",
      domProps: {
        "innerHTML": _vm._s(article.content)
      }
    })])]);
  }), _vm._ssrNode(" "), _c('el-pagination', {
    staticStyle: {
      "padding": "30px 0",
      "text-align": "center"
    },
    attrs: {
      "background": "",
      "current-page": _vm.page,
      "page-size": _vm.limit,
      "total": _vm.total,
      "layout": "total, prev, pager, next, jumper"
    },
    on: {
      "current-change": _vm.getArticleList
    }
  })], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/article.vue?vue&type=template&id=28fe57c6&

// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(80);

// EXTERNAL MODULE: external "marked"
var external_marked_ = __webpack_require__(77);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article.vue?vue&type=script&lang=js&


/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  data() {
    return {
      typeList: {},
      articleList: [],
      page: 1,
      limit: 5,
      total: 0,
      mytype: "all"
    };
  },
  created() {
    if (this.$route.query && this.$route.query.type) {
      this.mytype = this.$route.query.type;
    }
    this.getArticleList();
    this.findCategory();
  },
  mounted() {
    const link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = 'https://cdn.bootcss.com/github-markdown-css/2.10.0/github-markdown.min.css';
    document.head.appendChild(link);
  },
  methods: {
    toThisArticle(id) {
      console.log(id, "id");
      this.$router.push({
        path: "/articleDetail",
        query: {
          id: id
        }
      });
    },
    getTypeArticleList(type) {
      console.log(type, "type");
      this.mytype = type;
      this.getArticleList();
    },
    getArticleList(page = 1) {
      this.page = page;
      article["a" /* default */].findArticlePage(this.page, this.limit, this.mytype).then(res => {
        this.articleList = res.data.data.records;
        this.total = res.data.data.total;
        this.articleList.forEach(item => {
          item.content = Object(external_marked_["marked"])(item.content);
        });
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
// CONCATENATED MODULE: ./pages/article.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/article.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(97)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "abf7a67c"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (component.exports);

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

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(98);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("28dcbff8", content, true, context)
};

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_article_vue_vue_type_style_index_0_id_28fe57c6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_article_vue_vue_type_style_index_0_id_28fe57c6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_article_vue_vue_type_style_index_0_id_28fe57c6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_article_vue_vue_type_style_index_0_id_28fe57c6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_article_vue_vue_type_style_index_0_id_28fe57c6_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".item{margin-right:40px;margin-top:10px}.wrap{-webkit-box-orient:vertical;-webkit-line-clamp:2;display:-webkit-box;line-height:30px;overflow-x:hidden;overflow-y:hidden;word-break:break-all}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=article.js.map