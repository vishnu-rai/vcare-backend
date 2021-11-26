require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const mysql = require("mysql");
// const generateAccessToken = require("./generateAccessToken");

var app = express();
app.use(express.json());

const client = require("twilio")(
  process.env.ACCOUNT_SID,
  process.env.AUTH_TOKEN
);

const mysqlConnection = require("./config/database");

app.listen(process.env.APP_PORT, () =>
  console.log("Express server is running at port : " + process.env.APP_PORT)
);

mysqlConnection.getConnection((err) => {
  if (!err) console.log("Succeed");
  else console.log("Failed \n " + JSON.stringify(err, undefined, 2));
});

app.get("/user", (req, res) => {
  var sql = "call get_data()";
  mysqlConnection.query(sql, (err, row, fields) => {
    if (!err) res.send(row);
    else res.send("Error " + err);
  });
});

app.post("/adduser", (req, res) => {
  var data = req.body;
  var msql =
    "SET @unique_user_id = ?;SET @phone_number = ?;SET @user_name = ?;\
      SET @user_adhar_number = ?;SET @user_email_id = ?;SET @user_date_of_birth = ?;\
      SET @user_gender = ?;SET @password = ?;\
      CALL add_user(@unique_user_id,@phone_number,@user_name,@user_adhar_number,\
      @user_email_id,@user_date_of_birth,@user_gender,@password);";

  mysqlConnection.query(
    msql,
    [
      data.unique_user_id,
      data.phone_number,
      data.user_name,
      data.user_adhar_number,
      data.user_email_id,
      data.user_date_of_birth,
      data.user_gender,
      data.password,
    ],
    (err, row, field) => {
      if (!err) res.send(row);
      else res.send("failed  " + err);
    }
  );
});

app.get("/send_otp", (req, res) => {
  if (req.query.phonenumber) {
    client.verify
      .services(process.env.SERVICE_ID)
      .verifications.create({
        to: `+${req.query.phonenumber}`,
        channel: "sms",
      })
      .then((data) => {
        res.status(200).send({
          message: "Verification is sent!!",
          phonenumber: req.query.phonenumber,
          data,
        });
      });
  } else {
    res.status(400).send({
      message: "Wrong phone number :(",
      phonenumber: req.query.phonenumber,
      data,
    });
  }
});

app.get("/verify_otp", (req, res) => {
  if (req.query.phonenumber && req.query.code.length === 4) {
    client.verify
      .services(process.env.SERVICE_ID)
      .verificationChecks.create({
        to: `+${req.query.phonenumber}`,
        code: req.query.code,
      })
      .then((data) => {
        if (data.status === "approved") {
          res.status(200).send({
            message: "User is Verified!!",
            data,
          });
        }
      });
  } else {
    res.status(400).send({
      message: "Wrong phone number or code :(",
      phonenumber: req.query.phonenumber,
      data,
    });
  }
});

app.post("/createUser", async (req, res) => {
  const unique_user_id = req.body.unique_user_id;
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
    }); //end of connection.query()
  }); //end of db.getConnection()
}); //end of app.post()

app.post("/login", (req, res) => {
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
        //get the hashedPassword from result

        if (await bcrypt.compare(password, hashedPassword)) {
          console.log("---------> Login Successful");
          // console.log("---------> Generating accessToken");
          // const token = generateAccessToken({ user: user });
          // console.log(token);
          res.json({ loggedinstatus: "OK", user: user });
          // res.send(`${user} is logged in!`);
        } else {
          console.log("---------> Password Incorrect");
          res.send("Password incorrect!");
        } //end of bcrypt.compare()
      } //end of User exists i.e. results.length==0
    }); //end of connection.query()
  }); //end of db.connection()
}); //end of app.post()
