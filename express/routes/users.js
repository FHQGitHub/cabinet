 var express = require('express');
 var router = express.Router();
 var sql = require('../conf/mysql.js');
//查询所有用户信息
 router.get('/',function(req,res){
  sql.query('select * from user',function(err,result){
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

 /* GET users listing. */
  router.get('/try', function(req, res, next) {
        res.render('hsr',{title:'韩世容这个傻逼'});
  });

 // 增加用户


 module.exports = router;



