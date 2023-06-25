<template>
  <div class="block" style="width: 50%;margin: 50px auto">
    <div style="margin-bottom: 50px">
      <h3 style="font-size: 14px">留言板</h3>
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4 }"
        placeholder="请输入内容"
        v-model="mymessage"
      >
      </el-input>
      <el-button
        @click.prevent="sendMsg"
        style="float: right;margin-top: 10px"
        type="primary"
      >留言</el-button
      >
    </div>

    <el-timeline>
      <el-timeline-item v-for="(msg,index) in msgMap" :key="index" :timestamp="index" placement="top">
        <el-card style="margin-bottom: 10px" v-for="item in msg" :key="item.id">
          <h4>{{ item.message }}</h4>
          <p style="font-size: 10px;float: right"><span style="color: rgb(251, 124, 161)">{{item.nickname}} </span>发表于<span style="color: #5a5e66;"> {{item.gmtCreate}}</span></p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
    <!-- 分页 -->
<!--    <el-pagination-->
<!--      :current-page="page"-->
<!--      :page-size="limit"-->
<!--      :page-sizes="[5, 10, 20, 30,40,50,100]"-->
<!--      :total="total"-->
<!--      style="padding: 30px 0; text-align: center"-->
<!--      layout="total, sizes, prev, pager, next, jumper"-->
<!--      @current-change="getAllMsgPage"-->
<!--      @size-change="changeSize"-->
<!--    />-->
    <el-backtop></el-backtop>

  </div>

</template>
<script>
import msgApi from "@/api/msg";

export default {
  data() {
    return {
      msgMap: {},
      page: 1, //当前页
      limit: 5, //每页显示的条数
      total: 0, //总记录数
      mymessage:"",
    };
  },
  created() {
    this.getAllMsg();
  },
  methods: {
    changeSize(size){
      console.log(size)
      this.limit = size
      this.getAllMsg(1)
    },
    getAllMsgPage(page=1) {
      this.page = page;
      msgApi.getAllMsgPage(this.page,this.limit).then(res => {
        console.log(this)
        this.msgMap = res.data.data.msgMap;
        this.total = res.data.data.total;
        console.log(this.msgMap)
      });
    },
    getAllMsg(){
      msgApi.getAllMsg().then(res => {
        console.log(this)
        this.msgMap = res.data.data.msgMap;
        // this.total = res.data.data.total;
        console.log(this.msgMap)
      });
    },

    sendMsg(){
      msgApi.sendMsg(this.mymessage).then(res=>{
        console.log(res)
        //提示
        this.$message({
          message: "留言成功",
          type: "success"
        });
        this.getAllMsg()
      })
    }
  },
};
</script>
