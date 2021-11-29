const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  verificationStatus: {
    type: Boolean,
  },
  hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "hospital",
      required: true
  },
  doctor: {
      type: Boolean,
      ref: "doctor",
      required: true
  },
  department: {
      type: String
  },
  appointmentDate: {
      type: String
  },
  appointmentNumber: {
      type: Number
  }

});


const Appointment = mongoose.model("appointment", appointmentSchema);

module.exports = Appointment;
