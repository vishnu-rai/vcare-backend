const express = require("express");
const router = express.Router();


// router.get("/calculate/appointment/totalCount", (req, res) => {
//   mysqlConnection.getConnection(async (err, connection) => {
//     var mysql_count_query =
//       "select appointment_id from appointment_table order by appointment_id desc limit 0,1;";
//     var count_query = mysql.format(mysql_count_query);

//     connection.query(count_query, async (err, result) => {
//       if (err) res.json({ status: "Failed" });
//       else res.json({ status: "OK", count: result });
//     });
//   });
// });

module.exports = router;
