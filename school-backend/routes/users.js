const express = require('express');
const users = express.Router();
const User = require('../database/mongodatabase.js');
const passport = require('../authmiddleware/auth.js');
const jwt = require('jsonwebtoken');
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
users.use(cors());

// ::::: SIGNUP ::::: //

users.post('/signup', multer(multerConfig).single('avatar'), (req, res)=>{
  
  let userInfo = JSON.parse(req.body.userInfo);
  userInfo.avatar = req.file;
  let today = new Date();
  userInfo.created = today.toLocaleString();
  userInfo.password = bcrypt.hashSync(userInfo.password, saltRounds);
  
  const adminUser = new User(userInfo);
  adminUser.save((err)=>{
    if(err){
      console.log(err.message)
      res.status(403).jsonp({ "error" : err.message })
    }else if(!err){
      console.log(userInfo.schoolname+ ' was added Successfully!');
      res.send("Request Sent")
    }    
  })
    
});

//  :::::: SIGNIN :::::: //

users.post("/signin", passport.authenticate('local'), (req, res)=>{
  User.findOne({ email: req.body.email }, function (err, user) {
    if(err){ 
      console.log(err);
    }
    if(user){ 
      let tokenSigned =  jwt.sign({id: user._id}, "4mm0n1qu3!", { expiresIn: 86400});
      return res.status(200).json({ token: tokenSigned }); 
     }    
  });
   
});

function encryptPassword(password){
  const hash = bcrypt.hashSync(password, saltRounds);
  return hash;
}

module.exports = users;
