const express = require("express");
const router = express.Router();
const mysqlConnection = require("../../../config/database");
const mysql = require("mysql");

router.post("/list/appointment/dateWise", (req, res) => {
  mysqlConnection.getConnection(async (err, connection) => {
    var date = req.body.date;
    var mysql_search_query =
      "select appointment_id as appointmentId, user_id as userId,\
      appointment_number as appointmentNumber, appointment_date as appointmentDate, \
      user_name as userName, hospital_id as hospitalId from appointment_table \
      inner join user_table \
      on appointment_table.user_id = user_table.unique_user_id \
      where appointment_date = ?;";

    const search_query = mysql.format(mysql_search_query, [date]);

    connection.query(search_query, async (err, result) => {
      if (err) res.json({ status: "Failed", error: err });
      else res.json({ status: "OK", data: result });
    });
  });
});

module.exports = router;
