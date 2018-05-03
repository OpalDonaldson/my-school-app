const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/users');


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

console.log(mongoose.connection)

module.exports = mongoose;
