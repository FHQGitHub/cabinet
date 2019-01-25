  <template>
  <el-table
    :data="tableData"
    border
    style="width:59%;margin:auto">
    <el-table-column
      prop="date"
      label="编号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="型号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="num"
      label="库存数量"
      width="180">
    </el-table-column>
    <el-table-column
      prop="price"
      label="单价"
      width="180">
    </el-table-column>
     <el-table-column
      prop="address"
      label="所在位置"
      width="180">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '1',
          name: 'aptx4869',
          num: '200',
          price:123,
          address:'(4,5)'
        }, {
          date: '2',
          name: 'aptx4869',
          num: '200',
          price:123,
          address:'(4,5)'
        }, {
          date: '3',
          name: 'aptx4869',
          num: '200',
          price:123,
          address:'(4,5)'
        }, {
          date: '4',
          name: 'aptx4869',
          num: '200',
          price:123,
          address:'(4,5)'
        }]
      }
    }
  }
</script>