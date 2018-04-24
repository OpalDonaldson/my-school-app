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
  console.log("success 1");
  db.getConnection((err, connection)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log("success 2 ");
    }
  })
  console.log("success 3");
});

users.post("/signin", (req, res)=>{
  console.log(req.body);
  res.send("login");
});

module.exports = users;
