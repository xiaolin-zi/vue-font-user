<template>
  <div class="in-wrap" >
    <!-- 公共头引入 -->
    <header id="header">
      <section class="container">
        <h1 id="logo">
          <a href="#" title="谷粒学院">
            <img src="~/assets/img/logo.png" width="100%" alt="谷粒学院" />
          </a>
        </h1>
        <div class="h-r-nsl">
          <ul class="nav">
            <router-link to="/" tag="li" active-class="current" exact>
              <a>首页</a>
            </router-link>
            <router-link to="/course" tag="li" active-class="current">
              <a>课程</a>
            </router-link>
            <router-link to="/teacher" tag="li" active-class="current">
              <a>名师</a>
            </router-link>
            <router-link to="/article" tag="li" active-class="current">
              <a>文章</a>
            </router-link>
            <router-link to="/question" tag="li" active-class="current">
              <a>留言</a>
            </router-link>
          </ul>
          <!-- / nav -->
          <!-- / nav -->
          <ul class="h-r-login">
            <li v-if="!loginInfo.id" id="no-login">
              <a href="/login" title="登录">
                <em class="icon18 login-icon">&nbsp;</em>
                <span class="vam ml5">登录</span>
              </a>
              |
              <a href="/register" title="注册">
                <span class="vam ml5">注册</span>
              </a>
            </li>

            <li v-if="loginInfo.id" id="is-login-one" class="mr10">
              <a id="headerMsgCountId" href="/self" title="个人中心">
<!--                <em class="icon18 news-icon">&nbsp;</em>-->
                <span class="vam ml5">个人中心</span>
              </a>
              <q class="red-point" style="display: none">&nbsp;</q>
            </li>

            <li v-if="loginInfo.id" id="is-login-two" class="h-r-user">
              <a href="/self" title>
                <img
                  :src="loginInfo.avatar"
                  width="30"
                  height="30"
                  class="vam picImg"
                  alt
                />
                <span id="userName" class="vam disIb">{{
                  loginInfo.nickname
                }}</span>
              </a>
              <a
                href="javascript:void(0);"
                title="退出"
                @click="logout()"
                class="ml5"
                >退 出</a
              >
            </li>

            <!-- /未登录显示第1 li；登录后显示第2，3 li -->
          </ul>
          <aside class="h-r-search">
            <form action="#" method="post">
              <label class="h-r-s-box">
                <input
                  type="text"
                  placeholder="输入你想学的课程"
                  name="courseName"
                  v-model="courseName"
                  @keydown.enter="searchCourse()"
                />
                <button @click="searchCourse()" type="submit" class="s-btn">
                  <em class="icon18">&nbsp;</em>
                </button>
              </label>
            </form>
          </aside>
        </div>
        <aside class="mw-nav-btn">
          <div class="mw-nav-icon"></div>
        </aside>
        <div class="clear"></div>
      </section>
    </header>
    <!-- /公共头引入 -->

    <nuxt />

    <!-- 公共底引入 -->
    <footer id="footer" style="background-color: rgb(31, 40, 51) ;color: white">
      <section class="container">
        <div class>
          <h4 class="hLh30">
            <span class="fsize18 f-fM c-999" style="color: white">了解更多</span>
          </h4>
          <ul class="of flink-list">
            <li>
              <a href="https://www.cnblogs.com/SilverStar/" title="尚硅谷" target="_blank"
                style="color:white">个人博客</a
              >
            </li>
          </ul>
          <div class="clear"></div>
        </div>
        <div class="b-foot" >
          <section class="fl col-7">
            <section class="mr20">
              <section class="b-f-link" style="color: #a19797 !important;">
                <a href="#" style="color: white !important;" @click.prevent="toWeiXin" title="添加微信" target="_blank">添加微信</a>|
                <a href="https://shop.lookforward.top" style="color: white !important;" title="小林杂货铺" target="_blank">小林杂货铺</a>|
                <a href="http://gpt.lookforward.top" style="color: white !important;" title="小林のGPT" target="_blank">小林のGPT</a>|
                <a href="https://gitee.com/lin-xugeng/online_xiaolin-zi-edu" style="color: white !important;" title="资源下载" target="_blank">项目源码</a>|
                <span style="color: white !important;">联系方式：15219374123(微信) 1849569695(QQ)</span>
                <span style="color: white !important;">Email：1849569695@qq.com</span>
              </section>
              <section class="b-f-link mt10">
                <span style="color: white !important;">©2023 仅供学习展示使用</span>
              </section>
            </section>
          </section>
          <aside class="fl col-3 tac mt15">
            <section class="gf-tx">
              <span>
                <img style="width: 100px" src="~/assets/img/wxgzh.jpg" alt />
              </span>
            </section>
            <p>扫码关注公众号</p>

          </aside>
          <div class="clear"></div>
        </div>
      </section>
    </footer>
    <!-- /公共底引入 -->
  </div>
</template>
<script>
import "~/assets/css/theme.css";
import "~/assets/css/global.css";
import "~/assets/css/web.css";
import "~/assets/css/activity_tab.css";
import "~/assets/css/bottom_rec.css";
import "~/assets/css/nice_select.css";
import "~/assets/css/order.css";
import "~/assets/css/swiper-3.3.1.min.css";
import "~/assets/css/pages-weixinpay.css";
import cookie from "js-cookie";
import loginApi from "@/api/login";
export default {
  data() {
    return {
      courseName: "",
      token: "",
      loginInfo: {
        id: "",
        age: "",
        avatar: "",
        mobile: "",
        nickname: "",
        sex: "",
      },
    };
  },
  created() {
    //获取路径中的token
    this.token = this.$route.query.token;
    //判断路径是否有token
    if (this.token) {
      this.wxLogin();
    } else {
      this.showInfo();
    }
  },
  methods: {
    searchCourse(){
      this.$router.push({path:"/course",query:{courseName:this.courseName}})
    },
    async  toWeiXin() {
      const text = "tobeyou-20";
      await navigator.clipboard
        .writeText(text)
        .then(() => {
          console.log("复制成功");
          // 复制成功后的逻辑
          this.$message({
            type:"success",
            message:"已经复制好微信号，打开微信添加好友吧！"
          });
          //跳转到微信
          setTimeout(() => {
            window.open("weixin://");
          }, 1000);
        })
        .catch((error) => {
          console.log("复制失败");
          // 复制失败后的逻辑
        });
    },
    //微信登录显示的方法
    wxLogin() {
      //把token的值放到cookie里面
      cookie.set("guli_token", this.token, { domain: "localhost" });
      cookie.set("guli_ucenter", "", { domain: "localhost" });
      //调用接口，根据token获取用户信息
      loginApi.getLoginUserInfo().then((res) => {
        this.loginInfo = res.data.data.userInfo;
        //获取返回的信息，放到cookie里面
        cookie.set("guli_ucenter", JSON.stringify(this.loginInfo), {
          domain: "localhost",
        });

        this.showInfo();
      });
    },

    //创建方法，从cookie获取信息
    showInfo() {
      var userStr = cookie.get("guli_ucenter");
      //把字符串转换成json对象
      if (userStr) {
        this.loginInfo = JSON.parse(userStr);
      }
    },
    logout() {
      //提示是否退出
      this.$confirm("确定要退出登录吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          //清空cookie
          cookie.set("guli_token", "", {
            domain: "localhost",
          });
          cookie.set("guli_ucenter", "", {
            domain: "localhost",
          });
          //跳转到登录页
          window.location.href = "/";
        })
        .catch(() => {});
    },
  },
};
</script>
