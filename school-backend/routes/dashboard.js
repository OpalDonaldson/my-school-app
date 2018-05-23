const express = require('express');
const dashboard = express.Router();
const db = require('../database/mongodatabase');
const passport = require('../authmiddleware/authTwo.js');
const cors = require('cors');

// ::::: ALL GET REQUESTS ::::: //

dashboard.get('/', (req, res)=>{
  res.status(200).send({ page: "Home Page" });
});

dashboard.get('/overview', (req, res)=>{
  res.status(200).send({ "page": "Overview" });
});

dashboard.get('/datadetails', (req, res)=>{
  res.status(200).send({ "page": "Date & Details" });
});

dashboard.get('/allactivities', (req, res)=>{
  res.status(200).send({ "page": "All Activities" });
});

dashboard.get('/resourcesarea', (req, res)=>{
  res.status(200).send({ "page": "Resources Area" });
});

module.exports = dashboard;
