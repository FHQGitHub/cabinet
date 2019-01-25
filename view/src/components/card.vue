<template>
<el-row>
  <el-col :span="6" v-for="option in options" :key="option" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px',margin: '6px'}" class='abc'>
      <img class="image" v-bind:src="option.value">
      <div style="padding: 14px;">
        <span>{{option.text}}</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">查看</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
</template>

<script>
export default {
    name:'ccard',
    data:()=>({  
      currentDate: new Date(),
      options: [
        { text: '电阻', value: 'resistance.jpg'},
        { text: '电感', value: 'inductance.jpg'},
        { text: '电容', value: 'capactance.jpg'},
      ]
    })
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
    display:inline-block;
  }

</style>
