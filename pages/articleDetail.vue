<template>
  <div style="width: 800px;margin: 50px auto;">
    <div style="width: 100%">
      <el-badge class="item">
        <el-button @click="getTypeArticleList('all')" size="small">全部</el-button>
      </el-badge>
      <el-badge :value="type" class="item" v-for="(type,index) in typeList" :key="index">
        <el-button @click="getTypeArticleList(index)" size="small">{{ index }}</el-button>
      </el-badge>
    </div>
    <div style="margin-top: 30px;">
      <h1 style="text-align: center;font-size:20px;font-weight: bold">{{ article.title }}</h1>
      <p style="text-align: right"><span
        style="font-weight: bold;color: rgb(251, 124, 161);margin-right: 5px">{{ article.author }}</span>发表于<span
        style="color: rgb(138,136,136);margin-left: 5px">{{ article.gmtCreate }}</span></p>

<!--      <div style="border: 2px solid silver;padding: 20px">-->
<!--        <pre><code v-html="article.content" class="code"></code></pre>-->
<!--      </div>-->
    </div>
    <div v-html="article.content" style="border: 2px solid silver;padding: 20px">
    </div>
    <el-backtop></el-backtop>
  </div>
</template>
<script>
import articleApi from "@/api/article";
import {marked} from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'


// const highlightCode = () => {
//   const block = document.querySelectorAll('pre code')
//   hljs.configure({useBR: true});
//   block.forEach((el) => {
//     hljs.highlightBlock(el)
//   })
// }
export default {
  layout: "article",
  data() {
    return {
      typeList: {},
      article: {
        title: "",
        content: "",
      },
    }
  },
  mounted() {
    // highlightCode()
  },
  updated() {
    // highlightCode()
  },
  created() {
    this.findCategory();
    this.getContent();
  },

  methods: {
    getContent() {
      var id = this.$route.query.id;
      articleApi.getContent(id).then(res => {
        this.article = res.data.data.article;

        console.log(this.article.content, "content")
        // this.article.content = marked(res.data.data.article.content)
      })

    },
    getTypeArticleList(type) {
      console.log(type, "type")
      this.$router.push({path: "/article", query: {type: type}})
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

pre code img {
  width: 100%;
  height: auto;
  margin: 0;
}


</style>
