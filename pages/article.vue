<template>
  <div style="width: 800px;margin: 50px auto;">
    <div style="width: 100%">
      <el-badge  class="item">
        <el-button @click="getTypeArticleList('all')" size="small">全部</el-button>
      </el-badge>

      <el-badge :value="type" class="item" v-for="(type,index) in typeList" :key="index">
        <el-button @click="getTypeArticleList(index)" size="small">{{ index }}</el-button>
      </el-badge>

    </div>

    <div style="margin-top: 20px">
      <el-card  shadow="hover" class="box-card" style="margin-bottom: 10px;cursor: pointer" v-for="article in articleList" :key="article.id">
        <div style="display: inline-block;height: 80px" @click="toThisArticle(article.id)">
          <img style="width: 100px; vertical-align: top;"
               :src="article.cover"/>
        </div>
        <span class="wrap" @click="toThisArticle(article.id)" style="display: inline-block;height: 100px;  vertical-align: top;width: calc(100% - 120px);">
          <p style="color: #ea562e">{{article.title}}</p>
          <p v-html="article.content" class="wrap" ></p>
        </span>
      </el-card>
      <!-- 分页 -->
      <el-pagination
        background
        :current-page="page"
        :page-size="limit"
        :total="total"
        style="padding: 30px 0; text-align: center"
        layout="total, prev, pager, next, jumper"
        @current-change="getArticleList"
      />
    </div>

  </div>
</template>
<script>
import articleApi from "@/api/article";
import { marked } from 'marked'
export default {
  data() {
    return {
      typeList: {},
      articleList: [],
      page:1,
      limit:5,
      total:0,
      mytype:"all",
    }
  },
  created() {
    if(this.$route.query&&this.$route.query.type){
      this.mytype=this.$route.query.type
    }
    this.getArticleList()
    this.findCategory()
  },
  mounted () {
    const link = document.createElement('link')
    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.href = 'https://cdn.bootcss.com/github-markdown-css/2.10.0/github-markdown.min.css'
    document.head.appendChild(link)
  },
  methods: {
    toThisArticle(id){
      console.log(id,"id")
      this.$router.push({path:"/articleDetail",query:{id:id}})
    },
    getTypeArticleList(type){
      console.log(type,"type")
      this.mytype=type;
      this.getArticleList()
    },
    getArticleList(page = 1) {
      this.page=page;
      articleApi.findArticlePage(this.page,this.limit,this.mytype).then(res => {
        this.articleList = res.data.data.records;
        this.total = res.data.data.total;
        this.articleList.forEach(item=>{
          item.content=marked(item.content)
        })
      })
    },
    findCategory() {
      articleApi.findCategory().then(res => {
        this.typeList = res.data.data;
        // console.log(res,"666")
      })
    },
  }
}
</script>
<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
/*多行超出*/
.wrap {

  /*让纯数字也可以换行显示*/
  word-break: break-all;


  /*将div变成弹性伸缩盒子模型
display:box为display:flex的前身
需要加浏览器私有属性来支持
*/
  display: -webkit-box;
  /*设置或检索伸缩盒的子元素的排列方式
目前所有主流浏览器都不支持box-orient属性。
Firefox通过私有属性- MOZ-box-orient支持。
Safari, Opera, 和 Chrome通过
私有属性 -webkit-box-orient 支持.
*/
  /*值为vertical表示从顶部向底部垂直布置子元素*/
  -webkit-box-orient: vertical;
  /*设置要出现省略号的行数
下面的3表示第三行出现省略号
*/
  -webkit-line-clamp: 2;
  /*设置一个行高，更容易控制行数
行高/元素高度=设置出现省略号的行数
然后超出的部分隐藏起来
*/
  line-height: 30px;
  /*超出高度的部分都隐藏起来
目的主要是将设置了省略号那一行后面的内容都隐藏起来
*/
  overflow-y: hidden;

  overflow-x: hidden;

}

</style>
