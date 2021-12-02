const express = require("express");
const router = express.Router();


// router.post("/user/update/emailId", async (req, res) => {
//   const emailId = req.body.emailId;
//   const user = req.body.uniqueUserId;

//   mysqlConnection.getConnection(async (err, connection) => {
//     if (err) throw err;
//     var mysql_query =
//       "update user_table set user_email_id = ? where unique_user_id = ?;";
//     const update_query = mysql.format(mysql_query, [emailId, user]);

//     connection.query(update_query, async (err, result) => {
//       connection.release();
//       if (!err) res.json({ status: "Success" });
//       else res.json({ status: "Failed" });
//     });
//   });
// });

module.exports = router;
