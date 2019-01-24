<template>
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
   <el-button style="float: right; padding: 3px 0;margin:10px;color:aliceblue" type="text">LOGINNNN</el-button>
  </div>
</el-card>
</template>

<style>
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