const express = require("express");
const ListControllers = require("../../../controllers/ListControllers");
const router = express.Router();

router.post(
  "/list/appointment/hospitalDateWise",
  ListControllers.listHospitalDateWise
);

module.exports = router;
