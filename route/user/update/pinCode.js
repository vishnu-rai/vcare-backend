const express = require("express");
const router = express.Router();

const UserController = require("../../../controllers/UserControllers");

router.post("/user/update/pinCode", UserController.userUpdatePinCode);

module.exports = router;
