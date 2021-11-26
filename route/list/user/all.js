const express = require("express");
const router = express.Router();
const mysqlConnection = require("../../../config/database");

router.get("/list/user/all", (req, res) => {
  var sql = "call get_data()";
  mysqlConnection.query(sql, (err, row, fields) => {
    if (!err) res.send(row);
    else res.send("Error " + err);
  });
});

module.exports = router;
