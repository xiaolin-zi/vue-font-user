exports.ids = [12];
exports.modules = {

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/self.vue?vue&type=template&id=62bbba32&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticStyle: {
      "width": "80%",
      "margin": "50px auto"
    }
  }, [_c('el-tabs', {
    attrs: {
      "tab-position": "left"
    }
  }, [_c('el-tab-pane', {
    attrs: {
      "label": "个人资料"
    }
  }, [_c('el-descriptions', {
    staticClass: "margin-top",
    attrs: {
      "labelStyle": {
        width: '30%'
      },
      "contentStyle": {
        height: '132px'
      },
      "border": ""
    }
  }, [_c('template', {
    slot: "title"
  }, [_c('el-button', {
    attrs: {
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": _vm.deleteAccount
    }
  }, [_vm._v("注销账号")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": _vm.updateUserInfo
    }
  }, [_vm._v("更新资料")])], 1), _vm._v(" "), _c('el-descriptions-item', {
    attrs: {
      "label-style": {
        width: '30%',
        'vertical-align': 'middle'
      }
    }
  }, [_c('template', {
    slot: "label"
  }, [_c('i', {
    staticClass: "el-icon-picture-outline"
  }), _vm._v(" "), _c('span', [_vm._v("头像")])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "flex",
      "align-items": "flex-end"
    }
  }, [_c('el-avatar', {
    attrs: {
      "shape": "square",
      "size": 100,
      "fit": "cover",
      "src": _vm.userInfo.avatar
    }
  }), _vm._v(" "), _c('el-upload', {
    staticClass: "upload-demo",
    attrs: {
      "action": "http://localhost:8222/eduoss/fileoss",
      "limit": 1,
      "before-remove": _vm.beforeRemove,
      "on-exceed": _vm.handleExceed,
      "on-success": _vm.handleSuccess
    }
  }, [_c('el-button', {
    staticStyle: {
      "margin-left": "10px"
    },
    attrs: {
      "type": "primary"
    }
  }, [_vm._v("更换头像")])], 1)], 1)], 2)], 2), _vm._v(" "), _c('el-descriptions', {
    staticClass: "margin-top",
    attrs: {
      "labelStyle": {
        width: '30%'
      },
      "contentStyle": {
        height: '60px'
      },
      "border": ""
    }
  }, [_c('el-descriptions-item', [_c('template', {
    slot: "label"
  }, [_c('i', {
    staticClass: "el-icon-user"
  }), _vm._v(" "), _c('span', [_vm._v("昵称")])]), _vm._v(" "), _c('el-input', {
    attrs: {
      "placeholder": "请输入内容"
    },
    model: {
      value: _vm.userInfo.nickname,
      callback: function ($$v) {
        _vm.$set(_vm.userInfo, "nickname", $$v);
      },
      expression: "userInfo.nickname"
    }
  })], 2)], 1), _vm._v(" "), _c('el-descriptions', {
    staticClass: "margin-top",
    attrs: {
      "labelStyle": {
        width: '30%'
      },
      "contentStyle": {
        height: '40px'
      },
      "border": ""
    }
  }, [_c('el-descriptions-item', [_c('template', {
    slot: "label"
  }, [_c('i', {
    staticClass: "el-icon-sugar"
  }), _vm._v(" "), _c('span', [_vm._v("手机号")])]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.userInfo.mobile))])], 2)], 1), _vm._v(" "), _c('el-descriptions', {
    staticClass: "margin-top",
    attrs: {
      "labelStyle": {
        width: '30%'
      },
      "contentStyle": {
        height: '60px'
      },
      "border": ""
    }
  }, [_c('el-descriptions-item', [_c('template', {
    slot: "label"
  }, [_c('i', {
    staticClass: "el-icon-dessert"
  }), _vm._v(" "), _c('span', [_vm._v("性别")])]), _vm._v(" "), _c('el-select', {
    attrs: {
      "value-key": "value"
    },
    model: {
      value: _vm.userInfo.sex,
      callback: function ($$v) {
        _vm.$set(_vm.userInfo, "sex", $$v);
      },
      expression: "userInfo.sex"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "男",
      "value": 1
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "女",
      "value": 0
    }
  })], 1)], 2)], 1), _vm._v(" "), _c('el-descriptions', {
    staticClass: "margin-top",
    attrs: {
      "labelStyle": {
        width: '30%'
      },
      "contentStyle": {
        height: '60px'
      },
      "border": ""
    }
  }, [_c('el-descriptions-item', [_c('template', {
    slot: "label"
  }, [_c('i', {
    staticClass: "el-icon-food"
  }), _vm._v(" "), _c('span', [_vm._v("年龄")])]), _vm._v(" "), _c('el-input', {
    attrs: {
      "placeholder": "请输入内容"
    },
    model: {
      value: _vm.userInfo.age,
      callback: function ($$v) {
        _vm.$set(_vm.userInfo, "age", $$v);
      },
      expression: "userInfo.age"
    }
  })], 2)], 1), _vm._v(" "), _c('el-descriptions', {
    staticClass: "margin-top",
    attrs: {
      "labelStyle": {
        width: '30%'
      },
      "contentStyle": {
        height: '40px'
      },
      "border": ""
    }
  }, [_c('el-descriptions-item', [_c('template', {
    slot: "label"
  }, [_c('i', {
    staticClass: "el-icon-ice-cream"
  }), _vm._v(" "), _c('span', [_vm._v("注册时间")])]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.userInfo.gmtCreate))])], 2)], 1), _vm._v(" "), _c('el-descriptions', {
    staticClass: "margin-top",
    attrs: {
      "labelStyle": {
        width: '30%'
      },
      "contentStyle": {
        height: '40px'
      },
      "border": ""
    }
  }, [_c('el-descriptions-item', [_c('template', {
    slot: "label"
  }, [_c('i', {
    staticClass: "el-icon-burger"
  }), _vm._v(" "), _c('span', [_vm._v("更新时间")])]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.userInfo.gmtModified))])], 2)], 1)], 1), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "我的订单"
    }
  }, [_c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.orderInfo
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "courseTitle",
      "label": "课程名",
      "width": "180"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "课程封面"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (scope) {
        return [_c('el-image', {
          staticStyle: {
            "width": "100px",
            "height": "100px"
          },
          attrs: {
            "src": scope.row.courseCover,
            "fit": "fill"
          }
        })];
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "teacherName",
      "label": "课程讲师"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "totalFee",
      "label": "购买价格"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "payType",
      "label": "支付方式"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (scope) {
        return [scope.row.payType === 1 ? _c('span', [_vm._v("支付宝")]) : _vm._e(), _vm._v(" "), scope.row.payType == 0 ? _c('span', [_vm._v("微信")]) : _vm._e()];
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "payType",
      "label": "支付状态"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (scope) {
        return [scope.row.status === 1 ? _c('span', {
          staticStyle: {
            "color": "#00bb29"
          }
        }, [_vm._v("已支付")]) : _vm._e(), _vm._v(" "), scope.row.status == 0 ? _c('span', {
          staticStyle: {
            "color": "#ea562e"
          }
        }, [_vm._v("未支付")]) : _vm._e()];
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "width": "150",
      "prop": "gmtCreate",
      "label": "下单时间"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "200"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (scope) {
        return [scope.row.status === 1 ? _c('el-button', {
          attrs: {
            "type": "primary",
            "size": "mini"
          },
          on: {
            "click": function ($event) {
              return _vm.toStudy(scope.$index, scope.row);
            }
          }
        }, [_vm._v("前往学习")]) : _vm._e(), _vm._v(" "), scope.row.status === 0 ? _c('el-button', {
          staticStyle: {
            "background-color": "#ea562e",
            "border": "none"
          },
          attrs: {
            "type": "primary",
            "size": "mini"
          },
          on: {
            "click": function ($event) {
              return _vm.toPay(scope.$index, scope.row);
            }
          }
        }, [_vm._v("去支付")]) : _vm._e(), _vm._v(" "), scope.row.status === 0 ? _c('el-button', {
          staticStyle: {
            "background-color": "red",
            "border": "none"
          },
          attrs: {
            "type": "primary",
            "size": "mini"
          },
          on: {
            "click": function ($event) {
              return _vm.toDelete(scope.$index, scope.row);
            }
          }
        }, [_vm._v("删除订单")]) : _vm._e()];
      }
    }])
  })], 1), _vm._v(" "), _c('el-pagination', {
    staticStyle: {
      "padding": "30px 0",
      "text-align": "center"
    },
    attrs: {
      "current-page": _vm.page,
      "page-size": _vm.limit,
      "page-sizes": [4, 8, 12, 16, 20, 50, 100],
      "total": _vm.total,
      "layout": "total, sizes, prev, pager, next, jumper"
    },
    on: {
      "current-change": _vm.getUserOrder,
      "size-change": _vm.changeSize
    }
  })], 1), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "修改密码"
    }
  }, [_c('el-form', {
    ref: "form",
    attrs: {
      "label-width": "80px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "旧密码"
    }
  }, [_c('el-input', {
    model: {
      value: _vm.oldPassword,
      callback: function ($$v) {
        _vm.oldPassword = $$v;
      },
      expression: "oldPassword"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "新密码"
    }
  }, [_c('el-input', {
    model: {
      value: _vm.newPassword,
      callback: function ($$v) {
        _vm.newPassword = $$v;
      },
      expression: "newPassword"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.updatePassword
    }
  }, [_vm._v("更新")])], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/self.vue?vue&type=template&id=62bbba32&

// EXTERNAL MODULE: ./utils/request.js
var request = __webpack_require__(6);

// CONCATENATED MODULE: ./api/user.js

/* harmony default export */ var user = ({
  //获取用户信息
  getUserInfo() {
    return Object(request["a" /* default */])({
      url: '/educenter/member/getMemberInfo',
      method: 'get'
    });
  },
  //删除用户
  deleteAccount(id) {
    return Object(request["a" /* default */])({
      url: '/educenter/member/deleteMember/' + id,
      method: 'delete'
    });
  },
  //更新用户信息
  updateUserInfo(member) {
    return Object(request["a" /* default */])({
      url: '/educenter/member/updateMember',
      method: 'post',
      data: member
    });
  },
  //获取用户订单信息
  getUserOrderInfo(page, limit, id) {
    return Object(request["a" /* default */])({
      url: '/eduorder/order/getOrderInfoByMemberId/' + page + '/' + limit + '/' + id,
      method: 'get'
    });
  },
  //修改密码
  updatePassword(uid, oldPassword, newPassword) {
    return Object(request["a" /* default */])({
      url: '/educenter/member/updatePassword/' + uid + '/' + oldPassword + '/' + newPassword,
      method: 'get'
    });
  },
  //删除订单
  deleteOrder(orderNo) {
    return Object(request["a" /* default */])({
      url: '/eduorder/order/deleteOrder/' + orderNo,
      method: 'delete'
    });
  }
});
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(1);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/self.vue?vue&type=script&lang=js&
// import ossApi from '@/api/oss'


/* harmony default export */ var selfvue_type_script_lang_js_ = ({
  data() {
    return {
      page: 1,
      limit: 4,
      total: 0,
      oldPassword: '',
      newPassword: '',
      orderInfo: [],
      userInfo: {}
    };
  },
  created() {
    //获取用户信息
    this.getUserInfo();
  },
  methods: {
    //删除订单
    toDelete(index, row) {
      this.$confirm('此操作将永久删除该订单, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        user.deleteOrder(row.orderNo).then(res => {
          if (res.data.success) {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.getUserOrder(1);
          } else {
            this.$message({
              type: 'error',
              message: '删除失败!'
            });
          }
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    changeSize(val) {
      this.limit = val;
      this.getUserOrder(1);
    },
    //获取用户订单
    getUserOrder(page = 1) {
      this.page = page;
      user.getUserOrderInfo(this.page, this.limit, this.userInfo.id).then(res => {
        if (res.data.success) {
          this.orderInfo = res.data.data.rows;
          console.log(res);
          this.total = res.data.data.total;
        }
      });
    },
    //修改密码
    updatePassword() {
      user.updatePassword(this.userInfo.id, this.oldPassword, this.newPassword).then(res => {
        console.log(res);
        if (res.data.success) {
          this.$message({
            type: 'success',
            message: '修改成功!'
          });
          //清空密码
          this.oldPassword = '';
          this.newPassword = '';
          setTimeout(() => {
            //清空cookie
            external_js_cookie_default.a.remove("guli_ucenter", {
              domain: "localhost"
            });
            //提示
            this.$message({
              type: 'success',
              message: '用户信息已过期，请重新登录!'
            });
            //跳转到登录页面
            this.$router.push('/login');
          }, 3000);
        } else {
          this.$message({
            type: 'error',
            message: '修改失败,请检查旧密码是否正确!'
          });
        }
      });
    },
    //更新用户信息
    updateUserInfo() {
      user.updateUserInfo(this.userInfo).then(res => {
        // console.log(res)
        if (res.data.success) {
          this.$message({
            type: 'success',
            message: '更新成功!'
          });
          //更新cookie
          external_js_cookie_default.a.set("guli_ucenter", JSON.stringify(this.userInfo), {
            domain: "localhost"
          });
          //刷新页面
          window.location.reload();
        } else {
          this.$message({
            type: 'error',
            message: '更新失败!'
          });
        }
      });
    },
    //注销账号
    deleteAccount() {
      //提示用户
      this.$confirm('此操作将永久删除该账号, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        user.deleteAccount(this.userInfo.id).then(res => {
          console.log(res);
          if (res.data.success) {
            this.$message({
              type: 'success',
              message: '注销成功!'
            });
            this.$router.push('/login');
          } else {
            this.$message({
              type: 'error',
              message: '注销失败!'
            });
          }
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消注销'
        });
      });
    },
    //获取用户信息
    getUserInfo() {
      user.getUserInfo().then(res => {
        // console.log(res.data.data)
        this.userInfo = res.data.data.userInfo;
        //获取用户订单
        this.getUserOrder();
      });
    },
    //删除图片列表
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    //上传图片数量限制
    handleExceed(files, fileList) {
      this.$message.warning(`只能上传一个图片`);
    },
    //上传成功
    handleSuccess(response, file) {
      this.$message.success('上传成功');
      // console.log(response)
      this.userInfo.avatar = response.data.url;
    },
    toStudy(index, row) {
      console.log(index, row);
      this.$router.push('/course/' + row.courseId);
    },
    toPay(index, row) {
      console.log(index, row);
      this.$router.push('/pay/' + row.orderNo);
    }
  }
});
// CONCATENATED MODULE: ./pages/self.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_selfvue_type_script_lang_js_ = (selfvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/self.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_selfvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1b99f030"
  
)

/* harmony default export */ var pages_self = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=self.js.map