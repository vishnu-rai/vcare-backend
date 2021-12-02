const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const UserController = require("../../../controllers/UserControllers");

router.post("/user/update/password", UserController.userUpdatePassword);

module.exports = router;
