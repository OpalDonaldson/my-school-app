var express = require('express');
var router = express.Router();

router.get('/login', (req, res)=>{
  res.render('login', { title: 'Login', appName: 'School CMS' });
});

module.exports = router;
