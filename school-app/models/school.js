var express = require('express');
var mysql = require('mysql')

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'schoolproject'
});

module.exports = db;
