const express = require("express");
const router = express.Router();
 

// router.post("/list/appointment/doctorWise", (req, res) => {
//   mysqlConnection.getConnection(async (err, connection) => {
//     var doctorId = req.body.doctorId;
//     var mysql_search_query =
//       "select appointment_id as appointmentId, user_id as userId,\
//       appointment_number as appointmentNumber, appointment_date as appointmentDate, \
//       user_name as userName from appointment_table \
//       inner join user_table \
//       on appointment_table.user_id = user_table.unique_user_id \
//       where doctor_id = ?;";

//     const search_query = mysql.format(mysql_search_query, [doctorId]);

//     connection.query(search_query, async (err, result) => {
//       if (err) res.json({ status: "Failed", error: err });
//       else res.json({ status: "OK", data: result });
//     });
//   });
// });

module.exports = router;
