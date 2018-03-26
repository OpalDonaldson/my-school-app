const express = require('express');
const app = express();

app.post('/submitMessage', (req, res)=> {
  console.log("success post");
  res.send('Hello School');
});

app.listen(8080, ()=>{
  console.log('Express is running on port 8080!');
})
