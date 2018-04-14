const express = require('express');
require('dotenv').config();
const app = express();
let ipAdd = "127.0.0.1"
app.post('/messageMe', (req, res)=> {
  let date = new Date()
  console.log("POST Request:"+ date.toString())
  res.send('Hello School');
});

app.get('/messageMe', (req, res)=>{
  let date = new Date()
  console.log(process.env.GF);
  res.send(process.env.GF);
});

app.post('/register', (req, res)=>{
  let date = new Date();
  console.log("GET Request:"+ date.toString());
  res.send("Success");
});
app.listen(8080, ipAdd, ()=>{
  console.log('Express is running on port 8080!');
})
