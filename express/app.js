var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');//这里是把user.js和index.js都require进来
var usersRouter = require('./routes/users');//
var resistanceRouter=require('./routes/resistance');
var inductanceRouter=require('./routes/inductance');
var capacitanceRouter=require('./routes/capacitance');

var app = express();
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  next();
});


// // view engine setup
//这里是渲染前端页面用的jade
// app.set('views', path.join(__dirname, 'views'));
 //app.set('view engine', 'jade');
 
 //让页面变成ejs模板,这个要看前端页面用什么，到时候不能忘了改啊
 app.set('views',path.join(__dirname, 'views'));
 app.set('view engine','ejs');
 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', indexRouter);
app.use('/users', usersRouter);//这个'user'路径，即在浏览器里输入http://localhost:3000/users ,就会访问到user.js渲染的页面
app.use('/resistance',resistanceRouter);
app.use('/inductance',inductanceRouter);
app.use('/capacitance',capacitanceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




module.exports = app;
