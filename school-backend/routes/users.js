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
  console.log(req.body);
  console.log(req.file);
  res.send('Successful post');
});

users.post("/signin", (req, res)=>{
  console.log(req.body);
  res.send("login");
});

module.exports = users;
