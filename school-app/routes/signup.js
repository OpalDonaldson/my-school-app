var express = require('express');
var bodyParser = require('body-parser');
var db = require('../models/school.js');
var bcrypt = require('bcrypt');
var router = express.Router();

router.get('/signup', (req, res)=>{
  res.render('signup', { title: 'Sign-up'});
});
router.post('/signup', (req, res)=>{
  console.log(res.body);
  res.send(res);
})
module.exports = router;
