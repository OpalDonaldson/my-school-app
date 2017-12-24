var express = require('express');
var db = require('../models/school.js');
var bcrypt = require('bcrypt');
var router = express.Router();

router.get('/signup', (req, res)=>{
  res.render('signup', { title: 'Sign-up'});
});
router.post('/signup', (req, res)=>{
  //var user = {};
  db.connect();
  db.query('SELECT * FROM `users` WHERE `email` = ?', req.body.email, (err, result, changes)=>{
    if(err) console.log('This was an error ', err);
      if(!result.RowDataPackage){
        bcrypt.hash(req.body.password, 10, (err, hash)=>{
          if(err){
            console.log(err);
          }
          else{
            let user = {
              firstname: req.body.fname,
              lastname: req.body.lname,
              email: req.body.email,
              telephonenum: req.body.telephonenum,
              schoolname: req.body.schoolname,
              schooladdress: req.body.schooladdress,
              schooltel: req.body.schooltel,
              accounttype: req.body.accounttype,
              password: hash
            };
            db.query('INSERT INTO `users` SET ?', user, (error, data, fields)=>{
              if(error){
                console.log("Insert Error = ", error);
              }
              else{
                res.render('signup', { warning: "This School Name or email address is already in use."});
              }
            });
        }
      })
    }
    else{
      console.log('This already exist', result);
    }

  })
  res.send(req.body);
})


module.exports = router;
