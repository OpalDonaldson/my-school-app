var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  port     : '8888',
  password : '123456',
  database : 'schooltest'
});

connection.connect()

connection.query({
  sql: 'SELECT * FROM `schooltest` WHERE `fname` = ronique'
}, (err, results)=>{
  if(err) throw err;
  console.log(results);
});

connection.end();
