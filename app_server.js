require("dotenv").config();
const express = require("express");

const otpEmailSend = require("./route/otp/email/send");
const otpEmailVerify = require("./route/otp/email/verify");
const otpPhoneSend = require("./route/otp/phone/send");
const otpPhoneVerify = require("./route/otp/phone/verify");

const userUpdatePassword = require("./route/user/update/password");
const userUpdateBloodGroup = require("./route/user/update/bloodGroup");
const userUpdatePhoneNumber = require("./route/user/update/phoneNumber");
const userUpdateAddress = require("./route/user/update/address");
const userUpdateCity = require("./route/user/update/city");
const userUpdatePinCode = require("./route/user/update/pinCode");
const userUpdateEmailId = require("./route/user/update/emailId");

const signIn = require("./route/user/sign/in");
const signUp = require("./route/user/sign/up");

const listUserAll = require("./route/list/user/all");

const calculateUserAge = require("./route/calculate/user/age");

var app = express();
app.use(express.json());

app.use(otpEmailSend);
app.use(otpEmailVerify);
app.use(otpPhoneSend);
app.use(otpPhoneVerify);

app.use(signIn);
app.use(signUp);

app.use(listUserAll);

app.use(calculateUserAge);

app.use(userUpdateBloodGroup);
app.use(userUpdatePhoneNumber);
app.use(userUpdateAddress);
app.use(userUpdateCity);
app.use(userUpdatePinCode);
app.use(userUpdatePassword);
app.use(userUpdateEmailId);

const mysqlConnection = require("./config/database");

app.listen(process.env.APP_PORT, () =>
  console.log("Express server is running at port : " + process.env.APP_PORT)
);

mysqlConnection.getConnection((err) => {
  if (!err) console.log("Succeed");
  else console.log("Failed \n " + JSON.stringify(err, undefined, 2));
});
