const express = require('express');
const cors = require('cors');
const passport = require('passport');
const bodyParser = require('body-parser');

require('dotenv').config({path: './local.env'});
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());
app.use(express.json());

app.use('/users/', express.static(__dirname + '/public'));

const Users = require('./routes/users.js')
const Dashboard = require('./routes/dashboard.js');

app.use(passport.initialize());
app.use(passport.session());

app.use('/users',Users)
app.use('/dashboard', Dashboard);


app.listen(8080, "127.0.0.1", ()=>{
  console.log('Express is running on port 8080!');
})
