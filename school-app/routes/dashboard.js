var express = require('express');
var router = express.Router();

router.get('/dashboard', (req, res)=>{
  res.send("dashboard");
});

module.exports = router;
