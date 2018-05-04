const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/users');
const db = mongoose.connection;

db.on('error', (err)=>{
  console.log('Connection error:', err);
})

db.once('open', ()=>{
  console.log("Successful connection");
})

const Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

const User = new Schema({
  id: ObjectId,
  firstname: String,
  lastname: String,
  email: String,
  avatar: Object,
  telephone: String,
  city: String,
  country: String,
  password: String,
  date: String
});

module.exports = mongoose;
