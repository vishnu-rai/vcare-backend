const express = require("express");
const router = express.Router();

const UserController = require("../../../controllers/UserControllers");

router.post("/user/update/bloodGroup", UserController.userUpdateBloodGroup);

module.exports = router;
