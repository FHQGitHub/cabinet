<template>
<el-row>
  <el-col>
    <el-card class='abc'>
      <img class="image" v-bind:src="this.value">
      <div style="padding: 14px;">
        <span>{{info}}</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button" @click="cardClick()">查看</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
</template>

<script>
export default {
    name:'ccard',
    props:{
      info:String,
      value:String
    },
    data:()=>({  
      currentDate: new Date()
    }),
    methods:{
      async cardClick(){
      if(this.info=="电阻") {this.$router.push('/resistance');}
      else if(this.info=="电容") {this.$router.push('/capatance');}
      else if(this.info=="电感") {this.$router.push('/inductance');}
  }
  }
}
</script>

<style>
   .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .abc{
    width: 320px;
    margin: 6px;
    position:relative;
    top:150px;
  }

</style>
