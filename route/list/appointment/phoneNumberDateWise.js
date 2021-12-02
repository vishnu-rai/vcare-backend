const express = require("express");
const ListControllers = require("../../../controllers/ListControllers");
const router = express.Router();

router.post(
  "/list/appointment/phoneNumberDateWise",
  ListControllers.listPhoneNumberDateWise
);

module.exports = router;
