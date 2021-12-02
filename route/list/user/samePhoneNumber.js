const express = require("express");
const router = express.Router();


// router.post("/list/user/samePhoneNumber", (req, res) => {
//   mysqlConnection.getConnection(async (err, connection) => {
//     var phoneNumber = req.body.phoneNumber;
//     var mysql_search_query =
//       "select unique_user_id as userId, user_name as userName from user_table where phone_number = ?;";
//     const search_query = mysql.format(mysql_search_query, [phoneNumber]);

//     connection.query(search_query, async (err, result) => {
//       if (err) res.json({ status: "Failed", error: err });
//       else res.json({ status: "OK", data: result });
//     });
//   });
// });

module.exports = router;
