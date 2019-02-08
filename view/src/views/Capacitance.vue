<template>
  <div>
    <h1>This is capactance page</h1>
    <listt v-bind:info="this.list"></listt>
  </div>
</template>

<script>
import listt from "@/components/list.vue";

export default {
  name: "capacitance",
  components: {
    listt
  },
  data: () => ({
    list: []
  }),
  mounted: async function() {
    let data=await this.$dataSource.Capacitance()
    this.list=data.data
    //从cookie获取登录信息
    if (this.$cookie.get("user_id") != "") {
      this.$store.commit(
        "login",
        JSON.stringify({
          user_id: this.$cookie.get("user_id"),
          user_type: this.$cookie.get("user_password")
        })
      );
    }
    //从state获取用户信息
    if (this.$store.state.user_id == "") {
      this.$router.push("/login");
    }
  }
};
</script>