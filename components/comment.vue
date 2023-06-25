<!--评论模块-->
<template>
  <div class="container" style="width: 100%">
    <!-- 发表评论 -->
    <div>
      <el-avatar size="large" :src="avatar"></el-avatar>
      <el-input
        style="width: calc(100% - 45px)"
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4 }"
        placeholder="请输入内容"
        v-model="comment.content"
      >
      </el-input>
      <el-button
        @click.prevent="addComment"
        style="display: block; float: right; margin-top: 10px"
        type="primary"
        >评论</el-button
      >
    </div>

    <!-- 展示评论 -->
    <!-- 评论列表  -->
    <div class="commentWrapper">
      <div v-for="item in comments" :key="item.id">
        <el-row>
          <el-col :span="2" style="text-align: center"
            ><el-avatar
              class="header-img"
              size="large"
              :src="item.avatar"
            ></el-avatar
          ></el-col>
          <el-col :span="22">
            <p style="margin-bottom: 10px; color: rgb(251, 124, 161)">
              {{ item.nickname }}
            </p>
            <p style="margin-bottom: 10px">{{ item.content }}</p>
            <p style="color: rgb(144, 166, 202)">
              {{ item.gmtCreate }}

              <span
                v-if="item.agree <= 0"
                class="cz"
                style="margin-left: 5px; margin-right: 5px"
                @click="toAgree(item.id)"
                ><i class="iconfont icon-dianzan"></i>赞</span
              >
              <span
                v-if="item.agree > 0 && isAgree(item.id)"
                class="cz"
                style="margin-left: 5px; margin-right: 5px"
                @click="toAgree(item.id)"
                ><i class="iconfont icon-dianzan_kuai"></i
                >{{ item.agree }}人赞</span
              >

              <span
                v-if="item.agree > 0 && !isAgree(item.id)"
                class="cz"
                style="margin-left: 5px; margin-right: 5px"
                @click="toAgree(item.id)"
                ><i class="iconfont icon-dianzan"></i>{{ item.agree }}人赞</span
              >
              <span class="cz" @click="toReply(item)"
                >回复<i class="iconfont icon-chakantiezihuifu"></i
              ></span>
            </p>

            <!-- 展示回复的评论 -->

            <template v-if="item.replyVoList.length <= 4">
              <div
                style="margin-top: 10px"
                v-for="myreply in item.replyVoList"
                :key="myreply.id"
              >
                <el-row>
                  <el-col :span="2" style="text-align: center"
                    ><el-avatar
                      class="header-img"
                      size="large"
                      :src="myreply.fromAvatar"
                    ></el-avatar
                  ></el-col>
                  <el-col :span="22">
                    <p
                      v-if="myreply.flag == 0"
                      style="margin-bottom: 10px; color: rgb(251, 124, 161)"
                    >
                      {{ myreply.fromNickname }}
                    </p>

                    <p v-if="myreply.flag == 1" style="margin-bottom: 10px">
                      <span style="color: rgb(251, 124, 161)">{{
                        myreply.fromNickname
                      }}</span
                      >&nbsp;回复&nbsp;@<span
                        style="color: rgb(251, 124, 161)"
                        >{{ myreply.toNickname }}</span
                      >
                    </p>

                    <p style="margin-bottom: 10px">{{ myreply.content }}</p>

                    <p style="color: rgb(144, 166, 202)">
                      {{ myreply.gmtCreate }}

                      <span
                        v-if="myreply.agree <= 0"
                        class="cz"
                        style="margin-left: 5px; margin-right: 5px"
                        @click="agreeReply(myreply.id)"
                        ><i class="iconfont icon-dianzan"></i>赞</span
                      >
                      <span
                        v-if="myreply.agree > 0 && isAgree(myreply.id)"
                        class="cz"
                        style="margin-left: 5px; margin-right: 5px"
                        @click="agreeReply(myreply.id)"
                        ><i class="iconfont icon-dianzan_kuai"></i
                        >{{ myreply.agree }}人赞</span
                      >
                      <span
                        v-if="myreply.agree > 0 && !isAgree(myreply.id)"
                        class="cz"
                        style="margin-left: 5px; margin-right: 5px"
                        @click="agreeReply(myreply.id)"
                        ><i class="iconfont icon-dianzan"></i
                        >{{ myreply.agree }}人赞</span
                      >
                      <span class="cz" @click="toReply(myreply)"
                        >回复<i class="iconfont icon-chakantiezihuifu"></i
                      ></span>
                    </p>
                  </el-col>
                </el-row>
                <!-- 回复评论 -->
                <div
                  v-if="toreplyId == myreply.id"
                  style="margin-top: 10px; margin-left: 10px"
                >
                  <el-avatar size="large" :src="avatar"></el-avatar>
                  <el-input
                    style="width: calc(100% - 45px)"
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4 }"
                    :placeholder="`回复${myreply.fromNickname}`"
                    v-model="reply.content"
                  >
                  </el-input>
                  <div style="width: 100%; text-align: right">
                    <el-button
                      @click.prevent="
                        replyReply(myreply.commentId, myreply.fromUid)
                      "
                      style="margin-top: 10px"
                      type="primary"
                      >回复</el-button
                    >
                  </div>
                </div>
              </div>
            </template>

            <template v-if="item.replyVoList.length > 4">
              <div
                style="margin-top: 10px"
                v-for="myreply in item.replyVoList.slice(0, 4)"
                :key="myreply.id"
              >
                <el-row>
                  <el-col :span="2" style="text-align: center"
                    ><el-avatar
                      class="header-img"
                      size="large"
                      :src="myreply.fromAvatar"
                    ></el-avatar
                  ></el-col>
                  <el-col :span="22">
                    <p
                      v-if="myreply.flag == 0"
                      style="margin-bottom: 10px; color: rgb(251, 124, 161)"
                    >
                      {{ myreply.fromNickname }}
                    </p>

                    <p v-if="myreply.flag == 1" style="margin-bottom: 10px">
                      <span style="color: rgb(251, 124, 161)">{{
                        myreply.fromNickname
                      }}</span
                      >&nbsp;回复&nbsp;@<span
                        style="color: rgb(251, 124, 161)"
                        >{{ myreply.toNickname }}</span
                      >
                    </p>

                    <p style="margin-bottom: 10px">{{ myreply.content }}</p>

                    <p style="color: rgb(144, 166, 202)">
                      {{ myreply.gmtCreate }}

                      <span
                        v-if="myreply.agree <= 0"
                        class="cz"
                        style="margin-left: 5px; margin-right: 5px"
                        @click="agreeReply(myreply.id)"
                        ><i class="iconfont icon-dianzan"></i>赞</span
                      >
                      <span
                        v-if="myreply.agree > 0 && isAgree(myreply.id)"
                        class="cz"
                        style="margin-left: 5px; margin-right: 5px"
                        @click="agreeReply(myreply.id)"
                        ><i class="iconfont icon-dianzan_kuai"></i
                        >{{ myreply.agree }}人赞</span
                      >
                      <span
                        v-if="myreply.agree > 0 && !isAgree(myreply.id)"
                        class="cz"
                        style="margin-left: 5px; margin-right: 5px"
                        @click="agreeReply(myreply.id)"
                        ><i class="iconfont icon-dianzan"></i
                        >{{ myreply.agree }}人赞</span
                      >
                      <span class="cz" @click="toReply(myreply)"
                        >回复<i class="iconfont icon-chakantiezihuifu"></i
                      ></span>
                    </p>
                  </el-col>
                </el-row>
                <!-- 回复评论 -->
                <div
                  v-if="toreplyId == myreply.id"
                  style="margin-top: 10px; margin-left: 10px"
                >
                  <el-avatar size="large" :src="avatar"></el-avatar>
                  <el-input
                    style="width: calc(100% - 45px)"
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4 }"
                    :placeholder="`回复${myreply.fromNickname}`"
                    v-model="reply.content"
                  >
                  </el-input>
                  <div style="width: 100%; text-align: right">
                    <el-button
                      @click.prevent="
                        replyReply(myreply.commentId, myreply.fromUid)
                      "
                      style="margin-top: 10px"
                      type="primary"
                      >回复</el-button
                    >
                  </div>
                </div>
              </div>
              <div
                style="margin-left: 10px; margin-top: 20px"
                v-if="isShow != item.id"
              >
                <span style="color: rgb(144, 166, 202)"
                  >共{{ item.replyVoList.length }}条回复,</span
                >
                <a
                  style="color: rgb(102, 177, 255); text-decoration: none"
                  class="cz"
                  @click="isShow = item.id"
                  >点击查看</a
                >
              </div>
              <template v-if="isShow == item.id">
                <div
                  style="margin-top: 10px"
                  v-for="myreply in item.replyVoList.slice(4)"
                  :key="myreply.id"
                >
                  <el-row>
                    <el-col :span="2" style="text-align: center"
                      ><el-avatar
                        class="header-img"
                        size="large"
                        :src="myreply.fromAvatar"
                      ></el-avatar
                    ></el-col>
                    <el-col :span="22">
                      <p
                        v-if="myreply.flag == 0"
                        style="margin-bottom: 10px; color: rgb(251, 124, 161)"
                      >
                        {{ myreply.fromNickname }}
                      </p>

                      <p v-if="myreply.flag == 1" style="margin-bottom: 10px">
                        <span style="color: rgb(251, 124, 161)">{{
                          myreply.fromNickname
                        }}</span
                        >&nbsp;回复&nbsp;@<span
                          style="color: rgb(251, 124, 161)"
                          >{{ myreply.toNickname }}</span
                        >
                      </p>

                      <p style="margin-bottom: 10px">{{ myreply.content }}</p>

                      <p style="color: rgb(144, 166, 202)">
                        {{ myreply.gmtCreate }}

                        <span
                          v-if="myreply.agree <= 0"
                          class="cz"
                          style="margin-left: 5px; margin-right: 5px"
                          @click="agreeReply(myreply.id)"
                          ><i class="iconfont icon-dianzan"></i>赞</span
                        >
                        <span
                          v-if="myreply.agree > 0 && isAgree(myreply.id)"
                          class="cz"
                          style="margin-left: 5px; margin-right: 5px"
                          @click="agreeReply(myreply.id)"
                          ><i class="iconfont icon-dianzan_kuai"></i
                          >{{ myreply.agree }}人赞</span
                        >
                        <span
                          v-if="myreply.agree > 0 && !isAgree(myreply.id)"
                          class="cz"
                          style="margin-left: 5px; margin-right: 5px"
                          @click="agreeReply(myreply.id)"
                          ><i class="iconfont icon-dianzan"></i
                          >{{ myreply.agree }}人赞</span
                        >
                        <span class="cz" @click="toReply(myreply)"
                          >回复<i class="iconfont icon-chakantiezihuifu"></i
                        ></span>
                      </p>
                    </el-col>
                  </el-row>
                  <!-- 回复评论 -->
                  <div
                    v-if="toreplyId == myreply.id"
                    style="margin-top: 10px; margin-left: 10px"
                  >
                    <el-avatar size="large" :src="avatar"></el-avatar>
                    <el-input
                      style="width: calc(100% - 45px)"
                      type="textarea"
                      :autosize="{ minRows: 2, maxRows: 4 }"
                      :placeholder="`回复${myreply.fromNickname}`"
                      v-model="reply.content"
                    >
                    </el-input>
                    <div style="width: 100%; text-align: right">
                      <el-button
                        @click.prevent="
                          replyReply(myreply.commentId, myreply.fromUid)
                        "
                        style="margin-top: 10px"
                        type="primary"
                        >回复</el-button
                      >
                    </div>
                  </div>
                </div>
                <div style="margin-left: 10px; margin-top: 20px">
                  <span style="color: rgb(144, 166, 202)"
                    >共{{ item.replyVoList.length }}条回复,</span
                  >
                  <a
                    style="color: rgb(102, 177, 255); text-decoration: none"
                    class="cz"
                    @click="isShow = ''"
                    >点击收起</a
                  >
                </div>
              </template>
            </template>

            <!-- 回复评论 -->
            <div
              v-if="toreplyId == item.id"
              style="margin-top: 10px; margin-left: 10px"
            >
              <el-avatar size="large" :src="avatar"></el-avatar>
              <el-input
                style="width: calc(100% - 45px)"
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4 }"
                :placeholder="`回复${item.nickname}`"
                v-model="reply.content"
              >
              </el-input>
              <div style="width: 100%; text-align: right">
                <el-button
                  @click.prevent="replyComment(item.id)"
                  style="margin-top: 10px"
                  type="primary"
                  >回复</el-button
                >
              </div>
            </div>
          </el-col>
        </el-row>

        <el-divider></el-divider>
      </div>
    </div>
  </div>
</template>

<script>
import iconfontCss from "~/assets/icon/iconfont.css";
import commentApi from "@/api/comment";
export default {
  props: {
    comments: {
      type: Array,
      required: true,
    },
    courseId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isShow: "",
      agreeList: [],
      toreplyId: "",
      avatar: "",
      comment: {
        content: "",
        courseId: this.courseId,
      },
      reply: {
        commentId: "",
        content: "",
        toUid: "",
        courseId: this.courseId,
        flag: 0,
      },
    };
  },
  created() {
    //获取用户头像
    commentApi.getAvatar().then((res) => {
      console.log(res);
      if (res.data.success) {
        this.avatar = res.data.data.avatar;
      }
    });
    this.getAgreeList();
  },

  methods: {
    //获取点赞列表
    getAgreeList() {
      commentApi.getAgreeList(this.courseId).then((res) => {
        console.log(res);
        if (res.data.success) {
          this.agreeList = res.data.data.list;
        }
      });
    },

    //判断是否已经点赞
    isAgree(id) {
      for (let i = 0; i < this.agreeList.length; i++) {
        if (this.agreeList[i].commentId == id) {
          //   console.log("点过赞了！");
          return true;
        }
      }
      return false;
    },

    //打开回复评论框
    toReply(item) {
      console.log(item.id);
      if (this.toreplyId == item.id) {
        this.toreplyId = "";
      } else {
        this.toreplyId = item.id;
      }
    },
    //添加评论
    addComment() {
      commentApi.addComment2(this.comment).then((res) => {
        if (res.data.success) {
          this.$message({
            type: "success",
            message: "评论成功！",
          });
          //清空输入框
          this.comment.content = "";
          //刷新评论数据
          this.$emit("updateComment");
        } else {
          this.$message({
            type: "error",
            message: "请先登录！",
          });
        }
      });
    },
    //点赞评论
    toAgree(id) {
      commentApi.agreeComment(id, this.courseId).then((res) => {
        if (!res.data.success) {
          //提示
          this.$message({
            type: "error",
            message: "请先登录",
          });
          return;
        }
        if (res.data.data.msg == "点赞成功") {
          //提示
          this.$message({
            type: "success",
            message: "点赞成功！",
          });
          //刷新评论数据
          this.$emit("updateComment");
          //刷新点赞列表
          this.getAgreeList();
        } else {
          //点过赞了
          // this.$message({
          //   type: "info",
          //   message: "您已经点过赞啦",
          // });
          //   点过赞了
          this.$message({
            type: "info",
            message: "已取消点赞！",
          });
          //取消点赞
          //刷新评论数据
          this.$emit("updateComment");
          //刷新点赞列表
          this.getAgreeList();
        }
      });
    },
    agreeReply(id) {
      commentApi.agreeReply(id, this.courseId).then((res) => {
        if (!res.data.success) {
          //提示
          this.$message({
            type: "error",
            message: "请先登录",
          });
          return;
        }
        if (res.data.data.msg == "点赞成功") {
          //提示
          this.$message({
            type: "success",
            message: "点赞成功！",
          });
          //刷新评论数据
          this.$emit("updateComment");
          //刷新点赞列表
          this.getAgreeList();
        } else {
          //   点过赞了
          this.$message({
            type: "info",
            message: "已取消点赞！",
          });
          //取消点赞
          //刷新评论数据
          this.$emit("updateComment");
          //刷新点赞列表
          this.getAgreeList();
        }
      });
    },
    //回复评论
    replyComment(id) {
      this.reply.commentId = id;
      commentApi.replyComment(this.reply).then((res) => {
        if (res.data.success) {
          this.$message({
            type: "success",
            message: "回复成功！",
          });
          //清空输入框
          this.reply.content = "";
          //刷新评论数据
          this.$emit("updateComment");
        } else {
          this.$message({
            type: "error",
            message: "请先登录！",
          });
        }
      });
    },
    replyReply(id, toUid) {
      this.reply.commentId = id;
      this.reply.toUid = toUid;
      this.reply.flag = 1;
      commentApi.replyReply(this.reply).then((res) => {
        if (res.data.success) {
          this.$message({
            type: "success",
            message: "回复成功！",
          });
          //清空输入框
          this.reply.content = "";
          //刷新评论数据
          this.$emit("updateComment");
          this.reply.flag = 0;
        } else {
          this.$message({
            type: "error",
            message: "请先登录！",
          });
        }
      });
    },
  },
};
</script>

<style scoped lang="css">
.commentWrapper {
  margin-top: 50px;
}
.cz {
  cursor: pointer;
}
</style>