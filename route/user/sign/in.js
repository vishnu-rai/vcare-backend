const express = require("express");
const router = express.Router();
const UserController = require("../../../controllers/UserControllers");

router.post("/user/sign/in", UserController.userSignIn);

module.exports = router;
