var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) =>{
  res.render('index', { title: 'Express' });
});

router.get('/login', (req, res)=>{
  res.send("login");
});

router.get('/register', (req, res)=>{
  res.send("register");
});
router.get('/dashboard', (req, res)=>{
  res.send("dashboard");
});
router.get('/overview', (req, res)=>{
  res.send("overview");
});
router.get('/all-activity', (req, res)=>{
  res.send("all-activity");
});

module.exports = router;
