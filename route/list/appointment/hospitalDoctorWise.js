const express = require("express");
const ListControllers = require("../../../controllers/ListControllers");
const router = express.Router();

router.post(
  "/list/appointment/hospitalDoctorWise",
  ListControllers.listHospitalDoctorWise
);

module.exports = router;
