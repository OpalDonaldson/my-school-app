const express = require('express');
const users = express.Router();
const db = require('../database/database.js');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({storage});

const saltRounds = 10;
let token;
users.use(cors());

users.post('/signup', upload.single('avatar'), (req, res)=>{
  const userInfo = JSON.parse(req.body.userInfo);
  delete userInfo.avatar;
  const today = new Date();
  userInfo.created = today.toLocaleString();
  const appData = {
    'error': 1,
    'data': ''
  }
  console.log(db)
  /*
  db.connect();
  db.query('SELECT * FROM `admin_users` WHERE `firstname` = ?',['Test'],(error, results, fields)=>{
    if(error){
      console.log(error);
    }
    else{
      console.log(results);
      console.log(fields);
    }
  })
  db.end();
  */
});

users.post("/signin", (req, res)=>{
  db.query('SELECT * FROM `admin_users` WHERE `firstname` = ?', ['Test'],(err, results, fields)=>{
    if(err){
      console.log(err)
    }
    else{
      console.log(results)
      console.log(fields);
    }
  });
});

module.exports = users;
