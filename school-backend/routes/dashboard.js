const express = require('express');
const dashboard = express.Router();
const db = require('../database/mongodatabase');
const cors = require('cors');


dashboard.get("/", (req, res)=>{
  res.send("Success");
});

dashboard.get('/dashboard', (req, res)=>{

  res.send("Success dashboard");
});



module.exports = dashboard;
