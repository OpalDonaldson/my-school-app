const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config({path: './local.env'});
const app = express();

app.use(bodyParser.json())
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false
}))

const Dashboard = require('./routes/dashboard.js');
const Users = require('./routes/users.js')

app.use('/users',Users)
app.use('/dashboard', Dashboard);


app.listen(8080, "127.0.0.1", ()=>{
  console.log('Express is running on port 8080!');
})
