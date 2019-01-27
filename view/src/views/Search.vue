<template>
<div class="search">
    <div>
    <searchlan/>
    </div>
    <div>
    <el-row>
    <el-col :span="6" v-for="option in options" :offset="index > 0 ? 2 : 0">
    <ccard v-bind:info="option.text" v-bind:value="option.value"></ccard>
    </el-col>
    </el-row>
    </div>
</div>
</template>

<script>
import ccard from '@/components/card.vue'
import searchlan from '@/components/search.vue'

export default {
  name: 'search',
  components: {
    ccard,
    searchlan
  },
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
</style>