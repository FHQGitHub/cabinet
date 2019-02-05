var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var sql = require('../conf/mysql.js');

// router.get('/',function(req,res){
  
//   res.render('index',{title:"请输入账号密码进行登录！"});
//   console.log("success1");
// }); 
//登录代码
router.post('/login',function(req,res){
  var account=req.body.account;
  var password=req.body.password;
  console.log('账号：'+account);
  console.log('密码：'+password);
  sql.query('select * from user',function(err,result){
    if (err) {
        res.send("出现错误，无返回值")
      //res.render('capacitance',{title:"电容列表无返回值",datas:[]});//这行是用ejs模板时把内容渲染到前端页面上，哦豁
    }else{  
      console.log(result);
      console.log(result[0].account);
      var flag=0;
      for(i=0;i<result.length;i++){
          if(result[i].account==account&&result[i].password==password){
              flag=1;
              res.send("登陆成功！");
          }
      }
      if(flag==0){
        res.send("登录失败！");
      }
    }
  });
  //之前设的假代码登录
  // if(account=='admin' && password=='123')
  // {
  //   res.send({title:"登陆成功！"});
  // }
  // else
  // res.send({title:"登录失败！"});
}); 


module.exports = router;
