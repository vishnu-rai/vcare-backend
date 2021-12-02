const express = require("express");
const router = express.Router();


// router.post("/list/appointment/phoneNumberWise", (req, res) => {
//   mysqlConnection.getConnection(async (err, connection) => {
//     var phoneNumber = req.body.phoneNumber;

//     // add doctor name from doctor table inner join
//     var mysql_search_query =
//       "select appointment_id as appointmentId, department, verification_status as status, \
//       appointment_number as appointmentNumber, appointment_date as appointmentDate, \
//       unique_user_id as userId, user_name as userName, doctor_id as doctorId \
//       from user_table \
//       inner join appointment_table \
//       on appointment_table.user_id = user_table.unique_user_id \
//       where phone_number = ?;";

//     const search_query = mysql.format(mysql_search_query, [phoneNumber]);

//     connection.query(search_query, async (err, result) => {
//       if (err) res.json({ status: "Failed", error: err });
//       else res.json({ status: "OK", data: result });
//     });
//   });
// });

module.exports = router;
