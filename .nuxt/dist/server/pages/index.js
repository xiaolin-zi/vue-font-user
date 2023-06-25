exports.ids = [5];
exports.modules = {

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=6f94e1c5&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.bannerList.length ? _c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mySwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "mySwiper"
    }]
  }, [_vm._ssrNode("<div class=\"swiper-wrapper\">" + _vm._ssrList(_vm.bannerList, function (banner) {
    return "<div class=\"swiper-slide\" style=\"background: #040b1b\"><a target=\"_blank\"" + _vm._ssrAttr("href", banner.linkUrl) + "><img" + _vm._ssrAttr("src", banner.imageUrl) + _vm._ssrAttr("alt", banner.title) + "></a></div>";
  }) + "</div> <div class=\"swiper-pagination swiper-pagination-white\"></div> <div slot=\"button-prev\" class=\"swiper-button-prev swiper-button-white\"></div> <div slot=\"button-next\" class=\"swiper-button-next swiper-button-white\"></div>")]) : _vm._e(), _vm._ssrNode(" <div id=\"aCoursesList\"><div><section class=\"container\"><header class=\"comm-title\"><h2 class=\"tac\"><span class=\"c-333\">热门课程</span></h2></header> <div><article class=\"comm-course-list\"><ul id=\"bna\" class=\"of\">" + _vm._ssrList(_vm.eduList, function (course) {
    return "<li><div class=\"cc-l-wrap\"><section class=\"course-img\"><img" + _vm._ssrAttr("src", course.cover) + _vm._ssrAttr("alt", course.title) + " class=\"img-responsive\"> <div class=\"cc-mask\"><a" + _vm._ssrAttr("href", `/course/${course.id}`) + " title=\"开始学习\" class=\"comm-btn c-btn-1\">开始 学习</a></div></section> <h3 class=\"hLh30 txtOf mt10\"><a" + _vm._ssrAttr("href", `/course/${course.id}`) + _vm._ssrAttr("title", course.title) + " class=\"course-title fsize18 c- 333\">" + _vm._ssrEscape(_vm._s(course.title)) + "</a></h3> <section class=\"mt10 hLh20 of\">" + (Number(course.price) === 0 ? "<span class=\"fr jgTag bg-green\"><i class=\"c-fff fsize12 f-fA\">免费</i></span>" : "<span class=\"fr jgTag bg-green\"><i class=\"c-fff fsize12 f-fA\">" + _vm._ssrEscape(" ￥" + _vm._s(course.price)) + "</i></span>") + " <span class=\"fl jgAttr c-ccc f-fA\"><i class=\"c-999 f-fA\">" + _vm._ssrEscape(_vm._s(course.buyCount) + "人学习") + "</i>\n                      |\n                      <i class=\"c-999 f-fA\">" + _vm._ssrEscape(_vm._s(course.viewCount) + "浏览") + "</i></span></section></div></li>";
  }) + "</ul> <div class=\"clear\"></div></article> <section class=\"tac pt20\"><a" + _vm._ssrAttr("href", /course/) + " title=\"全部课程\" class=\"comm-btn c-btn-2\">全部课程</a></section></div></section></div> <div><section class=\"container\"><header class=\"comm-title\"><h2 class=\"tac\"><span class=\"c-333\">名师大咖</span></h2></header> <div><article class=\"i-teacher-list\"><ul class=\"of\">" + _vm._ssrList(_vm.teacherList, function (teacher) {
    return "<li><section class=\"i-teach-wrap\"><div class=\"i-teach-pic\"><a" + _vm._ssrAttr("href", `/teacher/${teacher.id}`) + _vm._ssrAttr("title", teacher.name) + "><img" + _vm._ssrAttr("alt", teacher.name) + _vm._ssrAttr("src", teacher.avatar) + "></a></div> <div class=\"mt10 hLh30 txtOf tac\"><a" + _vm._ssrAttr("href", `/teacher/${teacher.id}`) + _vm._ssrAttr("title", teacher.name) + " class=\"fsize18 c-666\">" + _vm._ssrEscape(_vm._s(teacher.name)) + "</a></div> <div class=\"hLh30 txtOf tac\"><span class=\"fsize14 c-999\">" + _vm._ssrEscape(_vm._s(teacher.career)) + "</span></div> <div class=\"mt15 i-q-txt\"><p class=\"c-999 f-fA\">" + _vm._ssrEscape("\n                      " + _vm._s(teacher.intro) + "\n                    ") + "</p></div></section></li>";
  }) + "</ul> <div class=\"clear\"></div></article> <section class=\"tac pt20\"><a" + _vm._ssrAttr("href", /teacher/) + " title=\"全部讲师\" class=\"comm-btn c-btn-2\">全部讲师</a></section></div></section></div></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=6f94e1c5&

// EXTERNAL MODULE: ./utils/request.js
var request = __webpack_require__(6);

// CONCATENATED MODULE: ./api/banner.js

/* harmony default export */ var banner = ({
  //查询前几条banner
  getListBanner() {
    return Object(request["a" /* default */])({
      url: '/educms/bannerfront/getAllBanner',
      method: 'get'
    });
  }
});
// CONCATENATED MODULE: ./api/index.js

/* harmony default export */ var api = ({
  //查询热门课程和名师
  getIndexData() {
    return Object(request["a" /* default */])({
      url: '/eduservice/indexfront/index',
      method: 'get'
    });
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&


/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 4000
        },
        // speed: 500,
        //配置分页
        pagination: {
          el: ".swiper-pagination" //分页的dom节点
        },

        //配置导航
        navigation: {
          nextEl: ".swiper-button-next",
          //下一页dom节点
          prevEl: ".swiper-button-prev" //前一页dom节点
        }
      },

      //banner数组
      bannerList: [],
      teacherList: [],
      eduList: []
    };
  },
  created() {
    //调用
    this.getBannerList();
    this.getHotCourseTeacher();
  },
  methods: {
    //查询热门课程和名师
    getHotCourseTeacher() {
      api.getIndexData().then(res => {
        this.teacherList = res.data.data.teacherList;
        this.eduList = res.data.data.eduList;
      });
    },
    //查询banner数据
    getBannerList() {
      banner.getListBanner().then(res => {
        console.log(res.data);
        this.bannerList = res.data.data.list;
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e22490c4"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map