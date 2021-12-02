const express = require("express");
const router = express.Router();
const UserControllers = require("../../../controllers/UserControllers");

router.get("/list/user/all", UserControllers.userListAll);

module.exports = router;
