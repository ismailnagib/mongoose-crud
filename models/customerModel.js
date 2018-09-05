const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerSchema = new Schema({
  name: String,
  memberId:  String,
  address: String,
  zipcode: String,
  phone: String
}, {
  timestamps: true
});

const Customer = mongoose.model('Customer', customerSchema)
module.exports = Customer