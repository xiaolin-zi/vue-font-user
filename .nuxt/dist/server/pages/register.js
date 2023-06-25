exports.ids = [11];
exports.modules = {

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/register.vue?vue&type=template&id=80e9d2ea&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "main"
  }, [_vm._ssrNode("<div class=\"title\"><a href=\"/login\">登录</a> <span>·</span> <a href=\"/register\" class=\"active\">注册</a></div> "), _vm._ssrNode("<div class=\"sign-up-container\">", "</div>", [_c('el-form', {
    ref: "userForm",
    attrs: {
      "model": _vm.params
    }
  }, [_c('el-form-item', {
    staticClass: "input-prepend restyle",
    attrs: {
      "prop": "nickname",
      "rules": [{
        required: true,
        message: '请输入你的昵称',
        trigger: 'blur'
      }]
    }
  }, [_c('div', [_c('el-input', {
    attrs: {
      "type": "text",
      "placeholder": "你的昵称"
    },
    model: {
      value: _vm.params.nickname,
      callback: function ($$v) {
        _vm.$set(_vm.params, "nickname", $$v);
      },
      expression: "params.nickname"
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "iconfont icon-user"
  })], 1)]), _vm._v(" "), _c('el-form-item', {
    staticClass: "input-prepend restyle no-radius",
    attrs: {
      "prop": "mobile",
      "rules": [{
        required: true,
        message: '请输入手机号码',
        trigger: 'blur'
      }, {
        validator: _vm.checkPhone,
        trigger: 'blur'
      }]
    }
  }, [_c('div', [_c('el-input', {
    attrs: {
      "type": "text",
      "placeholder": "手机号"
    },
    model: {
      value: _vm.params.mobile,
      callback: function ($$v) {
        _vm.$set(_vm.params, "mobile", $$v);
      },
      expression: "params.mobile"
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "iconfont icon-phone"
  })], 1)]), _vm._v(" "), _c('el-form-item', {
    staticClass: "input-prepend restyle no-radius",
    attrs: {
      "prop": "code",
      "rules": [{
        required: true,
        message: '请输入验证码',
        trigger: 'blur'
      }]
    }
  }, [_c('div', {
    staticStyle: {
      "width": "100%",
      "display": "block",
      "float": "left",
      "position": "relative"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "text",
      "placeholder": "验证码"
    },
    model: {
      value: _vm.params.code,
      callback: function ($$v) {
        _vm.$set(_vm.params, "code", $$v);
      },
      expression: "params.code"
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "iconfont icon-phone"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "btn",
    staticStyle: {
      "position": "absolute",
      "right": "0",
      "top": "6px",
      "width": "40%"
    }
  }, [_c('a', {
    staticStyle: {
      "border": "none",
      "background-color": "none"
    },
    attrs: {
      "href": "javascript:",
      "type": "button",
      "value": _vm.codeTest
    },
    on: {
      "click": function ($event) {
        return _vm.getCodeFun();
      }
    }
  }, [_vm._v(_vm._s(_vm.codeTest))])])]), _vm._v(" "), _c('el-form-item', {
    staticClass: "input-prepend",
    attrs: {
      "prop": "password",
      "rules": [{
        required: true,
        message: '请输入密码',
        trigger: 'blur'
      }]
    }
  }, [_c('div', [_c('el-input', {
    attrs: {
      "type": "password",
      "placeholder": "设置密码"
    },
    model: {
      value: _vm.params.password,
      callback: function ($$v) {
        _vm.$set(_vm.params, "password", $$v);
      },
      expression: "params.password"
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "iconfont icon-password"
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "btn"
  }, [_c('input', {
    staticClass: "sign-up-button",
    attrs: {
      "type": "button",
      "value": "注册"
    },
    on: {
      "click": function ($event) {
        return _vm.submitRegister();
      }
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "sign-up-msg"
  }, [_vm._v("\n        点击 “注册” 即表示您同意并愿意遵守简书\n        "), _c('br'), _vm._v(" "), _c('a', {
    attrs: {
      "target": "_blank",
      "href": "http://www.jianshu.com/p/c44d171298ce"
    }
  }, [_vm._v("用户协议")]), _vm._v("\n        和\n        "), _c('a', {
    attrs: {
      "target": "_blank",
      "href": "http://www.jianshu.com/p/2ov8x3"
    }
  }, [_vm._v("隐私政策")]), _vm._v("\n        。\n      ")])], 1), _vm._ssrNode(" <div class=\"more-sign\"><h6>社交帐号直接注册</h6> <ul><li><a id=\"weixin\" target=\"_blank\" href=\"http://huaan.free.idcfengye.com/api/ucenter/wx/login\" class=\"weixin\"><i class=\"iconfont icon-weixin\"></i></a></li> <li><a id=\"qq\" target=\"_blank\" href=\"#\" class=\"qq\"><i class=\"iconfont icon-qq\"></i></a></li></ul></div>")], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/register.vue?vue&type=template&id=80e9d2ea&

// EXTERNAL MODULE: ./assets/css/sign.css
var sign = __webpack_require__(82);

// EXTERNAL MODULE: ./assets/css/iconfont.css
var iconfont = __webpack_require__(84);

// EXTERNAL MODULE: ./utils/request.js
var request = __webpack_require__(6);

// CONCATENATED MODULE: ./api/register.js

/* harmony default export */ var register = ({
  //根据手机号发验证码
  sendCode(phone) {
    return Object(request["a" /* default */])({
      url: '/edusms/sms/send/' + phone,
      method: 'get'
    });
  },
  //注册的方法
  registerMember(registerInfo) {
    return Object(request["a" /* default */])({
      url: '/educenter/member/register',
      method: 'post',
      data: registerInfo
    });
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/register.vue?vue&type=script&lang=js&



/* harmony default export */ var registervue_type_script_lang_js_ = ({
  layout: "sign",
  data() {
    return {
      params: {
        //封装注册输入数据
        mobile: "",
        code: "",
        //验证码
        nickname: "",
        password: ""
      },
      sending: true,
      //是否发送验证码
      second: 60,
      //倒计时间
      codeTest: "获取验证码"
    };
  },
  methods: {
    //注册提交的方法
    submitRegister() {
      this.$refs["userForm"].validate(valid => {
        if (valid) {
          register.registerMember(this.params).then(response => {
            if (response.data.code == 2000) {
              //提示注册成功
              this.$message({
                type: "success",
                message: "注册成功"
              });
              //跳转登录页面
              this.$router.push({
                path: "/login"
              });
            } else {
              //注册失败
              this.$message({
                type: "error",
                message: response.data.data.message
              });
            }
          });
        }
      });
    },
    timeDown() {
      let result = setInterval(() => {
        --this.second;
        this.codeTest = this.second;
        if (this.second < 1) {
          clearInterval(result);
          this.sending = true;
          //this.disabled = false;
          this.second = 60;
          this.codeTest = "获取验证码";
        }
      }, 1000);
    },
    //通过输入手机号发送验证码
    getCodeFun() {
      if (!this.sending) {
        return;
      }
      this.$refs.userForm.validateField("mobile", errMsg => {
        if (errMsg == "") {
          //调用倒计时的方法
          this.timeDown();
          this.sending = false;
          register.sendCode(this.params.mobile).then(response => {});
        }
      });
    },
    checkPhone(rule, value, callback) {
      //debugger
      if (!/^1[34578]\d{9}$/.test(value)) {
        return callback(new Error("手机号码格式不正确"));
      }
      return callback();
    }
  }
});
// CONCATENATED MODULE: ./pages/register.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_registervue_type_script_lang_js_ = (registervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/register.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_registervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4ad7c607"
  
)

/* harmony default export */ var pages_register = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("77e7c9ca", content, true)

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body{background-color:#f1f1f1}*,:after,:before{box-sizing:border-box}.sign-up-msg{color:#969696;font-size:12px;line-height:20px;text-align:center}a{-webkit-text-decoration:none;text-decoration:none}.sign-up-msg a{color:#3194d0}.sign-up-msg a:hover{-webkit-text-decoration:underline;text-decoration:underline}.sign{background-color:#f1f1f1;font-size:14px;height:100%;min-height:750px;text-align:center}.sign .main{background-color:#fff;border-radius:5px;box-shadow:0 0 8px rgba(0,0,0,.1);margin:60px auto 0;padding:50px;width:400px}.sign .logo{left:50px;position:absolute;top:56px}.sign .title{margin:0 auto 50px;padding:10px;text-align:center}.sign .title a{color:#969696;font-size:18px;padding:10px}.sign .title .active,.sign .title a:hover{border-bottom:2px solid #3bb149}.sign .title .active{color:#3bb149;font-weight:700}.sign .title span{color:#969696;font-weight:700;padding:10px}.sign form .restyle{margin-bottom:0}.sign form .input-prepend{position:relative;width:100%}.sign form .input-prepend input{background-color:hsla(0,0%,71%,.1);border:1px solid #c8c8c8;border-radius:0 0 4px 4px;height:50px;margin-bottom:0;padding:4px 12px 4px 35px;vertical-align:middle;width:100%}.sign form .restyle input{border-bottom:none;border-radius:4px 4px 0 0}.sign form .no-radius input{border-radius:0}.sign form .input-prepend i{color:#969696;font-size:18px;left:10px;position:absolute;top:4px}.sign .sign-up-button{background-color:#42c02c;border:none;border-radius:25px;color:#fff;cursor:pointer;font-size:18px;margin-top:20px;padding:9px 18px;width:100%}.sign .sign-up-button:hover{background-color:#3db922}.sign .sign-in-button{background-color:#3194d0;border:none;border-radius:25px;color:#fff;cursor:pointer;font-size:18px;margin-top:20px;padding:9px 18px;width:100%}.sign .sign-in-button:hover{background-color:#187cb7}.sign .more-sign{margin-top:50px}.sign .more-sign h6{color:#b5b5b5;font-size:12px;margin:0 0 10px;position:relative}.sign .more-sign h6:before{left:30px}.sign .more-sign h6:after{right:30px}.sign .more-sign h6:after,.sign .more-sign h6:before{border-top:1px solid #b5b5b5;content:\"\";display:block;position:absolute;top:5px;width:60px}.sign .more-sign ul{list-style:none;margin-bottom:10px;padding-left:0}.sign .more-sign ul li{display:inline-block;margin:0 5px}.sign .more-sign ul a{display:block;height:50px;line-height:50px;width:50px}.sign .more-sign .icon-weixin{color:#00bb29}.sign .more-sign .icon-qq{color:#498ad5}.sign .more-sign ul i{font-size:28px}.ic-wechat:before{content:\"\\E604\"}.ic-qq_connect:before{content:\"\\E603\"}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(85);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("75d372a0", content, true)

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(86);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(87);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(88);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(89);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___, { hash: "#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___, { hash: "#iconfont" });
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"iconfont\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"embedded-opentype\"),url(\"data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAUQAAsAAAAACdQAAATDAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDQAqGWIVgATYCJAMYCw4ABCAFhG0HTxuFCCMRdnNwkpL9M8HE00eBQ7iUQugtV0jUF8GXW5Wj09JnIoj2+83ek29OE0vwIx1voqGYJyiBBLFRKiF5CRzlVdXBSuYBnLwOL8ANiArs3e/b1omXNCFhkdehn/WVv+DDCvY/h0ubtsHmt9oucw/qRXEcUEDj9sTW8wO+AwnI7wGe4cIEvk+gbooKtGm3fYxBTrgsEPeJVycYXBZ5DDlU9WXIvbl4A1I1vWA3ALzqfx9/oBUMJEVG+NB+3NY5i2fwLBSv+A9C8EqoKM+F20NkGAM58RTqeQTczIzh6p8UYR3ge4qqJH2iZ8afrs9C///nE0DRI09dU8yQK8r5x0tESdA0EbudLfgEmUnOJ5KEaY3RJEOtK5oEakNxQAJlief0QdSJaxBwY6lQSrSFrDd4+RkZOZmYzBEnwcxGIC4ujnR0nfKnaH4PHvg+fOgIWpsPJ42W3yxL8yJ8Xurr4797kbmZfwxRlF/zYsVC01Llss+cInYYMpO0zV+W9/W7TUVFqZnfBmbz6MEbD2R7j9VHzyrOnIDRh76XKWHmwYe2FCVeeUpu+bz46iH/PE1riybXj8aUUCVfeVvuAVgQ4Z15oIGK+65IFPRs2rL2Xpem79+yQxHM8HLr7a3oaeqr7OdHhXNLwtrt84uCPQs8CPmzkKxEMROaLsElCUxtVvm3bdcBY6eaTohUrMpCxWLzMkLz69HYxAMbtks0KXyasme/+ND8hG64QyU4k4XGU40bS6gGyUJw9jWH686yPWzCoyokobZl2JHhQkJpV1sa0AB2YwWvBienQht16ZQyc7ojSa4P0wpY4cqkWQxvgWK+0neR63mQx3fFH0r113yTwtM3u0uxamylG0sHoSo0nzuROBelKxRUYJvYl8TmK+LLxpsrkrvFCgjbbdSK1EK43jpdtMuzUY+q0he/vfm4QzVs4UOA/BrPWqD8U1twfpebz/v3i9Iqj9FnLnTR65ZaFgEkPSlCcJWSVUOLdTgLWcg/o5SLECFZArQsLAE4tsssL+oAdxI3u/Z7zRnLVB43HTCSapFp0Y4YZBtkb2RrzAD66S5wsgr/KjOD2LTugK8tb0/R9aBxTzRbWdm4PIKModOvl1L+F6H2ttlihEL1m6j9dAwsWy0Dv5VgEKevhC9nkKCV1jZgE7KwIkQxhLlCCQD+h7NYp56AbI4afg4PoMNN8UoRys7C01ia2DoOZzf5WmXOwccapxuF/xGQXnIqaX2k55w05UT+lQvWMn+Pl3sESrs7KpVQF2c41wJ9j8vSjVLXEqpGNiQVk5CpWkDm2DEUGpahVLUCdUvsH24YyAJc5DUsqgUIXeuQtL1DpusmMsc+gsKEt1DqBg519/gF9zOZyUXzsnYQAZrkTo3i0Uj28DLq36jmXjinXKf84XwTpzRKvPkSI1wZN/ilykIwZBwPVMDH0PdMk+MWKkR1CFMexybsQJHi4fBizQEhAI1IO9JQ2Mio84OX7/ffoDLrCS5m7EfwDxyvWZ6kIkkKZKkZU41ty3pvUckEgeGLDIcNSIEu6MUMI1P4WS1QgkidIzXJxTTNpNVE9euGpbwAABNhz3SBIRwRiER0iB6IZw93y0ezNeMp014zah7xyBDer+z04QAA\") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"svg\")}.iconfont{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:\"iconfont\"!important;font-size:16px;font-style:normal}.icon-user:before{content:\"\\e64d\"}.icon-weixin:before{content:\"\\e65d\"}.icon-qq:before{content:\"\\e63b\"}.icon-phone:before{content:\"\\e600\"}.icon-password:before{content:\"\\e601\"}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/iconfont.3bab9c0.eot";

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/iconfont.313a2de.woff";

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/iconfont.3ada8b9.ttf";

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/iconfont.6bd9f71.svg";

/***/ })

};;
//# sourceMappingURL=register.js.map