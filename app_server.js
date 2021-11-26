require("dotenv").config();
const express = require("express");

const otpEmailSend = require("./route/otp/email/send");
const otpEmailVerify = require("./route/otp/email/verify");
const otpPhoneSend = require("./route/otp/phone/send");
const otpPhoneVerify = require("./route/otp/phone/verify");
const userUpdatePassword = require("./route/user/update/password");
const signIn = require("./route/user/sign/in");
const signUp = require("./route/user/sign/up");
const listUserAll = require("./route/list/user/all");

var app = express();
app.use(express.json());

app.use(otpEmailSend);
app.use(otpEmailVerify);
app.use(otpPhoneSend);
app.use(otpPhoneVerify);
app.use(userUpdatePassword);
app.use(signIn);
app.use(signUp);
app.use(listUserAll);

const mysqlConnection = require("./config/database");

app.listen(process.env.APP_PORT, () =>
  console.log("Express server is running at port : " + process.env.APP_PORT)
);

mysqlConnection.getConnection((err) => {
  if (!err) console.log("Succeed");
  else console.log("Failed \n " + JSON.stringify(err, undefined, 2));
});