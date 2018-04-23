const express = require('express');
const users = express.Router();
const db = require('../database/database');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({storage});

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
      console.log(`This is the error ${err}`);
    }
    console.log(connection);
  })
});

users.post("/signin", (req, res)=>{
  console.log(req.body);
  res.send("login");
});

module.exports = users;
