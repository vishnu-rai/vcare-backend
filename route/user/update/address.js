const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const mysqlConnection = require("../../../config/database");

router.post("/user/update/address", async (req, res) => {
  const address = req.body.address;
  const user = req.body.uniqueUserId;

  mysqlConnection.getConnection(async (err, connection) => {
    if (err) throw err;
    var mysql_query =
      "update user_table set user_address = ? where unique_user_id = ?;";
    const update_query = mysql.format(mysql_query, [address, user]);

    connection.query(update_query, async (err, result) => {
      connection.release();
      if (!err) res.json({ status: "Success" });
      else res.json({ status: "Failed" });
    });
  });
});

module.exports = router;
