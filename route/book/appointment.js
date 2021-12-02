const express = require("express");
const router = express.Router();

const AppointmentController = require("../../controllers/AppointmentController");

router.post("/book/appointment", AppointmentController.bookAppointment);

module.exports = router; 
