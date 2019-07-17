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
这里就是执行了get，即直接从数据库里面取东西，其实看一看这个GitHub库里面的代码应该就会知道该如何来写get和post了
![images](https://github.com/FHQGitHub/cabinet/blob/master/tips/express/images/2.png)
### js中mysql模块的使用
其实很简单，只要
`npm install mysql`一下就行了，然后在配置文件里面写一写，require一下

### 关于mysql的远程连接
数据库用的自然是mysql，用Navicat连接
> 装mysql就老套路几个命令行，其实连接本地也没遇到啥大问题，但是远程连接ubuntu上的mysql老遇到各种问题，我都佛了，以下为解决问题的过程中的记录。

出现问题之后网上就有一些回答说要把配置文件里的一行代码改了
原来
```
bind-address		= 127.0.0.1
```
现在（即确保允许所有的IP都能连接数据库）
```
bind-address		= 0.0.0.0
```
另外还要加上一行
```
skip-name-resolve
```
还要在mysql中授权,‘%’代表all host，这里的123456是密码，我有可能就是没有注意到这个密码然后后来一直把老密码当成新密码一直登不上。
```
grant all privileges on . to root@’%’ identified by ‘123456’;
```
刷新
```
flush privileges;
```

但是呢，这个过程中我又遇到一些问题,就是更改配置文件的时候因为是连接着所有的文件夹是root权限，所以还要更改一下权限,我这里直接把mysql下的所有权全部给了ubuntu（简单粗暴又省事儿），注意这里一定要用sudo
```
 sudo chown -R ubuntu /ect/mysql
```
改完权限就可以愉快的去改配置文件啦啦
我还遇到的一个问题就是我连接的时候密码的问题
![从这张图可以看出来](https://img-blog.csdnimg.cn/20190124195023463.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQwOTA5OTQw,size_16,color_FFFFFF,t_70)
输入命令行，从这张图片可以看出来，有两个root用户，一个的权限是localhost。一个是所有，我一开始有可能就是授权的时候把这两个用户的密码搞混了所以一直都没有连接上。
那该怎么办呢，我这个记性老忘密码唉唉唉，不如把两个密码都改成一样的一了百了。
于是我又开始百度了，发现有一种做法是这样的
```
update user set password=password('新密码') where user='root'; 
```
但是这样会有问题，会报错
 ERROR 1054 (42S22): Unknown column 'password' in 'field list'
但是不慌，换一种
```
update user set authentication_string=password('新密码') where user='root'; 


