var express = require('express');
var router = express.Router();

router.get('/register', (req, res)=>{
  res.send("register");
});

module.exports = router;
