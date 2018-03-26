const express = require('express');
const app = express();

app.get('/', (req, res)=> {
  console.log("success");
  res.send('Hello School');
});

app.listen(8080, ()=>{
  console.log('Express is running on port 8080!');
})