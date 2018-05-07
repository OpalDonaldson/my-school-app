const express = require('express');
const users = express.Router();
const User = require('../database/mongodatabase.js');
const cors = require('cors');

const bcrypt = require('bcrypt');

const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({dest: '../public/uploads/'});

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
      res.send('Error Occured')
      console.log(err)
    }
    console.log(userInfo.schoolname+ ' was added Successfully!');
  })
  res.send("Successful")  
});

users.post("/signin", (req, res)=>{
  let query = User.findOne({ email: req.body.email })
  console.log(req.body.email);
});

function encryptPassword(password){
  const hash = bcrypt.hashSync(password, saltRounds);
  return hash;
}
module.exports = users;
