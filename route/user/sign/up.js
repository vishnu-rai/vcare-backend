const express = require("express");
const router = express.Router();
const mysqlConnection = require("../../../config/database");
const mysql = require("mysql");
const bcrypt = require("bcrypt");

router.post("/user/sign/up", async (req, res) => {
  const unique_user_id = req.body.uniqueUserId;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  mysqlConnection.getConnection(async (err, connection) => {
    if (err) throw err;
    const sqlSearch = "SELECT * FROM user_table WHERE unique_user_id = ?";
    const search_query = mysql.format(sqlSearch, [unique_user_id]);
    var msql =
      "SET @unique_user_id = ?;SET @phone_number = ?;SET @user_name = ?;\
        SET @user_adhar_number = ?;SET @user_email_id = ?;SET @user_date_of_birth = ?;\
        SET @user_gender = ?;SET @password = ?;\
        CALL add_user(@unique_user_id,@phone_number,@user_name,@user_adhar_number,\
        @user_email_id,@user_date_of_birth,@user_gender,@password);";
    var data = req.body;
    const insert_query = mysql.format(msql, [
      unique_user_id,
      data.phone_number,
      data.user_name,
      data.user_adhar_number,
      data.user_email_id,
      data.user_date_of_birth,
      data.user_gender,
      hashedPassword,
    ]);

    connection.query(search_query, async (err, result) => {
      if (err) throw err;
      console.log("------> Search Results");
      console.log(result.length);
      if (result.length != 0) {
        connection.release();
        console.log("------> User already exists");
        res.sendStatus(409);
      } else {
        connection.query(insert_query, (err, result) => {
          connection.release();
          if (err) throw err;
          console.log("--------> Created new User");
          console.log(result.insertId);
          res.sendStatus(201);
        });
      }
    });
  });
});

module.exports = router;
