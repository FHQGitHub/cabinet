<template>
  <div class="hello">
    <router-link to="/cabinet">{{ msg }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'cabinet',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #030000;
  font-size: 30px;
  text-decoration:none;
}
</style>
