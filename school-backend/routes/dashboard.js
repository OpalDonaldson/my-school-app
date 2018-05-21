const express = require('express');
const dashboard = express.Router();
const db = require('../database/mongodatabase');
const passport = require('../authmiddleware/authTwo.js');
const cors = require('cors');

// ::::: ALL GET REQUESTS ::::: //

dashboard.get('/', (req, res)=>{
  res.status(200)
  res.send({ page: "Home Page" });
});

dashboard.get('/overview', (req, res)=>{
  console.log("Overview Success");
  res.send({ "page": "Overview" });
});

dashboard.get('/datadetails', (req, res)=>{
  console.log("Datadetails Success");
  res.send({ "page": "Date & Details" });
});

dashboard.get('/allactivities', (req, res)=>{
  console.log("Allactivities Success");
  res.send({ "page": "All Activities" });
});

dashboard.get('/resourcesarea', (req, res)=>{
  console.log("Resourcesarea Successful");
  res.send({ "page": "Resources Area" });
});

module.exports = dashboard;
