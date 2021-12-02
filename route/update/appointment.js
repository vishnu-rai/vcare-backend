const express = require("express");
const router = express.Router();


// router.post("/update/appointment", async (req, res) => {
//   const appointmentId = req.body.appointmentId;
//   const hospitalId = req.body.hospitalId;
//   const verificationStatus = req.body.verificationStatus;

//   mysqlConnection.getConnection(async (err, connection) => {
//     if (err) throw err;
//     var mysql_verify_query =
//       "select hospital_id from appointment_table \
//     where appointment_id =?";
//     const verify_query = mysql.format(mysql_verify_query, [appointmentId]);

//     var mysql_update_query =
//       "update appointment_table set verification_status = ? where appointment_id = ?;";
//     const update_query = mysql.format(mysql_update_query, [
//       verificationStatus,
//       appointmentId,
//     ]);

//     connection.query(verify_query, async (err, result) => {
//       if (err) res.json({ status: "Failed" });
//       else {
//         var appointment_hospital_id = result[0].hospital_id;
//         if (appointment_hospital_id == hospitalId) {
//           connection.query(update_query, async (err, result) => {
//             connection.release();
//             if (err) res.json({ status: "Failed" });
//             else res.json({ status: "OK", result: result });
//           });
//         } else res.json({ status: "Failed", error: "Not authorized" });
//       }
//     });
//   });
// });

module.exports = router;
