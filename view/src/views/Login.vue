<template>
<div class="bg">
<el-card class="box-card">
    <div slot="header" class="clearfix">
    <span>登录</span>
    </div>
  <div class="text item">
    <el-input v-model="input" placeholder="请输入账号"></el-input>
  </div>
  <div>
    <el-input v-model="input" type="password" placeholder="请输入密码"></el-input>
  </div>
  <div>
   <el-button class="but" type="text" @click="auth()">LOGIN</el-button>
  </div>
</el-card>
</div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loading: false,
      showToast:false,
      login: {
        id: "",
        password: "",
        type:""
      }
    };
  },
  methods: {
    async auth(){
        this.$router.push("/search");
      }
    }
};
</script>


<style>
  .but{
    float: right;
    padding: 3px 0;
    margin:10px;
    color:aliceblue;
  }
  .bg{
    background:url(../assets/yun.jpg);
    background-size: cover;
    min-height: 100vh;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }

  .clearfix {
    color: aliceblue
  }

  .box-card {
    width: 360px;
    margin: auto;
    position:relative;
    top:150px;
    background: #112422;
  }</style>