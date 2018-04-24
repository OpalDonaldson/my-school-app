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
  db.getConnection((err, connection)=>{
    if(err){
      appData['error'] = 1;
      appData['data'] = 'Internal Server Error';
      res.status(500).json(appData);
    }
    else{
      userInfo.password = encryptPassword(userInfo.password)
      connection.query('INSERT INTO `admin_users` SET ?', userInfo, (err, rows, fields)=>{
        if(!err){
          appData['error'] = 0;
          appData['data'] = 'User registered successfully!';
          console.log(rows);
          res.status(201).json(appData)
        }
        else{
          appData['data'] = 'Error Occured!';
          console.log('There was an error '+err);
          res.status(400).json(appData);
        }
      });
      connection.release();
    }
  })
  console.log(userInfo)
});

users.post("/signin", (req, res)=>{
  console.log(req.body.email)
});

function encryptPassword(password){
  const hash = bcrypt.hashSync(password, saltRounds);
  return hash;
}
module.exports = users;
