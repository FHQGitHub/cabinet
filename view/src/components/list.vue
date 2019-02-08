  <template>
  <el-table :data="this.info" border style="width:71%;margin:auto">
    <el-table-column prop="sid" label="编号" width="180"></el-table-column>
    <el-table-column prop="pname" label="名称" width="180"></el-table-column>
    <el-table-column prop="value" label="值" width="180"></el-table-column>
    <el-table-column prop="typeid" label="型号" width="180"></el-table-column>
    <el-table-column prop="num" label="数量" width="180"></el-table-column>
    <el-table-column prop="price" label="价格" width="180"></el-table-column>
  </el-table>
</template>

<script>
  export default {
    name:"listt",
    props: {
      info: {
        type: Array
      }
  },
  data() {
    return {
       search:this.info
    }
 } 
}
</script>