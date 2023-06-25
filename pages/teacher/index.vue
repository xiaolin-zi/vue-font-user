<template>
  <div id="aCoursesList" class="bg-fa of">
    <!-- 讲师列表 开始 -->
    <section class="container">
      <header class="comm-title all-teacher-title">
        <h2 class="fl tac">
          <span class="c-333">全部讲师</span>
        </h2>
        <section class="c-tab-title">
          <a id="subjectAll" title="全部" :href="/teacher/">全部</a>
          <!-- <c:forEach var="subject" items="${subjectList }">
                            <a id="${subject.subjectId}" title="${subject.subjectName }" href="javascript:void(0)" onclick="submitForm(${subject.subjectId})">${subject.subjectName }</a>
          </c:forEach>-->
        </section>
      </header>
      <section class="c-sort-box unBr">
        <div>
          <!-- /无数据提示 开始-->
          <section class="no-data-wrap" v-if="data.total == 0">
            <em class="icon30 no-data-ico">&nbsp;</em>
            <span class="c-666 fsize14 ml10 vam"
              >没有相关数据，小编正在努力整理中...</span
            >
          </section>
          <!-- /无数据提示 结束-->
          <article v-if="data.total > 0" class="i-teacher-list">
            <ul class="of">
              <li v-for="teacher in data.records" :key="teacher.id">
                <section class="i-teach-wrap">
                  <div class="i-teach-pic">
                    <a :href="`/teacher/${teacher.id}`" :title="teacher.name">
                      <img :src="teacher.avatar" :alt="teacher.name" />
                    </a>
                  </div>
                  <div class="mt10 hLh30 txtOf tac">
                    <a
                      :href="`/teacher/${teacher.id}`"
                      :title="teacher.name"
                      class="fsize18 c-666"
                      >{{ teacher.name }}</a
                    >
                  </div>
                  <div class="hLh30 txtOf tac">
                    <span class="fsize14 c-999">{{ teacher.info }}</span>
                  </div>
                  <div class="mt15 i-q-txt">
                    <p class="c-999 f-fA">{{ teacher.career }}</p>
                  </div>
                </section>
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
    <!-- /讲师列表 结束 -->
  </div>
</template>
<script>
import teacherApi from "@/api/teacher";
export default {
  //异步调用,调用一次
  //params：相当于之前的this.$route.params.id 等价 params.id
  //   asyncData({ params, error }) {
  //     return teacherApi.getTeacherList(1, 8).then((response) => {
  //       return { data: response.data.data };
  //     });
  //   },

  data() {
    return {
      data: {},
    };
  },
  created() {
    teacherApi.getTeacherList(1, 8).then((res) => {
      this.data = res.data.data;
    });
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
    //分页切换
    //参数是页码数
    gotoPage(page) {
      teacherApi.getTeacherList(page, 8).then((res) => {
        this.data = res.data.data;
      });
    },
  },
};
</script>
<style scoped>
.undisable {
  pointer-events: none;
}
</style>