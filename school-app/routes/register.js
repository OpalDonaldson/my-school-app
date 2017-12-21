var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();

router.get('/register', (req, res)=>{
  res.render('register', { title: 'Register'});
});
router.post('/registerusers', (req, res)=>{
  console.log(req);
  res.send(req.params);
})

module.exports = router;
