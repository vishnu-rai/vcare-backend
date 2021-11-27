const express = require("express");
const router = express.Router();
const mysqlConnection = require("../../config/database");
const mysql = require("mysql");

router.post("/book/appointment", async (req, res) => {
  const userId = req.body.userId;
  const appointmentId = req.body.appointmentId;
  const hospitalId = req.body.hospitalId;
  const doctorId = req.body.doctorId;
  const department = req.body.department;
  const appointmentDate = req.body.appointmentDate;
  const appointmentNumber = req.body.appointmentNumber;
  const verificationStatus = 0;

  mysqlConnection.getConnection(async (err, connection) => {
    if (err) res.json({ status: "Failed", error: err });

    var mysql_book_query =
      "insert into appointment_table values (appointment_id = ?,user_id = ?,verification_status = ?,\
      hospital_id = ?, doctor_id = ?, department = ?, appointment_date = ?,appointment_number = ?);";

    const book_query = mysql.format(mysql_book_query, [
      appointmentId,
      userId,
      verificationStatus,
      hospitalId,
      doctorId,
      department,
      appointmentDate,
      appointmentNumber,
    ]);

    connection.query(book_query, async (err, result) => {
      connection.release();
      if (err) res.json({ status: "Failed", error: err });
      else
        res.json({
          status: "OK",
          appointmentId: appointmentId,
          appointmentNumber: appointmentNumber,
          result: result,
        });
    });
  });
});

module.exports = router;
