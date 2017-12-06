var express = require('express');
var router = express.Router();

router.get('/overview', (req, res)=>{
  res.render('overview', { title: 'Overview'});
});

module.exports = router;
