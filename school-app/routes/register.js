var express = require('express');
var router = express.Router();

router.get('/register', (req, res)=>{
  res.render('register', { title: 'Register'});
});

module.exports = router;
