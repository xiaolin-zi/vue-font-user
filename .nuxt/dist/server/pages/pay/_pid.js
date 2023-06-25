exports.ids = [8];
exports.modules = {

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/pay/_pid.vue?vue&type=template&id=bbc0a8c8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cart py-container"
  }, [_vm._ssrNode("<div class=\"checkout py-container pay\">", "</div>", [_vm._ssrNode("<div class=\"checkout-tit\"><h4 class=\"fl tit-txt\"><span class=\"success-icon\"></span><span class=\"success-info\">" + _vm._ssrEscape("订单提交成功，请您及时付款！订单号：" + _vm._s(_vm.payObj.out_trade_no)) + "</span></h4> <span class=\"fr\"><em class=\"sui-lead\">应付金额：</em><em class=\"orange money\">" + _vm._ssrEscape("￥" + _vm._s(_vm.payObj.total_fee)) + "</em></span> <div class=\"clearfix\"></div></div> "), _vm._ssrNode("<div class=\"checkout-steps\">", "</div>", [_vm._ssrNode("<div class=\"fl weixin\">微信支付</div> "), _vm._ssrNode("<div class=\"fl sao\">", "</div>", [_vm._ssrNode("<p class=\"red\">请使用微信扫一扫。</p> "), _vm._ssrNode("<div class=\"fl code\">", "</div>", [_c('qriously', {
    attrs: {
      "value": _vm.payObj.code_url,
      "size": 338
    }
  }), _vm._ssrNode(" <div class=\"saosao\"><p>请使用微信扫一扫</p> <p>扫描二维码支付</p></div>")], 2)], 2), _vm._ssrNode(" <div class=\"clearfix\"></div>")], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/pay/_pid.vue?vue&type=template&id=bbc0a8c8&

// EXTERNAL MODULE: ./api/order.js
var order = __webpack_require__(79);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pay/_pid.vue?vue&type=script&lang=js&

/* harmony default export */ var _pidvue_type_script_lang_js_ = ({
  data() {
    return {
      payObj: {},
      timer1: ""
    };
  },
  created() {
    this.initPay();
  },
  mounted() {
    //页面渲染之后执行
    this.timer1 = setInterval(() => {
      this.queryOrderStatus(this.payObj.out_trade_no);
    }, 3000);
  },
  destroyed() {
    clearInterval(this.timer1);
  },
  methods: {
    initPay() {
      var orderNo = this.$route.params.pid;
      console.log(orderNo);
      order["a" /* default */].createNative(orderNo).then(res => {
        this.payObj = res.data.data;
      });
    },
    queryOrderStatus(orderNo) {
      order["a" /* default */].queryPayStatus(orderNo).then(res => {
        if (res.data.success) {
          //清除定时器
          clearInterval(this.timer1);
          //提示
          this.$message({
            type: "success",
            message: "支付成功！"
          });
          //跳转回课程详情页面
          this.$router.push({
            path: "/course/" + this.payObj.course_id
          });
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/pay/_pid.vue?vue&type=script&lang=js&
 /* harmony default export */ var pay_pidvue_type_script_lang_js_ = (_pidvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/pay/_pid.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pay_pidvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "bb20a738"
  
)

/* harmony default export */ var _pid = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

/* harmony default export */ __webpack_exports__["a"] = ({
  //生成订单
  createOrder(courseId) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: `/eduorder/order/createOrder/${courseId}`,
      method: 'get'
    });
  },
  //根据订单号查询订单信息
  getOrderInfo(orderNo) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: `/eduorder/order/getOrderInfo/${orderNo}`,
      method: 'get'
    });
  },
  //根据订单号查询订单支付状态
  queryPayStatus(orderNo) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: `/eduorder/payLog/queryPayStatus/${orderNo}`,
      method: 'get'
    });
  },
  //生成二维码的方法
  createNative(orderNo) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: `/eduorder/payLog/createNative/${orderNo}`,
      method: 'get'
    });
  }
});

/***/ })

};;
//# sourceMappingURL=_pid.js.map