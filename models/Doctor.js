const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const doctorSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [6, 'Minimum password length is 6 characters'],
  },
  firstName : {
    type: String,
    // required : true
  },
  lastName : {
    type : String
  },
  verificationStatus: {
      type: Boolean,
      default: false
  },
  phoneNumber: {
      type: BigInt
  },
  aadharNumber: {
      type: BigInt
  },
  bloodGroup: {
      type: String
  },
  birthDate: {
      type: String
  },
  gender: {
      type: String
  },
  address: {
      type: String
  },
  city: {
      type: String
  },
  locationPinCode: {
      type: Number
  },
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "hospital",
    required: true
  }
});


const Doctor = mongoose.model('doctor', doctorSchema);

module.exports = Doctor;