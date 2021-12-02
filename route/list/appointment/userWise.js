const express = require("express");
const ListControllers = require("../../../controllers/ListControllers");
const router = express.Router();

router.post("/list/appointment/userWise", ListControllers.listUserWise);

module.exports = router;
