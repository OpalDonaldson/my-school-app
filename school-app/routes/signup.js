var express = require('express');
var db = require('../models/school.js');
var bcrypt = require('bcrypt');
var router = express.Router();

router.get('/signup', (req, res)=>{
  res.render('signup', { title: 'Sign-up'});
});

module.exports = router;
