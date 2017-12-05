var express = require('express');
var router = express.Router();

router.get('/allactivities', (req, res)=>{
  res.send("all-activities");
});

module.exports = router;
