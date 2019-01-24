<template>
  <div class="home">
    <img alt="FHQ logo" src="../assets/1O_logo.png">
    <cabinet msg="器材柜"/>
  </div>
</template>

<script>
// @ is an alias to /src
import cabinet from '@/components/cabinet.vue'

export default {
  name: 'home',
  components: {
    cabinet
  }
}
</script>
