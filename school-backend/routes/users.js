const express = require('express');
const users = express.Router();
const db = require('../database/mongodatabase.js');
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


  console.log(userInfo)
});

users.post("/signin", (req, res)=>{
  console.log(req.body)
});

function encryptPassword(password){
  const hash = bcrypt.hashSync(password, saltRounds);
  return hash;
}
module.exports = users;
