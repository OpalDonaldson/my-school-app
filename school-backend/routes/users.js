const express = require('express');
const users = express.Router();
const db = require('../database/database');
const cors = require('cors');
const jwt = require('jsonwebtoken');

let token;
users.use(cors());


users.post('/signup', (req, res)=>{
  let today = new Date();
  let appData = {
    'error': 1,
    'data': ''
  };
  let userData = {
    'firstname': req.body.firstname
  }
  console.log(userData);
});

users.post("/signin", (req, res)=>{
  token = "Success token";
  console.log(req.body);
  res.send("login");
});

module.exports = users;
