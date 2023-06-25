<template>
  <div id="aCoursesList" class="bg-fa of">
    <!-- /课程详情 开始 -->
    <section class="container">
      <section class="path-wrap txtOf hLh30">
        <a href="/" title class="c-999 fsize14">首页</a>
        \
        <a href="/course" title class="c-999 fsize14">课程列表</a>
        \
        <span class="c-333 fsize14"
          >{{ courseWebVo.subjectLevelOne }}&nbsp;|&nbsp;{{
            courseWebVo.subjectLevelTwo
          }}</span
        >
      </section>
      <div>
        <article class="c-v-pic-wrap" style="height: 357px">
          <section class="p-h-video-box" id="videoPlay">
            <img
              height="357px"
              :src="courseWebVo.cover"
              :alt="courseWebVo.title"
              class="dis c-v-pic"
            />
          </section>
        </article>
        <aside class="c-attr-wrap">
          <section class="ml20 mr15">
            <h2 class="hLh30 txtOf mt15">
              <span class="c-fff fsize24">{{ courseWebVo.title }}</span>
            </h2>
            <section class="c-attr-jg">
              <span class="c-fff">价格：</span>
              <b class="c-yellow" style="font-size: 24px"
                >￥{{ courseWebVo.price }}</b
              >
            </section>
            <section class="c-attr-mt c-attr-undis">
              <span class="c-fff fsize14"
                >主讲： {{ courseWebVo.teacherName }}&nbsp;&nbsp;&nbsp;</span
              >
            </section>
            <section class="c-attr-mt of">
              <span class="ml10 vam">
                <em class="icon18 scIcon"></em>
                <a class="c-fff vam" title="收藏" href="#">收藏</a>
              </span>
            </section>
            <section
              class="c-attr-mt"
              v-if="isBuy || Number(courseWebVo.price === 0)"
            >
              <a
                href="#"
                @click.prevent="toShowVideo"
                title="立即观看"
                class="comm-btn c-btn-3"
                >立即观看</a
              >
            </section>
            <section v-else class="c-attr-mt">
              <a
                href="#"
                @click.prevent="createOrder()"
                title="立即购买"
                class="comm-btn c-btn-3"
                >立即购买</a
              >
            </section>
          </section>
        </aside>
        <aside class="thr-attr-box">
          <ol class="thr-attr-ol clearfix">
            <li>
              <p>&nbsp;</p>
              <aside>
                <span class="c-fff f-fM">购买数</span>
                <br />
                <h6 class="c-fff f-fM mt10">{{ courseWebVo.buyCount }}</h6>
              </aside>
            </li>
            <li>
              <p>&nbsp;</p>
              <aside>
                <span class="c-fff f-fM">课时数</span>
                <br />
                <h6 class="c-fff f-fM mt10">{{ courseWebVo.lessonNum }}</h6>
              </aside>
            </li>
            <li>
              <p>&nbsp;</p>
              <aside>
                <span class="c-fff f-fM">浏览数</span>
                <br />
                <h6 class="c-fff f-fM mt10">{{ courseWebVo.viewCount }}</h6>
              </aside>
            </li>
          </ol>
        </aside>
        <div class="clear"></div>
      </div>
      <!-- /课程封面介绍 -->
      <div class="mt20 c-infor-box">
        <article class="fl col-7">
          <section class="mr30">
            <div class="i-box">
              <div>
                <section id="c-i-tabTitle" class="c-infor-tabTitle c-tabtitle">
                  <a name="c-i" class="current" title="课程详情">课程详情</a>
                </section>
              </div>
              <article class="ml10 mr10 pt20">
                <div>
                  <h6 class="c-i-content c-infor-title">
                    <span>课程介绍</span>
                  </h6>
                  <div class="course-txt-body-wrap">
                    <section class="course-txt-body">
                      <p v-html="courseWebVo.description"></p>
                    </section>
                  </div>
                </div>

                <el-tabs v-model="activeName">
                  <el-tab-pane label="课程介绍" name="first"
                    ><!-- /课程介绍 -->
                    <div>
                      <h6 class="c-g-content c-infor-title">
                        <span>课程大纲</span>
                      </h6>
                      <section class="mt20">
                        <div class="lh-menu-wrap">
                          <menu id="lh-menu" class="lh-menu mt10 mr10">
                            <ul>
                              <!-- 文件目录 -->
                              <li
                                class="lh-menu-stair"
                                v-for="chapter in chapterVideoList"
                                :key="chapter.id"
                              >
                                <a
                                  href="javascript: void(0)"
                                  :title="chapter.title"
                                  class="current-1"
                                >
                                  <em class="lh-menu-i-1 icon18 mr10"></em
                                  >{{ chapter.title }}
                                </a>
                                <ol class="lh-menu-ol" style="display: block">
                                  <li
                                    class="lh-menu-second ml30"
                                    v-for="video in chapter.children"
                                    :key="video.id"
                                  >
                                    <a
                                       @click="toPlayVideo(video)"
                                      target="_blank">
                                      <span class="fr" v-if="video.isFree">
                                        <i class="free-icon vam mr10">免费试听</i>
                                      </span>
                                      <span class="fr" v-else>
                                        <i class="free-icon vam mr10" style="color: red;border: red solid 1px">付费</i>
                                      </span>
                                      <em class="lh-menu-i-2 icon16 mr5">&nbsp;</em>{{ video.title }}
                                    </a>
                                  </li>
                                </ol>
                              </li>
                            </ul>
                          </menu>
                        </div>
                      </section>
                    </div></el-tab-pane
                  >
                  <el-tab-pane label="课程评论" name="fourth">
                    <comment
                      @updateComment="initComments"
                      :comments="commentData"
                      :courseId="courseId"
                    ></comment>
                    <!-- 公共分页 开始 -->
                    <div>
                      <div class="paging">
                        <!-- undisable这个class是否存在，取决于数据属性hasPrevious -->
                        <a
                          v-if="hasPrevious"
                          :class="{ undisable: !hasPrevious }"
                          href="#"
                          title="首页"
                          @click.prevent="gotoPage(1)"
                          >首页</a
                        >
                        <a
                          v-if="hasPrevious"
                          :class="{ undisable: !hasPrevious }"
                          href="#"
                          title="前一页"
                          @click.prevent="gotoPage(current - 1)"
                          >&lt;</a
                        >
                        <a
                          v-for="(page, index) in pageNav"
                          :key="index"
                          :class="{
                            current: current == page,
                            undisable: current == page,
                          }"
                          :title="'第' + page + '页'"
                          href="#"
                          @click.prevent="gotoPage(page)"
                          >{{ page }}</a
                        >
                        <a
                          v-if="hasNext"
                          :class="{ undisable: !hasNext }"
                          href="#"
                          title="后一页"
                          @click.prevent="gotoPage(current + 1)"
                          >&gt;</a
                        >
                        <a
                          v-if="hasNext"
                          :class="{ undisable: !hasNext }"
                          href="#"
                          title="末页"
                          @click.prevent="gotoPage(pages)"
                          >尾页</a
                        >
                        <div class="clear" />
                      </div>
                    </div>
                    <!-- 公共分页 结束 -->
                  </el-tab-pane>
                </el-tabs>

                <!-- /课程大纲 -->
              </article>
            </div>
          </section>
        </article>

        <aside class="fl col-3">
          <div class="i-box">
            <div>
              <section class="c-infor-tabTitle c-tab-title">
                <a title href="javascript:void(0)">主讲讲师</a>
              </section>
              <section class="stud-act-list">
                <ul style="height: auto">
                  <li>
                    <div class="u-face">
                      <a :href="`/teacher/${courseWebVo.teacherId}`">
                        <img
                          :src="courseWebVo.avatar"
                          width="50"
                          height="50"
                          alt
                        />
                      </a>
                    </div>
                    <section class="hLh30 txtOf">
                      <a
                        class="c-333 fsize16 fl"
                        :href="`/teacher/${courseWebVo.teacherId}`"
                        >{{ courseWebVo.teacherName }}</a
                      >
                    </section>
                    <section class="hLh20 txtOf">
                      <span class="c-999">{{ courseWebVo.intro }}</span>
                    </section>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </aside>

        <div class="clear"></div>
      </div>
    </section>
    <!-- /课程详情 结束 -->
  </div>
</template>
<script>
import courseApi from "@/api/course";
import commentApi from "@/api/comment";
import comment from "../../components/comment";
import orderApi from "@/api/order";
export default {
  components: {
    comment,
  },
  data() {
    return {
      activeName: "first",

      courseWebVo: {},
      chapterVideoList: [],
      commentData: [],
      courseId: "",

      page: 1,
      limit: 4,
      total: 0,
      current: 0,
      pages: 0,
      hasPrevious: false,
      hasNext: false,
      isBuy: false,
    };
  },
  computed: {
    pageNav() {
      const start = Math.max(1, this.current - 1);
      const end = Math.min(start + 2, this.pages);
      if (this.pages <= 3) {
        return Array.from({ length: this.pages }, (_, i) => i + 1);
      } else if (this.current <= 2) {
        return Array.from({ length: 3 }, (_, i) => i + 1);
      } else if (this.current >= this.pages - 1) {
        return Array.from({ length: 3 }, (_, i) => this.pages - 2 + i);
      } else {
        return [this.current - 1, this.current, this.current + 1];
      }
    },
  },
  created() {
    this.init();
    this.courseId = this.$route.params.id;
    //更新浏览量
    courseApi.updatePageViewCount(this.$route.params.id).then((res) => {});
    this.initComments();
  },
  methods: {
    toShowVideo(){
      //播放第一个视频
      if(this.chapterVideoList.length > 0){
        console.log(this.chapterVideoList[0].children[0])
        this.toPlayVideo(this.chapterVideoList[0].children[0]);
      }else{
        this.$message({
          message: "暂无视频",
          type: "warning",
        });
      }
    },
    toPlayVideo(video){
      if(video.isFree){
        window.open('/player/' + video.videoSourceId);
      }else{
        //提示购买
        this.$message({
          message: "请先购买课程",
          type: "warning",
        });
      }
    },
    //生成订单
    createOrder() {
      //判断是否登录

      orderApi.createOrder(this.courseId).then((res) => {
        if (res.data.success){
          //获取返回订单号
          //跳转到支付页面
          this.$router.push({ path: "/orders/" + res.data.data.orderNo });
        }else{
          this.$message({
            message: res.data.message,
            type: "warning",
          });
        }
      });
    },
    init() {
      courseApi.getCourseInfo(this.$route.params.id).then((res) => {
        this.courseWebVo = res.data.data.courseInfo;
        this.chapterVideoList = res.data.data.chapterVideoList;
        this.isBuy = res.data.data.isBuy;
        console.log(this.chapterVideoList,"chapterVideoList");
      });
    },
    initComments() {
      commentApi
        .getCommontList2(this.page, this.limit, this.courseId)
        .then((res) => {
          this.commentData = res.data.data.commentList;
          this.total = res.data.data.total;
          this.current = res.data.data.current;
          this.pages = res.data.data.pages;
          this.hasPrevious = res.data.data.hasPrevious;
          this.hasNext = res.data.data.hasNext;
          console.log(this.commentData);
        });
    },
    gotoPage(page) {
      this.page = page;
      commentApi
        .getCommontList2(this.page, this.limit, this.courseId)
        .then((res) => {
          this.commentData = res.data.data.commentList;
          this.total = res.data.data.total;
          this.current = res.data.data.current;
          this.pages = res.data.data.pages;
          this.hasPrevious = res.data.data.hasPrevious;
          this.hasNext = res.data.data.hasNext;
          console.log(this.commentData);
        });
    },
  },
};
</script>
