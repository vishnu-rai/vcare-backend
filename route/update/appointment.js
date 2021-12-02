const express = require("express");
const router = express.Router();

const AppointmentController = require("../../controllers/AppointmentController");

router.post("/update/appointment", AppointmentController.updateAppointment);

module.exports = router;
