<template>
<div class='cs'>
  <el-input placeholder="请输入型号" v-model="input5" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="请选择">
      <el-option label="电容" value="1"></el-option>
      <el-option label="电阻" value="2"></el-option>
      <el-option label="电感" value="3"></el-option>
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
      input3: '',
      input4: '',
      input5: '',
      select: ''
    }
  },
  methods:{
      async auth(){
        this.$router.push("/resistance");
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
