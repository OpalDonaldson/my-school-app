const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

app.use(bodyParser.json())
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false
}))

const Dashboard = require("./routes/dashboard.js");

app.use('/dashboard', Dashboard);


app.listen(process.env.PORT, process.env.HOSTNAME, ()=>{
  console.log('Express is running on port 8080!');
})
