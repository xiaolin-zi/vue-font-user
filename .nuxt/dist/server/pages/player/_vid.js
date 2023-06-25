exports.ids = [9];
exports.modules = {

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/player/_vid.vue?vue&type=template&id=42275afd&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<link rel=\"stylesheet\" href=\"https://g.alicdn.com/de/prismplayer/2.15.6/skins/default/aliplayer-min.css\"> <script type=\"text/javascript\" charset=\"utf-8\" src=\"https://g.alicdn.com/de/prismplayer/2.15.6/aliplayer-min.js\"></script> <div id=\"player-con\" class=\"prism-player\" style=\"margin: 0 auto\"></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/player/_vid.vue?vue&type=template&id=42275afd&

// EXTERNAL MODULE: ./utils/request.js
var request = __webpack_require__(6);

// CONCATENATED MODULE: ./api/vod.js

const api_name = '/vod/video';
/* harmony default export */ var vod = ({
  getPlayAuth(vid) {
    return Object(request["a" /* default */])({
      url: `/eduvod/video/getPlayAuth/${vid}`,
      method: 'get'
    });
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/player/_vid.vue?vue&type=script&lang=js&

/* harmony default export */ var _vidvue_type_script_lang_js_ = ({
  data() {
    return {
      playAuth: "",
      vid: ""
    };
  },
  created() {},
  mounted() {
    this.vid = this.$route.params.vid;
    vod.getPlayAuth(this.vid).then(res => {
      this.playAuth = res.data.data.playAuth;
      var player = new Aliplayer({
        id: "player-con",
        encryptType: "1",
        //如果播放加密视频，则需设置encryptType=1，非加密视频无需设置此项
        vid: this.vid,
        playauth: this.playAuth,
        width: "80%",
        height: "85vh",
        autoplay: true,
        // 以下可选设置
        cover: "https://edu20230513.oss-cn-guangzhou.aliyuncs.com/2023/06/07/01164bec5c2346c0a91db680f885db96.jpg",
        // 封面
        qualitySort: "asc",
        // 清晰度排序
        mediaType: "video",
        // 返回音频还是视频
        autoplay: false,
        // 自动播放
        isLive: false,
        // 直播
        rePlay: false,
        // 循环播放
        preload: true,
        playsinline: false,
        controlBarVisibility: "hover",
        // 控制条的显示方式：鼠标悬停
        useH5Prism: true,
        // 播放器类型：html5
        skinLayout: [{
          name: "bigPlayButton",
          align: "cc"
        }, {
          name: "H5Loading",
          align: "cc"
        }, {
          name: "errorDisplay",
          align: "tlabs",
          x: 0,
          y: 0
        }, {
          name: "infoDisplay"
        }, {
          name: "tooltip",
          align: "blabs",
          x: 0,
          y: 56
        }, {
          name: "thumbnail"
        }, {
          name: "controlBar",
          align: "blabs",
          x: 0,
          y: 0,
          children: [{
            name: "progress",
            align: "blabs",
            x: 0,
            y: 44
          }, {
            name: "playButton",
            align: "tl",
            x: 15,
            y: 12
          }, {
            name: "timeDisplay",
            align: "tl",
            x: 10,
            y: 7
          }, {
            name: "fullScreenButton",
            align: "tr",
            x: 10,
            y: 12
          }, {
            name: "subtitle",
            align: "tr",
            x: 15,
            y: 12
          }, {
            name: "setting",
            align: "tr",
            x: 15,
            y: 12
          }, {
            name: "volume",
            align: "tr",
            x: 5,
            y: 10
          }]
        }]
      }, function (player) {
        console.log("The player is created");
      });
    });
  },
  methods: {}
});
// CONCATENATED MODULE: ./pages/player/_vid.vue?vue&type=script&lang=js&
 /* harmony default export */ var player_vidvue_type_script_lang_js_ = (_vidvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/player/_vid.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  player_vidvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "8cf0f48e"
  
)

/* harmony default export */ var _vid = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_vid.js.map