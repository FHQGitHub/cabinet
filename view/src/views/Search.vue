<template>
<div class="search">
    <div>
    <searchlan/>
    </div>
    <div>
    <ccard msg="电阻"></ccard>
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
  methods: {
    async dianzu(){
        this.$router.push("/resistance");
     }
  }
}
</script>

<style>
</style>