const express = require("express");
const router = express.Router();
const UserControllers = require("../../../controllers/UserControllers");

router.post(
  "/list/user/samePhoneNumber",
  UserControllers.userListSamePhoneNumber
);

module.exports = router;
