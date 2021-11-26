const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const mysqlConnection = require("../../../config/database");

router.post("/user/update/phoneNumber", async (req, res) => {
  const phoneNumber = req.body.phoneNumber;
  const user = req.body.uniqueUserId;

  mysqlConnection.getConnection(async (err, connection) => {
    if (err) throw err;
    var mysql_query =
      "update user_table set phone_number = ? where unique_user_id = ?;";
    const update_query = mysql.format(mysql_query, [phoneNumber, user]);

    connection.query(update_query, async (err, result) => {
      connection.release();
      if (!err) res.json({ status: "Success" });
      else res.json({ status: "Failed" });
    });
  });
});

module.exports = router;
