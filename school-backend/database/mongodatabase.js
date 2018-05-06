const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/users');

const Schema = mongoose.Schema;

const userSchema  = new Schema({
  //userId: Schema.ObjectId,
  firstname: String,
  lastname: String,
  email: {
    type: String,
    lowercase: true,
    index: true,
    unique: true
  },
  avatar:Schema.Types.Mixed,
  telephone: String,
  schoolname: {
    type: String,
    index: true,
    unique: true
  },
  city: String,
  country: String,
  password: String,
  date: String
});
const User = mongoose.model('User', userSchema);

module.exports = User;
