var express = require('express');
var router = express.Router();

router.get('/resourcearea', (req, res)=>{
  res.render('resourcearea', { title: 'Resource Area'});
});

module.exports = router;
