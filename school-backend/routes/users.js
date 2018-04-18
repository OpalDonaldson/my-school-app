const express = require('express');
const users = express.Router();
const db = require('../database/database');
const cors = require('cors');
const jwt = require('jsonwebtoken');

let token;
users.use(cors());

users.get('/pop', (req, res)=>{
  res.send("Dashboard");
})

users.post('/signup', (req, res)=>{
  console.log(req.body);
  res.send("success")
});

users.post("/signin", (req, res)=>{
  console.log(req.body);
  res.send("login");
});

module.exports = users;
