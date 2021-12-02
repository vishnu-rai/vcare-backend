const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  appointmentId: {
    type: Number,
    required: true,
  },
  userId: {
    type: Number,
    ref: "user",
    required: true,
  },
  verificationStatus: {
    type: Number,
    default: 0,
  },
  hospitalId: {
    type: Number,
    ref: "hospital",
    required: true,
  },
  doctorId: {
    type: Number,
    ref: "doctor",
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  appointmentDate: {
    type: String,
    required: true,
    default: new Date(),
  },
  appointmentNumber: {
    type: Number,
  },
});

const Appointment = mongoose.model("appointment", appointmentSchema);

module.exports = Appointment;
