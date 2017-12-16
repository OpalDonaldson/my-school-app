var express = require('express');
var router = express.Router();

router.get('/register', (req, res)=>{
  res.render('register', { title: 'Register'});
});
router.post('/registerusers', (req, res)=>{
  console.log(req.params.fname);
  res.send(req.params.fname);
})
module.exports = router;
