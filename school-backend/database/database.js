const mysql = require('mysql');

const db = mysql.createPool({
  connectionLimit: 100,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'School'
});

module.exports.db = db;
