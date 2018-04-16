const express = require('express');
const user = express.Router();
const db = require('../database/database');
const cors = require('cors');
const jwt = require('jsonwebtoken');

user.post("/login", (req, res)=>{
  console.log(req.body)
  console.log("Logged in");
  res.send("login");
});

user.post('/signup', (req, res)=>{
  console.log("registered");
  res.send("registered");
});


module.exports = user;
