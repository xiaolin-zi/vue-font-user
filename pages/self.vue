<template>
  <div style="width: 80%;margin: 50px auto">
    <el-tabs tab-position="left" >
    <el-tab-pane label="个人资料">
      <el-descriptions class="margin-top" :labelStyle="{width:'30%'}"
                       :contentStyle="{height:'132px'}"  border>
        <template slot="title">
          <el-button type="primary" size="small" @click="deleteAccount">注销账号</el-button>
          <el-button type="primary" size="small" @click="updateUserInfo">更新资料</el-button>
        </template>
        <el-descriptions-item :label-style="{width:'30%','vertical-align': 'middle'}">
          <template slot="label">
            <i class="el-icon-picture-outline"></i>
            <span>头像</span>
          </template>
          <div style="display: flex; align-items: flex-end;">
            <el-avatar shape="square" :size="100" fit="cover" :src="userInfo.avatar"></el-avatar>
            <el-upload
              class="upload-demo"
              action="http://localhost:8222/eduoss/fileoss"
              :limit="1"
              :before-remove="beforeRemove"
              :on-exceed="handleExceed"
              :on-success="handleSuccess"
            >
              <el-button style="margin-left: 10px"  type="primary">更换头像</el-button>
            </el-upload>
          </div>
        </el-descriptions-item>
      </el-descriptions>

      <el-descriptions class="margin-top" :labelStyle="{width: '30%'}"
                       :contentStyle="{height:'60px'}"   border>
        <el-descriptions-item >
          <template slot="label">
            <i class="el-icon-user"></i>
            <span>昵称</span>
          </template>
          <el-input v-model="userInfo.nickname" placeholder="请输入内容"></el-input>
        </el-descriptions-item>
      </el-descriptions>

      <el-descriptions class="margin-top" :labelStyle="{width: '30%'}"
                       :contentStyle="{height:'40px'}"   border>
        <el-descriptions-item >
          <template slot="label">
            <i class="el-icon-sugar"></i>
            <span>手机号</span>
          </template>
          <span>{{ userInfo.mobile }}</span>
        </el-descriptions-item>
      </el-descriptions>
      <el-descriptions class="margin-top" :labelStyle="{width: '30%'}"
                       :contentStyle="{height:'60px'}" border>
        <el-descriptions-item >
          <template slot="label">
            <i class="el-icon-dessert"></i>
            <span>性别</span>
          </template>
          <el-select v-model="userInfo.sex" value-key="value">
            <el-option label="男" :value="1"></el-option>
            <el-option label="女" :value="0"></el-option>
          </el-select>
        </el-descriptions-item>
      </el-descriptions>
      <el-descriptions class="margin-top" :labelStyle="{width: '30%'}"
                       :contentStyle="{height:'60px'}"  border>
        <el-descriptions-item >
          <template slot="label">
            <i class="el-icon-food"></i>
            <span>年龄</span>
          </template>
          <el-input v-model="userInfo.age" placeholder="请输入内容"></el-input>
        </el-descriptions-item>
      </el-descriptions>

      <el-descriptions class="margin-top" :labelStyle="{width: '30%'}"
                       :contentStyle="{height:'40px'}"   border>
        <el-descriptions-item >
          <template slot="label">
            <i class="el-icon-ice-cream"></i>
            <span>注册时间</span>
          </template>
          <span>{{ userInfo.gmtCreate }}</span>
        </el-descriptions-item>
      </el-descriptions>
      <el-descriptions class="margin-top" :labelStyle="{width: '30%'}"
                       :contentStyle="{height:'40px'}"  border>
        <el-descriptions-item >
          <template slot="label">
            <i class="el-icon-burger"></i>
            <span>更新时间</span>
          </template>
          <span>{{ userInfo.gmtModified }}</span>
        </el-descriptions-item>
      </el-descriptions>
    </el-tab-pane>
    <el-tab-pane label="我的订单">
      <el-table
        :data="orderInfo"
        style="width: 100%">
        <el-table-column
          prop="courseTitle"
          label="课程名"
          width="180">
        </el-table-column>

        <el-table-column label="课程封面">
          <template slot-scope="scope">
            <el-image
              style="width: 100px; height: 100px"
              :src="scope.row.courseCover"
              fit="fill"></el-image>
          </template>
        </el-table-column>

        <el-table-column
          prop="teacherName"
          label="课程讲师">
        </el-table-column>
        <el-table-column
          prop="totalFee"
          label="购买价格">
        </el-table-column>
        <el-table-column
          prop="payType"
          label="支付方式">
          <template slot-scope="scope">
            <span v-if="scope.row.payType === 1">支付宝</span>
            <span v-if="scope.row.payType==0">微信</span>
          </template>
        </el-table-column>

        <el-table-column
          prop="payType"
          label="支付状态">
          <template slot-scope="scope">
            <span style="color: #00bb29" v-if="scope.row.status === 1">已支付</span>
            <span style="color: #ea562e" v-if="scope.row.status==0">未支付</span>
          </template>
        </el-table-column>
        <el-table-column
          width="150"
          prop="gmtCreate"
          label="下单时间">
        </el-table-column>

        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button
              v-if="scope.row.status === 1"
              type="primary"
              size="mini"
              @click="toStudy(scope.$index, scope.row)">前往学习</el-button>
            <el-button
              style="background-color: #ea562e;border: none"
              v-if="scope.row.status === 0"
              type="primary"
              size="mini"
              @click="toPay(scope.$index, scope.row)">去支付</el-button>
            <el-button
              style="background-color: red;border: none"
              v-if="scope.row.status === 0"
              type="primary"
              size="mini"
              @click="toDelete(scope.$index, scope.row)">删除订单</el-button>

          </template>
        </el-table-column>
      </el-table>


      <!-- 分页 -->
      <el-pagination
        :current-page="page"
        :page-size="limit"
        :page-sizes="[4, 8, 12, 16,20,50,100]"
        :total="total"
        style="padding: 30px 0; text-align: center"
        layout="total, sizes, prev, pager, next, jumper"
        @current-change="getUserOrder"
        @size-change="changeSize"
      />
    </el-tab-pane>
    <el-tab-pane label="修改密码">
      <el-form ref="form"  label-width="80px">
        <el-form-item label="旧密码">
          <el-input v-model="oldPassword"></el-input>
        </el-form-item>
        <el-form-item label="新密码">
          <el-input  v-model="newPassword"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="updatePassword">更新</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>
<script>
// import ossApi from '@/api/oss'
import userApi from '@/api/user'
import cookie from "js-cookie";
export default {
  data() {
    return {
      page: 1,
      limit: 4,
      total: 0,

      oldPassword: '',
      newPassword: '',
      orderInfo: [],
      userInfo: {},
    }
  },
  created() {
    //获取用户信息
    this.getUserInfo();
  },
  methods: {
    //删除订单
    toDelete(index, row){
      this.$confirm('此操作将永久删除该订单, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        userApi.deleteOrder(row.orderNo).then(res => {
          if (res.data.success) {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.getUserOrder(1);
          }else{
            this.$message({
              type: 'error',
              message: '删除失败!'
            });
          }
        })
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
    getUserOrder(page=1){
      this.page = page;
      userApi.getUserOrderInfo(this.page,this.limit,this.userInfo.id).then(res => {
        if (res.data.success) {
          this.orderInfo = res.data.data.rows;
          console.log(res)
          this.total = res.data.data.total;
        }
      })
    },


    //修改密码
    updatePassword(){
      userApi.updatePassword(this.userInfo.id,this.oldPassword, this.newPassword).then(res => {
        console.log(res)
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
            cookie.remove("guli_ucenter", {
              domain: "localhost",
            });
            //提示
            this.$message({
              type: 'success',
              message: '用户信息已过期，请重新登录!'
            });
            //跳转到登录页面
            this.$router.push('/login');
          }, 3000)


        } else {
          this.$message({
            type: 'error',
            message: '修改失败,请检查旧密码是否正确!'
          });
        }
      })
    },

    //更新用户信息
    updateUserInfo(){
      userApi.updateUserInfo(this.userInfo).then(res => {
        // console.log(res)
        if (res.data.success) {
          this.$message({
            type: 'success',
            message: '更新成功!'
          });
          //更新cookie
          cookie.set("guli_ucenter", JSON.stringify(this.userInfo), {
            domain: "localhost",
          });
          //刷新页面
          window.location.reload();
        } else {
          this.$message({
            type: 'error',
            message: '更新失败!'
          });
        }
      })
    },
    //注销账号
    deleteAccount(){
      //提示用户
      this.$confirm('此操作将永久删除该账号, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        userApi.deleteAccount(this.userInfo.id).then(res => {
          console.log(res)
          if (res.data.success) {
            this.$message({
              type: 'success',
              message: '注销成功!'
            });
            this.$router.push('/login')
          } else {
            this.$message({
              type: 'error',
              message: '注销失败!'
            });
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消注销'
        });
      });
    },
    //获取用户信息
    getUserInfo(){
      userApi.getUserInfo().then(res => {
        // console.log(res.data.data)
        this.userInfo = res.data.data.userInfo
        //获取用户订单
        this.getUserOrder();
      })
    },

    //删除图片列表
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    },
    //上传图片数量限制
    handleExceed(files, fileList) {
      this.$message.warning(`只能上传一个图片`)
    },
    //上传成功
    handleSuccess(response, file) {
      this.$message.success('上传成功')
      // console.log(response)
      this.userInfo.avatar = response.data.url
    },

    toStudy(index, row) {
      console.log(index, row);
      this.$router.push('/course/' + row.courseId)
    },
    toPay(index, row) {
      console.log(index, row);
      this.$router.push('/pay/' + row.orderNo)
    },
  }
}
</script>
