var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
router.get('/register', (req, res)=>{
  res.render('register', { title: 'Register'});
});
router.post('/registerusers', (req, res)=>{
  console.log(req.params);
  res.send(req.params);
})

module.exports = router;
