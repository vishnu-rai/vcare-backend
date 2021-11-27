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

const userSignIn = require("./route/user/sign/in");
const userSignUp = require("./route/user/sign/up");

const listUserAll = require("./route/list/user/all");
const listUserSamePhoneNumber = require("./route/list/user/samePhoneNumber");
const listAppointmentHospitalWise = require("./route/list/appointment/hospitalWise");
const listAppointmentDoctorWise = require("./route/list/appointment/doctorWise");
const listAppointmentUserWise = require("./route/list/appointment/userWise");
const listAppointmentPhoneNumberWise = require("./route/list/appointment/phoneNumberWise");
const listAppointmentDateWise = require("./route/list/appointment/dateWise");
const listHospitalAppointmentDateWise = require("./route/list/hospital/appointment/dateWise");
const listHospitalAppointmentDoctorWise = require("./route/list/hospital/appointment/doctorWise");
const listDoctorAppointmentAll = require("./route/list/doctor/appointment/all");
const listDoctorAppointmentDateWise = require("./route/list/doctor/appointment/dateWise");
const listHospitalAppointmentDoctorDateWise = require("./route/list/hospital/appointment/doctorDateWise");

const calculateUserAge = require("./route/calculate/user/age");
const calculateUserTotalCount = require("./route/calculate/user/totalCount");
const calculateAppointmentTotalCount = require("./route/calculate/appointment/totalCount");

const bookAppointment = require("./route/book/appointment");
const updateAppointment = require("./route/update/appointment");
const deleteAppointment = require("./route/delete/appointment");

var app = express();
app.use(express.json());

app.use(otpEmailSend);
app.use(otpEmailVerify);
app.use(otpPhoneSend);
app.use(otpPhoneVerify);

app.use(listUserAll);
app.use(listUserSamePhoneNumber);
app.use(listAppointmentHospitalWise);
app.use(listAppointmentDoctorWise);
app.use(listAppointmentUserWise);
app.use(listAppointmentPhoneNumberWise);
app.use(listAppointmentDateWise);
app.use(listHospitalAppointmentDateWise);
app.use(listHospitalAppointmentDoctorWise);
app.use(listDoctorAppointmentAll);
app.use(listDoctorAppointmentDateWise);
app.use(listHospitalAppointmentDoctorDateWise);

app.use(calculateUserAge);
app.use(calculateUserTotalCount);
app.use(calculateAppointmentTotalCount);

app.use(userSignIn);
app.use(userSignUp);
app.use(userUpdateBloodGroup);
app.use(userUpdatePhoneNumber);
app.use(userUpdateAddress);
app.use(userUpdateCity);
app.use(userUpdatePinCode);
app.use(userUpdatePassword);
app.use(userUpdateEmailId);

app.use(bookAppointment);
app.use(updateAppointment);
app.use(deleteAppointment);

const mysqlConnection = require("./config/database");

app.listen(process.env.APP_PORT, () =>
  console.log("Express server is running at port : " + process.env.APP_PORT)
);

mysqlConnection.getConnection((err) => {
  if (!err) console.log("Succeed");
  else console.log("Failed \n " + JSON.stringify(err, undefined, 2));
});
