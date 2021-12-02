const express = require("express");
const router = express.Router();


// router.post("/user/update/bloodGroup", async (req, res) => {
//   const bloodGroup = req.body.bloodGroup;
//   const user = req.body.uniqueUserId;

//   mysqlConnection.getConnection(async (err, connection) => {
//     if (err) throw err;
//     var mysql_query =
//       "update user_table set user_blood_group = ? where unique_user_id = ?;";
//     const update_query = mysql.format(mysql_query, [bloodGroup, user]);

//     connection.query(update_query, async (err, result) => {
//       connection.release();
//       if (!err) res.json({ status: "Success" });
//       else res.json({ status: "Failed" });
//     });
//   });
// });

module.exports = router;
