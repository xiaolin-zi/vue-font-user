exports.ids = [10];
exports.modules = {

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/question.vue?vue&type=template&id=7c60b924&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "block",
    staticStyle: {
      "width": "50%",
      "margin": "50px auto"
    }
  }, [_vm._ssrNode("<div style=\"margin-bottom: 50px\">", "</div>", [_vm._ssrNode("<h3 style=\"font-size: 14px\">留言板</h3> "), _c('el-input', {
    attrs: {
      "type": "textarea",
      "autosize": {
        minRows: 2,
        maxRows: 4
      },
      "placeholder": "请输入内容"
    },
    model: {
      value: _vm.mymessage,
      callback: function ($$v) {
        _vm.mymessage = $$v;
      },
      expression: "mymessage"
    }
  }), _vm._ssrNode(" "), _c('el-button', {
    staticStyle: {
      "float": "right",
      "margin-top": "10px"
    },
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.sendMsg.apply(null, arguments);
      }
    }
  }, [_vm._v("留言")])], 2), _vm._ssrNode(" "), _c('el-timeline', _vm._l(_vm.msgMap, function (msg, index) {
    return _c('el-timeline-item', {
      key: index,
      attrs: {
        "timestamp": index,
        "placement": "top"
      }
    }, _vm._l(msg, function (item) {
      return _c('el-card', {
        key: item.id,
        staticStyle: {
          "margin-bottom": "10px"
        }
      }, [_c('h4', [_vm._v(_vm._s(item.message))]), _vm._v(" "), _c('p', {
        staticStyle: {
          "font-size": "10px",
          "float": "right"
        }
      }, [_c('span', {
        staticStyle: {
          "color": "rgb(251, 124, 161)"
        }
      }, [_vm._v(_vm._s(item.nickname) + " ")]), _vm._v("发表于"), _c('span', {
        staticStyle: {
          "color": "#5a5e66"
        }
      }, [_vm._v(" " + _vm._s(item.gmtCreate))])])]);
    }), 1);
  }), 1), _vm._ssrNode(" "), _c('el-backtop')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/question.vue?vue&type=template&id=7c60b924&

// EXTERNAL MODULE: ./utils/request.js
var request = __webpack_require__(6);

// CONCATENATED MODULE: ./api/msg.js

/* harmony default export */ var api_msg = ({
  //查询热门课程和名师
  getAllMsg() {
    return Object(request["a" /* default */])({
      url: '/eduservice/msg/findAllMsg',
      method: 'get'
    });
  },
  getAllMsgPage(current, limit) {
    return Object(request["a" /* default */])({
      url: `/eduservice/msg/findAllMsg/${current}/${limit}`,
      method: 'get'
    });
  },
  sendMsg(msg) {
    return Object(request["a" /* default */])({
      url: `/eduservice/msg/sendMsg/${msg}`,
      method: 'get'
    });
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/question.vue?vue&type=script&lang=js&

/* harmony default export */ var questionvue_type_script_lang_js_ = ({
  data() {
    return {
      msgMap: {},
      page: 1,
      //当前页
      limit: 5,
      //每页显示的条数
      total: 0,
      //总记录数
      mymessage: ""
    };
  },
  created() {
    this.getAllMsg();
  },
  methods: {
    changeSize(size) {
      console.log(size);
      this.limit = size;
      this.getAllMsg(1);
    },
    getAllMsgPage(page = 1) {
      this.page = page;
      api_msg.getAllMsgPage(this.page, this.limit).then(res => {
        console.log(this);
        this.msgMap = res.data.data.msgMap;
        this.total = res.data.data.total;
        console.log(this.msgMap);
      });
    },
    getAllMsg() {
      api_msg.getAllMsg().then(res => {
        console.log(this);
        this.msgMap = res.data.data.msgMap;
        // this.total = res.data.data.total;
        console.log(this.msgMap);
      });
    },
    sendMsg() {
      api_msg.sendMsg(this.mymessage).then(res => {
        console.log(res);
        //提示
        this.$message({
          message: "留言成功",
          type: "success"
        });
        this.getAllMsg();
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/question.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_questionvue_type_script_lang_js_ = (questionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/question.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_questionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b3410c6c"
  
)

/* harmony default export */ var question = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=question.js.map