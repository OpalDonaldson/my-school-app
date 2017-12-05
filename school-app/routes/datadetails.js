var express = require('express');
var mysql = require('mysql');
var router = express.Router();

  const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '09eoy0E72BjXmJLy',
    database: 'schooltest'
  });
  db.connect((err)=>{
    if(err){
      throw err;
    }
    console.log("Database connected");
  });




router.get("/datadetails", (req, res)=>{
  let mysql = db.query('SELECT * FROM ``')
  res.send("datadetails");
})

module.exports = router;
