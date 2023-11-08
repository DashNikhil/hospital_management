const mongoose = require("mongoose");

const registrationSchema = mongoose.Schema({
  name: String,
  address: String,
  city: String,
  state: String,
  pincode: String,
  date: String,
  ambulance: String,
  email: String,
  phone: String,
  registrationNumber: String,
  em_ward: String,
  pass: String,
});

module.exports = mongoose.model("registrations", registrationSchema);
