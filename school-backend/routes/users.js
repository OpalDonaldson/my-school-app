const express = require('express');
const users = express.Router();
const User = require('../database/mongodatabase.js');
const cors = require('cors');

const bcrypt = require('bcrypt');

const multer = require("multer");
const storage = multer.memoryStorage();
const multerConfig = {
  storage: multer.diskStorage({
    destination: (req, file, next)=>{
      next(null, './public')
    },
    filename: (req, file, next)=>{
      const userInfo = JSON.parse(req.body.userInfo);
      const ext = file.mimetype.split('/')[1];
      
      next(null, userInfo.schoolname + '.'+ext)  
    }
  })
};

const saltRounds = 10;
let token;
users.use(cors());

users.post('/signup', multer(multerConfig).single('avatar'), (req, res)=>{
  const userInfo = jsonParser(req.body.userInfo);
  userInfo.avatar = req.file;
  const today = new Date();
  userInfo.created = today.toLocaleString();

  const adminUser = new User(userInfo);
  adminUser.save((err)=>{
    if(err){
      console.log(err[BulkWriteError])
    }else{
      console.log(userInfo.schoolname+ ' was added Successfully!');
    }    
  })
  res.send("Successful")
});

users.post("/signin", (req, res)=>{
  console.log(req.body);
  let query = User.findOne({ email: req.body.email })
});

function jsonParser(toBeParsed){
  return JSON.parse(toBeParsed);
}

function encryptPassword(password){
  const hash = bcrypt.hashSync(password, saltRounds);
  return hash;
}
module.exports = users;
