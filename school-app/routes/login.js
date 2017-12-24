var express = require('express');
var router = express.Router();

router.get('/login', (req, res)=>{
  res.render('login', { title: 'Login', appName: 'School CMS' });
});
router.post('/login', (req, res)=>{
  
})
module.exports = router;
