var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'schooltest'
});

connection.connect((err)=>{
  if(err) throw errow;
  console.log("connected DB")
})

connection.query({
  sql: 'SELECT * FROM `schooltest` WHERE `fname` = ronique'
}, (err, results)=>{
  if(err) throw err;
  console.log(results);
});

connection.end();
