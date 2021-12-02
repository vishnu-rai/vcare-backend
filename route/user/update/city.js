const express = require("express");
const router = express.Router();


// router.post("/user/update/city", async (req, res) => {
//   const city = req.body.city;
//   const user = req.body.uniqueUserId;

//   mysqlConnection.getConnection(async (err, connection) => {
//     if (err) throw err;
//     var mysql_query =
//       "update user_table set user_city = ? where unique_user_id = ?;";
//     const update_query = mysql.format(mysql_query, [city, user]);

//     connection.query(update_query, async (err, result) => {
//       connection.release();
//       if (!err) res.json({ status: "Success" });
//       else res.json({ status: "Failed" });
//     });
//   });
// });

module.exports = router;
