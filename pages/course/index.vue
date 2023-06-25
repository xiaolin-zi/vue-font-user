<template>
  <div id="aCoursesList" class="bg-fa of">
    <!-- /课程列表 开始 -->
    <section class="container">
      <header class="comm-title">
        <h2 class="fl tac">
          <span class="c-333">全部课程</span>
        </h2>
      </header>
      <section class="c-sort-box">
        <section class="c-s-dl">
          <dl>
            <dt>
              <span class="c-999 fsize14">课程类别</span>
            </dt>
            <dd class="c-s-dl-li">
              <ul class="clearfix">
                <li>
                  <a
                    title="全部"
                    href="#"
                    @click.prevent="searchOne()"
                    :class="{ active: oneIndex == -1 }"
                    >全部</a
                  >
                </li>
                <li v-for="(item, index) in subjectNestedList" :key="index">
                  <a
                    :class="{ active: oneIndex == index }"
                    :title="item.title"
                    href="#"
                    @click.prevent="searchOne(item, index)"
                    >{{ item.title }}</a
                  >
                </li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>
              <span class="c-999 fsize14"></span>
            </dt>
            <dd class="c-s-dl-li">
              <ul class="clearfix">
                <li>
                  <a
                    title="全部"
                    href="#"
                    @click.prevent="searchTwo()"
                    :class="{ active: twoIndex == -1 }"
                    >全部</a
                  >
                </li>
                <li v-for="(item, index) in subSubjectList" :key="index">
                  <a
                    :class="{ active: twoIndex == index }"
                    :title="item.title"
                    href="#"
                    @click.prevent="searchTwo(item, index)"
                    >{{ item.title }}</a
                  >
                </li>
              </ul>
            </dd>
          </dl>
          <div class="clear"></div>
        </section>
        <div class="js-wrap">
          <section class="fr">
            <span class="c-ccc">
              <i class="c-master f-fM">{{page}}</i>/
              <i class="c-666 f-fM">{{data.pages}}</i>
            </span>
          </section>
          <section class="fl">
            <ol class="js-tap clearfix">
              <li
                :class="{
                  current: buyOrderActive,
                  'bg-orange': buyOrderActive,
                }"
              >
                <a title="销量 " href="#" @click.prevent="orderByBuyCount"
                  >销量&nbsp;
                  <span :class="{ hide: buyOrderActive1 == '' }">↓</span>
                  <span :class="{ hide: buyOrderActive2 == '' }">↑</span>
                </a>
              </li>
              <li
                :class="{
                  current: latestOrderActive,
                  'bg-orange': latestOrderActive,
                }"
              >
                <a title="最新" href="#" @click.prevent="orderByLatest"
                  >最新&nbsp;
                  <span :class="{ hide: latestOrderActive1 == '' }">↓</span>
                  <span :class="{ hide: latestOrderActive2 == '' }">↑</span>
                </a>
              </li>
              <li
                :class="{
                  current: priceOrderActive,
                  'bg-orange': priceOrderActive,
                }"
              >
                <a title="价格" href="#" @click.prevent="orderByPrice"
                  >价格&nbsp;
                  <span :class="{ hide: priceOrderActive1 == '' }">↓</span>
                  <span :class="{ hide: priceOrderActive2 == '' }">↑</span>
                </a>
              </li>
            </ol>
          </section>
        </div>
        <div class="mt40">
          <!-- /无数据提示 开始-->
          <section class="no-data-wrap" v-if="data.total == 0">
            <em class="icon30 no-data-ico">&nbsp;</em>
            <span class="c-666 fsize14 ml10 vam"
              >没有相关数据，小编正在努力整理中...</span
            >
          </section>
          <!-- /无数据提示 结束-->
          <article class="comm-course-list" v-else>
            <ul class="of" id="bna">
              <li v-for="item in data.items" :key="item.id">
                <div class="cc-l-wrap">
                  <section class="course-img">
                    <img
                      :src="item.cover"
                      class="img-responsive"
                      :alt="item.title"
                    />
                    <div class="cc-mask">
                      <a
                        :href="`/course/${item.id}`"
                        title="开始学习"
                        class="comm-btn c-btn-1"
                        >开始学习</a
                      >
                    </div>
                  </section>
                  <h3 class="hLh30 txtOf mt10">
                    <a
                      :href="`/course/${item.id}`"
                      :title="item.title"
                      class="course-title fsize18 c-333"
                      >{{ item.title }}</a
                    >
                  </h3>
                  <section class="mt10 hLh20 of">
                    <span
                      class="fr jgTag bg-green"
                      v-if="Number(item.price) === 0"
                    >
                      <i class="c-fff fsize12 f-fA">免费</i>
                    </span>
                    <span class="fr jgTag bg-green" v-else>
                      <i class="c-fff fsize12 f-fA"> ￥{{ item.price }}</i>
                    </span>
                    <span class="fl jgAttr c-ccc f-fA">
                      <i class="c-999 f-fA">{{ item.buyCount }}人学习</i>
                      |
                      <i class="c-999 f-fA">{{ item.viewCount }}浏览</i>
                    </span>
                  </section>
                </div>
              </li>
            </ul>
            <div class="clear"></div>
          </article>
        </div>
        <!-- 公共分页 开始 -->
        <div>
          <div class="paging">
            <!-- undisable这个class是否存在，取决于数据属性hasPrevious -->
            <a
              v-if="data.hasPrevious"
              :class="{ undisable: !data.hasPrevious }"
              href="#"
              title="首页"
              @click.prevent="gotoPage(1)"
              >首页</a
            >
            <a
              v-if="data.hasPrevious"
              :class="{ undisable: !data.hasPrevious }"
              href="#"
              title="前一页"
              @click.prevent="gotoPage(data.current - 1)"
              >&lt;</a
            >
            <a
              v-for="(page, index) in pageNav"
              :key="index"
              :class="{
                current: data.current == page,
                undisable: data.current == page,
              }"
              :title="'第' + page + '页'"
              href="#"
              @click.prevent="gotoPage(page)"
              >{{ page }}</a
            >
            <a
              v-if="data.hasNext"
              :class="{ undisable: !data.hasNext }"
              href="#"
              title="后一页"
              @click.prevent="gotoPage(data.current + 1)"
              >&gt;</a
            >
            <a
              v-if="data.hasNext"
              :class="{ undisable: !data.hasNext }"
              href="#"
              title="末页"
              @click.prevent="gotoPage(data.pages)"
              >尾页</a
            >
            <div class="clear" />
          </div>
        </div>
        <!-- 公共分页 结束 -->
      </section>
    </section>
    <!-- /课程列表 结束 -->
  </div>
</template>
<script>
import courseApi from "@/api/course";
export default {
  data() {
    return {
      page: 1, //当前页
      pages: 0, //总页数
      data: {}, //课程列表
      subjectNestedList: [], // 一级分类列表
      subSubjectList: [], // 二级分类列表
      courseQuery: {}, // 查询表单对象

      oneIndex: -1,
      twoIndex: -1,
      buyOrderActive: false,
      buyOrderActive1: "",
      buyOrderActive2: "",
      priceOrderActive: false,
      priceOrderActive1: "",
      priceOrderActive2: "",
      latestOrderActive: false,
      latestOrderActive1: "",
      latestOrderActive2: "",
    };
  },
  created() {
    //查看路径中是否有查询参数
    if (this.$route.query&&this.$route.query.courseName) {
      this.courseQuery.title = this.$route.query.courseName;
      this.page = this.courseQuery.page || 1;
    }
    //获取课程列表
    this.initCourse();
    //获取分类
    this.initSubject();
    //默认按销量降序
    this.orderByBuyCount();
  },
  computed: {
    pageNav() {
      const start = Math.max(1, this.data.current - 1);
      const end = Math.min(start + 2, this.data.pages);
      if (this.data.pages <= 3) {
        return Array.from({ length: this.data.pages }, (_, i) => i + 1);
      } else if (this.data.current <= 2) {
        return Array.from({ length: 3 }, (_, i) => i + 1);
      } else if (this.data.current >= this.data.pages - 1) {
        return Array.from({ length: 3 }, (_, i) => this.data.pages - 2 + i);
      } else {
        return [
          this.data.current - 1,
          this.data.current,
          this.data.current + 1,
        ];
      }
    },
  },
  methods: {
    //价格排序
    orderByPrice() {
      this.priceOrderActive = true;
      this.latestOrderActive = false;
      this.buyOrderActive = false;

      if (this.courseQuery.priceSort == "0") {
        this.priceOrderActive2 = "1";
        this.priceOrderActive1 = "";
        this.courseQuery.priceSort = "1";
      } else {
        this.priceOrderActive1 = "1";
        this.priceOrderActive2 = "";
        this.courseQuery.priceSort = "0";
      }

      this.courseQuery.gmtCreateSort = "";
      this.courseQuery.buyCountSort = "";
      this.gotoPage(1);
    },
    //最新的排序
    orderByLatest() {
      this.latestOrderActive = true;
      this.buyOrderActive = false;
      this.priceOrderActive = false;

      if (this.courseQuery.gmtCreateSort == "0") {
        this.latestOrderActive2 = "1";
        this.latestOrderActive1 = "";
        this.courseQuery.gmtCreateSort = "1";
      } else {
        this.latestOrderActive1 = "1";
        this.latestOrderActive2 = "";
        this.courseQuery.gmtCreateSort = "0";
      }

      this.courseQuery.buyCountSort = "";
      this.courseQuery.priceSort = "";
      this.gotoPage(1);
    },
    //根据关注度降序排序
    orderByBuyCount() {
      this.buyOrderActive = true;
      this.priceOrderActive = false;
      this.latestOrderActive = false;

      if (this.courseQuery.buyCountSort == "0") {
        this.buyOrderActive2 = "1";
        this.buyOrderActive1 = "";
        this.courseQuery.buyCountSort = "1";
      } else {
        this.buyOrderActive1 = "1";
        this.buyOrderActive2 = "";
        this.courseQuery.buyCountSort = "0";
      }

      this.courseQuery.priceSort = "";
      this.courseQuery.gmtCreateSort = "";
      this.gotoPage(1);
    },

    //点击某个一级分类，查询对应二级分类
    searchOne(item, index) {
      if (item) {
        //点击时样式变化
        this.oneIndex = index;
        this.twoIndex = -1;
        this.subSubjectList = [];

        this.courseQuery.subjectParentId = item.id;

        this.courseQuery.subjectId = "";
        this.subSubjectList = item.children;
        //查询符合条件的第一页
        this.gotoPage(1);
      } else {
        this.oneIndex = -1;
        this.twoIndex = -1;
        this.subSubjectList = [];
        //查询全部的第一页
        //清空条件
        this.courseQuery.subjectParentId = "";
        this.courseQuery.subjectId = "";
        this.gotoPage(1);
      }
    },
    //点击二级分类后查询对应的二级分类课程
    searchTwo(item, index) {
      if (item) {
        //点击时样式变化
        this.twoIndex = index;
        //查询一级分类下的二级分类的课程
        this.courseQuery.subjectId = item.id;
        this.gotoPage(1);
      } else {
        this.twoIndex = -1;
        //查询一级分类的全部
        this.courseQuery.subjectId = "";
        this.gotoPage(1);
      }
    },

    //初始化课程
    initCourse() {
      courseApi.getCourseList(1, 8, this.courseQuery).then((res) => {
        this.data = res.data.data;
        this.pages = res.data.data.pages;
      });
    },
    //查询所有分类
    initSubject() {
      courseApi.getAllSubject().then((res) => {
        this.subjectNestedList = res.data.data.list;
      });
    },

    //分页切换
    gotoPage(page) {
      this.page = page;
      courseApi.getCourseList(this.page, 8, this.courseQuery).then((res) => {
        this.data = res.data.data;
      });
    },
  },
};
</script>
<style scoped>
.active {
  color: #2080f7;
  background-color: rgba(32, 128, 247, 0.1);
  border-radius: 8px;
}
.hide {
  display: none;
}
.show {
  display: block;
}
</style>
