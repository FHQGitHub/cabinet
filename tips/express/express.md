# express play
## 先是安装express
- `npm install express -g`
- `npm install express-generator -g`
## 创建express项目，初始化
- `md NodeJSProject     //在这里md是创建新的文件并命名`
- `cd NodeJSProject     //进去刚刚创建的文件夹`
- `md expressdemo       //根据跟人习惯，此步骤可以不操作直接穿件app文件夹，“app”文件名也是自定义哦`
- `cd expressdemo`
- `express app      //此处app为项目名称，可自定义`
- `cd app`
- `npm install //此处是提醒我们可以进入项目根目录，执行npm install 安装依赖模块`
- `npm start  //此处是提醒我们可以进入项目根目录，如何启动服务器`
## 这就是建完项目之后的项目目录
![image](https://github.com/FHQGitHub/cabinet/blob/master/tips/express/images/1.png)
- bin：是用来启动应用（服务器） ，其中www.js 文件里面可以修改启动的端口
- node_modules：是依赖的模块 
- public：是存放静态资源的 
- routes：路由（可以问问度娘，了解得更加具体）主要是确定应用程序如何响应对特定端点的客户机发起的请求，包含一个URI（标识、定位任何资源的字符串）和一个特定的HTTP请求方法（如：post、axios等） 
- views：模板文件所在的目录，可以自定义封装一些组件 
- app.js：该程序是main.js文件以及服务器的启动入口
## 启动了服务器之后
终端会输出node ./bin/www,访问localhost:3000就会有express的初始页面出现
## 如何来使用这个框架呢？
### 先来看app.js吧，app.js原有的一些代码不要改变，和自己手动写的代码相关的有
这里是把user.js和index.js等等在routes里面的文件.....都require进来
```
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var resistanceRouter=require('./routes/resistance');
var inductanceRouter=require('./routes/inductance');
var capacitanceRouter=require('./routes/capacitance');
```
然后再app.use它们，注意这里设置的路径是在**浏览器地址栏**里访问的路径
```
app.use('/index', indexRouter);
app.use('/users', usersRouter);//这个'user'路径，即在浏览器里输入http://localhost:3000/users ,就会访问到user.js渲染的页面
app.use('/resistance',resistanceRouter);
app.use('/inductance',inductanceRouter);
app.use('/capacitance',capacitanceRouter);
```
### 再来看routes文件夹里面的js文件
这里面的user.js文件
[!images](https://github.com/FHQGitHub/cabinet/blob/master/tips/express/images/2.png)


