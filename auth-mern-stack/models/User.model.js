const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {
  Schema,
  Types: { ObjectId },
} = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    min: 6,
    max: 15,
  },
  email: {
    type: String,
    required: true,
  },
  password: { type: String },
  role: { type: Number, default: 0 },
  tokenFB: { type: String },
});

module.exports = mongoose.model('User', UserSchema);
