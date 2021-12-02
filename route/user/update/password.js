const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");


// router.post("/user/update/password", async (req, res) => {
//   const newpassword = req.body.password;
//   const uniqueUserId = req.body.uniqueUserId;
//   const hashedPassword = await bcrypt.hash(newpassword, 10);

//   mysqlConnection.getConnection(async (err, connection) => {
//     if (err) throw err;
//     var mysql_query =
//       "update user_table set password = ? where unique_user_id = ?;";
//     const update_query = mysql.format(mysql_query, [
//       hashedPassword,
//       uniqueUserId,
//     ]);

//     connection.query(update_query, async (err, result) => {
//       connection.release();
//       if (!err) res.json({ status: "Success" });
//       else res.json({ status: "Failed" });
//     });
//   });
// });

module.exports = router;
