const express = require("express");
const router = express.Router();


// router.post("/user/update/pinCode", async (req, res) => {
//   const pinCode = req.body.pinCode;
//   const user = req.body.uniqueUserId;

//   mysqlConnection.getConnection(async (err, connection) => {
//     if (err) throw err;
//     var mysql_query =
//       "update user_table set user_location_pincode = ? where unique_user_id = ?;";
//     const update_query = mysql.format(mysql_query, [pinCode, user]);

//     connection.query(update_query, async (err, result) => {
//       connection.release();
//       if (!err) res.json({ status: "Success" });
//       else res.json({ status: "Failed", error: err, rest: result });
//     });
//   });
// });

module.exports = router;
