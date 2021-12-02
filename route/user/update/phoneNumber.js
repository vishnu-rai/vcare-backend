const express = require("express");
const router = express.Router();

const UserController = require("../../../controllers/UserControllers");

router.post("/user/update/phoneNumber", UserController.userUpdatePhoneNumber);

module.exports = router;
