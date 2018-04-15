const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const app = express();

app.post('/messageMe', (req, res)=> {
  let date = new Date()
  console.log("POST Request:"+ date.toString())
  res.send('Hello School');
});

app.get('/messageMe', (req, res)=>{
  let token = jwt.sign({"alg": "HS256", "typ": "JWT"},{"sub": "School App", "name": "user"});
  res.send(`${process.env.NAME} and ${token}`);
});

app.post('/register', (req, res)=>{
  let date = new Date();
  console.log("GET Request:"+ date.toString());
  res.send("Success");
});

app.listen(process.env.PORT, process.env.HOSTNAME, ()=>{
  console.log('Express is running on port 8080!');
})
