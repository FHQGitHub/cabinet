var mysql = require('mysql');

var pool = mysql.createPool({
      host     : '118.25.136.149',
      user     : 'root',
      password : 'myn13567168626',
      database : 'cabinet'
      
    });

exports.query = function(sql,data){
    pool.getConnection(function(err,connection){
        connection.query(sql,function(err,result){
              data(err,result);
              connection.release();
        });
    });
}