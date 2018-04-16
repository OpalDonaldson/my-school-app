const mysql = require('mysql');

const db = mysql.createPool({
  connectionLimit: 100,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'School',
  port: '3306',
  debug: false,
  multipleStatements: true
});

module.exports.db = db;
