<template>
<div class='cs'>
  <el-input placeholder="请输入型号" v-model="input" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="请选择">
      <el-option label="电容" value="电容"></el-option>
      <el-option label="电阻" value="电阻"></el-option>
      <el-option label="电感" value="电感"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search" @click="auth()"></el-button>
  </el-input>
</div>
</template>

<script>
export default {
  name:'searchlan',
  data() {
    return {
      input: '',
      select: ''
    }
  },
  methods:{
      async auth(){
        this.$router.push({
          path:"/ssearch",
          query:{
            input:this.input,
            select:this.select
          }
        });
      }
  }

}
</script>

<style>
  .cs{
      width: 600px;
      margin-left: 50%;
  }
  .el-select .el-input {
    width: 100px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
