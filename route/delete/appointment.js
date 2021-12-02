const express = require("express");
const router = express.Router();


// router.post("/delete/appointment", async (req, res) => {
//   const appointmentId = req.body.appointmentId;
//   const hospitalId = req.body.hospitalId;
//   const userId = req.body.userId;

//   mysqlConnection.getConnection(async (err, connection) => {
//     if (err) throw err;
//     var mysql_verify_query =
//       "select hospital_id,user_id from appointment_table \
//     where appointment_id =?";
//     const verify_query = mysql.format(mysql_verify_query, [appointmentId]);

//     var mysql_delete_query =
//       "delete from appointment_table where appointment_id = ?;";
//     const delete_query = mysql.format(mysql_delete_query, [appointmentId]);

//     connection.query(verify_query, async (err, result) => {
//       if (err) res.json({ status: "Failed" });
//       else {
//         var appointment_hospital_id = result[0].hospital_id;
//         var appointment_user_id = result[0].user_id;
//         if (
//           appointment_hospital_id == hospitalId ||
//           appointment_user_id == userId
//         ) {
//           connection.query(delete_query, async (err, result) => {
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
