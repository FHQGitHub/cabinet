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
- bin：是用来启动应用（服务器） 
- node_modules：是依赖的模块 
- public：是存放静态资源的 
- routes：路由（可以问问度娘，了解得更加具体）主要是确定应用程序如何响应对特定端点的客户机发起的请求，包含一个URI（标识、定位任何资源的字符串）和一个特定的HTTP请求方法（如：post、axios等） 
- views：模板文件所在的目录，可以自定义封装一些组件 
- app.js：该程序是main.js文件以及服务器的启动入口

