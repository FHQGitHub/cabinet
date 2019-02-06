<template>
  <div id="app">
    <router-view></router-view>
    <navmenu/>
  </div>
</template>

<script>
import navmenu from "@/components/navmenu1.vue";

export default {
  name: "navment",
  components: {
    navmenu
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
</style>
