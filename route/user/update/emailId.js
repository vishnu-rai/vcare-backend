const express = require("express");
const router = express.Router();

const UserController = require("../../../controllers/UserControllers");

router.post("/user/update/emailId", UserController.userUpdateEmailId);

module.exports = router;
