var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();

router.get('/signup', (req, res)=>{
  res.render('signup', { title: 'Sign-up'});
});
router.post('/signup', (req, res)=>{
  bcrypt.hash(req.body.password, 10, (err, hash)=>{
    if(err) throw err;
    console.log(hash);
  })
  console.log(req);
  res.send(req.params);
})


module.exports = router;
