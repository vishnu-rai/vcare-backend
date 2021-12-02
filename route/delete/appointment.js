const express = require("express");
const router = express.Router();

const AppointmentController = require("../../controllers/AppointmentController");

router.post("/delete/appointment", AppointmentController.deleteAppointment);

module.exports = router;
