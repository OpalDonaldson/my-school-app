var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/form', (req, res)=>{
  res.send("HELLO JOHNOY FORM!");
})

module.exports = router;
