const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");
const {
  TrustProductsEvaluationsPage,
} = require("twilio/lib/rest/trusthub/v1/trustProducts/trustProductsEvaluations");

const userSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [6, "Minimum password length is 6 characters"],
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  verificationStatus: {
    type: Boolean,
    default: false,
  },
  phoneNumber: {
    type: Number,
    required: true,
    minlength: [10],
    maxlength: [10],
  },
  aadharNumber: {
    type: Number,
    unique: true,
    minlength: [12],
    maxlength: [12],
  },
  bloodGroup: {
    type: String,
    default: "Blood Group",
  },
  birthDate: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    default: "Address",
  },
  city: {
    type: String,
    default: "City",
  },
  state: {
    type: String,
    default: "State",
  },
  locationPinCode: {
    type: Number,
    default: "Pin Code",
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
