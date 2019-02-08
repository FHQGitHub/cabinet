var express = require('express');
var router = express.Router();
var sql = require('../conf/mysql.js');

router.get('/',function(req,res){
 sql.query('select sid,pname,value,typeid,num,price from product join component on product.id=component.sid where sid=1',function(err,result){
  //  if (err) {
  //    res.render('resistance',{title:"电阻列表无返回值",datas:[]});
  //  }else{
  //    res.render('resistance',{title:"电阻列表有返回值",datas:result});
  //    console.log(result);
  //  }
      if (err) {
        res.send({
          code :0,
          info:"查询出现错误"  
        })
    }else{
      res.send( JSON.stringify(result));
      console.log(result);
    }
 });
});


// 增加用户


module.exports = router;



