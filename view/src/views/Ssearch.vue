 <template>
  <div>
    <h1>This is search page</h1>
    <el-table :data="this.slist" border style="width:71%;margin:auto">
      <el-table-column prop="sid" label="编号" width="180"></el-table-column>
      <el-table-column prop="pname" label="名称" width="180"></el-table-column>
      <el-table-column prop="value" label="值" width="180"></el-table-column>
      <el-table-column prop="typeid" label="型号" width="180"></el-table-column>
      <el-table-column prop="num" label="数量" width="180"></el-table-column>
      <el-table-column prop="price" label="价格" width="180"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    input: {
      type: String
    },
    select: {
      type: String
    }
  },
  data(){
    return{
      slist:[]
    }
  },
  created() {
    let self = this;
    self.getParams();
  },
  watch: {
    $route: "getParams"
  },
  methods: {
    getParams() {
      this.input = this.$route.query.input;
      this.select = this.$route.query.select;
      // 如果是params 传参，那就是this.$route.params.site
      上面就可以获取到传递的参数了;
    }
  },
  mounted: async function() {
    let data = await this.$dataSource.Search(this.input, this.select);
    this.slist = data;
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