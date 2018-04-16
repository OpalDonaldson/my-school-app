const express = require('express');
const dashboard = express.Router();
const db = require('../database/database');
const cors = require('cors');
const jwt = require('jsonwebtoken');

dashboard.get("/", (req, res)=>{
  res.send("Success");
});

dashboard.get('/dashboard', (req, res)=>{
  
  res.send("Success dashboard isses");
});



module.exports = dashboard;
