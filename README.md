## 器材柜

2019年1月23日开始踩坑
**2019/2/5阿毛**
 这个views是新建express项目时自动生成的，到时候别忘了去app.js里面
 //让页面变成ejs模板,这个要看前端页面用什么，到时候不能忘了改啊
 app.set('views',path.join(__dirname, 'views'));
 app.set('view engine','ejs');
 这段代码可能要改一改
 我生成的这个views文件夹到时候应该也可以删了