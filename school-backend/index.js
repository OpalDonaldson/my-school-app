const express = require('express');
const app = express();

app.post('/messageMe', (req, res)=> {
  let date = new Date()
  console.log("POST Request:"+ date.toString())
  res.send('Hello School');
});

app.get('/messageMe', (req, res)=>{
  let date = new Date()
  console.log("GET Request:"+ date.toString())
  res.send("Hello Success!");
});

app.listen(8080, ()=>{
  console.log('Express is running on port 8080!');
})
