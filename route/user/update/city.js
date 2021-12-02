const express = require("express");
const router = express.Router();

const UserController = require("../../../controllers/UserControllers");

router.post("/user/update/city", UserController.userUpdateCity);

module.exports = router;
