const express = require('express');
const dashboard = express.Router();
const db = require('../database/mongodatabase');
const passport = require('../authmiddleware/authTwo.js');
const cors = require('cors');

/*
dashboard.get("/", (req, res)=>{
  res.send("Success");
});*/

dashboard.get('/', passport.authenticate('jwt', { session: false }), (req, res)=>{
  console.log("req");
  console.log("res");
  res.send({ "name": "Ronique" });
});

dashboard.get('/overview', passport.authenticate('jwt', { session: false }), (req, res)=>{
  console.log("Overview Success");
  res.send({ "name": "Ronique" });
});

dashboard.get('/datadetails', passport.authenticate('jwt', { session: false }), (req, res)=>{
  console.log("Datadetails Success");
  res.send({ "name": "Ronique" });
});

dashboard.get('/allactivities', passport.authenticate('jwt', { session: false }), (req, res)=>{
  console.log("Allactivities Success");
  res.send({ "name": "Ronique" });
});

dashboard.get('/resourcesarea', passport.authenticate('jwt', { session: false }), (req, res)=>{
  console.log("Resourcesarea Successful");
  res.send({ "name": "Ronique" });
});

module.exports = dashboard;
