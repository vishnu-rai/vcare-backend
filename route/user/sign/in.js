const express = require("express");
const router = express.Router();
const mysqlConnection = require("../../../config/database");
const mysql = require("mysql");
const bcrypt = require("bcrypt");

router.post("/user/sign/in", (req, res) => {
  const user = req.body.unique_user_id;
  const password = req.body.password;
  mysqlConnection.getConnection(async (err, connection) => {
    if (err) throw err;
    const sqlSearch = "Select * from user_table where unique_user_id = ?";
    const search_query = mysql.format(sqlSearch, [user]);

    connection.query(search_query, async (err, result) => {
      connection.release();

      if (err) throw err;
      if (result.length == 0) {
        console.log("--------> User does not exist");
        res.sendStatus(404);
      } else {
        const hashedPassword = result[0].password;
        if (await bcrypt.compare(password, hashedPassword)) {
          console.log("---------> Login Successful");
          res.json({ loggedinstatus: "OK", user: user });
        } else {
          console.log("---------> Password Incorrect");
          res.send("Password incorrect!");
        }
      }
    });
  });
});

module.exports = router;
