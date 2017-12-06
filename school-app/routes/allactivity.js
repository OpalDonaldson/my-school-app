var express = require('express');
var router = express.Router();

router.get('/allactivity', (req, res)=>{
  res.render('allactivity', { title: 'All Activities'});
});

module.exports = router;
