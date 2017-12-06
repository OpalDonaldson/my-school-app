var express = require('express');
var db = require('../models/school');
var router = express.Router();

router.get('/datadetails', (req, res)=>{
  res.render('datadetails', { title: 'Data & Details'});
});
//09eoy0E72BjXmJLy
module.exports = router;
