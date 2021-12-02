const express = require("express");
const router = express.Router();

const UserController = require("../../../controllers/UserControllers");

router.post("/user/sign/up", UserController.userSignUp);

module.exports = router;
