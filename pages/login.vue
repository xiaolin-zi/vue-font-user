<template>
  <div class="main">
    <div class="title">
      <a class="active" href="/login">登录</a>
      <span>·</span>
      <a href="/register">注册</a>
    </div>
    <div class="sign-up-container">
      <el-form ref="userForm" :model="user">
        <el-form-item
          class="input-prepend restyle"
          prop="mobile"
          :rules="[
            {
              required: true,
              message: '请输入手机号码',
              trigger: 'blur',
            },
            { validator: checkPhone, trigger: 'blur' },
          ]"
        >
          <div>
            <el-input type="text" placeholder="手机号" v-model="user.mobile" />
            <i class="iconfont icon-phone" />
          </div>
        </el-form-item>
        <el-form-item
          class="input-prepend"
          prop="password"
          :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]"
        >
          <div>
            <el-input
              type="password"
              placeholder="密码"
              v-model="user.password"
            />
            <i class="iconfont icon-password" />
          </div>
        </el-form-item>
        <div class="btn">
          <input
            type="button"
            class="sign-in-button"
            value="登录"
            @click="submitLogin()"
          />
        </div>
      </el-form>
      <!-- 更多登录方式 -->
      <div class="more-sign">
        <h6>社交帐号登录</h6>
        <ul>
          <li>
            <a
              id="weixin"
              class="weixin"
              target="_blank"
              href="http://localhost:8222/api/ucenter/wx/login"
              ><i class="iconfont icon-weixin"
            /></a>
          </li>
          <li>
            <a id="qq" class="qq" target="_blank" href="#"
              ><i class="iconfont icon-qq"
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import "~/assets/css/sign.css";
import "~/assets/css/iconfont.css";
import loginApi from "@/api/login";
import cookie from "js-cookie";

export default {
  layout: "sign",
  data() {
    return {
      //封装登录手机号和密码对象
      user: {
        mobile: "",
        password: "",
      },
      //用户信息
      loginInfo: {},
    };
  },
  methods: {
    //登录的方法
    submitLogin() {
      this.$refs["userForm"].validate((valid) => {
        if (valid) {
          //第一步 调用接口进行登录，返回token字符串
          loginApi.submitLoginUser(this.user).then((res) => {
            if (res.data.success) {
              this.$message({
                type: "success",
                message: "登录成功！",
              });
              //第二步获取token字符串，放到cookie
              //名称、值、作用范围
              cookie.set("guli_token", res.data.data.token, {
                domain: "localhost",
              });
              //第四步调用接口根据token获取用户信息，首页展示
              loginApi.getLoginUserInfo().then((res) => {
                this.loginInfo = res.data.data.userInfo;
                this.loginInfo = JSON.stringify(this.loginInfo);
                //获取返回的信息，放到cookie里面
                cookie.set("guli_ucenter", this.loginInfo, {
                  domain: "localhost",
                });
                setTimeout(() => {
                  //跳转页面
                  window.location.href = "/";
                }, 1000);
              });
            } else {
              this.$message({
                type: "error",
                message: "账号或密码错误！",
              });
            }
          });
        }
      });
    },
    checkPhone(rule, value, callback) {
      //debugger
      if (!/^1[34578]\d{9}$/.test(value)) {
        return callback(new Error("手机号码格式不正确"));
      }
      return callback();
    },
  },
};
</script>
<style>
.el-form-item__error {
  z-index: 9999999;
}
</style>
