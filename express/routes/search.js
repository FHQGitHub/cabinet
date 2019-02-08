var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var sql = require('../conf/mysql.js');

router.post('/',function(req,res){
  var pname=req.body.pname;
  var typeid=req.body.typeid;
  console.log('器件名称：'+pname);
  console.log('型号：'+typeid);
  sql.query(`select sid,pname,value,typeid,num,price from product join component on product.id=component.sid where typeid="${typeid}"and pname="${pname}"`,function(err,result){
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
