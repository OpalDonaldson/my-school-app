const express = require('express');
const users = express.Router();
const User = require('../database/mongodatabase.js');
const cors = require('cors');

const bcrypt = require('bcrypt');

const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({storage});

const saltRounds = 10;
let token;
users.use(cors());

users.post('/signup', upload.single('avatar'), (req, res)=>{
  const userInfo = JSON.parse(req.body.userInfo);
  userInfo.avatar = req.file;
  const today = new Date();
  userInfo.created = today.toLocaleString();

  const adminUser = new User(userInfo);
  adminUser.save((err)=>{
    if(err){
      console.log(err)
    }
    console.log(userInfo.email + ' was added Successfully!');
  })
});

users.post("/signin", (req, res)=>{
  console.log(req.body)
});

function encryptPassword(password){
  const hash = bcrypt.hashSync(password, saltRounds);
  return hash;
}
module.exports = users;
