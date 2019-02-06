var express = require('express');
var router = express.Router();
var sql = require('../conf/mysql.js');

router.get('/',function(req,res){
 sql.query('select sid,pname,value,typeid,num,price from product join component on product.id=component.sid where sid=3',function(err,result){
  if (err) {
    res.send({
      code :0,
      info:"查询出现错误"
    })
 }else{
    res.send({
      code: 1,
      data: JSON.stringify(result)
    });
   console.log(result);
 }
 });
});
module.exports = router;



