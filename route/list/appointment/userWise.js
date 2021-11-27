const express = require("express");
const router = express.Router();
const mysqlConnection = require("../../../config/database");
const mysql = require("mysql");

router.post("/list/appointment/userWise", (req, res) => {
  mysqlConnection.getConnection(async (err, connection) => {
    var userId = req.body.userId;

    // add doctor from doctor table inner join
    var mysql_search_query =
      "select appointment_id as appointmentId, department, verification_status as status, \
      appointment_number as appointmentNumber, appointment_date as appointmentDate \
      from appointment_table where user_id = ?;";

    const search_query = mysql.format(mysql_search_query, [userId]);

    connection.query(search_query, async (err, result) => {
      if (err) res.json({ status: "Failed", error: err });
      else res.json({ status: "OK", data: result });
    });
  });
});

module.exports = router;
